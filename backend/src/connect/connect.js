import mongoose from "mongoose"

const connect=async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/todoListItem",{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("DB connected");
    }).catch((err)=>{
        console.log(`error is occured in connecting ${err}`);
    })
}
export default connect;