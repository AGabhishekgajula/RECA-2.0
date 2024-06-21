// const joi=require("joi");

// module.exports.listingSchema=joi.object({
//     listing:joi.object({
//         title:joi.string().required(),
//         description:joi.string().required(),
//         price:joi.number().required().min(0),
//     }).required(),
// });
// below code we have to use in app js
// let result=listingSchema.validate(req.body);
// if(result.error){
//   throw new ExpressError(400,result.error);
// }
const Joi = require('joi');

module.exports.signupSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    rollno: Joi.string().required(),
    phono: Joi.number().min(10).required(),
    password: Joi.string().min(8).max(20).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required()
});