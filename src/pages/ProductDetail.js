import React from "react";
// import styled from ''
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";

const StyledImage = styled.img({
  maxWidth: "100%",
});

export default function ProductDetail() {
  const location = useLocation();
  if (!location.state) return null;
  const { name, imgUrl, price } = location.state;
  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <Box width="100%">
          <StyledImage src={imgUrl} alt={name} />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h3" gutterBottom align="left">
          {name}
        </Typography>
        <Typography variant="body1" gutterBottom align="left">
          가격: {price}
        </Typography>
      </Grid>
    </Grid>
  );
}
