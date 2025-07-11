import { body } from "express-validator";
const validateEmissionInput = () => [
  body("electricity")
    .optional()
    .isNumeric()
    .withMessage("Electricity must be a number"),

  body("water").optional().isNumeric().withMessage("Water must be a number"),

  body("transport")
    .optional()
    .isNumeric()
    .withMessage("Transport must be a number"),

  body("food").optional().isNumeric().withMessage("Food must be a number"),

  body("LPG").optional().isNumeric().withMessage("LPG must be a number"),
];
export default validateEmissionInput;
