import React, { useState } from "react";
import { AppBar, Typography, Toolbar, Tab, Tabs } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState();

  console.log(value);

  return (
    <div>
      <AppBar sx={{ backgroundColor: "#1d3557" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{color:"white"}}>
        
            <Typography>
              <MenuBookIcon  />
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add product" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/about" label="About us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
