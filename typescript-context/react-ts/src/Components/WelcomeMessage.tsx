import { Box } from "@material-ui/core";

interface WelcomeMsgProps {
  position: string;
  country?: string;
}
const WelcomeMessage = ({
  position,
  country = "Viet Nam",
}: WelcomeMsgProps) => {
  return (
    <Box mb={1}>
      Welcome {position} from {country}
    </Box>
  );
};

export default WelcomeMessage;
