const express = require('express');
const router = express.Router();

router.get('/add-new',(req,res)=>{
    return res.render("addBlog",{
        user:req.user,
    })
})
router.post('/add-new',(req,res)=>{
   
})

module.exports = router;
