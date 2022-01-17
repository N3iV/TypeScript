import { Box } from "@material-ui/core";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

interface WelcomeMsgProps {
  position: string;
  country?: string;
}
const WelcomeMessage = ({
  position,
  country = "Viet Nam",
}: WelcomeMsgProps) => {
  const {
    authInfo: { username, isAuthenticated },
  } = useContext(AuthContext);
  return (
    <Box mb={1}>
      {isAuthenticated
        ? ` Welcome ${username} - ${position} from ${country}`
        : ""}
    </Box>
  );
};

export default WelcomeMessage;
