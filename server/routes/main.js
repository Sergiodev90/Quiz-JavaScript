import  express  from "express";
import axios from "axios";
const router  = express.Router();


router.get('',(req,res) => {
    const locals = {
        title: "Quiz",
        description: "Simple Quiz"
    }
    res.render("index",{
        layout: './layouts/main',
        locals
    });
})

export default router;