import { memo, useContext } from "react";
import { ThemeContext } from "./theme-context";

const ThemedButton = memo(function (props) {
  let theme = useContext(ThemeContext);
  return <button {...props} style={{ background: theme.background }}></button>;
});

export default ThemedButton;
