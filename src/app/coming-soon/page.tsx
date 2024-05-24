import { Box, Typography } from "@mui/material";
import TimeLineIcon from "@mui/icons-material/TimeLine";

const ComingSoonPage = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <TimeLineIcon sx={{ fontSize: 40, mr: 1 }} />
      <Typography variant="h4">Coming Soon...</Typography>
    </Box>
  );
};

export default ComingSoonPage;
