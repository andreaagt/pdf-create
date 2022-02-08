const puppeteer = require('puppeteer');

async function crearFactura(url) {

  // Abrir el navegador
  let navegador = await puppeteer.launch();

  // Crear una nueva pestaña
  let pestana = await navegador.newPage();

  // Ir a la url
  await pestana.goto(url);

  // Crear un pdf
  let pdf = await pestana.pdf();

  // Cerrar el navegador
  navegador.close();
  
  return pdf;
}

module.exports = {

  factura(req, res) {
    res.render('pdfs/factura', { layout: "pdf" });
  },

  async descargar(req, res) {

    // Crear nuestra factura
    let pdf = await crearFactura("http://localhost:3000/factura");

    // Devolver el response como PDF
    res.contentType('application/pdf');
    res.send(pdf);
  }


}