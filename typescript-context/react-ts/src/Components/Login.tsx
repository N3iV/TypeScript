import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@material-ui/core";
import {
  useState,
  ChangeEvent,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { AuthContext } from "../contexts/AuthContext";
interface loginProps {
  isOpen: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
}
const Login = ({ isOpen, handleClose }: loginProps) => {
  const { toggleAuth } = useContext(AuthContext);

  const [username, setUsername] = useState<string>("");

  const onUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const onLoginSubmit = () => {
    if (username !== " ") {
      toggleAuth(username);
      setUsername(" ");
      handleClose(false);
    }
  };
  return (
    <Dialog open={isOpen} onClose={() => handleClose(false)}>
      <DialogContent>
        <TextField
          value={username}
          label="Username"
          onChange={onUserNameChange}
          required
        ></TextField>
        <DialogActions>
          <Button
            disabled={username === " "}
            variant="contained"
            onClick={onLoginSubmit}
            color="primary"
          >
            Login
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
