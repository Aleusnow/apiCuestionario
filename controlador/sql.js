const pool = require("./conexion");

const getEvento = async (req, res) => {
  try {
    const cliente = await pool.connect();
    const response = await cliente.query(
      `select * from evento`
    );
    res.send(response.rows);
    cliente.release();
  } catch (e) {
    console.error(e);
  }
};

const getPeople = async (req, res) => {
  try {
    const cliente = await pool.connect();
    const response = await cliente.query(
      `select * from persona`
    );
    res.send(response.rows);
    cliente.release();
  } catch (e) {
    console.error(e);
  }
};

const getPrefe = async (req, res) => {
  try {
    const cliente = await pool.connect();
    const response = await cliente.query(
      `select * from preferencias`
    );
    res.send(response.rows);
    cliente.release();
  } catch (e) {
    console.error(e);
  }
};

const getMaxPeople = async (req, res) => {
  try {
    const cliente = await pool.connect();
    const response = await cliente.query(
      `select max(id_persona) from persona`
    );
    res.send(response.rows[0]);
    cliente.release();
  } catch (e) {
    console.error(e);
  }
};

const getMaxEvento = async (req, res) => {
  try {
    const cliente = await pool.connect();
    const response = await cliente.query(
      `select max(id_evento) from evento`
    );
    res.send(response.rows[0]);
    cliente.release();
  } catch (e) {
    console.error(e);
  }
};



//POST
const postEvento = async (req, res) => {
  try {
    const cliente = await pool.connect();
    const{
      id_evento,
      tipo_evento,
      evento_deportivo,
      evento_artistico,
      evento_exterior
    } = req.body;
    const response = await cliente.query(
      `INSERT INTO evento (id_evento,tipo_evento, evento_deportivo, evento_artistico, evento_exterior)
       VALUES($1, $2, $3, $4, $5)`,
       [id_evento,
        tipo_evento,
        evento_deportivo,
        evento_artistico,
        evento_exterior]
    );
    res.send(response.rows);
    cliente.release();
  } catch (e) {
    console.error(e);
  }
};

const postPeople = async (req, res) => {
  try {
    const cliente = await pool.connect();
    const{
      id_persona,
      nombre,
      edad,
      sexo,
      comuna,
      ocupacion,
      medio_transporte,
      email
    } = req.body;
    const response = await cliente.query(
      `INSERT INTO persona (id_persona, nombre, edad, sexo, comuna, ocupacion, medio_transporte, email)
       VALUES($1, $2, $3, $4, $5, $6, $7, $8)`,
       [id_persona,
        nombre,
        edad,
        sexo,
        comuna,
        ocupacion,
        medio_transporte,
        email]
    );
    res.send(response.rows);
    cliente.release();
  } catch (e) {
    console.error(e);
  }
};

const postPrefe = async (req, res) => {
  try {
    const cliente = await pool.connect();

    const{
      
      id_persona,
      id_evento,
      tipo_participacion,
      genero_musica,
      presupuesto,
      horario,
      licor,
      marca_comida
    } = req.body;
    const response = await cliente.query(
      `INSERT INTO preferencias (id_persona, id_evento, tipo_participacion, genero_musica, presupuesto, 
        horario, licor, marca_comida)
       VALUES($1, $2, $3, $4, $5, $6, $7, $8)`,
       [id_persona,
        id_evento,
        tipo_participacion,
        genero_musica,
        presupuesto,
        horario,
        licor,
        marca_comida]
    );
    res.send(response.rows);
    cliente.release();
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  getEvento,
  getPeople,
  getPrefe,
  postEvento,
  postPeople,
  postPrefe,
  getMaxEvento,
  getMaxPeople
};