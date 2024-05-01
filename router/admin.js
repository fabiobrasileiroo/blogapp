const express = require("express")
const router = express.Router()

router.get('/',(req,res)=> {
  res.render("admin/index")
}) 
router.get("/posts",(req,res)=>{
  res.send("posts")
})
router.get("/categorias",(req,res)=>{
  res.send("Categoria")
})
router.get('/teste',(req,res)=>{
  res.send("Isso é um teste")
})
module.exports = router