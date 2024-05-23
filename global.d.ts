// declare type for custom mui theme
import { TypeBackground } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    gray?: string;
  }
}
