import { check } from "express-validator";
import validateResults from "./../utils/handleValidator";

const validatorUsers = [
  check("name").exists().notEmpty(),
  check("age").exists().notEmpty().isNumeric(),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];

export default validateResults;
