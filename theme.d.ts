// theme.d.ts
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypeBackground {
    gray: string;
    custom: {
      primary: string;
      secondary: string;
    }
  }

  interface TypeText {
    secondary: string;
    custom: {
      gray: string;
      lightGray: string;
      black: string;
      white: string;
    }
  }

  interface Palette {
    background: TypeBackground;
    text: TypeText;
  }

  interface PaletteOptions {
    background?: Partial<TypeBackground>;
  }
}