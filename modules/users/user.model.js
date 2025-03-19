const { string, boolean } = require("joi");
const {schema, model} = require ("moongoose");



const userschema = new schema ({
    name:{type: string , required: ture},
    email:{type: string, required: true, unique:true},
    password:{type:string, required:true},
    isBlocked:{type:boolean, required: true, default: true},
    isEmailVerified:{type:boolean, required: true, default:false},
    otp:{type:string},
    roles:{type:[string], enum: ["user", "admin" ] ,default: "user"},
    

},{ timesstamps: true});


module.exports = model("user", userschema);
