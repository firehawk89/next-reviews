export default function Container({ type, children }) {
  let classes = "max-w-screen-xl mx-auto px-5";

  if (type === "fluid") {
    classes = "px-5";
  }

  return <div className={classes}>{children}</div>;
}
