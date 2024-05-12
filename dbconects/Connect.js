const mongoose = require ('mongoose');


const bdconnect = ()=>{
    try {
    mongoose.connect(
        `${process.env.MONGODB_URI}`
 
    )
    console.log("start server");
    } catch (error) {
        console.log(error)
    }
}

module.exports=bdconnect;