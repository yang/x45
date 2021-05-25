
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['jbeEFPerbj9gwHE523E3j3'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  