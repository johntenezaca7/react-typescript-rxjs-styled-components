const size = {
  mobile: '320px',
  mobileL: "500px",
  tablet: '768px',
  desktop: '1024px',
};

const device = {
  mobile: `(min-width: ${size.mobile})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export { device }; 