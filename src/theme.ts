const deviceSizes = {
  mobile: '47.9375rem',
  tablet: '63.125rem',
  laptop: '120rem',
};

const theme = {
  mobile: `(min-width: 20rem) and (max-width: ${deviceSizes.mobile})`,
  tablet: `(min-width: 48rem) and (max-width: ${deviceSizes.tablet})`,
  laptop: `(min-width: 63.1875rem) and (max-width: ${deviceSizes.laptop})`,
};

export default theme;
