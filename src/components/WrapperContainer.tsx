"use client";
import { Box, BoxProps } from "@mui/material";
import { ReactNode } from "react";

interface WrapperContainerProps extends BoxProps {
  children: ReactNode;
}

const WrapperContainer = ({ children, ...props }: WrapperContainerProps) => {
  return (
    <Box
      sx={{
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default WrapperContainer;
