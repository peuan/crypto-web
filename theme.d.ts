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
      black: string;
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