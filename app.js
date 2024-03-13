import express  from "express";
import expressEjsLayouts from "express-ejs-layouts";
import mainRouter from './server/routes/main.js';
import quizRouter from './server/routes/Quiz.js'

const app = express()
const PORT = 3000


app.use(express.static("public"))


app.use(expressEjsLayouts)

app.set('layout','./layouts/main')
app.set('layout','./layouts/main-quiz')

app.set('view engine','ejs')

app.use('/',mainRouter)
app.use('/quiz',quizRouter)

app.listen(PORT,()=>{
    console.log("App runing succesfully at http://localhost:3000")
})