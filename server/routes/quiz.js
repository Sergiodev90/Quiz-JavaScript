    import express, { response } from "express";
    // import axios, { isCancel } from "axios";
    // import { API_BASE_URL } from "../../api/apiconfig.js";
    // import { data_quiz } from "./Select-quiz.js";
    import { result } from "./Select-quiz.js";
    const router = express.Router()
    import bodyParser from "body-parser";
    router.use(bodyParser.urlencoded({extended: true}))

    let indexStart = 0
    let indexEnd = 1
    let score = 0
    let message;
    let dataMakeQuiz = new Array;
    let answersWasRespond = false;



    // router.get('/api',async(req,res) => {

    //     console.log("Data received from the data exported",data_quiz)

    //     try{
    //         //ge the api of opendtb
    //         const response = await axios.get(`${API_BASE_URL}?amount=${data_quiz.amount_question}&category=${data_quiz.category}&difficulty=${data_quiz.difficulty}&type=${data_quiz.type}`)
    //         result = response.data.results;
    //         console.log(result)
    //     }catch(error){
    //         console.error('Problem to take the Data',error)
    //     }
    //     res.redirect('/quiz/dataquiz')
    // })


    router.get('/dataquiz',(req,res)=>{
        if(dataMakeQuiz.length < 1){
            for (let i = 0; i < result.length; i++) {
                // Crear un objeto para cada pregunta
                let IncorrectAns = result[i].incorrect_answers;
                IncorrectAns.push(result[i].correct_answer);
        
                const shuffleArray = (array) => {
                    for (let i = array.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [array[i], array[j]] = [array[j], array[i]];
                    }
                    return array;
                };
                IncorrectAns = shuffleArray(IncorrectAns)
                let questionObj = {
                    category: result[i].category,
                    question: result[i].question,
                    correct_answer :result[i].correct_answer,
                    answers: IncorrectAns,
                    index: i + 1
                };
                // Agregar el objeto de pregunta al array dataMakeQuiz
                dataMakeQuiz.push(questionObj);
            }
        }else{
            dataMakeQuiz = []
            for (let i = 0; i < result.length; i++) {
                // Crear un objeto para cada pregunta
                let IncorrectAns = result[i].incorrect_answers;           

                IncorrectAns.push(result[i].correct_answer);
        
                const shuffleArray = (array) => {
                    for (let i = array.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [array[i], array[j]] = [array[j], array[i]];
                    }
                    return array;
                };
                IncorrectAns = shuffleArray(IncorrectAns)

                let questionObj = {
                    category: result[i].category,
                    question: result[i].question,
                    correct_answer :result[i].correct_answer,
                    answers: IncorrectAns,
                    index: i + 1
                };
                // Agregar el objeto de pregunta al array dataMakeQuiz
                dataMakeQuiz.push(questionObj);            
            }

        }
        if(dataMakeQuiz.length == 0){
            console.log("problem")
        }
        res.redirect('/quiz')
    })





    router.get('',(req,res) =>{
        const locals = {
            title: "Quiz",
            description: "Simple Quiz"
        }
        res.render('quiz',{
            layout:'./layouts/main-quiz',
            data: dataMakeQuiz,
            indexPageStart: indexStart,
            indexPageEnd:indexEnd,
            message:message,
            score:score,
            locals:locals,
            answersWasRespond:answersWasRespond
        })
        console.log(dataMakeQuiz)
        console.log(dataMakeQuiz.length)
    })

    router.post('/submit',(req,res) =>{
            const user__choice = req.body.choice;
            console.log(user__choice)

            message = "";
            if(!answersWasRespond){
                if (user__choice === dataMakeQuiz[indexStart].correct_answer) {
                    message = "Respuesta correcta"; 
                    score++; 
                }
                else{
                    message = `Respuesta incorrecta y la respuesta correcta era: ${dataMakeQuiz[indexStart].correct_answer} `
                    answersWasRespond = true

                }
                answersWasRespond = true
            }else{
            message =  `ya has respondido a la pregunta`        
            }

        res.redirect('/quiz')  
    })


    router.post('/next',(req,res) =>{
        let next= req.body.respondeNext
            if(!answersWasRespond){
                message = 'Aun no has respondido'
            }else{
                console.log(next)
                if(next == 'next'){
                    indexStart = indexStart + 1
                    indexEnd = indexEnd + 1
                    message = ''
                    answersWasRespond = false
                }
            }
            if(indexStart >= dataMakeQuiz.length){
                res.redirect('/result-quiz')
                setTimeout(() => {
                    score = 0
                    indexEnd = 1
                    indexStart = 0
                    message = ''
                }, 10000);
            }else{
                res.redirect('/quiz')
            }
    })







// let UserAnswer = req.body.choice;
// let score = 0

// function checkAnswer(answerUser, elementArray) {
//     let message;
//     if (answerUser === elementArray) {
//         message = 'Very Good';
//         score++;
//         return true; // Incrementa el puntaje si la respuesta es correcta
//     } else {
//         message = 'You are wrong';
//     }
//     return { message, score };
// }
//     for(let i = 0;i < (result.results.length - result.results.length)+ 1; i++){
//         let question = result.results[i + 1]
//         let incorrect_answers = result.results[i].incorrect_answers ; // Si incorrect_answers no está definido, establece un array vacío
//         let correct_answer = result.results[i].correct_answer;

//         arrayAnswers.push(correct_answer);
//         arrayAnswers.push(...incorrect_answers)
//         checkAnswer(UserAnswer,correct_answer,result.results.length,score,)
//     }

//     const shuffleArray = (array) => {
//         for (let i = array.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [array[i], array[j]] = [array[j], array[i]];
//         }
//         return array;
//       };
    
//     arrayAnswers = shuffleArray(arrayAnswers)




// res.render('quiz',{
//     layout:'./layouts/main-quiz.ejs',
//     locals,
//     data: result.results,
//     listAnswer: arrayAnswers,
//     UserAnswer: UserAnswer,
//     Score:score,
// })
export {score}
export {dataMakeQuiz}
export default router;




