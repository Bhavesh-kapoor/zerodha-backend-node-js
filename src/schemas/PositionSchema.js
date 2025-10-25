import { Schema } from "mongoose";

export const SchemaPosition = new Schema({
  instrument: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  avg: {
    type: Number,       
    required: true,
  },
  ltp: {        
    type: Number,
    required: true,
  },
  curValue: {
    type: Number,
    required: true, 
  },
  pnl: {  
    type: String,
    required: true,  
  },
  netChg:{
    type: String,
    required: true,
  },
  dayChg:{
     type: String,
    required: true,
  },
});
 
