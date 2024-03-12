import  express  from "express";
const router  = express.Router();

router.get('',(req,res) => {
    const locals = {
        title: "Quiz-Geography",
        description: "Simple Quiz"
    }
    res.render("index",{locals});
})


router.get('/quiz',(req,res) =>{
    res.render("quiz")
})
export default router;