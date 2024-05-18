"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  Hidden,
  CssBaseline,
  Button,
  Container,
  Box,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box width={250}>
      <List>
        <ListItem component={Link} href="#" passHref>
          <Button fullWidth variant="outlined">
            Launch app
          </Button>
        </ListItem>
        <ListItem component={Link} href="#" passHref>
          <Button fullWidth variant="contained">
            Get my card
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <CssBaseline />
      <AppBar sx={{ bgcolor: "secondary.main" }} position="sticky">
        <Container>
          <Toolbar
            sx={{
              px: "0px !important",
              minHeight: {
                sm: "84px !important",
              },
            }}
          >
            <Grid container justifyContent="space-between">
              <Grid item xs="auto">
                <Typography variant="h6" noWrap>
                  <Link href="#" passHref>
                    Logo
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Hidden smUp>
                  <IconButton
                    color="primary"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                  >
                    <MenuIcon />
                  </IconButton>
                </Hidden>
              </Grid>
              <Grid item container sm="auto" gap={1}>
                <Hidden smDown>
                  <Grid item>
                    <Button variant="outlined">Launch app</Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained">Get my card</Button>
                  </Grid>
                </Hidden>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Hidden smUp>
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            PaperProps={{
              sx: {
                bgcolor: "secondary.main",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <Box component="main" sx={{ py: 2 }}>
        <Container>{children}</Container>
      </Box>
    </div>
  );
};

export default MainLayout;
