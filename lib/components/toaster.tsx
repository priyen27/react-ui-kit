import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./toast"; // Ensure this import path is correct
import { useToast } from "./use-toast"; // Ensure this import path is correct
import ErrorIcon from "../../src/assets/icons/circle_cross.svg";
import WarningIcon from "../../src/assets/icons/warning.svg";
import TickIcon from "../../src/assets/icons/Tick.svg";

export function Toaster() {
  const { toasts } = useToast();

  interface Variant {
    title?: string;
    description?: string;
    icon?: string;
    className?: string;
  }

  const variantsObj: Record<string, Variant> = {
    error: {
      icon: ErrorIcon,
      className: "text-[#DB0000] pl-3",
      title: "Error",
      description: "There was a problem with your request.",
    },
    success: {
      icon: TickIcon,
      className: "text-[#1CA756] pl-3",
      title: "Success",
      description: "Your request was successful!",
    },
    attention: {
      icon: WarningIcon,
      className: "text-[#FF5A00] pl-3",
      title: "Attention",
      description: "Please check your inputs.",
    },
  };

  return (
    <ToastProvider>
      {toasts.map(
        ({
          id,
          title,
          description,
          action,
          toastType = "success",
          classes,
          ...props
        }) => (
          <Toast
            key={id}
            {...props}
            className="w-[320px] h-[72px] py-4 rounded-lg border border-solid border-[#E8E9EB] bg-white"
          >
            <div className="grid gap-1">
              <div className="flex items-center">
                {variantsObj[toastType]?.icon && (
                  <img
                    src={variantsObj[toastType]?.icon}
                    alt={`${toastType}-icon`}
                  />
                )}
                <ToastTitle
                  className={`${(classes as { toastTitleClassName?: string })?.toastTitleClassName || ""} ${variantsObj[toastType]?.className} text-[14px] font-semibold leading-5`}
                >
                  {title || variantsObj[toastType]?.title}
                </ToastTitle>
              </div>
              <ToastDescription
                className={`${(classes as { toastDescriptionClassName?: string })?.toastDescriptionClassName} text-[12px] pl-8 text-[#212329] font-normal leading-4`}
              >
                {description || variantsObj[toastType]?.description}
              </ToastDescription>
            </div>
            {action}
            <ToastClose />
          </Toast>
        ),
      )}
      <ToastViewport />
    </ToastProvider>
  );
}
