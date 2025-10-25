import { model } from "mongoose";

import {SchemaPosition}  from "../schemas/PositionSchema.js";
export const Position = new model("Position", SchemaPosition);
