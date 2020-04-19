var bcrypt = require('bcryptjs');

exports.encryption = function(e){

    //生成随机的salt
    let salt = bcrypt.genSaltSync(10);

    //生成hash密码
    let hash = bcrypt.hashSync(e, salt);

    return hash
}

//解密
exports.verifcation = function(e,hash){
    let verif = bcrypt.compareSync(e, hash); // true 

    return verif;
}
