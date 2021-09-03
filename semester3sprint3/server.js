const express = require("express");
const app = express();
const db = require("./db");
const Pizza = require("./models/pizzaModel");
app.use(express.json());
const path = require("./db.js");

const pizzaRoute = require("./routes/pizzaRoute");
const userRoute = require("./routes/userRoute");
const ordersRoute = require("./routes/ordersRoute");

app.use("/api/pizzas/", pizzaRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", ordersRoute);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "/client/build/index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => `Server is running on port ${port}`);
