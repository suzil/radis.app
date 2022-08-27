import { Species } from "./components/types";

export interface CalcSpectrumResponseData {
  x: number[];
  y: number[];
  units: string;
}

export const palette = {
  primary: {
    light: "#6573c3",
    main: "#3f51b5",
    dark: "#2c387e",
    contrastText: "#fff",
  },
  secondary: {
    light: "#f73378",
    main: "#f50057",
    dark: "#ab003c",
    contrastText: "#000",
  },
};

export interface PlotData {
  species: Species[];
  min_wavenumber_range: number;
  max_wavenumber_range: number;
  mode: string;
}
