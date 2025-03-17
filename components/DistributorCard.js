// src/components/DistributorCard.js
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const DistributorCard = ({ distributor }) => {
  return (
    <Card sx={{ minWidth: 275, margin: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {distributor.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Last Month Shipped: {distributor.lastMonthShipped}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Forecasted This Month: {distributor.forecastedThisMonth}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          YTD Average: {distributor.ytdAverage}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DistributorCard;