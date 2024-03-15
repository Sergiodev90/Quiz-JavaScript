import express from "express";
const router = express.Router();

import bodyParser from "body-parser";
router.use(bodyParser.urlencoded({
    extended: true
}))

let data_quiz = {}

router.get('', (req, res) => {
    const locals = {
        title: "Quiz",
        description: "Simple Quiz"
    }
    res.render('Select-tquiz',{
        layout:'./layouts/main-quiz',
        locals
    });// Especifica el layout del quiz
});


router.post('',(req,res) =>{

    data_quiz = {
        amount_question:req.body.amount_questions,
        category: req.body.category_questions,
        difficulty : req.body.trivia_difficulty,
        type : req.body.type
    }
    console.log("Data received From Select-quiz")
    res.redirect('/quiz')
})
export {data_quiz};
export default router;