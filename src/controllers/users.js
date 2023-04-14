// const conn = require("./../config/sqlServer")
const { handleHttpError } = require("../utils/handleError");

const getUsers = async (req, res) => {
  try {
    const data = { user: "Nombre del usuario" };
    res.json(data);
  } catch (e) {
    handleHttpError(res, e);
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = { id: id, user: "Nombre del usuario" };
    res.json(data);
  } catch (e) {
    handleHttpError(res, e);
  }
};

const postUser = async (req, res) => {
  try {
    const { name, age } = req.body;
    const data = { id: 12, user: name, age: age };
    res.json(data);
  } catch (e) {
    handleHttpError(res, e);
  }
};

export { getUsers, getUser, postUser };
