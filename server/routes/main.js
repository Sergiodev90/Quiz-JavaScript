import  express  from "express";
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