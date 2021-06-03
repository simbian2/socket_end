const express=require('express');
const cookieParser=require('cookie-parser');
const ctoken = require('./jwt'); 
const chash = require('./chash')
const app=express();
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')
const auth = require('./middleware/auth')
const {sequelize, User} = require('./models')
// npm install socket.io
const socket = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = socket(server);
// app.listen -> server.listen 변경해주세요.
const multer = require('multer')
const path = require('path')
const upload = multer({
    storage:multer.diskStorage({
        destination:function(req, file, callback){
            callback(null, 'uploads/')
        },
        filename:function(req,file,callback){
            callback(null, new Date().valueOf() + path.extname(file.originalname))
        }
    }),

})

app.set('view engine', 'html')

app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

nunjucks.configure('views',{
    express: app,
})

app.use(cookieParser());

sequelize.sync({force:false})
.then(()=>{ // resolve
    console.log('DB접속이 완료되었습니다.')
})
.catch((err)=>{ // reject
    console.log(err)
})

app.get('/', (req,res)=>{
    let {msg} = req.query;
    res.render('index')
})

app.get('/user/info',auth, async (req,res)=>{
    let userid = req.userid
    
    result = await User.findOne({
        where:{userid}
    })
    res.send(`${req.userid}+<img src = "${result.userimage}">`)

    console.log(result.userimage)
    console.log(`${req.userid}+${result.userimage}`)
})

app.get('/user/join',(req,res)=>{
    res.render('join')
})

app.get('/user/userid_check',async (req,res)=>{
    userid = req.query.userid
    result = await User.findOne({
        where:{userid}
    })
    if (result == undefined){
        check = true;
    } else{
        check = false;
    }
    res.json({check})
})


app.post('/user/join_success',async (req,res)=>{
    let{userid, userpw, username, gender, userimage, useremail} = req.body
    let token = chash(userpw)
    let result = await User.create({
        userid, token, username, gender, useremail, userimage
    })
    res.json({result})
})


app.post('/auth/local/login',async (req,res)=>{
    let {userid, userpw} = req.body
    // let {userid2, userpw2} = JSON.parse(req.get('data'))
    console.log('body req :',userid, userpw)
    // console.log('data req :',userid2, userpw2)
    let result = {}
    let token = chash(userpw)
    let check = await User.findOne({
        where : {userid, token}
    })
    let token2 = ctoken(userid)
    if(check== null){
        result = {
            result:false,
            msg:'아이디와 패스워드를 확인해주세요'
        }
    }else{
        result = {
            result:true,
            msg:'로그인에 성공하셨습니다.'
        }
        res.cookie('AccessToken',token2,{httpOnly:true,secure:true,})
    }
    res.json(result)
})


app.get('/chat',auth,(req,res)=>{
    res.render('chat')
})

let id;

io.sockets.on('connection',socket=>{

    let cookieString = socket.handshake.headers.cookie;

    if(cookieString != undefined){
        let cookieArr = cookieString.split(';');
        cookieArr.forEach(v=>{
            let [name,value] = v.split('=');
            if(name.trim() == 'AccessToken'){
                let jwt = value.split('.');
                let payload = Buffer.from(jwt[1],'base64').toString();
                let {userid} = JSON.parse(payload);
                id = userid;
            }
        })   
    }

    console.log(id)
    //socket에서 send
    socket.on('send',data=>{
        console.log(data);
        //socket에서 msg
        socket.broadcast.emit('msg',data)
    })
})



server.listen(3000,()=>{
    console.log('server start port: 3000');
})
