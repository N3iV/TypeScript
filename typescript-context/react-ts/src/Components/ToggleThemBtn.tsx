import { Fab } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    floatBtn: {
      position: "fixed",
      right: "3rem",
      bottom: "3rem",
    },
  })
);
const ToggleThemBtn = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const classes = useStyles();
  return (
    <Fab
      color="primary"
      variant="extended"
      className={classes.floatBtn}
      onClick={() => toggleTheme(theme === "primary" ? "secondary" : "primary")}
    >
      Toggle Theme
    </Fab>
  );
};

export default ToggleThemBtn;
