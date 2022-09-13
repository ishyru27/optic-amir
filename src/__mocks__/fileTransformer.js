/*
    NO BORRAR

    IMPORTANCIA DEL ARCHIVO:
    - Cuando se importan archivos multimedia en un componente y se utiliza Jest para testear,
    los test fallan, ya que Jest intenta intrepetar el codigo binario de los archivos multimedia
    como archivo .js, lo cual provoca errores
    - La unica forma es mockear una respuesta default asi Jest ve el
      archivo multimedia como solo una importacion,
    lo cual es justamente lo q se hace a la hora de importarlo dentro de un componente

    se utiliza esta configuracion de Jest dentro del package.json
    "moduleNameMapper": {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
       "<rootDir>/src/__mocks__/fileMock.js"
    }

    si se busca evitar error de Eslint, se puede usar:
    - export default "";
*/

const path = require("path");

module.exports = {
    process(src, filename, config, options) {
        return (
            "module.exports = " + JSON.stringify(path.basename(filename)) + ";"
        );
    }
};
