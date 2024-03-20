import clsx from "clsx";

const Heading = ({ children, align = "center" }) => {
  const textAlign = clsx({
    "text-center": !align || align === "center",
    "text-left": align === "left",
    "text-right": align === "right",
  });
  return (
    <h2 className={clsx("text-3xl font-bold text-cyan-900", textAlign)}>
      {children}
    </h2>
  );
};

export default Heading;
