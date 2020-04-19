var mongoose = require('mongoose');
var db = require('../config/db');

var Schema = mongoose.Schema;
//用户表
var UserSchema = new Schema({
    name:{type:String},                                  //用户名   
    psw:{type:String},                                   //密码
    email:{type:String},                                 //邮箱
    sex:{type:String , default:'asexual'},               //性别
    birth:{type:Date},                                   //生日
    phone:{type:Number},                                 //电话
    explain:{type:String},                               //介绍
    imgurl:{type:String,default:'user.png'},             //头像
    time:{type:Date},                                    //注册时间
});


//好友表
var FriendSchema = new Schema({
    userID:{type:Schema.Types.ObjectId,ref:'User'},      //用户ID   
    friendID:{type:Schema.Types.ObjectId,ref:'User'},    //好友ID   
    state:{type:String},                                 //状态
    time:{type:Date},                                    //生成时间
});

//一对一消息表
var MessageSchema = new Schema({
    userID:{type:Schema.Types.ObjectId,ref:'User'},      //发送者id   
    friendID:{type:Schema.Types.ObjectId,ref:'User'},    //接收者id  
    message:{type:String},                               //内容
    types:{type:String},                                 //内容类型
    time:{type:Date},                                    //发送时间
    state:{type:Number},                                 //接收状态
});

//群表
var GroupSchema = new Schema({
    userID:{type:Schema.Types.ObjectId,ref:'User'},      //用户id   
    name:{type:String},                                  //群名称  
    imgurl:{type:String,default:'group.png'},            //群头像
    time:{type:Date},                                    //创建时间
    notice:{type:String},                                //群公告
});


//群表
var GroupUserSchema = new Schema({
    groupID:{type:Schema.Types.ObjectId,ref:'Group'},    //群id   
    userID:{type:Schema.Types.ObjectId,ref:'User'},      //用户id   
    name:{type:String},                                  //群内名称  
    tip:{type:Number,default:0},                         //未读消息数
    time:{type:Date},                                    //加入时间
    shield:{type:Number},                                //是否未读
});

//群消息
var GroupMsgSchema = new Schema({
    groupID:{type:Schema.Types.ObjectId,ref:'Group'},    //群id   
    userID:{type:Schema.Types.ObjectId,ref:'User'},      //发送id   
    message:{type:String},                               //内容
    types:{type:String},                                 //内容类型
    time:{type:Date},                                    //发送时间
});






module.exports = db.model('User',UserSchema)
module.exports = db.model('Friend',FriendSchema)
module.exports = db.model('Message',MessageSchema)
module.exports = db.model('Group',GroupSchema)
module.exports = db.model('GroupUser',GroupUserSchema)
module.exports = db.model('GroupMsg',GroupMsgSchema)