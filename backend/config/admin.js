module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '194d8cc99088467aee0d2b9cea75760c'),
  },
});
