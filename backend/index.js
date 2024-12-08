const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const listingsRoutes = require("./routes/listings");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = 3003;
app.use(express.json());
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use("/api/listings", listingsRoutes);
app.use("/api/auth", authRoutes);
app.listen(PORT, "192.168.0.108", () => console.log("Server up at port", PORT));

const MONGO_URI = "mongodb://127.0.0.1:27017/donewithit";
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Mongo connected."))
  .catch((err) => console.log("Error:", err));

app.get("/api", (req, res) => {
  res.json("Yooo, it's your backend server here...");
});
