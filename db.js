var mc=require("mongodb").MongoClient;

//to hold db object
var dbo;

//database url
var dbUrl="mongodb+srv://RuthikaJ:Ruthika28@cluster0-85o5a.mongodb.net/test?retryWrites=true&w=majority";

//function to intialize db
 function initDb()
 {
     mc.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true},
        (err,client)=>{
            if(err)
            {
                console.log('error in connecting to db');
            }
            console.log("connected to db");
            dbo=client.db("mydb");
        });
 }

 //function to return db object
 function getDb()
 {
     console.log(dbo,"Db has not been initialised.Please called intit function first")
     return {
         dbo:dbo,
     }
}

//export two funtions
module.exports={
    getDb,
    initDb
};