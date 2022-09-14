import { configureStore } from "@reduxjs/toolkit";
import masterName from "./slices/masterName.slice"

export default configureStore({
   reducer: {
    masterName
   }
}) 

