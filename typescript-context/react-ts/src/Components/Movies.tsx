import { Box, Button, Chip, TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useState, ChangeEvent, useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    movieInput: {
      marginRight: "5px",
    },
    movieChip: {
      padding: "30px 10px",
      fontSize: "20px",
      marginLeft: "10px",
    },
  })
);
const Movies = () => {
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
          color="primary"
          onClick={() => {
            addMovie(movie);
            setMovie("");
          }}
        >
          Add
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" flexWrap="wrap" mx={5}>
        {movies.map((movie) => (
          <Chip
            key={movie.id}
            label={movie.title}
            clickable
            color="primary"
            className={classes.movieChip}
            onDelete={() => deleteMovie(movie.id)}
          ></Chip>
        ))}
      </Box>
    </>
  );
};

export default Movies;
