"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  Hidden,
  Button,
  Container,
  Box,
  Grid,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ReactNode } from "react";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const drawer = (
    <Box width={250}>
      <List>
        <ListItem href="#" button>
          <Button fullWidth variant="outlined">
            Launch app
          </Button>
        </ListItem>
        <ListItem href="#" button>
          <Button fullWidth variant="outlined">
            Help center
          </Button>
        </ListItem>
        <ListItem href="#" button>
          <Button fullWidth variant="outlined">
            Refer a friend
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
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
              <Grid
                item
                xs="auto"
                display="flex"
                alignItems="center"
                gap={{ xs: 1, md: 2 }}
              >
                <Link
                  sx={{
                    color: "common.white",
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    typography: {
                      xs: "h6",
                      md: "h5",
                    },
                  }}
                  href="#"
                >
                  {/* TODO: Change to correct logo */}
                  <AutoGraphIcon sx={{ color: "common.white" }} /> Landing Page
                </Link>
                <Hidden mdDown>
                  <Link sx={{ color: "common.white" }} href="#">
                    Help center
                  </Link>
                  <Link sx={{ color: "common.white" }} href="#">
                    Refer a friend
                  </Link>
                </Hidden>
              </Grid>
              <Grid item>
                <Hidden mdUp>
                  <Grid container gap={2}>
                    <Grid item>
                      <Button variant="contained">Get my card</Button>
                    </Grid>
                    <Grid item>
                      <IconButton
                        color="primary"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                      >
                        <MenuIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Hidden>
              </Grid>
              <Grid item container md="auto" gap={1}>
                <Hidden mdDown>
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
        <Hidden mdUp>
          <Drawer
            anchor="right"
            open={isDrawerOpen}
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
    </>
  );
};

export default MainLayout;
