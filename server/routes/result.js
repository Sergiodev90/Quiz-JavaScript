import express from 'express'
const router = express.Router()
import { score } from './quiz.js'
import { dataMakeQuiz } from './quiz.js'


let message = ''
let src_image = ''
let copyright = ''
router.get('',(req,res) =>{
    console.log(typeof score)
    console.log("from result",dataMakeQuiz.length)
    console.log("fromo result",score)
    if(score === dataMakeQuiz.length){
        message = 'You Did it like a god very well'
        src_image = 'https://giphy.com/embed/7aBE32jCr6lOhtuE9v'
        copyright = 'https://giphy.com/gifs/rockstar-7aBE32jCr6lOhtuE9v'
    }else if(score  <= (dataMakeQuiz.length * 0.90)){
        message = 'You are in the Average'
        src_image = 'https://giphy.com/embed/26u4lhPy4UI6AHzGw'
        copyright='https://giphy.com/gifs/manuelmedrano-manuel-medrano-26u4lhPy4UI6AHzGw'
    }else if(score  <= (dataMakeQuiz.length* 0.70)){
        message = 'What Happened Man, Go to Home and repeat another test, be happy'
        src_image = 'https://giphy.com/embed/d8SRR4aDUINuU'
        copyright = 'https://giphy.com/gifs/nooooo-d8SRR4aDUINuU'
    }
    res.render('result-quiz',{
        layout:'./layouts/result',
        score:score,
        message: message,
        src:src_image,
        copyright:copyright
    })

})


export default router;