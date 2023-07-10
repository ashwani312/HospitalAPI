const mongoose = require('mongoose'); // This is a mongoose packege


//This is a doctor schema in this i have added doctor name, username and password
const doctorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique : true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const DoctorModel = mongoose.model("Doctor", doctorsSchema);
module.exports = DoctorModel;