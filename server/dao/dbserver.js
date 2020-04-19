//引入加密文件
var bcrypt = require('../dao/bcrypt')
var dbmodel = require('../model/dbmodel')
var User = dbmodel.model('User')


//新建用户
exports.buildUser = function (name, mail, pwd, res) {
    //密码加密
    let password = bcrypt.encryption(pwd)

    let data = {
        name: name,
        email: mail,
        psw: password,
        time: new Date(),
    }

    let user = new User(data)

    user.save(function (err, result) {
        if (err) {
            res.send({ status: 500 });
        } else {
            res.send({ status: 200 })
        }
    });
}

//匹配用户表项目
exports.countUserValue = function (data, type, res) {
    let wherestr = {}
    //wherestr = {'type' : data}
    wherestr[type] = data
    User.countDocuments(wherestr, function (err, result) {
        if (err) {
            res.send({ status: 500 });
        }
        else {
            res.send({ status: 200, result })
        }
    })
}
