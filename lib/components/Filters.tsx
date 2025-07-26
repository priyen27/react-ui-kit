// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect, useState } from "react";
import {
  Checkbox,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Input,
  FormItem,
  FormControl,
  FormLabel,
  Button,
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "../main";
import { Controller } from "react-hook-form";

const Filters = ({ form, templateFields, parentFocusKey, childFocusKey }) => {
  const { register, control, watch, setValue } = form;
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState({});

  const handleSubChildrenClick = (key) => {
    setOpenSubMenu((prevState) => {
      return {
        ...prevState,
        child: key,
      };
    });
  };

  const handleChipClick = (key) => {
    setOpenDropdown(true);
    setOpenSubMenu({
      parent: key,
    });
  };

  useEffect(() => {
    if (parentFocusKey) handleChipClick(parentFocusKey);
    if (childFocusKey) handleSubChildrenClick(childFocusKey);
  }, [parentFocusKey, childFocusKey]);

  const handleCheckedChange = (children, customFieldKey, childKey, checked) => {
    children.forEach((subChild) => {
      setValue(
        `${customFieldKey}.${childKey}.${subChild.key}`,
        checked ? subChild.id : "",
      );
    });
  };

  const renderSubChild = (customFieldKey, childKey, subChild) => (
    <Controller
      key={subChild.key}
      control={control}
      name={`${customFieldKey}.${childKey}.${subChild.key}`}
      render={({ field }) => (
        <FormItem className="flex items-center pr-4 py-3 first:pt-[16px] last:pb-0">
          <FormControl>
            <Checkbox
              checked={
                watch(`${customFieldKey}.${childKey}.${subChild.key}`) ===
                subChild?.id
              }
              onCheckedChange={(checked) =>
                field.onChange(checked ? subChild.id : "")
              }
              className="h-4 w-4 rounded-[3px]"
              iconClassName="!h-4 !w-4"
              data-cy="filter-sub-child-checkbox"
            />
          </FormControl>
          <FormLabel
            className={`!mt-0 !mb-0 text-[14px] font-normal ${watch(`${customFieldKey}.${childKey}.${subChild.key}`) === subChild?.id ? "text-[#0073E6]" : "text-[#000]"} line-clamp-1 ml-[8px]`}
          >
            {subChild.label}
          </FormLabel>
        </FormItem>
      )}
    />
  );

  const renderChild = (customFieldKey, child) => {
    if (child.children?.length > 0) {
      let status;
      const nonEmpty = child?.children?.every(
        (subChild) =>
          watch(`${customFieldKey}.${child.key}.${subChild.key}`)?.length > 0,
      );
      const empty = child?.children?.every(
        (subChild) => !watch(`${customFieldKey}.${child.key}.${subChild.key}`),
      );

      if (nonEmpty) status = true;
      else if (empty) status = false;
      else status = "indeterminate";

      return (
        <Accordion
          collapsible
          type="single"
          key={child.key}
          className="pl-8 pr-4 py-3 hover:bg-[#F7F8FA]"
          value={openSubMenu?.child === child.key ? child.key : null}
          onValueChange={(value) => {
            if (value === openSubMenu.child) {
              setOpenSubMenu((prevState) => ({
                ...prevState,
                child: null,
              }));
            } else {
              setOpenSubMenu((prevState) => ({
                ...prevState,
                child: value,
              }));
            }
          }}
          data-cy="filter-accordion"
        >
          <AccordionItem value={child?.key} className="border-none">
            <AccordionTrigger className="border-none hover:no-underline pt-0 justify-end flex-row-reverse ml-[-16px] pb-0">
              <Controller
                control={control}
                name={`${customFieldKey}.${child.key}`}
                render={() => (
                  <FormItem className="flex items-center pl-2">
                    <FormControl>
                      <Checkbox
                        onClick={(e) => e.stopPropagation()}
                        checked={status}
                        onCheckedChange={(checked) =>
                          handleCheckedChange(
                            child.children,
                            customFieldKey,
                            child.key,
                            checked,
                          )
                        }
                        className="h-4 w-4 rounded-[3px]"
                        iconClassName="!h-4 !w-4"
                        data-cy="filter-parent-checkbox"
                      />
                    </FormControl>
                    <FormLabel
                      className={`!mt-0 !mb-0 text-[14px] font-normal ${status ? "text-[#0073E6]" : "text-[#000]"} line-clamp-1 ml-[8px]`}
                    >
                      {child.label}
                    </FormLabel>
                  </FormItem>
                )}
              />
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              <div className="pl-2" data-cy="filter-children">
                {child.children.map((subChild) =>
                  renderSubChild(customFieldKey, child.key, subChild),
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      );
    }

    return (
      <div key={child.key} className="pl-8 pr-4 py-3 hover:bg-[#F7F8FA]">
        <Controller
          control={control}
          name={`${customFieldKey}.${child.key}`}
          render={({ field }) => (
            <FormItem className="flex items-center pl-2">
              <FormControl>
                <Checkbox
                  checked={!!field.value}
                  onCheckedChange={(checked) =>
                    field.onChange(checked ? child.id : "")
                  }
                  className="h-4 w-4 rounded-[3px]"
                  iconClassName="!h-4 !w-4"
                  data-cy="filter-child-checkbox"
                />
              </FormControl>
              <FormLabel
                className={`!mt-0 !mb-0 text-[14px] font-normal ${field.value ? "text-[#0073E6]" : "text-[#000]"} line-clamp-1 ml-[8px]`}
              >
                {child.label}
              </FormLabel>
            </FormItem>
          )}
        />
      </div>
    );
  };

  const allFields = watch();

  const isNonEmpty = (obj) => {
    if (typeof obj === "object" && obj !== null) {
      return Object?.entries(obj)?.some(([key, value]) => {
        if (key === "search") return false;
        return isNonEmpty(value);
      });
    }
    return Boolean(obj);
  };
  const anyFilterApplied = isNonEmpty(allFields);

  // Checking for sub filter applied or not
  const isAnySubFilterApplied = (filter) => {
    if (typeof filter === "object" && filter !== null) {
      const hasSubFilters = Object?.keys(filter)?.some((key) => {
        const subFilter = filter[key];
        return (
          subFilter !== undefined && subFilter !== null && subFilter !== ""
        );
      });
      return hasSubFilters;
    }
    // For non-object filters, check if they are non-empty, non-null, non-undefined
    return filter !== undefined && filter !== null && filter !== "";
  };

  const isAnyFilterApplied = (filterItems) => {
    return Object.keys(filterItems)?.some((key) => {
      const filter = filterItems[key];
      return isAnySubFilterApplied(filter); // Check for subFilters
    });
  };

  return (
    <DropdownMenu
      open={openDropdown}
      onOpenChange={() => setOpenDropdown((prevState) => !prevState)}
      data-cy="filter-menu"
    >
      <DropdownMenuTrigger className="flex items-center hover:bg-[#F7F8FA] hover:rounded-lg focus-visible:outline-none max-h-[32px] px-[12px] py-[8px] gap-x-[12px] min-w-[94px]" data-cy="filter-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.33329 4H14.6666C15.0348 4 15.3333 4.29848 15.3333 4.66667C15.3333 5.03486 15.0348 5.33333 14.6666 5.33333H1.33329C0.965103 5.33333 0.666626 5.03486 0.666626 4.66667C0.666626 4.29848 0.965103 4 1.33329 4ZM3.33329 7.33333H12.6666C13.0348 7.33333 13.3333 7.63181 13.3333 8C13.3333 8.36819 13.0348 8.66667 12.6666 8.66667H3.33329C2.9651 8.66667 2.66663 8.36819 2.66663 8C2.66663 7.63181 2.9651 7.33333 3.33329 7.33333ZM5.33329 10.6667H10.6666C11.0348 10.6667 11.3333 10.9651 11.3333 11.3333C11.3333 11.7015 11.0348 12 10.6666 12H5.33329C4.9651 12 4.66663 11.7015 4.66663 11.3333C4.66663 10.9651 4.9651 10.6667 5.33329 10.6667Z"
            fill={anyFilterApplied ? "#0073E6" : "#9B9EA3"}
          />
        </svg>
        <button
          className={`${anyFilterApplied ? "text-[#0073E6]" : "text-[#656870]"} text-[12px] font-semibold`}
          onClick={() => setOpenDropdown(true)}
        >
          FILTER
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-[220px] border rounded-lg border-solid border-[#E8E9EB] px-0 py-0"
        data-cy="filter-menu-content"
      >
        {templateFields?.map((customField) => {
          const field = allFields && allFields[customField?.key]; // Check if allFields is defined before accessing its properties
          const isFilterApplied = field && isAnyFilterApplied(field);
          return (
            <DropdownMenuSub
              key={customField.key}
              open={openSubMenu?.parent === customField?.key}
              data-cy="filter-sub-menu"
            >
              <DropdownMenuSubTrigger
                className={`text-[#000] text-[14px] h-[44px] hover:bg-[#F7F8FA] py-3 px-4 justify-between hover:cursor-pointer ${isFilterApplied ? "font-semibold" : "font-normal"}`}
                onMouseEnter={() => setOpenSubMenu({ parent: customField.key })}
              >
                {customField.label}
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent
                className="!pointer-events-auto w-[360px] p-0 border rounded-lg border-solid border-[#E8E9EB]"
                data-cy="filter-sub-menu-content"
              >
                {customField?.showSearch && (
                  <div className="p-[8px] border-b-[#E8E9EB] border-b border-solid flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="absolute left-[20px] top-[18px]"
                    >
                      <g clipPath="url(#clip0_1572_2711)">
                        <path
                          d="M12.8967 11.0079L14.9705 13.0817C15.4912 13.6024 15.4912 14.4466 14.9705 14.9673C14.4498 15.488 13.6056 15.488 13.0849 14.9673L11.0117 12.8942C9.95743 13.593 8.69289 14 7.33329 14C3.65139 14 0.666626 11.0152 0.666626 7.33329C0.666626 3.65139 3.65139 0.666626 7.33329 0.666626C11.0152 0.666626 14 3.65139 14 7.33329C14 8.69125 13.594 9.95437 12.8967 11.0079ZM12 7.33329C12 4.75596 9.91062 2.66663 7.33329 2.66663C4.75596 2.66663 2.66663 4.75596 2.66663 7.33329C2.66663 9.91062 4.75596 12 7.33329 12C9.91062 12 12 9.91062 12 7.33329Z"
                          fill="#9B9EA3"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1572_2711">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <Input
                      type="text"
                      placeholder="Search..."
                      value={watch(`${customField.key}.search`)}
                      {...register(`${customField.key}.search`)}
                      className="w-full h-[32px] border-none rounded bg-[#F7F8FA] pl-[2rem] placeholder:text-[#656870] placeholder:text-[12px]"
                      data-cy="filter-search-input"
                    />
                  </div>
                )}
                <div className="max-h-[360px] overflow-y-auto overflow-x-hidden">
                  {customField.children
                    ?.filter((child) =>
                      child.label
                        .toLowerCase()
                        .includes(
                          watch(`${customField.key}.search`)?.toLowerCase() ||
                            "",
                        ),
                    )
                    ?.map((child) => renderChild(customField.key, child))}
                </div>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setValue(`${customField.key}.search`, null);
                    customField.children.forEach((child) => {
                      setValue(`${customField.key}.${child.key}`, null);
                      if (child.children) {
                        child.children.forEach((subChild) => {
                          setValue(
                            `${customField.key}.${child.key}.${subChild.key}`,
                            null,
                          );
                        });
                      }
                    });
                  }}
                  className="w-full h-[48px] mt-2 justify-start items-center bg-[#F7F8FA] hover:bg-[#F7F8FA] px-5 py-4 text-[#656870] text-[12px] font-semibold border-t-[#E8E9EB] border-t border-solid rounded-none hover:text-[#1A86F3]"
                  data-cy="clear-filter-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.8082 11.6701L14.576 13.4379C14.7061 13.5681 14.7061 13.7791 14.576 13.9093C14.4458 14.0395 14.2347 14.0395 14.1046 13.9093L12.3368 12.1415L10.569 13.9093C10.4389 14.0395 10.2278 14.0395 10.0976 13.9093C9.96746 13.7791 9.96746 13.5681 10.0976 13.4379L11.8654 11.6701L10.0976 9.90235C9.96746 9.77217 9.96746 9.56112 10.0976 9.43094C10.2278 9.30077 10.4389 9.30077 10.569 9.43094L12.3368 11.1987L14.1046 9.43094C14.2347 9.30077 14.4458 9.30077 14.576 9.43094C14.7061 9.56112 14.7061 9.77217 14.576 9.90235L12.8082 11.6701Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.33329 4H14.6666C15.0348 4 15.3333 4.29848 15.3333 4.66667C15.3333 5.03486 15.0348 5.33333 14.6666 5.33333H1.33329C0.965103 5.33333 0.666626 5.03486 0.666626 4.66667C0.666626 4.29848 0.965103 4 1.33329 4ZM3.33329 7.33333H12.6666C13.0348 7.33333 13.3333 7.63181 13.3333 8C13.3333 8.36819 13.0348 8.66667 12.6666 8.66667H3.33329C2.9651 8.66667 2.66663 8.36819 2.66663 8C2.66663 7.63181 2.9651 7.33333 3.33329 7.33333ZM5.33329 10.6667H9.33329C9.70148 10.6667 9.99996 10.9651 9.99996 11.3333C9.99996 11.7015 9.70148 12 9.33329 12H5.33329C4.9651 12 4.66663 11.7015 4.66663 11.3333C4.66663 10.9651 4.9651 10.6667 5.33329 10.6667Z"
                      fill="currentColor"
                    />
                  </svg>
                  Clear Filters
                </Button>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          );
        })}
        <Button
          variant="secondary"
          onClick={() => {
            Object.keys(allFields)?.map((parentKey) => {
              const parentValue = allFields[parentKey] || {};
              Object.keys(parentValue)?.map((childKey) =>
                setValue(`${parentKey}.${childKey}`, null),
              );
            });
          }}
          className="w-full h-[48px] mt-2 justify-start items-center bg-[#F7F8FA] hover:bg-[#F7F8FA] px-5 py-4 text-[#656870] text-[12px] font-semibold border-t-[#E8E9EB] border-t border-solid rounded-none hover:text-[#1A86F3]"
          data-cy="clear-all-filter-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.8082 11.6701L14.576 13.4379C14.7061 13.5681 14.7061 13.7791 14.576 13.9093C14.4458 14.0395 14.2347 14.0395 14.1046 13.9093L12.3368 12.1415L10.569 13.9093C10.4389 14.0395 10.2278 14.0395 10.0976 13.9093C9.96746 13.7791 9.96746 13.5681 10.0976 13.4379L11.8654 11.6701L10.0976 9.90235C9.96746 9.77217 9.96746 9.56112 10.0976 9.43094C10.2278 9.30077 10.4389 9.30077 10.569 9.43094L12.3368 11.1987L14.1046 9.43094C14.2347 9.30077 14.4458 9.30077 14.576 9.43094C14.7061 9.56112 14.7061 9.77217 14.576 9.90235L12.8082 11.6701Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.33329 4H14.6666C15.0348 4 15.3333 4.29848 15.3333 4.66667C15.3333 5.03486 15.0348 5.33333 14.6666 5.33333H1.33329C0.965103 5.33333 0.666626 5.03486 0.666626 4.66667C0.666626 4.29848 0.965103 4 1.33329 4ZM3.33329 7.33333H12.6666C13.0348 7.33333 13.3333 7.63181 13.3333 8C13.3333 8.36819 13.0348 8.66667 12.6666 8.66667H3.33329C2.9651 8.66667 2.66663 8.36819 2.66663 8C2.66663 7.63181 2.9651 7.33333 3.33329 7.33333ZM5.33329 10.6667H9.33329C9.70148 10.6667 9.99996 10.9651 9.99996 11.3333C9.99996 11.7015 9.70148 12 9.33329 12H5.33329C4.9651 12 4.66663 11.7015 4.66663 11.3333C4.66663 10.9651 4.9651 10.6667 5.33329 10.6667Z"
              fill="currentColor"
            />
          </svg>
          Clear Filters
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { Filters };
