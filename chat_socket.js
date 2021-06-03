// server.js 파일

let id;

io.sockets.on('connection',socket=>{//1

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
    socket.on('send',data=>{//2
        console.log(data);
        //socket에서 msg
        socket.broadcast.emit('msg',data)//3
    })
})


// 소켓을 본격적으로 활용하는 chat.js 파일

const chatBtn = document.querySelector('#chatBtn');
const chatRoom = document.querySelector('#chatRoom');
let socket = io();
let flag = undefined;

// async function getChatRoom(){
//     let url = 'http://localhost:3000/chat'
//     let options = {method:'GET'}
//     let response = await fetch(url,options) // Promise object
//     let result = await response.text();
//     // result 값에 실패시에는 json 형태로 오는데
//     // result 값이 성공시에는 html형태 즉 text형태로 옵니다.
//     if(isJson(result)){
//         // 로그인처리가 잘 안됬을때
//         let json = JSON.parse(result);
//         if(json.result == false) alert(json.msg)
//         return 
//     } else {
//         // 로그인처리가 완료가 잘되었을때.
//         chatRoom.innerHTML = result;
//         socketChat();
//     }
// }

// async function getChatRoom(){
//     let url = 'http://localhost:3000/chat'
//     let options = {method:'GET'}
//     let response = await fetch(url,options) // Promise object
//     let result = await response.text();
//     chatRoom.innerHTML = result;
//     socketChat();

// }

function socketChat(){
   
    socket.on('connect',(data)=>{ //1
        console.log(data)
    });

    //socket에서 msg
    socket.on('msg',data=>{//3
        chatBtn.dataset.value = parseInt(chatBtn.dataset.value)+1;
        //dataset 
        if(flag == false){
            //작업
            chatBtn.innerHTML = `채팅<span style="color:red; padding:2px;">${chatBtn.dataset.value}</span>`
        }
        addCard(data,'you')
    })
}

async function send(){
    //그냥 자기가 입력한 내용을 가지고 온 거 같다.
    const msg = document.querySelector('#msg');
    console.log(msg.value);
    socket.emit('send',msg.value);//2
    
    let options = {
        method:'GET',
    }

    let response = await fetch('http://localhost:3000/user/info',options)
    let text = await response.text()
    console.log(text)
   
    socket.emit('send', text.split("+")[0]);//2
    addCard2(text.split("+")[0],'my2')
    addCard(msg.value,'my')
}

            
// function addCard(text,type){
//     const div = document.createElement('div');
//     const span = document.createElement('span');
//     const chat = document.querySelector('#chat');

//     span.innerHTML = `${text}<br>`;
//     span.classList.add(type);
//     div.appendChild(span);
//     chat.appendChild(div);
// }

// function addCard2(text,type){
//     const div = document.createElement('div');
//     const span = document.createElement('span');
//     const chat = document.querySelector('#chat');

//     span.innerHTML = `${text}<br>`;
//     span.classList.add(type);
//     div.appendChild(span);
//     chat.appendChild(div);
// }

