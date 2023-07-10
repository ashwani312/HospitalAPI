const PatientModel = require("../models/patientModel");


//----------------this is for registering the patient by doctor
module.exports.registerThePatient = async (req, res, next) => {
    try {
        await PatientModel.create(req.body).then((patient) => {
            console.log(patient);
            if(patient){
              return  res.status(200).json({
                status : "success",
                messege : "succesfully registered a patient"
              });
            }
           
        }).catch((err) => {
            res.status(500).json("problem with create a patient")
        })

    } catch (error) {
        res.status(500).json(error);
    }
}