const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const userRouter = require("./routes/users");
const productRouter= require("./routes/products");
const app = express();

app.use(express.json());

app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
        optionsSuccessStatus: 200,
    })
);

app.use("/api",userRouter);
app.use("/api",productRouter);
app.listen(process.env.PORT,()=>{
    console.log("Server running on port 5000")
});