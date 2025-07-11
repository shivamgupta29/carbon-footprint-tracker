import express from "express";
const router = express.Router();
import verifyToken from "../middleware/verifyToken.js";
import validateRequest from "../middleware/validateRequest.js";
import validateEmissionInput from "../validators/emissionValidator.js";
import {
  addEmissionData,
  getEmissionData,
  getEmissionSummary,
  getEmissionByDate,
} from "../controllers/emissionController.js";

//GET /api/emission
router.get("/", verifyToken, getEmissionData);
//GET /api/emission/daily/:date
router.get("/daily/:date", verifyToken, getEmissionByDate);
//GET /api/emission/summary
router.get("/summary", verifyToken, getEmissionSummary);
//POST /api/emission
router.post(
  "/",
  verifyToken,
  validateEmissionInput, //Validate field
  validateRequest, //Return any errors
  addEmissionData //after checking all we add the data
);
export default router;
