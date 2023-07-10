const DoctorModel = require("../models/doctorModel");
const jwt = require("jsonwebtoken");

//-----------------First we are registering a Doctor ----------------
module.exports.registerTheDoctor = async (req, res, next) => {
    try {
        // ----First we are checking the doctor that doctor already registered or not
        const doctorExistence = await DoctorModel.findOne({
            username: req.body.username
        });

        if (doctorExistence === true) {
            return res.status(400).json({
                status: "failed",
                messege: "Doctor has already registered, please go to log in page"
            });
        }
        // --If doctor has not registered please add them in database
        const doctor = await DoctorModel.create(req.body);

        res.status(200).json({
            status: "success",
            messege: "you are succesfuly registered"
        })

    } catch (error) {
        res.status(500).json(error);
    }
}

// -------------------- This is for login the doctor-------------
module.exports.loginTheDoctor = async (req, res, next) => {
    try {
        await DoctorModel.findOne({ username: req.body.username }).then((doctor) => {
            if (doctor) {

                // If doctor username is matched then match the doctor password

                if (doctor.password === req.body.password) {
                    const token = jwt.sign(doctor.id, "secret");
                    return res.status(200).json({
                        status: "success",
                        token,
                        messege: "doctor is succesfully loged in"
                    });
                    // returning the token
                }else{
                    return res.status(422).json("password does not match")
                }
            }
        }).catch((err) => {
            return res.status(404).json({
                status: "failed",
                messege: "username and password does not match"
            });
        })

    } catch (error) {
        res.status(404).json("something is wrong please try again later")
    }
}