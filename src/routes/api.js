const express = require('express');
const router = express.Router();
const os = require('os');
const pokeneas = require('../data/pokeneas');

router.get('/api/pokenea', (req, res) => {
  const aleatorio = pokeneas[Math.floor(Math.random() * pokeneas.length)];
  const containerId = os.hostname();

  res.json({
    id: aleatorio.id,
    nombre: aleatorio.nombre,
    altura: aleatorio.altura,
    habilidad: aleatorio.habilidad,
    contenedor: containerId
  });
});

module.exports = router;