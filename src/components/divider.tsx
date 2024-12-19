import React from "react";

interface DividerProps {
  text?: string;
  lineColor?: string;
  textColor?: string;
  thickness?: string;
  lineStyle?: string;
  className?: string;
}

const Divider: React.FC<DividerProps> = ({
  text,
  lineColor = "gray-300",
  textColor = "gray-600",
  thickness = "1px",
  lineStyle = "solid",
  className = "",
}) => {
  return (
    <div
      className={`flex items-center w-full ${className}`}
      style={{ gap: "0.5rem" }}
    >
      <div
        className={`flex-grow border-t`}
        style={{
          borderColor: `var(--tw-color-${lineColor})`,
          borderWidth: thickness,
          borderStyle: lineStyle,
        }}
      />
      {text && (
        <span
          className={`px-2 bg-[#ebeae8] text-sm font-medium`}
          style={{
            color: `var(--tw-color-${textColor})`,
          }}
        >
          {text}
        </span>
      )}
      <div
        className={`flex-grow border-t`}
        style={{
          borderColor: `var(--tw-color-${lineColor})`,
          borderWidth: thickness,
          borderStyle: lineStyle,
        }}
      />
    </div>
  );
};

export default Divider;
