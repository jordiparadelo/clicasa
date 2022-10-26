// Constants
import { testimonios } from "../../constants";

export default function handler(req, res) {
    res.status(200).json(testimonios)
  }