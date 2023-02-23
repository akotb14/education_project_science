const express = require('express');
const router = express.Router();
const contro = require("../controllers/signup.contr");
const csrf = require("csurf");
router.get('/login',(req,res)=>{
    res.render('login.ejs',{errorLogin:req.flash('loginError') });
})

router.post('/login',contro.login)
module.exports =router;  