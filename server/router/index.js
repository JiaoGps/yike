var dbserver = require('../dao/dbserver');
//引入邮箱发送方法
var emailserver = require('../dao/emailserver')

var singup = require('../server/signup')

module.exports = function(app){
    app.get('/test', (req, res) => {
        //res.send('aadddd')
        dbserver.findUser(res)
        //res.send('test页面')
    });

    app.post('/mail',(req,res)=>{
        let mail = req.body.mail;
        emailserver.emailSignUp(mail,res);
        //res.send(mail)
        //console.log(mail)
    })


    //注册页面
    //注册
    app.post('/singup/add',(req,res)=>{
        singup.signUp(req,res);
    })

    //用户或者邮箱是否占用判断
    app.post('/singup/judge',(req,res)=>{
        singup.judgeValue(req,res);
    })
}