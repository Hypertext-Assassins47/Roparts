const express = require("express"); // app develop korar jnno
const mongoose = require("mongoose"); // to use our database
const morgan = require("morgan"); // request gula console e print kore dekhay. its a good thing to make sure which request is working properly

const cookieParser = require("cookie-parser"); // credentials store korar jnno
const expressValidator = require("express-validator");
const app = express(); //declaring my app here
const dotenv = require("dotenv"); // as we need to use our port
dotenv.config();
//import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(expressValidator());

//routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => console.log("MongoDB connection failed !"));
//port adding
const port = process.env.PORT || 8000; // this is the port
app.listen(port, () => {
  console.log(`I am listening on port ${port} `);
});
