const express = require ('express');
const app = express();
const saludoRoutes = require('./routes/saludoRoutes');

app.use(express.json());
app.use('/', saludoRoutes);

module.exports = app;