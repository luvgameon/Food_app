const express=require('express');
const router = express.Router();


router.post('/food_items',async (req,res)=>{
try {
    res.send([global.Food_items,global.food_category]);
    
} catch (error) {
    console.log(error);
}


})





module.exports = router;
