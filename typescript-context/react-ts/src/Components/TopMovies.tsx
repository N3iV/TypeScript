import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { TopMovieContext } from "../contexts/TopMoviesContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topMovieHeader: {
      paddingBottom: 0,
    },
    topMovieList: {
      paddingTop: 0,
    },
    topMovieItem: {
      paddingTop: "2px",
      paddingBottom: "2px",
    },
  })
);

const TopMovies = () => {
  const classes = useStyles();
  const { topMovies, getTopMovies, toggleWatched } =
    useContext(TopMovieContext);

  const {
    authInfo: { isAuthenticated },
  } = useContext(AuthContext);
  useEffect(() => {
    getTopMovies();
  }, []);
  return (
    <Box mt={1} ml={1}>
      <Card raised>
        {isAuthenticated && (
          <>
            <CardHeader
              title="Top 10 movies of all times"
              className={classes.topMovieHeader}
              titleTypographyProps={{
                variant: "h4",
                align: "center",
                color: "primary",
              }}
            />
            <CardContent>
              <List>
                {topMovies.map((movie, idx) => (
                  <ListItem
                    key={movie.imdbID}
                    button
                    className={classes.topMovieItem}
                  >
                    <ListItemIcon>
                      <Checkbox
                        checked={movie.Watched}
                        onClick={() => toggleWatched(movie.imdbID)}
                      />
                    </ListItemIcon>
                    <ListItemText primary={movie.Title} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </>
        )}
      </Card>
    </Box>
  );
};

export default TopMovies;
