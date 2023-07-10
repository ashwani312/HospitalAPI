const mongoose = require('mongoose');


//patient schema in this schema i have added a report section also
const patientSchema = new mongoose.Schema({
    phoneNo : {
            type : Number,
            required : true
    },
    name: {
        type: String,
        required: true
    },
    reports: [
        {
            status: {
                type: String,
                required: true,
                enum: ["Positive-Admit",
                    "Negative",
                    "Travelled-Quarantine",
                    "Symptoms-Quarantine"]
            },
            date: {
                type: Date,
                required: true
            }
        }
    ],
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    }
})

const PatientModel = mongoose.model("Patient", patientSchema);
module.exports = PatientModel;