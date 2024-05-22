"use client"
import { Box, Button, Typography } from "@mui/material"
import Image from "next/image"
import CreditCardImage from "../assets/images/credit-card.webp"
import CoinDeskLogo from "../assets/images/CoinDesk-Logo.png"
const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "secondary.main",
        flexWrap: {
          xs: "wrap-reverse",
          md: "nowrap",
        },

        minHeight: `calc(100vh - 116px)`,
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: `calc(100vh - 116px)`,
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
              color: "#ffffff",
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
            }}
          >
            Meet the Gnosis Pay Card.
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#ffffff" }}>
            The world&apos;s first self-custodial Visa® Debit Card, linked to a
            Safe Smart Account. Spend your crypto like you spend cash with 80
            million merchants worldwide.
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
          <Typography variant="subtitle1" sx={{ color: "#ffffff" }}>
            €30.23. Zero fees.
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            sx={{
              color: "text.secondary",
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
    </Box>
  )
}

export default HeroSection