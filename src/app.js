const express = require('express');
const app = express();

const viewRoutes = require('./routes/view');
const apiRoutes = require('./routes/api');

app.use('/', viewRoutes);
app.use('/', apiRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
