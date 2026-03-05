const Title = ({ text1, text2, text3, size }) => {

  const sizeClasses = {
    sm: "text-sm lg:text-base",
    lg: "text-lg lg:text-xl",
    xl: "text-xl lg:text-2xl",
    "2xl": "text-2xl lg:text-3xl",
    "3xl": "text-3xl lg:text-4xl",
    "4xl": "text-4xl lg:text-5xl",
    "5xl": "text-4xl lg:text-6xl",
    "6xl": "text-5xl lg:text-6xl",
    "7xl": "text-5xl lg:text-7xl",
  };

  return (
    <div>
      <h2
        className={`${sizeClasses[size] || "text-4xl lg:text-6xl"} font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6`}
      >
        {text1}{" "}
        <span className="text-indigo-600">{text2}</span>{" "}
        {text3}
      </h2>
    </div>
  );
};

export default Title;