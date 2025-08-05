
import express from'express';


const router=express.Router();
import internData from '../data/internData.js' ;
import leaderboard from '../data/leaderboard.js';
router.get('/interndata',(req,res)=>{
    res.json(internData);
});

router.get('/leaderboard',(req,res)=>{
res.json(leaderboard)
});

export default router;