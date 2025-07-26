/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// lib/components/multi-select.tsx

import React, { useEffect, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { CheckIcon, XIcon } from "lucide-react";

import { cn } from "../utils";
import { Button } from "./button";
import { Badge } from "./badge";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import { Checkbox } from "./checkbox";
import { CommandLoading } from "cmdk"; // Assuming you have this component
import { LoadingSpinner } from "./loading-spinner";

interface OptionType {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const multiSelectVariants = cva("", {
  variants: {
    variant: {
      default:
        "border-foreground/10 text-foreground bg-[#091E420F] hover:bg-card/80",
      secondary:
        "border-foreground/10 bg-secondary text-secondary-foreground hover:bg-secondary/80",
      destructive:
        "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
      inverted: "inverted",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface MultiSelectProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof multiSelectVariants> {
  options: OptionType[];
  onValueChange: (value: OptionType[]) => void;
  defaultValue: OptionType[];
  placeholder?: string;
  animation?: number;
  maxCount?: number;
  asChild?: boolean;
  className?: string;
  showSelectAll?: boolean;
  fetchOptions?: (query: string) => Promise<OptionType[]>;
  useServerSideSearch?: boolean;
}

export const MultiSelect = React.forwardRef<
  HTMLButtonElement,
  MultiSelectProps
>(
  (
    {
      options,
      onValueChange,
      defaultValue = [],
      placeholder = "Select options",
      maxCount = 3,
      asChild = false,
      className,
      showSelectAll,
      fetchOptions,
      useServerSideSearch = true,
      ...props
    },
    ref,
  ) => {
    const [selectedValues, setSelectedValues] =
      useState<OptionType[]>(defaultValue);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [commandOptions, setCommandOptions] = useState(options);
    const [isLoading, setIsLoading] = useState(false);
    const popoverTriggerRef = React.useRef<HTMLButtonElement>(null);

    useEffect(() => {
      if (JSON.stringify(selectedValues) !== JSON.stringify(defaultValue)) {
        setSelectedValues(defaultValue);
      }
    }, [defaultValue, selectedValues]);

    const toggleOption = (option: OptionType) => {
      const newSelectedValues = selectedValues.some(
        (v) => v.value === option.value,
      )
        ? selectedValues.filter((v) => v.value !== option.value)
        : [...selectedValues, option];
      setSelectedValues(newSelectedValues);
      onValueChange(newSelectedValues);
    };

    const handleClear = () => {
      setSelectedValues([]);
      onValueChange([]);
    };

    const handleTogglePopover = () => {
      setIsPopoverOpen((prev) => !prev);
    };

    const clearExtraOptions = () => {
      const newSelectedValues = selectedValues.slice(0, maxCount);
      setSelectedValues(newSelectedValues);
      onValueChange(newSelectedValues);
    };

    const toggleAll = () => {
      if (selectedValues.length === options.length) {
        handleClear();
      } else {
        setSelectedValues(options);
        onValueChange(options);
      }
    };

    const debounce = (func: (query: string) => void, wait: number) => {
      let timeout: NodeJS.Timeout;
      return (query: string) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(query), wait);
      };
    };

    const handleSearch = React.useCallback(
      debounce(async (query) => {
        if (query.length === 0) {
          return;
        }

        setIsLoading(true);
        if (useServerSideSearch && fetchOptions) {
          const results = await fetchOptions(query);
          const filteredResults = results.filter(
            (result) =>
              !commandOptions.some((option) => option.value === result.value),
          );
          setCommandOptions((prev) => [...prev, ...filteredResults]);
        }
        setIsLoading(false);
      }, 300),
      [fetchOptions, options, commandOptions, useServerSideSearch],
    );

    const uniqueOptions = commandOptions?.filter(
      (option, index, self) =>
        index === self?.findIndex((o) => o?.value === option?.value),
    );

    return (
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={popoverTriggerRef}
            onClick={handleTogglePopover}
            className={cn(
              "flex w-full py-3 !h-[48px] !m-0 px-4 rounded-lg border border-gray-300 items-center justify-between bg-white hover:bg-gray-100",
              className,
            )}
            data-cy="multi-select-trigger"
            {...props}
          >
            {selectedValues.length > 0 ? (
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-wrap gap-2 items-center">
                  {selectedValues.slice(0, maxCount).map((option) => (
                    <Badge
                      key={option.value}
                      className="bg-[#F0F1F4] !h-[24px] text-[14px] leading-5 text-black flex gap-1 p-1 !rounded-[3px] hover:bg-[#F0F1F0]"
                      data-cy={`selected-option-${option.value}`}
                    >
                      {option.icon && <option.icon className="h-4 w-4 mr-2" />}
                      {option.label}
                      <XIcon
                        className="ml-2 h-4 w-4 cursor-pointer"
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleOption(option);
                        }}
                        data-cy={`remove-option-${option.value}`}
                      />
                    </Badge>
                  ))}
                  {selectedValues.length > maxCount && (
                    <Badge
                      className="bg-[#d9dadc] !h-[24px] text-[14px] leading-5 text-black flex gap-1 p-1 !rounded-[3px] hover:bg-[#F0F1F0]"
                      data-cy="more-options-badge"
                    >
                      {`+ ${selectedValues.length - maxCount} more`}
                      <XIcon
                        className="ml-2 h-4 w-4 cursor-pointer"
                        onClick={(event) => {
                          event.stopPropagation();
                          clearExtraOptions();
                        }}
                        data-cy="clear-extra-options"
                      />
                    </Badge>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    data-cy="dropdown-arrow"
                  >
                    <path
                      d="M2.89706 0.5C1.82797 0.5 1.29257 1.79257 2.04853 2.54853L4.15147 4.65147C4.6201 5.1201 5.3799 5.1201 5.84853 4.65147L7.95147 2.54853C8.70743 1.79257 8.17203 0.5 7.10294 0.5H2.89706Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between w-full mx-auto">
                <span
                  className="text-[#C7CBD1] !text-[14px] !leading-5 font-normal "
                  data-cy="placeholder-text"
                >
                  {placeholder}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  data-cy="dropdown-arrow"
                >
                  <path
                    d="M2.89706 0.5C1.82797 0.5 1.29257 1.79257 2.04853 2.54853L4.15147 4.65147C4.6201 5.1201 5.3799 5.1201 5.84853 4.65147L7.95147 2.54853C8.70743 1.79257 8.17203 0.5 7.10294 0.5H2.89706Z"
                    fill="black"
                  />
                </svg>
              </div>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="p-0 rounded-lg shadow-lg border border-gray-200"
          align="start"
          onEscapeKeyDown={() => setIsPopoverOpen(false)}
          style={{
            width: popoverTriggerRef.current?.offsetWidth || "auto",
          }}
          data-cy="popover-content"
        >
          <Command>
            <CommandInput
              placeholder="Search..."
              onValueChange={handleSearch}
              data-cy="search-input"
            />
            <CommandList className="w-full">
              {!isLoading && (
                <CommandEmpty data-cy="no-results">
                  No results found.
                </CommandEmpty>
              )}
              {!isLoading ? (
                <CommandGroup>
                  {showSelectAll && (
                    <CommandItem
                      key="all"
                      onSelect={toggleAll}
                      style={{ pointerEvents: "auto", opacity: 1 }}
                      className="cursor-pointer"
                      data-cy="select-all-option"
                    >
                      <div
                        className={cn(
                          "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                          selectedValues.length === options.length
                            ? "bg-primary text-primary-foreground"
                            : "opacity-50 [&_svg]:invisible",
                        )}
                      >
                        <CheckIcon className="h-4 w-4" />
                      </div>
                      <span>(Select All)</span>
                    </CommandItem>
                  )}
                  {isLoading && (
                    <CommandLoading
                      className="flex items-center justify-center p-2"
                      data-cy="loading-spinner"
                    >
                      <LoadingSpinner />
                    </CommandLoading>
                  )}
                  {uniqueOptions.map((option) => {
                    const isSelected = selectedValues.some(
                      (v) => v.value === option.value,
                    );
                    return (
                      <CommandItem
                        key={option.value}
                        onSelect={() => toggleOption(option)}
                        style={{ pointerEvents: "auto", opacity: 1 }}
                        className="cursor-pointer flex gap-2"
                        value={option.label}
                        data-cy={`option-${option.value}`}
                      >
                        <Checkbox
                          checked={isSelected}
                          className="h-4 w-4"
                          data-cy={`checkbox-${option.value}`}
                        />
                        {option.icon && (
                          <option.icon className="mr-2 h-4 w-4 text-[#C7CBD1] text-[14px] leading-5 font-normal " />
                        )}
                        <span className={isSelected ? "text-[#0073E6]" : ""}>
                          {option.label}
                        </span>
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              ) : (
                <CommandLoading
                  className="flex items-center justify-center p-2"
                  data-cy="loading-spinner"
                >
                  <LoadingSpinner />
                </CommandLoading>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  },
);

MultiSelect.displayName = "MultiSelect";
