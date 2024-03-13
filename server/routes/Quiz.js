import express from "express";
const router = express.Router();

router.get('', (req, res) => {
    res.render('quiz',{
        layout:'./layouts/main-quiz'
    }); // Especifica el layout del quiz
});

export default router;