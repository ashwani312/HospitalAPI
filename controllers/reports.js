const PatientModel = require("../models/patientModel");

// --------------------This is for creating the report------------------
module.exports.createTheReport = async (req, res, next) => {
    try {
        req.body.date = Date.now();
        await PatientModel.findById(req.params.id).then((patient) => {
            patient.reports.push(req.body);
            patient.save();
            res.status(200).json({
                status: "success",
                messege: "report success fully submited"
            })
        })
    } catch (error) {
        res.status(500).json("Not able to created a report, Internal server error");
    }
}

//---------------- This is for showing the reports---------------
module.exports.showAllReports = async (req, res, next) => {
    try {
        await PatientModel.findById(req.params.id).then((patient) => {
            if (patient) {
                return res.status(200).json({
                    status: "success",
                    patientreport: patient.reports
                })
            } else {
                return res.status(404).json({
                    status: "failure",
                    message: "No patient found",
                });
            }

        })
    } catch (error) {
        res.status(500).json({
            status: "failed",
            messege: "unable to fetch reports"
        })
    }
}

//-------------------This is for getting the report status----------
module.exports.allReportStatus = async (req, res, next) => {
    try {
        await PatientModel.find({ reports: { $elemMatch: { status: req.params.status } } }).then((patient) => {
            if (patient) {
                return res.status(200).json(patient)
            } else {
                return res.status(404).json({
                    status: "Not found",
                    message: "Patient not found"
                })
            }
        })
    } catch (error) {
        res.status(500).json("not able to show the reports")
    }
}