const mongoose=require('mongoose');
const mongoURI='mongodb+srv://luvgameon:654321Abc@foodhunt.fhh05z1.mongodb.net/food_hunt?retryWrites=true&w=majority';

const mongoDb=async()=>{
  await mongoose.connect(mongoURI,{useNewUrlParser:true});
 
      
     
      try {
        console.log('Connected');
         await mongoose.connection.db.collection("food_items").find({}).toArray( async function  (err,data){
              const food_category =  await mongoose.connection.db.collection("food_category");
              food_category.find({}).toArray(function(err,catData){
                if(err) console.log(err)
                else{
                global.Food_items=data;
                global.food_category=catData;

                }
          }) 
         
        
        
      });
       
       
      } catch (error) {
        console.log(error);
        
      }
     

    }
   
module.exports= mongoDb;
