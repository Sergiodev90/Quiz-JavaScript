import express from "express";
const router = express.Router();

router.get('', (req, res) => {
    const locals = {
        title: "Quiz",
        description: "Simple Quiz"
    }
    res.render('Select-tquiz',{
        layout:'./layouts/main-quiz',
        locals
    }); // Especifica el layout del quiz
});

export default router;