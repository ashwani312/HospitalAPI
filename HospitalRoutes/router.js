const router = require("express").Router();
const passport = require("passport");
const { registerTheDoctor, loginTheDoctor } = require("../controllers/doctor");
const { registerThePatient } = require("../controllers/patient");
const { createTheReport, showAllReports, allReportStatus } = require("../controllers/reports");


// This is for registering the doctor
router.post("/doctors/register", registerTheDoctor);

// This is for login the doctor
router.post("/doctors/login", loginTheDoctor);

// This is for registering the patient
router.post("/patient/register", passport.authenticate("jwt", { session: false }), registerThePatient);

// This is for creating a report for patient
router.post("/patient/:id/create_report", passport.authenticate("jwt", {session : false}), createTheReport);

// THis is for showing the all reports
router.get("/patients/:id/all_report", showAllReports);

// This is for showing the status of reports exp.:- Negative / Postive etc.
router.get("/reports/:status", allReportStatus);

module.exports = router;