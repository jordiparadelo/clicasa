// Constants
import { ventajas } from "../../constants";

export default function handler(req, res) {
    res.status(200).json(ventajas)
  }