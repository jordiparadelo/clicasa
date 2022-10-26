// Constants
import { proceso } from "../../constants";

export default function handler(req, res) {
    res.status(200).json(proceso)
  }