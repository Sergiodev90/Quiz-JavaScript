import express from "express";
const router = express.Router();
import axios from "axios";
import { API_BASE_URL } from "../../api/apiconfig.js";

import bodyParser from "body-parser";
router.use(bodyParser.urlencoded({extended: true}))

let data_quiz = {}
let result;
let ApiWasSend = false

// Ejemplo de cómo acceder a los elementos de la lista

router.get('', (req, res) => {
    const locals = {
        title: "Quiz",
        description: "Simple Quiz"
    }
    res.render('Select-tquiz',{
        layout:'./layouts/select-quiz',
        locals
    });// Especific el layout del quiz
});


router.post('',(req,res) =>{
    console.log(req.body.category_questions)
    data_quiz = {
        amount_question:req.body.amount_questions,
        category: req.body.category_questions,
        difficulty : req.body.trivia_difficulty,
        type : req.body.type
    }
    console.log("Data received From Select-quiz.ejs")
    
    res.redirect('/select-quiz/api')
})

router.get('/api',async (req,res) =>{
    try{
            const response = await axios.get(`${API_BASE_URL}?amount=${data_quiz.amount_question}&category=${data_quiz.category}&difficulty=${data_quiz.difficulty}&type=${data_quiz.type}`)
            result = response.data.results;
            console.log(result)
    }   
    catch(error){
        console.error(error)
    }

    res.redirect('/quiz/dataquiz')
})
export {data_quiz};
export {result}
export default router;