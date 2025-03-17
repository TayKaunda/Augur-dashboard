// src/pages/Dashboard.js
import React, { useState } from "react";
import DistributorCard from "../components/DistributorCard";
import mockData from "../mockdata";
import {TextField} from "@mui/material";

const Dashboard = () => {
const [searchTerm, setSearchTerm] = useState("");

const filterredDistributors = mockData.filter((distributor)=> 
distributor.name.toLowerCase().includes(searchTerm.toLowerCase())
); 
  return (
    <div>
      <h1>Distributor Metrics</h1>
      <TextField
        label="Search Distributors"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {mockData.map((distributor) => (
          <DistributorCard key={distributor.id} distributor={distributor} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
