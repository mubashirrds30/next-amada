module.exports = {
  reactStrictMode: true,
  env: {
    REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
    NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
  },
  async redirects() {
    return [
      {
      source: '/about',
      destination: '/company-profile/introduction',
      permanent: true,
    },
      {
      source: '/services.php',
      destination: '/services/service-support',
      permanent: true,
    },
      {
      source: '/service-request',
      destination: '/contact/enquiry',
      permanent: true,
    },
      {
      source: '/technical-center.php',
      destination: '/technical-center/about',
      permanent: true,
    },
      {
      source: '/newsnevents',
      destination: '/news-events',
      permanent: true,
    },
      {
      source: '/contact',
      destination: '/contact/contact-us',
      permanent: true,
    },
      {
      source: '/bending-machine',
      destination: '/press-brakes',
      permanent: true,
    },
      {
      source: '/laser-machine-fiber',
      destination: '/laser-machines',
      permanent: true,
    },
      {
      source: '/laser-machine-co2',
      destination: '/laser-machines',
      permanent: true,
    },
      {
      source: '/EM-NT.php',
      destination: '/punching-machines/em-mii-series',
      permanent: true,
    },
      
      {
      source: '/punchingmachine_AE2510NT_AE255NT.php',
      destination: '/punching-machines/ae-nt-series',
      permanent: true,
    },
      {
      source: '/lasermachine_LCG3015.php',
      destination: '/laser-machines/lcg-3015-aj-ii',
      permanent: true,
    },
      {
      source: '/lasermachine_ensis.php',
      destination: '/laser-machines/ensis-aj-series',
      permanent: true,
    },
      {
      source: '/LCG3015AJII.php',
      destination: '/laser-machines/lcg-3015-aj-ii',
      permanent: true,
    },
      {
      source: '/lasermachine_LC1AJ.php',
      destination: '/combination-machines/lc-c1-aj-series',
      permanent: true,
    },
      {
      source: '/Ensis3015.php',
      destination: '/laser-machines/ensis-3015-ri',
      permanent: true,
    },
      {
      source: '/hg-atc-series.php',
      destination: '/press-brakes/hg-atc-series',
      permanent: true,
    },
      {
      source: '/hg-series.php',
      destination: '/press-brakes/hg-series',
      permanent: true,
    },
      {
      source: '/eg-series.php',
      destination: '/press-brakes/eg-series',
      permanent: true,
    },
      
      {
      source: '/HRB_series.php',
      destination: '/press-brakes/hrb-series',
      permanent: true,
    },
      
      
     
  ]}
};