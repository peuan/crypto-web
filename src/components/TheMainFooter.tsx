import { Box, Container, Grid, Link, Typography, styled } from "@mui/material";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import XIcon from "@mui/icons-material/X";
import { RoutePath } from "@/enums/route-path";

const FooterLink = styled(Link)(({ theme }) => ({
  color: "gray",

  ":hover": {
    color: theme.palette.common.black,
  },
}));

const TheMainFooter = () => {
  return (
    <Box sx={{ bgcolor: "background.gray", py: 3 }} component="footer">
      <Container>
        <Box display="flex" flexDirection="column" gap={2} alignItems="center">
          <Grid container spacing={2}>
            <Grid item xs={12} lg={3}>
              <Link
                sx={{
                  color: "common.black",
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  justifyContent: {
                    xs: "center",
                    lg: "flex-start",
                  },
                  typography: {
                    xs: "h6",
                    lg: "h5",
                  },

                  ":hover": {
                    color: "common.black",
                  },
                }}
                href="/"
              >
                {/* TODO: Change to correct logo */}
                <AutoGraphIcon sx={{ color: "common.black" }} /> Landing Page
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              lg={6}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection={{ xs: "column", lg: "row" }}
              gap={{ xs: 1.5, lg: 3 }}
            >
              <FooterLink href={RoutePath.COMING_SOON}>
                Privacy policy
              </FooterLink>
              <FooterLink href={RoutePath.COMING_SOON}>
                Terms & conditions
              </FooterLink>
              <FooterLink href={RoutePath.COMING_SOON}>Help center</FooterLink>
              <FooterLink href={RoutePath.COMING_SOON}>
                Refer a friend
              </FooterLink>
            </Grid>
            <Grid item xs={12} lg={3} textAlign={{ xs: "center", lg: "right" }}>
              <XIcon sx={{ fontSize: 30, color: "grey.700" }} />
            </Grid>
          </Grid>
          <Typography color="gray" variant="body2">
            © Gnosis Pay 2024. All Rights Reserved.
          </Typography>
          <Typography
            maxWidth={790}
            color="gray"
            textAlign="center"
            variant="body2"
          >
            Gnosis Pay is the trading name of Gnosis Pay Co Ltd, a UK registered
            Company (No. 14919639) <br />
            The Gnosis Pay Debit Card issued by Monavate Limited pursuant to
            licence by VISA Europe Limited. Monavate Limited is authorised and
            regulated by the Financial Conduct Authority as an Electronic Money
            Institution under the Electronic Money Regulations 2011 for the
            issuing of electronic money (FRN: 901097).
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default TheMainFooter;
