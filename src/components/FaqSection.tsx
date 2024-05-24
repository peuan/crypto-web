"use client";
import { Box, Button, Typography, colors, styled } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";

import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  borderTop: 0,
  borderBottom: "1px solid rgba(0, 0, 0, .125)",
  width: "100%",
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ fontSize: "2rem" }} />}
    {...props}
  />
))(() => ({
  backgroundColor: "#fcf9f2",
  padding: "16px 0",
  border: 0,
  "& .MuiAccordionSummary-content": {
    margin: 0,
  },
  "&:has(.Mui-expanded)": {
    paddingBottom: 0,
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  backgroundColor: "#fcf9f2",
  padding: `${theme.spacing(2)} 0`,
  border: 0,
}));

const FaqSection: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        backgroundColor: "#fcf9f2",
        padding: "80px 24px",
        margin: {
          xs: "0 -16px",
          md: 0,
        },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "#0e0e07",
          fontSize: {
            xs: "1.75rem",
            md: "2.5rem",
          },
          fontWeight: 400,
        }}
      >
        FAQs
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#fcf9f2",
          maxWidth: "790px",
        }}
      >
        <Accordion>
          <AccordionSummary aria-controls="panel1-content" id="panel1-header">
            <Typography
              variant="h5"
              sx={{
                color: "#0e0e07",
                fontSize: "1.5rem",
                fontWeight: 400,
              }}
            >
              What is Gnosis Pay?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#6e6c62",
                fontWeight: 400,
              }}
            >
              Gnosis Pay is the world’s first on-chain spending account with a
              Visa® Debit Card linked to a self-custodial blockchain wallet.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel1-content" id="panel1-header">
            <Typography
              variant="h5"
              sx={{
                color: "#0e0e07",
                fontSize: "1.5rem",
                fontWeight: 400,
              }}
            >
              What can I do with the Gnosis Pay Card?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#6e6c62",
                fontWeight: 400,
              }}
            >
              You can use the card just like you use any other debit card. Top
              up your Gnosis Pay account with EURe and spend it at over 80+
              Million Visa merchants worldwide.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel1-content" id="panel1-header">
            <Typography
              variant="h5"
              sx={{
                color: "#0e0e07",
                fontSize: "1.5rem",
                fontWeight: 400,
              }}
            >
              Are there any perks/rewards if I order the card?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#6e6c62",
                fontWeight: 400,
              }}
            >
              All early adopters were whitelisted for the OG NFT which brings
              exclusive product and IRL experiences. Early users also get access
              to zero fees (no transaction fees, no foreign exchange fees, no
              off ramping fees).
            </Typography>
            <br />
            <Typography
              variant="subtitle1"
              sx={{
                color: "#6e6c62",
                fontWeight: 400,
              }}
            >
              A rewards program is also in the works ⏳
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel1-content" id="panel1-header">
            <Typography
              variant="h5"
              sx={{
                color: "#0e0e07",
                fontSize: "1.5rem",
                fontWeight: 400,
              }}
            >
              How do I order the Gnosis Pay Card?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#6e6c62",
                fontWeight: 400,
              }}
            >
              You will need to have EURe on Gnosis Chain to order the card. You
              can see the step by step process{" "}
              <Link
                href={"https://app.gnosispay.com/signup"}
                style={{ color: "#6e6c62" }}
              >
                here
              </Link>
              .
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel1-content" id="panel1-header">
            <Typography
              variant="h5"
              sx={{
                color: "#0e0e07",
                fontSize: "1.5rem",
                fontWeight: 400,
              }}
            >
              Who is eligible for the Gnosis Pay Card?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#6e6c62",
                fontWeight: 400,
              }}
            >
              Anyone above 18 years of age and resident in one of the{" "}
              <Link
                href={
                  "https://help.gnosispay.com/en/articles/8340445-gnosis-card-country-eligibility"
                }
                style={{ color: "#6e6c62" }}
              >
                eligible countries
              </Link>{" "}
              can purchase a Gnosis Pay Card pending a KYC Approval.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Typography
          variant="h5"
          sx={{
            color: "#0e0e07",
            fontSize: "1.5rem",
            fontWeight: 400,
            textAlign: "start",
            padding: "16px 0",
          }}
        >
          More questions? Contact us at{" "}
          <Link
            href={"https://help@gnosispay.com"}
            style={{ color: "#0e0e07" }}
          >
            help@gnosispay.com
          </Link>
        </Typography>
      </Box>

      <Button
        sx={{
          width: {
            xs: "100%",
            md: "200px",
          },
          height: "54px",
          fontSize: "1.25rem",
        }}
        variant="contained"
        color="secondary"
      >
        Visit help center
      </Button>
    </Box>
  );
};

export default FaqSection;
