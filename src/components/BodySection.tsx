import { Box, Button, Container, Typography } from "@mui/material";
import WrapperContainer from "./WrapperContainer";
import Image from "next/image";
import CreditCardBalanceImage from "@/assets/images/credit-card-balance.webp";
import CreditCardETHImage from "@/assets/images/credit-card-eth.webp";
import LockerImage from "@/assets/images/locker.webp";
import NFTImage from "@/assets/images/nft.webp";
const BodySection: React.FC = () => {
  return (
    <WrapperContainer
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: `calc(100vh - 84px)`,
        backgroundColor: "background.custom.secondary",
      }}
    >
      <Container
        sx={{
          maxWidth: "1200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: {
            xs: "wrap",
            md: "nowrap",
          },
        }}
      >
        <Box
          component={Image}
          src={CreditCardBalanceImage}
          width={550}
          height={600}
          alt="Visa Card image 2"
          sx={{
            width: {
              xs: "350px",
              md: "550px",
            },
            height: {
              xs: "380px",
              md: "600px",
            },
          }}
        ></Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
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
                fontSize: {
                  xs: "2rem",
                  md: "3rem",
                },
                textAlign: {
                  xs: "center",
                  md: "start",
                },
                maxWidth: {
                  xs: "unset",
                  md: "390px",
                },
              }}
            >
              Pay what you see. Zero fees.
            </Typography>
            <Typography variant="subtitle1">
              Pay directly from your blockchain address. Anywhere. No
              transaction fees, no foreign exchange fees, no off ramping fees.*
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
              *Powered by Monerium
            </Typography>
            <Button
              color="secondary"
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
          </Box>
        </Box>
      </Container>
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
            justifyContent: "center",

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
                fontSize: {
                  xs: "2rem",
                  md: "3rem",
                },
                textAlign: {
                  xs: "center",
                  md: "start",
                },
                maxWidth: {
                  xs: "unset",
                  md: "390px",
                },
              }}
            >
              Your ENS name. Now on your card.
            </Typography>
            <Typography variant="subtitle1">
              Customize your card with an ENS name and bring your Web3 identity
              to life.
            </Typography>

            <Button
              color="secondary"
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
          </Box>
        </Box>
        <Box
          component={Image}
          src={CreditCardETHImage}
          width={550}
          height={600}
          alt="Visa Card image 3"
          sx={{
            width: {
              xs: "350px",
              md: "550px",
            },
            height: {
              xs: "380px",
              md: "600px",
            },
          }}
        ></Box>
      </Container>

      <Container
        sx={{
          maxWidth: "1200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: {
            xs: "wrap",
            md: "nowrap",
          },
        }}
      >
        <Box
          component={Image}
          src={LockerImage}
          width={550}
          height={600}
          alt="Locker Image"
          sx={{
            width: {
              xs: "350px",
              md: "550px",
            },
            height: {
              xs: "380px",
              md: "600px",
            },
          }}
        ></Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
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
              Your keys, your assets.
            </Typography>
            <Typography variant="subtitle1">
              Your assets are stored in a Safe wallet, that you OWN. We never
              touch the assets at any point. The highest security standards in
              the industry.
            </Typography>

            <Button
              color="secondary"
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
          </Box>
        </Box>
      </Container>
      <Container
        sx={{
          marginBottom: 4,
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
            justifyContent: "center",

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
              The OG NFT.
            </Typography>
            <Typography variant="subtitle1">
              For our early adopters. Holders of the OG NFT are given early
              access to new features, IRL experiences and perks with our
              partners.
            </Typography>
            <Typography variant="subtitle1">
              Minting is closed for now. Follow us on X where we will announce
              exclusive releases in the future.
            </Typography>

            <Button
              color="secondary"
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
          </Box>
        </Box>
        <Box
          component={Image}
          src={NFTImage}
          width={550}
          height={600}
          alt="NFT Image"
          sx={{
            width: {
              xs: "350px",
              md: "550px",
            },
            height: {
              xs: "380px",
              md: "600px",
            },
          }}
        ></Box>
      </Container>
    </WrapperContainer>
  );
};

export default BodySection;
