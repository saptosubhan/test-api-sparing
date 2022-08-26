const express = require("express");
// const bodyParser = require('body-parser');
const winston = require('winston');
const moment = require('moment');
// const cors = require('cors');
const compression = require('compression');


const app = express();
const route = express.Router();
const port = 8080;

// app.use(
//   cors({
//     credentials: true,
//     origin: true,
//   }),
// );
// app.use(
//   bodyParser.json({
//     strict: false,
//     limit: '2mb',
//   }),
// );
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//     limit: '5mb',
//   }),
// );
app.use(compression());
app.use(express.json({ limit: '7mb' }));
app.use(
  express.urlencoded({
    limit: '7mb',
    extended: true,
    parameterLimit: 50000
  })
);
app.disable('x-powered-by');
app.use((req, res, next) => {
  // Website you wish to allow to connect
  // res.setHeader('Access-Control-Allow-Origin', 'http://some-accepted-origin');
  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  // Request headers you wish to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With, Content-type, Authorization, Cache-control, Pragma'
  );
  // Pass to next layer of middleware
  next();
});


app.use('/', route);

route.post('/postdata', (req, res) => {
  res.status(200).send({ message: "success POST !", data: req.body || req  });
});

route.get('/key', (req, res) => {
  const data = req.query || req.params || req
  res.status(200).send("dsafdsafdsa#@xzfdsfds");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});