import { Box, Typography } from "@mui/material";
import React from "react";

const AboutUs = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Typography variant="h2" mb={'4%'}>
        This app shows every book upload in the Data Base and its details 
      </Typography>
     
      <Typography variant="h4">
        Books uploaded in this up might be on sale
      </Typography>
    </Box>
  );
};

export default AboutUs;
