const mongoose = require("mongoose");

const mongodbUri = process.env.MONGODB_URI;

if (!mongodbUri) {
  throw new Error("❌ MONGODB_URI is not defined in environment variables.");
}

// ---------------- UserDB ----------------
mongoose
  .connect(mongodbUri, {
    dbName: "userDB",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✔ userDB connected"))
  .catch((err) => console.log("❌ userDB error:", err.message));

// ---------------- HospitalDB ----------------
const hospitalDB = mongoose.createConnection(mongodbUri, {
  dbName: "hospitalDB",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

hospitalDB.on("connected", () => console.log("✔ hospitalDB connected"));
hospitalDB.on("error", (err) => console.log("❌ hospitalDB error:", err.message));

// ---------------- AppointmentDB ----------------
const appointmentDB = mongoose.createConnection(mongodbUri, {
  dbName: "appointmentDB",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

appointmentDB.on("connected", () => console.log("✔ appointmentDB connected"));
appointmentDB.on("error", (err) => console.log("❌ appointmentDB error:", err.message));

module.exports = {
  mongoose,
  hospitalDB,
  appointmentDB,
};
