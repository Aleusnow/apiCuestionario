const Router = require("express-promise-router");
const router = new Router();

const {
  getEvento,
  getPeople,
  getPrefe,
  postEvento,
  postPeople,
  postPrefe,
  getMaxEvento,
  getMaxPeople
} = require("../controlador/sql");


//Ruta 

router.get("/people/", getPeople);
router.get("/logistica/", getEvento);
router.get("/preferencia/", getPrefe);
router.post("/people/", postPeople);
router.post("/logistica/", postEvento);
router.post("/preferencia/", postPrefe);
router.get("/maxpeople/", getMaxPeople);
router.get("/maxlogistica/", getMaxEvento);


module.exports = router;
