import express  from "express";
import expressEjsLayouts from "express-ejs-layouts";
const app = express()
const PORT = 3000


app.use(express.static("public"))


app.use(expressEjsLayouts)
app.set('layout','/layouts/main')
app.set('view engine','ejs')

app.use('/',mainRouter)

app.listen(PORT,()=>{
    console.log("App runing succesfully at http://localhost:3000")
})