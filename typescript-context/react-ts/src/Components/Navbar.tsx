import {
  AppBar,
  Box,
  Button,
  Chip,
  FormControl,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useState, ChangeEvent, useEffect, useContext } from "react";
import WelcomeMessage from "./WelcomeMessage";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ProgressContext } from "../contexts/ProgressContext";
import { ThemeContext } from "../contexts/ThemeContext";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    positionSelect: {
      color: "white",
      borderBottom: "1px solid white",
    },
  })
);
function Navbar() {
  const classes = useStyles();

  const [position, setPosition] = useState<string>("Full-stack developer");
  const [time, setTime] = useState<Date>(() => new Date(Date.now()));

  const { lastTime, status } = useContext(ProgressContext); // Get data from context
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    console.log("Count");
    const timer = setInterval(() => setTime(new Date(Date.now())), 1000);
    return () => clearInterval(timer);
  }, []);

  const onPositionChange = (
    e: ChangeEvent<{
      value: unknown;
    }>
  ) => {
    setPosition(e.target.value as string);
  };

  return (
    <AppBar position="static" color={theme}>
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={1}
          py={2}
        >
          <Typography variant="h6">My movies</Typography>
          <Box textAlign="center">
            <WelcomeMessage position={position} country="China" />
            <Chip
              label={`last time working on thiss project : ${lastTime} - Status: ${status}`}
            />
            <Box mt={1}>
              <FormControl>
                <Select
                  className={classes.positionSelect}
                  value={position}
                  onChange={onPositionChange}
                >
                  <MenuItem value="Full-stack developer">
                    Full-stack developer
                  </MenuItem>

                  <MenuItem value="Front-end developer">
                    Front-end developer
                  </MenuItem>
                  <MenuItem value="Back-end developer">
                    Back-end developer
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box textAlign="center">
            <Box my={1}>
              <Typography variant="h6">Time: {time.toUTCString()}</Typography>
            </Box>
          </Box>
        </Box>
        {/* <Button onClick={toggleTheme("secondary")}>Change Theme</Button> */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
