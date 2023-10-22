import {
  FacebookRounded,
  FacebookSharp,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "../../../assets/images/logo.webp";

const footerLinks = [
  [
    { id: "1", name: "Home", href: "/" },
    { id: "2", name: "Discovery", href: "#" },
  ],
  [{ id: "1", name: "About", href: "/about-us" }],
  [{ id: "1", name: "News", href: "/news" }],
  [{ id: "1", name: "Contact", href: "/contact" }],
];
const icons = [
  {
    id: "1",
    name: "facebook",
    color: "darkInfo",
    href: "http://facebook.com",
    component: <FacebookSharp />,
  },
  {
    id: "2",
    name: "twitter",
    color: "lightInfo",
    href: "http://twitter.com",
    component: <Twitter fontSize="medium" />,
  },
  {
    id: "3",
    name: "linkedIn",
    color: "info",
    href: "http://linkedIn.com",
    component: <LinkedIn />,
  },
  {
    id: "4",
    name: "youtube",
    color: "error",
    href: "http://youtube.com",
    component: <YouTube />,
  },
];
const Footer = () => {
  return (
    <footer style={{ width: "100%" }}>
      {/* <Container width="100%">
        <Grid container sx={{ padding: "20px 0" }} display="flex">
          <Grid item xs={4} spacing={2}>
            <Box component="img" src={logo} alt="Logo"></Box>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              marginTop={1}
            >
              {icons.map((icon) => (
                <Link key={icon.id} href={icon.href} underline="none">
                  <IconButton color={icon.color} aria-label={icon.name}>
                    {icon.component}
                  </IconButton>
                </Link>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={2}>
              {footerLinks.map((links) => (
                <Grid item xs={3}>
                  {links.map((link) => (
                    <Box key={link.id}>
                      <Link href={link.href} underline="none" color="inherit">
                        {link.name}
                      </Link>
                    </Box>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Paper elevation={2} sx={{ width: "100%", borderRadius: "0" }}>
        <Typography color="text.secondary" textAlign="center" padding="20px 0">
          Copyright &copy; 2023 All right reserved
        </Typography>
      </Paper> */}
    </footer>
  );
};

export default Footer;
