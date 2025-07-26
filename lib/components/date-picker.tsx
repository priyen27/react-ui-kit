"use client";

import * as React from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";

import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { cn } from "../utils";

import "react-day-picker/dist/style.css";

interface ClassesObject {
  buttonClassName?: string;
  iconClassName?: string;
  calendarClassName?: string;
}

interface DefaultMonth {
  from?: Date;
  to?: Date;
}

interface DatePickerProps {
  mode: "single" | "range";
  selected?: Date | undefined;
  selectedRange?: DateRange | undefined;
  classes?: ClassesObject;
  min?: number;
  max?: number;
  onSelect?: (value: Date | DateRange | undefined) => void;
  required?: boolean;
  defaultMonth?: DefaultMonth;
  hidden?: [Date] | undefined;
  calendarIcon?: React.ReactNode;
}

const DatePicker: React.FC<DatePickerProps> = ({
  mode = "single",
  selected,
  selectedRange,
  classes,
  min,
  max,
  onSelect = () => {},
  required = false,
  defaultMonth,
  hidden,
  calendarIcon,
}) => {
  const [date, setDate] = React.useState<Date | undefined>();
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>();

  React.useEffect(() => {
    if (mode === "single") {
      setDate(selected ? selected : undefined);
    } else if (mode === "range") {
      setDateRange(
        selectedRange
          ? {
              from: selectedRange?.from,
              to: selectedRange?.to,
            }
          : undefined,
      );
    }
  }, []);

  const props = {
    defaultMonth: defaultMonth?.from,
    hidden,
    className: cn(classes?.calendarClassName),
    classNames: {
      nav: "space-x-1 flex items-center",
      nav_button: cn(
        "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 !rounded-[20px]",
      ),
      nav_button_previous: "!absolute left-1 w-fit h-fit",
      nav_button_next: "!absolute right-1 w-fit h-fit",
      head_row: "flex",
      head_cell: "rounded-md w-9 font-normal text-[0.8rem]",
      row: "flex w-full mt-2",
      cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
      day: cn(
        "h-9 w-9 hover:!bg-[unset] hover:border hover:border-solid hover:border-[#333] hover:px-[8px] hover:py-[2px] hover:rounded-[10px] text-[#333]",
      ),
      day_selected: `bg-primary text-primary-foreground hover:!bg-red-100 !bg-red-100 ${mode === "single" && "rounded-[10px]"}`,
      day_today: "!border !border-solid !border-[#333] !rounded-[10px]",
      day_outside: "opacity-30",
      day_range_start: "rounded-tl-[10px] rounded-bl-[10px]",
      day_range_end: "rounded-tr-[10px] rounded-br-[10px]",
    },
    min,
    max,
    required,
    toDate: new Date(),
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "justify-start text-left font-normal text-[#000] p-1 gap-0 min-w-0 h-fit",
            classes?.buttonClassName,
            !date && "text-muted-foreground",
          )}
          data-cy="date-picker-button"
        >
          {calendarIcon || (
            <CalendarIcon
              className={cn(
                "h-4 w-4",
                classes?.iconClassName,
                (date || dateRange) && "mr-2",
              )}
            />
          )}
          {mode === "single"
            ? date && format(date, "PPP")
            : dateRange?.from &&
              dateRange?.to &&
              `${format(dateRange.from, "LLL d")} - ${format(dateRange.to, "PPP")}`}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        {mode === "single" ? (
          <Calendar
            mode={mode}
            selected={date}
            onSelect={(value) => {
              setDate(value);
              onSelect(value ? value : undefined);
            }}
            {...props}
          />
        ) : (
          <Calendar
            mode={mode}
            selected={dateRange}
            onSelect={(value) => {
              setDateRange(value);
              if (value?.from && value?.to) {
                onSelect(value ? value : undefined);
              }
            }}
            {...props}
          />
        )}
      </PopoverContent>
    </Popover>
  );
};

export { DatePicker };
