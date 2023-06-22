import mongoose from 'mongoose';

const TodoSchema=new mongoose.Schema({
    item:{
        type:String,
        require:true,
    },
    done:{
        type:Boolean,
        default:false,
    }
},{timestamps:true})

export default mongoose.model("Todo",TodoSchema);