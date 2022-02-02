const express = require('express');
const uuid = require('uuid');
const User = require('./User');
const router = express.Router();

router.get('/',(req, res) =>{
    res.send(User);
})

router.get('/:userid',(req,res)=>{
    const user = User.find(user=>{
        return Number(user.id) === Number(req.params.userid);
    })
    if(!user){
        res.status(400).send("User not found.")
    }
    res.status(200).json(user);
})

module.exports = router;
