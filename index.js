import express  from "express";
import expressEjsLayouts from "express-ejs-layouts";
import mainRouter from './server/routes/main.js';
import SelectquizRouter from './server/routes/Select-quiz.js'
import quizRouter from './server/routes/quiz.js'
import ResultRouter from './server/routes/result.js'
import bodyParser from "body-parser";

const app = express()
const PORT = process.env.PORT | 3000

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(expressEjsLayouts)

app.set('layout','./layouts/main')
app.set('layout','./layouts/select-quiz')
app.set('layout','./layouts/main-quiz')
app.set('layout','./layouts/result')
app.set('view engine','ejs')




app.use('/',mainRouter)
app.use('/select-quiz',SelectquizRouter)
app.use('/quiz',quizRouter)
app.use('/result-quiz',ResultRouter)


app.use((err, res) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

app.listen(PORT,()=>{
    console.log(`App running sucessfully at ${PORT}`)
})