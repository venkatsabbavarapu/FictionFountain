import express from "express";
import mongoose from "mongoose";

import { PORT, mongoDBURL } from "./config.js";
import  booksRoute from "./routes/bookRoutes.js"
import cors from "cors";

const app=express();
app.use(cors());
// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: ['GET','PUT','POST','DELETE'],
//     headers: ['Content-Type'],
// }));
app.get('/', (request,response) => {
    console.log(request)
    return response.status(234).send("Welcome to MERN Stack")
});

app.use('/books', booksRoute);
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App is connected to the database");
        app.listen(PORT, () => { 
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error)
    })


