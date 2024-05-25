"use client";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import IBANImage from "@/assets/images/IBAN-coming-feature-icon.webp";
import PaymentImage from "@/assets/images/payment-coming-feature-icon.webp";
import RewardImage from "@/assets/images/reward-coming-feature-icon.webp";
import CountryImage from "@/assets/images/new-country-coming-feature-icon.webp";
import WrapperContainer from "./WrapperContainer";

const ComingSoonSection: React.FC = () => {
  return (
    <WrapperContainer
      sx={{
        backgroundColor: "secondary.main",
        padding: {
          xs: "80px 16px",
          md: "80px 0",
        },
      }}
    >
      <Container
        sx={{
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
          padding: 0,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "text.custom.lightGray",
            fontSize: {
              xs: "1.75rem",
              md: "2.5rem",
            },
            fontWeight: 400,
          }}
        >
          Coming soon
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr 1fr 1fr",
            },
            gridTemplateRows: {
              xs: "1fr 1fr 1fr 1fr",
              md: "1fr",
            },
            alignItems: "start",
            justifyContent: "space-between",
            gap: 3.75,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              padding: "24px",
            }}
          >
            <Image
              src={IBANImage}
              width={170}
              height={170}
              alt="IBAN coming feature icon"
            />
            <Typography
              variant="h5"
              sx={{
                color: "text.custom.lightGray",
                fontSize: "1.5rem",
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              IBAN Integration
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "text.custom.gray",
                fontSize: "1.25rem",
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              Transfer Euros to and from your account to any bank or wallet.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              padding: "24px",
            }}
          >
            <Image
              src={PaymentImage}
              width={170}
              height={170}
              alt="Payment coming feature icon"
            />
            <Typography
              variant="h5"
              sx={{
                color: "text.custom.lightGray",
                fontSize: "1.5rem",
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              Apple Pay & Google Pay
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "text.custom.gray",
                fontSize: "1.25rem",
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              Accessible via Curve today. Coming natively very soon.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              padding: "24px",
            }}
          >
            <Image
              src={RewardImage}
              width={170}
              height={170}
              alt="Reward coming feature icon"
            />
            <Typography
              variant="h5"
              sx={{
                color: "text.custom.lightGray",
                fontSize: "1.5rem",
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              Rewards & Partnerships
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "text.custom.gray",
                fontSize: "1.25rem",
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              New partnerships & perks for OG NFT holders as well as a rewards
              program for all cardholders.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              padding: "24px",
            }}
          >
            <Image
              src={CountryImage}
              width={170}
              height={170}
              alt="Country coming feature icon"
            />
            <Typography
              variant="h5"
              sx={{
                color: "text.custom.lightGray",
                fontSize: "1.5rem",
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              New Countries
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "text.custom.gray",
                fontSize: "1.25rem",
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              Brazil, Argentina, Mexico, Colombia, Australia, Thailand,
              Singapore, Japan, Indonesia.
            </Typography>
          </Box>
        </Box>
      </Container>
    </WrapperContainer>
  );
};

export default ComingSoonSection;
