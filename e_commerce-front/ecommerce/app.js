const express = require("express"); // app develop korar jnno
const mongoose = require("mongoose"); // to use our database
const morgan = require("morgan"); // request gula console e print kore dekhay. its a good thing to make sure which request is working properly

const cookieParser = require("cookie-parser"); // credentials store korar jnno
const cors = require("cors"); //cross platform
const expressValidator = require("express-validator");
const app = express(); //declaring my app here
const dotenv = require("dotenv"); // as we need to use our port and database
dotenv.config();
//import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const braintreeRoutes = require("./routes/braintree");
const orderRoutes = require("./routes/order");
//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

//routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", braintreeRoutes);
app.use("/api", orderRoutes);

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => console.log("MongoDB connection failed !"));

const port = process.env.PORT || 8000; // this is the port

app.listen(port, () => {
  console.log(`I am listening on port ${port} `);
});
