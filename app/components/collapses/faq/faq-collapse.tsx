import { useState } from "react";
import { Text } from "~/components/typography/text/text";

interface FaqCollapseProps {
  question: string;
  children: React.ReactNode;
  className?: string;
}

export const FaqCollapse: React.FC<FaqCollapseProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false);  

  return (
    <details
      open={open}
      className={`
      
    ${props.className ?? ""}
    `}
      onToggle={(e) => setOpen(e.currentTarget.open)}
    >
      <summary>
        <span className="h-16 w-full flex items-center justify-between cursor-pointer border-b border-[rgb(36,42,69,.15)] ">
          <Text as="span" size="sm" opacity={100} className="hover:text-red ">
            {props.question}
          </Text>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
            <path
              fill="none"
              stroke={open ? "#FA5959" : "#5267DF"}
              strokeWidth="3"
              d="M1 1l8 8 8-8"
              className={` origin-center transition-transform duration-150 ${
                open ? "rotate-180" : ""
              }`}
            />
          </svg>
        </span>
      </summary>
      <div className={`transition-[max-height] overflow-hidden duration-500 ${open ? "max-h-96" : "max-h-0"}`}>
        {props.children}
      </div>
    </details>
  );
};
