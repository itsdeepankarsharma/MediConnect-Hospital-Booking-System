const express = require("express");
const mongoose = require("mongoose");

const appointmentBookRouter = express.Router();
const Appointment = require("../models/appointment");

appointmentBookRouter
  .route("/")
  .get((req, res) => {
    res.render("Appointment-form");
  })
  .post(async (req, res) => {
    try {
      const { username, date, hospital, doctor, slot } = req.body;

      const existingAppointment = await Appointment.findOne({ doctor, date, slot, hospital });

      if (existingAppointment) {
        return res.status(400).send("Appointment already exists for this user and slot");
      }

      const newApp = new Appointment({
        username,
        date,
        hospital,
        doctor,
        slot,
      });

      await newApp.save(); // Fixed: Removed callback and used await
      console.log("Appointment successful:", newApp);
      res.json(newApp);
    } catch (err) {
      console.error("Error saving appointment:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

module.exports = appointmentBookRouter;
