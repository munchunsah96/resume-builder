const router = require("express").Router();
const controller = require("./user.controller");


router.post("/login",async (req, res, next) =>{
    try{

    }catch(e){
        next(e);}
});
router.post("/register",async (req, res, next) =>{
    try{
        const result = await usercontroller.register(req.body)
        res.json({ data: "user registered successfully"})
    }catch(e){
        next(e);}
});
module.exports = router;