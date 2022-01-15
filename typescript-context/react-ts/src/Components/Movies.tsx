import { Box, Button, Chip, TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useState, ChangeEvent, useContext } from "react";
import { PropTypes } from "@material-ui/core";

import { MoviesContext } from "../contexts/MoviesContext";
import { ThemeContext } from "../contexts/ThemeContext";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    movieInput: {
      marginRight: "5px",
    },
    movieChip: {
      padding: "30px 10px",
      fontSize: "20px",
      margin: "10px",
    },
  })
);
const Movies = () => {
  const { theme } = useContext(ThemeContext);
  const chipTheme = theme as Exclude<PropTypes.Color, "inherit">;
  const classes = useStyles();
  const [movie, setMovie] = useState("");
  console.log(movie);
  const onMovieInputChange = (
    e: ChangeEvent<{
      value: unknown;
    }>
  ) => setMovie(e.target.value as string);
  const { movies, addMovie, deleteMovie } = useContext(MoviesContext);

  return (
    <>
      <Box display="flex" justifyContent="center" my={5}>
        <TextField
          label="Your favourite move..."
          variant="outlined"
          className={classes.movieInput}
          onChange={onMovieInputChange}
          value={movie}
        />
        <Button
          variant="contained"
          color={theme}
          onClick={() => {
            addMovie(movie);
            setMovie("");
          }}
        >
          Add
        </Button>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        mx={5}
        color={theme}
      >
        {movies.map((movie) => (
          <Chip
            key={movie.id}
            label={movie.title}
            clickable
            className={classes.movieChip}
            onDelete={() => deleteMovie(movie.id)}
            color={chipTheme}
          ></Chip>
        ))}
      </Box>
    </>
  );
};

export default Movies;
