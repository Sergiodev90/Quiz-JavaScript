import express from "express";
import axios from "axios";
import { API_BASE_URL } from "../../api/apiconfig.js";

const router = express.Router()


router.get('/',(req,res) => {
    const locals = {
        title:'Quiz',
    }
    res.render('quiz',{
        layout:'./layouts/main-quiz.ejs',
        locals
    })
})
router.get('/category',async(req,res) =>{
    try{
        const result = await axios.get(`${API_BASE_URL}?amount=20`)
        const response = result.data
        console.log(response)
    }catch(error){
        console.log(error)
    }

})

export default router;