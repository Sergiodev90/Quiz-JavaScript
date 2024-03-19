import express from 'express'
const router = express.Router()
import { score } from './quiz.js'
import { dataMakeQuiz } from './quiz.js'


let message = ''
router.get('',(req,res) =>{

    if(score == dataMakeQuiz.length){
        message = 'You Did it like a god very well'
    }else if(score < (dataMakeQuiz.length/100) * 75){
        message = 'You are in the Average'
    }else if(score < (dataMakeQuiz.length/100)*50){
        message = 'What Happened Man, Go to Home and repeat another test, be happy'
    }
    res.render('result-quiz',{
        layout:'./layouts/result',
        score:score,
        message: message
    })
    
})


export default router;