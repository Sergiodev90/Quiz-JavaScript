const path = require('path');

module.exports = {
  entry: './app.js', // Archivo de entrada
  output: {
    filename: 'bundle.js', // Archivo de salida
    path: path.resolve(__dirname, 'dist') // Carpeta de salida
  },
  mode: 'development' // o 'production' para producción
};
