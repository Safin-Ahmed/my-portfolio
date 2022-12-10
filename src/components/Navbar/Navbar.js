import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import HideOnScroll from "./HideOnScroll";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-router-dom";
import ScrollTop from "./ScrollTop";
import { Fab } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

const pages = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "#my-about",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#my-portfolio",
  },
  {
    name: "Contact",
    link: "#my-contact",
  },
];

function Navbar({ props }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <HideOnScroll>
      <AppBar sx={{ background: "#000" }} position="fixed">
        <Container maxWidth="100%">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <a
                style={{ textDecoration: "none", fontFamily: "poppins" }}
                href="Resume.pdf"
                download
              >
                <Button
                  sx={{
                    background: "#59b256",
                    color: "#fff",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    borderRadius: "15px",
                  }}
                  variant="contained"
                >
                  Download Resume
                </Button>
              </a>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <Box
                  sx={{
                    display: { xs: "block", md: "none" },
                    width: "85%",
                    margin: "auto",
                  }}
                >
                  <a
                    style={{ textDecoration: "none", fontFamily: "poppins" }}
                    href="Resume.pdf"
                    download
                  >
                    <Button
                      sx={{
                        background: "#59b256",
                        color: "#fff",
                        fontFamily: "Poppins",
                        fontSize: "16px",
                        borderRadius: "15px",
                      }}
                      variant="contained"
                    >
                      Resume
                    </Button>
                  </a>
                </Box>
                {pages.map((page) => (
                  <a style={{ textDecoration: "none" }} href={page.link}>
                    <Button
                      key={page.name}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: "#000",
                        display: "block",
                        fontSize: "18px",
                      }}
                    >
                      {page.name}
                    </Button>
                  </a>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {pages.map((page) => {
                if (page.link === "/") {
                  return (
                    <Link to="/">
                      <Button
                        key={page.name}
                        onClick={handleCloseNavMenu}
                        sx={{
                          my: 2,
                          color: "white",
                          display: "block",
                          fontSize: "18px",
                        }}
                      >
                        {page.name}
                      </Button>
                    </Link>
                  );
                }
                return (
                  <a href={page.link}>
                    <Button
                      key={page.name}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: "white",
                        display: "block",
                        fontSize: "18px",
                      }}
                    >
                      {page.name}
                    </Button>
                  </a>
                );
              })}
            </Box>

            <Toggle />
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}
export default Navbar;
