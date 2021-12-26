const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});

// const parse = require('pg-connection-string').parse;
// const config = parse('postgres://uksfxkaztyoeon:33941ec48928e52fa13d230d39bb1a88753640d034145206463c2971bc7bed50@ec2-3-217-216-13.compute-1.amazonaws.com:5432/ddgbhkaju2jfoe');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: config.host,
//       port: config.port,
//       database: config.database,
//       user: config.user,
//       password: config.password,
//       ssl: {
//         rejectUnauthorized: false
//       },
//     },
//     debug: false,
//   },
// });
 