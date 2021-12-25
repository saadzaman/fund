module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '23b49b73245ac3b7093c0978b47bc4b8'),
  },
});
