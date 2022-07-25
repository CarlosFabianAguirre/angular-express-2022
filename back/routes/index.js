var express = require('express');
var router = express.Router();

// Importamos nuestra api
const api = require('../api');

/* GET home page. */
router.get('/libros', async (req, res) => {
  const libros = await api.getBooks();
  res.send(libros);
});

router.get('/libro/:id', async (req, res) => {
  // Le enviamos como parámetro el ID del libro que quiere ver el usuario
  const libro = await api.getBookById(req.params.id);
  res.send(libro);
});

// Mostrar el listado en JSON de todos los autores
router.get('/autores', async (req, res) => {
  const autores = await api.getAuthors();
  res.send(autores);
});

/* POST agregar-libro */
router.post('/agregar-libro', async (req, res) => {
  let {titulo, autor, precio} = req.body;

  // titulo, precio, portada, autorId
  await api.insertBook(titulo, precio, '', autor);

  res.status(200).send('ok');
});
/*busca  get buscar localhost:3000/api/buscar?termino=sdfasd
levantamos aca en este backend lo que tipe el usuario el termino*/
router.get("/buscar",async (req,res)=>{
const{ termino } = req.query;
const results = await api.findBookByTitle(termino); /* guardamos el resultado de lo que tipea el usuario en result para que lo muestre en el log */
res.send(results);
});

module.exports = router;
