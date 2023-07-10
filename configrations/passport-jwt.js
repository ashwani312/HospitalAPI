const passport = require('passport'); //passport packege for authentication
const DoctorModel = require("../models/doctorModel"); //doctor model
const JwtStrategy = require('passport-jwt').Strategy,
 ExtractJwt = require('passport-jwt').ExtractJwt;


const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

//--------Passport stratergy for Authentication-------------

passport.use(
    new JwtStrategy(opts,  (jwt_payload, done)=> {

    DoctorModel.findOne({ id: jwt_payload.id }).then((doctor)=>{
            if (doctor) {
                return done(null, doctor);
            } else {
                return done(null, false);
                // or you could create a new account
            }
    }).catch((err)=>{
        if (err) {
            return done(err, false);
        }
    })
}));

module.exports = passport;