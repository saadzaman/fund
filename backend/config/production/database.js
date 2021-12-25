// const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });


module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: 'ec2-3-217-216-13.compute-1.amazonaws.com',
      port: 5432,
      database: 'ddgbhkaju2jfoe',
      user: 'uksfxkaztyoeon',
      password: '33941ec48928e52fa13d230d39bb1a88753640d034145206463c2971bc7bed50',
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});
 