"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import CreditCardImage from "@/assets/images/credit-card.webp";
import CoinDeskLogo from "@/assets/images/coin-desk-logo.png";
import WrapperContainer from "./WrapperContainer";

const HeroSection: React.FC = () => {
  return (
    <WrapperContainer
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "secondary.main",
        minHeight: `calc(100vh - 84px)`,
      }}
    >
      <Container
        sx={{
          maxWidth: "1200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: {
            xs: "wrap-reverse",
            md: "nowrap",
          },
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 10,
            minHeight: {
              xs: "unset",
              md: `calc(100vh - 84px)`,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              marginTop: {
                xs: 0,
                md: 8,
              },
              alignItems: {
                xs: "center",
                md: "flex-start",
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "text.custom.white",
                fontSize: {
                  xs: "2rem",
                  md: "3rem",
                },
                textAlign: {
                  xs: "center",
                  md: "start",
                },
              }}
            >
              Meet the Gnosis Pay Card.
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "text.custom.white" }}>
              The world&apos;s first self-custodial Visa® Debit Card, linked to
              a Safe Smart Account. Spend your crypto like you spend cash with
              80 million merchants worldwide.
            </Typography>
            <Button
              sx={{
                width: {
                  xs: "100%",
                  md: "200px",
                },
                height: "54px",
                fontSize: "1rem",
              }}
              variant="contained"
            >
              Get my card
            </Button>
            <Typography variant="subtitle1" sx={{ color: "text.custom.gray" }}>
              €30.23. Zero fees.
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="subtitle2"
              sx={{
                color: "text.secondary",
                textAlign: {
                  xs: "center",
                  md: "start",
                },
              }}
            >
              Featured in
            </Typography>
            <Image
              src={CoinDeskLogo}
              width={120}
              height={60}
              alt="CoinDesk"
            ></Image>
          </Box>
        </Box>

        <Box
          component={Image}
          src={CreditCardImage}
          width={600}
          height={650}
          alt="Visa Card"
          sx={{
            width: {
              xs: "350px",
              md: "600px",
            },
            height: {
              xs: "380px",
              md: "650px",
            },
          }}
        ></Box>
      </Container>
    </WrapperContainer>
  );
};

export default HeroSection;
