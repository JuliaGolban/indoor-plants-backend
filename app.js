const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const { errorHandler } = require('./helpers');
const {
  routerAuth,
  routerUser,
  routerEvent,
  routerUpdateEvent,
  routerOwner,
  routerMessage,
  routerAdmin,
  routerDevelopers,
} = require('./routes/api');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/auth', routerAuth);
app.use('/api/get_event', routerEvent);
app.use('/api/batch_event', routerUpdateEvent);
app.use('/api/owner', routerOwner);
app.use('/api/user', routerUser);
app.use('/api/services', routerServices);
app.use('/api/message', routerMessage);
app.use('/api/admin', routerAdmin);
app.use('/api/developers', routerDevelopers);

// app.use('/api/location', ctrl.location);

app.use((req, res) => {
  console.log('!!!!! APP (req, res) !!!!!!');
  res.status(404); // .json({ message: "Not found", data: null });
  res.json({ messages: 'ERRR JSONS' });
});

app.use(errorHandler);

module.exports = app;
