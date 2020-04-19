//引用发送邮件插件
var nodemailer = require("nodemailer");
//引入证书文件
var credentiais = require('../config/credentiais')

//创建传输方式
var transporter = nodemailer.createTransport({
    service: 'qq',
    auth: {
        user: credentiais.qq.user, // generated ethereal user
        pass: credentiais.qq.pass // generated ethereal password
    },
});

//注册发送邮件给用户
exports.emailSignUp = function (email, res) {
    //发送信息内容
    let options = {
        from:'1078891480@qq.com',
        to:email,//发送到什么邮箱
        subject:'感谢您的注册 yike',//标题
        html:'<span>欢迎你的加入</span><a href="http://localhost:8080">点击</a>',
    };

    //发送邮件
    transporter.sendMail(options,function(err,msg){
        if(err){
            console.log(err)
            res.send(err)
        }else{
            res.send('邮件发送成功!')
            console.log(msg+"邮箱发送成功!")
        }
    })
}
