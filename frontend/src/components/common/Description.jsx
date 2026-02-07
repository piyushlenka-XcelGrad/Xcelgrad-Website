const CommonDescription = ({
  children,
  textColor = "text-slate-600",
  highlightColor = "text-slate-900",
  border = true,
}) => {
  return (
    <div
      className={`max-w-4xl mx-auto pt-3 ${
        border ? "border-t border-slate-50" : ""
      }`}
    >
      <p
        className={`text-lg md:text-xl leading-relaxed font-medium ${textColor}`}
      >
        {children}
      </p>
    </div>
  );
};

export default CommonDescription;
