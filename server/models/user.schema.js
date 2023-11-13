import { Schema } from "mongoose";

export let userSchema=new Schema({
    "userId":{
        type:String,
        require:true
    },
    "name":{
        type:String
    },
    "userName":{
        type:String
    },
    "dateOfBirth":{
        type:Number
    },
    "posts":{
        type:Array,
        default:[]
    },
    "userLikes":{
        type:Array,
        default:[]
    },
    "userComments":{
        type:Array,
        default:[]
    },
    "createdAt":{
        type:Number
    }
})