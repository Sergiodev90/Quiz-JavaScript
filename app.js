import express  from "express";
import expressEjsLayouts from "express-ejs-layouts";
import router from './server/routes/main.js';
const app = express()
const PORT = 3000


app.use(express.static("public"))


app.use(expressEjsLayouts)

app.set('layout','./layouts/main')
app.set('view engine','ejs')

app.use('/',router)

app.listen(PORT,()=>{
    console.log("App runing succesfully at http://localhost:3000")
})