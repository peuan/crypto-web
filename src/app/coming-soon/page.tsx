import { Box, Typography } from "@mui/material";
import TimelineIcon from "@mui/icons-material/Timeline";

const ComingSoonPage = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "calc(100vh - 301px)",
        backgroundColor: "background.custom.secondary",
      }}
    >
      <TimelineIcon sx={{ fontSize: 40, mr: 1 }} />
      <Typography variant="h4">Coming Soon...</Typography>
    </Box>
  );
};

export default ComingSoonPage;
