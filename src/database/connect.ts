import { Application } from "express";
import db from "./config"
import { PORT } from "../utils/constants";
import { associate } from "./associate";


export const connectDB = async (app: Application)=> {

    try {
        associate();
        await db.sync({force: false});
        console.log('Connect to db');
        
        app.listen(PORT, () => console.info(`Listening on port: ${PORT}`))

    } catch (error) {
        console.log(error)
    }
}