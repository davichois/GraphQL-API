"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _mongoose=require("mongoose"),userSchema=new _mongoose.Schema({nickname:{type:String,required:!0},fullname:{type:String,required:!0},phone:{type:String},city:{type:String}}),_default=(0,_mongoose.model)("User",userSchema);exports["default"]=_default;