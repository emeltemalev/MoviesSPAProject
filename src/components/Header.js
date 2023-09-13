export const classNames = (...classes) => classes.filter(Boolean).join(" ");

export const Header = ({ text, size, bold, color, w }) => {
  return (
    <>
      <div
        className={classNames(
          "font-regular",
          size === "small" && "text-xs",
          size === "medium" && "text-sm",
          size === "large" && "text-base",
          size === "xlarge && 'text-large",
          bold && "font-semibold",
          w && w,
          color ? color : "text-gray-800"
        )}
      >
        {text}
      </div>
    </>
  );
};
