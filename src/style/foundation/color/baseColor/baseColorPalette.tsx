import { Theme } from "../color.type";
import { BaseColor } from "./baseColor.type";

export type BaseColorPalette = Readonly<Record<BaseColor, string>>;

const lightBaseColorPalette: BaseColorPalette = {
    // Base Logo Color
    logoIndigo: "#4E5986",
    logoViolet: "#8969AC",
    logoYellow: "#FDD655",

    // Base Point Color
    pointColor050: "#EBE6F8",
    pointColor100: "#CBC1F6",
    pointColor200: "#B2A4EF",
    pointColor300: "#A797F0",
    pointColor400: "#816DEC",
    pointColor500: "#5D4DE8",
    pointColor600: "#3230DC",
    pointColor700: "#1B2CD6",
    pointColor800: "#0025CD",
    pointColor900: "#0025C5",

    // Base Warning Red Color
    warningRed050: "#FFECEF",
    warningRed100: "#FFCED4",
    warningRed200: "#F99C9D",
    warningRed300: "#F37476",
    warningRed400: "#FF5252",
    warningRed500: "#FF3E36",
    warningRed600: "#F73536",
    warningRed700: "#E42930",
    warningRed800: "#D72028",
    warningRed900: "#C8111C",

    // Base White And Black Color
    white000: "#ffffff",
    black000: "#101112",
    realBlack: "#000000",

    // Base Gray Color
    gray050: "#F8F9FA",
    gray100: "#F3F5F7",
    gray200: "#ECEEF0",
    gray300: "#E2E5E8",
    gray400: "#D4D8DC",
    gray500: "#B5B9BD",
    gray600: "#8E9398",
    gray700: "#505458",
    gray800: "#3A3D40",
    gray900: "#252729",

    // Base WB Alpha Color
    white000A05: "", // TODO: Light 환경에서 지정된 색이 없음
    white000A10: "rgba(255, 255, 255, 0.1)",
    white000A30: "rgba(255, 255, 255, 0.3)",
    white000A70: "rgba(255, 255, 255, 0.7)",
    black000A05: "", // TODO: Light 환경에서 지정된 색이 없음
    black000A10: "rgba(16, 17, 18, 0.1)",
    gray000A30: "rgba(16, 17, 18, 0.3)",
    gray000A70: "rgba(16, 17, 18, 0.7)",

    // Base Pink Color
    pink050: "#FDE6F4",
    pink100: "#FBC1E5",
    pink200: "#FC98D3",
    pink300: "#FF6CBF",
    pink400: "#FF47AD",
    pink500: "#FF1F99",
    pink600: "#F21F93",
    pink700: "#DA1F8B",
    pink800: "#C31F85",

    // Base Red Color
    red050: "#FFEBEE",
    red100: "#FFCDD2",
    red200: "#EF9A9A",
    red300: "#E57373",
    red400: "#EF5350",
    red500: "#F44236",
    red600: "#E53835",
    red700: "#D32E2F",
    red800: "#C62728",

    // Base Orange Color
    orange050: "#FFF1E4",
    orange100: "#FFDBBC",
    orange200: "#FFC492",
    orange300: "#FFAC6C",
    orange400: "#FD9A55",
    orange500: "#FC8A46",
    orange600: "#F67F44",
    orange700: "#EE7141",
    orange800: "#E6623E",

    // Base Yellow Color
    yellow050: "#FFF8DC",
    yellow100: "#FFF0AB",
    yellow200: "#FFE672",
    yellow300: "#FFDC3A",
    yellow400: "#FFD200",
    yellow500: "#FBC000",
    yellow600: "#F6B000",
    yellow700: "#E1A714",
    yellow800: "#CC9200",

    // Base Lime Color
    lime050: "#F9FBE7",
    lime100: "#F0F4C3",
    lime200: "#E5EE9C",
    lime300: "#DBE775",
    lime400: "#D3E157",
    lime500: "#CCDC39",
    lime600: "#BFCA33",
    lime700: "#AEB42B",
    lime800: "#9D9D24",

    // Base Green Color
    green050: "#E5F9EE",
    green100: "#BFF0D5",
    green200: "#93E7BB",
    green300: "#5BDE9F",
    green400: "#0BD588",
    green500: "#00CC74",
    green600: "#00BB68",
    green700: "#00A85B",
    green800: "#00964F",

    // Base Emerald Color
    emerald050: "#E0F8F7",
    emerald100: "#B3ECEA",
    emerald200: "#82E0DF",
    emerald300: "#51D2D4",
    emerald400: "#2BC9CC",
    emerald500: "#00BFC7",
    emerald600: "#00AFB5",
    emerald700: "#069A9C",
    emerald800: "#088585",

    // Base Aqua Color
    aqua050: "#E0F4FD",
    aqua100: "#B2E3FA",
    aqua200: "#7FD0F7",
    aqua300: "#4CBEF3",
    aqua400: "#26B0F1",
    aqua500: "#00A2EE",
    aqua600: "#0095DF",
    aqua700: "#0182CB",
    aqua800: "#0171B7",

    // Base Blue Color
    blue050: "#E4F1FA",
    blue100: "#BEDCF3",
    blue200: "#98C6EC",
    blue300: "#74B0E2",
    blue400: "#489AE7",
    blue500: "#4B90D7",
    blue600: "#4582CA",
    blue700: "#3C71B8",
    blue800: "#3661A5",

    // Base Indigo Color
    indigo050: "#E8EAF6",
    indigo100: "#C5CAE9",
    indigo200: "#9FA8DA",
    indigo300: "#7986CB",
    indigo400: "#5C6CC0",
    indigo500: "#3F52B5",
    indigo600: "#394AAB",
    indigo700: "#2F409F",
    indigo800: "#273693",

    // Base Violet Color
    violet050: "#EDE7F6",
    violet100: "#D1C4E9",
    violet200: "#B39DDB",
    violet300: "#9575CD",
    violet400: "#7E57C2",
    violet500: "#673AB7",
    violet600: "#5E35B1",
    violet700: "#512DA8",
    violet800: "#4527A0",

    // Base Purple Color
    purple050: "#F2E5F5",
    purple100: "#DFBFE7",
    purple200: "#CA95D8",
    purple300: "#B56CC8",
    purple400: "#A54DBB",
    purple500: "#9632AF",
    purple600: "#882EA9",
    purple700: "#7629A0",
    purple800: "#652597",

    // Base Magenta Color
    brown050: "#EFEBE9",
    brown100: "#D7CCC8",
    brown200: "#BCAAA4",
    brown300: "#A1887F",
    brown400: "#8D6E63",
    brown500: "#795548",
    brown600: "#6D4C41",
    brown700: "#5D4037",
    brown800: "#4E342E",
} as const;

const darkBaseColorPalette: BaseColorPalette = {
    // Base Logo Color
    logoIndigo: "#4E5986",
    logoViolet: "#8969AC",
    logoYellow: "#FDD655",

    // Base Point Color
    pointColor050: "#27233E",
    pointColor100: "#433A74",
    pointColor200: "#544895",
    pointColor300: "#6556B5",
    pointColor400: "#816DEC",
    pointColor500: "#9380E8",
    pointColor600: "#A797F0",
    pointColor700: "#B2A4EF",
    pointColor800: "#CBC1F6",
    pointColor900: "#EBE6FB",

    // Base Warning Red Color
    warningRed050: "#401E1F",
    warningRed100: "#5F2627",
    warningRed200: "#5F2627",
    warningRed300: "#A93B3B",
    warningRed400: "#C74445",
    warningRed500: "#FF5E5E",
    warningRed600: "#F37476",
    warningRed700: "#F99C9D",
    warningRed800: "#FFCED4",
    warningRed900: "#FFECEF",

    // Base White And Black Color
    white000: "#ffffff",
    black000: "#101112",
    realBlack: "#000000",

    // Base Gray Color
    gray050: "#1A1B1C",
    gray100: "#1D1E1F",
    gray200: "#120212",
    gray300: "#2A2B2C",
    gray400: "#373839",
    gray500: "#5D5E5F",
    gray600: "#848586",
    gray700: "#BEBFC0",
    gray800: "#E1E2E3",
    gray900: "#F8F9FA",

    // Base WB Alpha Color
    white000A05: "#ffffff0d",
    white000A10: "#ffffff1a",
    white000A30: "#ffffff4d",
    white000A70: "#ffffffb3",
    black000A05: "#1011120d",
    black000A10: "#1011121a",
    gray000A30: "#1011124d",
    gray000A70: "#101112b3",

    // Base Pink Color
    pink050: "#FDE6F4",
    pink100: "#FBC1E5",
    pink200: "#FC98D3",
    pink300: "#FF6CBF",
    pink400: "#FF47AD",
    pink500: "#FF1F99",
    pink600: "#F21F93",
    pink700: "#DA1F8B",
    pink800: "#C31F85",

    // Base Red Color
    red050: "#FFEBEE",
    red100: "#FFCDD2",
    red200: "#EF9A9A",
    red300: "#E57373",
    red400: "#EF5350",
    red500: "#F44236",
    red600: "#E53835",
    red700: "#D32E2F",
    red800: "#C62728",

    // Base Orange Color
    orange050: "#FFF1E4",
    orange100: "#FFDBBC",
    orange200: "#FFC492",
    orange300: "#FFAC6C",
    orange400: "#FD9A55",
    orange500: "#FC8A46",
    orange600: "#F67F44",
    orange700: "#EE7141",
    orange800: "#E6623E",

    // Base Yellow Color
    yellow050: "#FFF8DC",
    yellow100: "#FFF0AB",
    yellow200: "#FFE672",
    yellow300: "#FFDC3A",
    yellow400: "#FFD200",
    yellow500: "#FBC000",
    yellow600: "#F6B000",
    yellow700: "#E1A714",
    yellow800: "#CC9200",

    // Base Lime Color
    lime050: "#F9FBE7",
    lime100: "#F0F4C3",
    lime200: "#E5EE9C",
    lime300: "#DBE775",
    lime400: "#D3E157",
    lime500: "#CCDC39",
    lime600: "#BFCA33",
    lime700: "#AEB42B",
    lime800: "#9D9D24",

    // Base Green Color
    green050: "#E5F9EE",
    green100: "#BFF0D5",
    green200: "#93E7BB",
    green300: "#5BDE9F",
    green400: "#0BD588",
    green500: "#00CC74",
    green600: "#00BB68",
    green700: "#00A85B",
    green800: "#00964F",

    // Base Emerald Color
    emerald050: "#E0F8F7",
    emerald100: "#B3ECEA",
    emerald200: "#82E0DF",
    emerald300: "#51D2D4",
    emerald400: "#2BC9CC",
    emerald500: "#00BFC7",
    emerald600: "#00AFB5",
    emerald700: "#069A9C",
    emerald800: "#088585",

    // Base Aqua Color
    aqua050: "#E0F4FD",
    aqua100: "#B2E3FA",
    aqua200: "#7FD0F7",
    aqua300: "#4CBEF3",
    aqua400: "#26B0F1",
    aqua500: "#00A2EE",
    aqua600: "#0095DF",
    aqua700: "#0182CB",
    aqua800: "#0171B7",

    // Base Blue Color
    blue050: "#E4F1FA",
    blue100: "#BEDCF3",
    blue200: "#98C6EC",
    blue300: "#74B0E2",
    blue400: "#489AE7",
    blue500: "#4B90D7",
    blue600: "#4582CA",
    blue700: "#3C71B8",
    blue800: "#3661A5",

    // Base Indigo Color
    indigo050: "#E8EAF6",
    indigo100: "#C5CAE9",
    indigo200: "#9FA8DA",
    indigo300: "#7986CB",
    indigo400: "#5C6CC0",
    indigo500: "#3F52B5",
    indigo600: "#394AAB",
    indigo700: "#2F409F",
    indigo800: "#273693",

    // Base Violet Color
    violet050: "#EDE7F6",
    violet100: "#D1C4E9",
    violet200: "#B39DDB",
    violet300: "#9575CD",
    violet400: "#7E57C2",
    violet500: "#673AB7",
    violet600: "#5E35B1",
    violet700: "#512DA8",
    violet800: "#4527A0",

    // Base Purple Color
    purple050: "#F2E5F5",
    purple100: "#DFBFE7",
    purple200: "#CA95D8",
    purple300: "#B56CC8",
    purple400: "#A54DBB",
    purple500: "#9632AF",
    purple600: "#882EA9",
    purple700: "#7629A0",
    purple800: "#652597",

    // Base Magenta Color
    brown050: "#EFEBE9",
    brown100: "#D7CCC8",
    brown200: "#BCAAA4",
    brown300: "#A1887F",
    brown400: "#8D6E63",
    brown500: "#795548",
    brown600: "#6D4C41",
    brown700: "#5D4037",
    brown800: "#4E342E",
} as const;

export const baseColorPalettes: Record<Theme, BaseColorPalette> = {
    light: lightBaseColorPalette,
    dark: darkBaseColorPalette,
};
