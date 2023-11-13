import { Schema } from "mongoose";

export let commentSchema=new Schema({
    "postId":{
        type:String,
        require:true
    },
    "postPath":{
        type:String,
        require:true
    },
    "likes":{
        type:Array,
        default:[]
    },
    "comments":{
        type:Array,
        default:[]
    },
    "createdAt":{
        type:Number
    },
    "updatedAt":{
        type:Number
    }
})