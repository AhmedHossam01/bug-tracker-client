import { DetailedHTMLProps, HTMLAttributes, useState } from "react";

const App = () => {
  const [isDark, setIsDark] = useState(true);

  const handleKeyPress = (
    event: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  ) => {
    if (event.key === "Enter") {
      setIsDark(!isDark);
    }
  };

  return (
    <div
      className={isDark ? "dark" : ""}
      data-theme={isDark ? "dark" : "light"}
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      <div className="text-3xl dark:bg-slate-900 min-h-screen dark:text-slate-100">
        hello world
        <button className="btn btn-primary">Click Me</button>
      </div>
    </div>
  );
};

export default App;
