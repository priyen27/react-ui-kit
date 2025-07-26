import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();
  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "rounded-lg flex border border-[#E8E9EB] bg-white w-[320px] h-[72px] pl-[16px] pr-[56px] py-4",
          description: "group-[.toast]:text-slate-500  ",
          actionButton:
            "group-[.toast]:bg-slate-900 group-[.toast]:text-slate-50    ",
          cancelButton:
            "group-[.toast]:bg-slate-100 group-[.toast]:text-slate-500    ",
        },
      }}
      {...props}
    />
  );
};

interface SonnerProps {
  title: string;
  description: string;
  showCloseButton: boolean;
  type: "success" | "error" | "attention";
}

const sonner = ({
  description,
  showCloseButton,
}: SonnerProps) => {
  toast(
    <div className="flex">
      <div className="pl-3">
        <p className="text-xs text-[#212329]">{description}</p>
      </div>
      {showCloseButton && (
        <button
          onClick={() => toast.dismiss()}
          className="absolute top-4 right-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.94283 8.00001L12.4784 11.5355C12.7387 11.7959 12.7387 12.218 12.4784 12.4783C12.218 12.7387 11.7959 12.7387 11.5356 12.4783L8.00002 8.94281L4.46449 12.4783C4.20414 12.7387 3.78203 12.7387 3.52168 12.4783C3.26133 12.218 3.26133 11.7959 3.52168 11.5355L7.05721 8.00001L3.52168 4.46447C3.26133 4.20412 3.26133 3.78201 3.52168 3.52166C3.78203 3.26131 4.20414 3.26131 4.46449 3.52166L8.00002 7.0572L11.5356 3.52166C11.7959 3.26131 12.218 3.26131 12.4784 3.52166C12.7387 3.78201 12.7387 4.20412 12.4784 4.46447L8.94283 8.00001Z"
              fill="#9B9EA3"
            />
          </svg>
        </button>
      )}
    </div>,
  );
};

export { Toaster, sonner };
