
const express = require('express');
const router = express.Router();
const os = require('os');
const pokeneas = require('../data/pokeneas');

router.get('/pokenea', (req, res) => {
  const aleatorio = pokeneas[Math.floor(Math.random() * pokeneas.length)];
  const containerId = os.hostname();
  const habilidad = aleatorio.habilidades || aleatorio.habilidad;

  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pokenea: ${aleatorio.nombre}</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          font-family: sans-serif;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #1a1a2e;
          color: white;
          padding: 2rem;
        }

        .card {
          background: #16213e;
          border: 2px solid #0f3460;
          border-radius: 20px;
          padding: 2rem;
          max-width: 420px;
          width: 100%;
          text-align: center;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        }

        .nombre {
          font-size: 2rem;
          font-weight: bold;
          color: #e94560;
          margin-bottom: 1.5rem;
        }

        .imagen {
          width: 200px;
          height: 200px;
          object-fit: contain;
          border-radius: 12px;
          background: #0f3460;
          padding: 1rem;
          margin-bottom: 1.5rem;
        }

        .frase {
          font-size: 1.1rem;
          font-style: italic;
          color: #a8dadc;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          padding: 1rem;
          border-left: 3px solid #e94560;
          text-align: left;
        }

        .detalles {
          background: #0f3460;
          border-radius: 12px;
          padding: 1rem;
          margin-bottom: 1.5rem;
          text-align: left;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .container-id {
          font-size: 0.75rem;
          color: #555;
          background: #0f3460;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="nombre">${aleatorio.nombre}</div>
        <img class="imagen" src="${aleatorio.imagen}" alt="${aleatorio.nombre}"/>
        <p class="frase">"${aleatorio.frase}"</p>
        <div class="detalles">
          <p><strong>Altura:</strong> ${aleatorio.altura} m</p>
          <p><strong>Habilidad:</strong> ${habilidad}</p>
        </div>
        <span class="container-id"> Contenedor: ${containerId}</span>
      </div>
    </body>
    </html>
  `);
});

module.exports = router;