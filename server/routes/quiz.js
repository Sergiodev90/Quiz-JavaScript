import express, { response } from "express";
import axios from "axios";
import { API_BASE_URL } from "../../api/apiconfig.js";
import { data_quiz } from "./Select-quiz.js";
const router = express.Router()

const categories = {
    '0': 'Any Category',
    '9': 'General Knowledge',
    '10': 'Entertainment: Books',
    '11': 'Entertainment: Film',
    '12': 'Entertainment: Music',
    '13': 'Entertainment: Musicals & Theatres',
    '14': 'Entertainment: Television',
    '15': 'Entertainment: Video Games',
    '16': 'Entertainment: Board Games',
    '17': 'Science & Nature',
    '18': 'Science: Computers',
    '19': 'Science: Mathematics',
    '20': 'Mythology',
    '21': 'Sports',
    '22': 'Geography',
    '23': 'History',
    '24': 'Politics',
    '25': 'Art',
    '26': 'Celebrities',
    '27': 'Animals',
    '28': 'Vehicles',
    '29': 'Entertainment: Comics',
    '30': 'Science: Gadgets',
    '31': 'Entertainment: Japanese Anime & Manga',
    '32': 'Entertainment: Cartoon & Animations'
};

router.get('',async(req,res) => {
    console.log("Data received from the data exported",data_quiz)
    try{
        const locals = {
            title:'Quiz',
        }
        const response = await axios.get(`${API_BASE_URL}?amount=${data_quiz.amount_question}&category=${data_quiz.category}&difficulty=${data_quiz.difficulty}&type=${data_quiz.type}`)
        const result = response.data;
        console.log(result.results)
        res.render('quiz',{
            layout:'./layouts/main-quiz.ejs',
            locals,
            data: result.results,
            list_category: categories,
            index_number: data_quiz.category,
        })
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