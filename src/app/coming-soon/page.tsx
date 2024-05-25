import { Box, Typography } from "@mui/material";
import TimeLineIcon from "@mui/icons-material/TimeLine";
import WrapperContainer from "@/components/WrapperContainer";

const ComingSoonPage = () => {
  return (
    <WrapperContainer
      sx={{
        bgcolor: "secondary.main",
        py: 2,
        minHeight: {
          xs: "calc(100vh - 64px)",
          md: "calc(100vh - 84px)",
          lg: "calc(100vh - 300px)",
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "background.custom.secondary",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TimeLineIcon sx={{ fontSize: 40, mr: 1 }} />
        <Typography variant="h4">Coming Soon...</Typography>
      </Box>
    </WrapperContainer>
  );
};

export default ComingSoonPage;
