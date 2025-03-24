import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ options,value,setValue }) {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box mb={2} px={2}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        indicatorColor="green"
        variant="scrollable"
      >
        {options.map((option, index) => (
          <Tab
            label={option.label}
            {...a11yProps(index)}
            key={option.key}
            style={value===index ? { color: "white",borderBottom:"1px solid var(--color-primary)" }:{ color: "white" }}
            sx={{
              width: "21px",
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
}
