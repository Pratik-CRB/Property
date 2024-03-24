const express = require('express')
const router = express.Router()
const User = require('../models/SignUp')
const SignIn = require("../models/SignIn")
const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/Property')

router.post("/SignIn", async(req,res)=>{


//     const {Username, Password} = req.body
//     console.log(Username, Password)
    
//     const userFound  = await user.findOne({Username: Username, Password: Password})
//     if(userFound){
//         res.status(200).json({message: "success"})
        
//     }
//    else{
//     res.status(404).json({message:"failure"})
//    }
    
       
            const { UserId , Password} = req.body;
            User.findOne({UserId : UserId}, (err, User) => {
                if(user){
                    if(user.Password === Password){
                        res.send({message:"Success"})
                    }else{
                        res.send({message:"Password is Incorrect"})
                    }
               }else{
                res.send({message:"Please Register"})
               }
            })
           
            
            
           })
        
        
    

    // try{    
    //     const { UserId , Password} = req.body;
    //     let data = await User.find({UserId: UserId, Password: Password});
    //     console.log(data.length);
    //     if (data.length >= 1){
    //         const userSignIn = [{
    //             UserId : data[0].UserId,
    //             Password : data[0].Password
    //         }];
    //         return res.send({message: "User Found."});
    //     }else{
    //         return res.send({message : "User Not Found.\nKindly register using SignUp."});
    //     }
        
    // } catch(e) {
    //  res.status(500).json({message : "An error occured.\nKindly contact the Administrator"});
    // }


router.post("/addUser", async(req, res)=> {
    try{
        const { UserId } = req.body;
        let getUser = await User.find({ UserId: UserId });
        if (getUser.length !== 0){
            return res.status(200).json({message: "User Already Registered.\nPlease signIn using credentials"});
        }
        else{
            const data = await User.create(req.body);
            return res.status(200).json({message: "success"});
        }
    }catch(e) {
        res.status(500).json({message : e.message})
    }
})

module.exports = router