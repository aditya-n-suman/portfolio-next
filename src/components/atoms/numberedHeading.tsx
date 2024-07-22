interface NumberedHeadingProps {
  className?: string;
  width?: string;
  title: string;
}
const NumberedHeading = ({
  className = "",
  title,
  width = "w-3/5",
}: NumberedHeadingProps) => {
  return (
    <div className={`flex items-center ${className} ${width}`}>
      <h2 className="numbered-heading font-extrabold">{title}</h2>
      <hr className="flex-1 border-t-0 h-[1px] bg-navy-lightest -translate-y-1 mx-6" />
    </div>
  );
};

export default NumberedHeading;
