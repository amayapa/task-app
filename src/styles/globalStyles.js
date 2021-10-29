const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
}

const devices = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
}

const colors = {
  bgPrimary: "#b9d9f5",
  bgSecondary: "#74ACDF",
  text: "#333333",
  borderColor: "#c3c3c3",
  shadows: "2px 2px 1px #3c3c3c",
  disabledShadow: "2px 2px 2px #",
  hover: "#",
  disable: "#",
  icons: "#",
}

export { devices, colors }
