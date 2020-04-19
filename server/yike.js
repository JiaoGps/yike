//引入解析req.body插件
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000




//设置允许跨域访问该服务.
// app.all('*', function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     res.header('Access-Control-Allow-Methods', '*');
//     res.header('Content-Type', 'application/json;charset=utf-8');
//     next();
//   });
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('X-Powered-By', '3.2.1');
    //方便返回json
    res.header('Content-Type', 'application/json;charset=utf-8');
    if (req.method == 'OPTIONS') {
        //让OPTIONS请求快速返回
        res.sendStatus(200)
    } else {
        next();
    }

})

//解析前端数据
app.use(bodyParser.json());


require('./router/index')(app);

//404页面
app.use(function (req, res, next) {
    let err = new Error('Not Found')
    err.status = 404;
    next(err)
})

//出现错误处理
app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    res.send(err.message)
})


app.listen(port, () => console.log(`已启动 ${port}!`))