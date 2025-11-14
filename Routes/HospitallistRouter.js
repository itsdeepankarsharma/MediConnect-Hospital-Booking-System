const express = require("express");
const mongoose = require("mongoose");
const HospitalRouter = express.Router();
const Hospital = require("../models/hospital");

const addedHospitals = [
  { name: "Asian Heart Institute", address: "Bandra-Kurla Complex", doctors: [] },
  { name: "Bhabha Hospital", address: "Bandra", doctors: [] },
  { name: "Bhaktivedanta Hospital", address: "Mira Road", doctors: [] },
  { name: "Bombay Hospital", address: "Marine Lines", doctors: [] },
  { name: "Cloudnine Hospitals", address: "Link Road, Malad West", doctors: [] }
];

// Hospital route
HospitalRouter.route("/").get(async (req, res) => {
  try {
    const foundItems = await Hospital.find({});
    if (foundItems.length === 0) {
      await Hospital.insertMany(addedHospitals);
      console.log("Added Default Hospitals!");
      return res.redirect("/hospitals");
    }
    res.render("Hospital-list", { hospitals: foundItems });
  } catch (err) {
    console.error("Error fetching hospitals:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Define the /Hospital-list route explicitly
HospitalRouter.get("/Hospital-list", async (req, res) => {
  try {
    const hospitals = await Hospital.find({});
    res.render("Hospital-list", { hospitals });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = HospitalRouter;
