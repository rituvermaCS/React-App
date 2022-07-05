import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CssBaseline } from "@mui/material";

const Navbar = ({ name }) => {
  return (
    <>
      <div style={{ height: "10%" }}>
        <Box sx={{ flexGrow: 1 }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            color="success"
            sx={{ boxShadow: 0, justifySelf: "flex-start", height: "8%" }}
          >
            <Toolbar>

              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                      borderRadius: "100px",
                      backgroundColor: "#000000",
                      height: "30px",
                      width: "250px",
                  }}
                >
                    <div className="topnav__search">
            <input type="text" placeholder='Search here...'/>
            <i className='bx bx-search'></i>
                   </div>
                </Typography>
              </Link>

              
              <Toolbar
                sx={{
                  display: "flex",
                  justifyContent: "right",
                  width: "100%",
                  marginTop: "5px",
                }}
              >
                <Typography
                  fontSize={35}
                  fontWeight={400}
                  sx={{
                    flexGrow: "1",
                    fontSize: "35px",
                    fontWeight: "800",
                    color: "#000000",
                    fontFamily: "georgia,garamond,serif",
                    textTransform: "capitalize",
                  }}
                >
                  Hello {sessionStorage.getItem("name")}
                </Typography>


                <Link to="/comment" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "50px",
                      backgroundColor: "#000000",
                      height: "40px",
                      width: "115px",
                    }}
                  >
                    Comments
                  </Button>
                </Link>

              </Toolbar>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </>
  );
};

export default Navbar;