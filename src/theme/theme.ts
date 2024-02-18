// Define an interface for spacing values
interface Spacing {
  // Space values for common spacing needs
  space_2: number;
  space_4: number;
  space_8: number;
  space_10: number;
  space_12: number;
  space_15: number;
  space_16: number;
  space_18: number;
  space_20: number;
  space_24: number;
  space_28: number;
  space_32: number;
  space_36: number;
}

// Initialize the SPACING object with the spacing values
export const SPACING: Spacing = {
  space_2: 2,
  space_4: 4,
  space_8: 8,
  space_10: 10,
  space_12: 12,
  space_15: 15,
  space_16: 16,
  space_18: 18,
  space_20: 20,
  space_24: 24,
  space_28: 28,
  space_32: 32,
  space_36: 36,
};

// Define an interface for color values
interface Color {
  // Color values for various UI elements
  Black: string;
  BlackRGB10: string;
  Orange: string;
  OrangeRGBA0: string;
  Grey: string;
  DarkGrey: string;
  Yellow: string;
  White: string;
  WhiteRGBA75: string;
  WhiteRGBA50: string;
  WhiteRGBA32: string;
  WhiteRGBA15: string;
}

// Initialize the COLORS object with the color values
export const COLORS: Color = {
  Black: '#000000', // Black color value
  BlackRGB10: 'rgba(0,0,0,0.1)', // Black with 10% opacity
  Orange: '#FF5524', // Orange color value
  OrangeRGBA0: 'rgba(255,85,36,0)', // Orange with 0% opacity (transparent)
  Grey: '#333333', // Grey color value
  DarkGrey: '#0b0b0b', // Dark grey color value
  Yellow: '#E1CD17', // Yellow color value
  White: '#FFFFFF', // White color value
  WhiteRGBA75: 'rgba(255,255,255,0.75)', // White with 75% opacity
  WhiteRGBA50: 'rgba(255,255,255,0.50)', // White with 50% opacity
  WhiteRGBA32: 'rgba(255,255,255,0.32)', // White with 32% opacity
  WhiteRGBA15: 'rgba(255,255,255,0.15)', // White with 15% opacity
};

// Define an interface for font family values
interface FontFamily {
  // Roboto font family with various weights and styles
  roboto_black: string;
  roboto_bold: string;
  roboto_italic: string;
  roboto_light: string;
  roboto_medium: string;
  roboto_regular: string;
  roboto_thin: string;
}

// Initialize the FONTFAMILY object with the font family values
export const FONTFAMILY: FontFamily = {
  roboto_black: 'Roboto-Black',
  roboto_bold: 'Roboto-Bold',
  roboto_italic: 'Roboto-Italic',
  roboto_light: 'Roboto-Light',
  roboto_medium: 'Roboto-Medium',
  roboto_regular: 'Roboto-Regular',
  roboto_thin: 'Roboto-Thin',
};

// Define an interface for font size values
interface FontSize {
  // Font size values for various UI elements
  size_8: number;
  size_10: number;
  size_12: number;
  size_14: number;
  size_16: number;
  size_18: number;
  size_20: number;
  size_24: number;
  size_30: number;
}

// Initialize the FONTSIZE object with the font size values
export const FONTSIZE: FontSize = {
  size_8: 8,
  size_10: 10,
  size_12: 12,
  size_14: 14,
  size_16: 16,
  size_18: 18,
  size_20: 20,
  size_24: 24,
  size_30: 30,
};

// Define an interface for border radius values
interface BorderRadius {
  // Border radius values for various UI elements
  radius_4: number;
  radius_8: number;
  radius_10: number;
  radius_15: number;
  radius_20: number;
  radius_25: number;
}

// Initialize the BORDERADIUS object with the border radius values
export const BORDERADIUS: BorderRadius = {
  radius_4: 4,
  radius_8: 8,
  radius_10: 10,
  radius_15: 15,
  radius_20: 20,
  radius_25: 25,
};
