import { memo } from "react";
import { ThemeContext } from "./theme-context";

const ThemedButton = memo(function (props) {
  let theme = this.useContext(ThemeContext);
  return <button {...props} style={{ background: theme.background }}></button>;
});

export default ThemedButton;
