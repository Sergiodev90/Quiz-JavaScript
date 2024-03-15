import express from "express";
import axios from "axios";
import { API_BASE_URL } from "../../api/apiconfig.js";
import { data_quiz } from "./Select-quiz.js";
const router = express.Router()


router.get('',async(req,res) => {
    const locals = {
        title:'Quiz',
    }
    res.render('quiz',{
        layout:'./layouts/main-quiz.ejs',
        locals,
    })
    console.log("Data received from the data exported",data_quiz)
    try{
        const result = await axios.get(`${API_BASE_URL}?amount=${data_quiz.amount_question}&category=${data_quiz.category}&difficulty=${data_quiz.difficulty}&type=${data_quiz.type}`)
        const response = result.data;
        console.log(response)
    }catch(error){
        console.log(error)
    }
})
// router.get('',async(req,res) =>{
//     try{
//         const result = await axios.get(`${API_BASE_URL}?amount=${data_quiz.amount_question}&category=${data_quiz.category}&difficulty=${data_quiz.difficulty}&type=${data_quiz.type}`)
//         const response = result.data;
//         console.log(response)
//     }catch(error){
//         console.log(error)
//     }
// })


export default router;