const chatBtn = document.querySelector('#chatBtn');
const chatRoom = document.querySelector('#chatRoom');
let socket = io();
let flag = undefined;

chatBtn.addEventListener('click', ()=>{
    switch(flag){
        case true:
            //열린상태에서 다시누를때 -> 닫히는기능할때.
            flag = false;
            chatRoom.style.display = 'none';
        break;
        case false:
            //처음제외하고 다시 열릴때 
            flag = true;
            chatBtn.innerHTML = '채팅';
            chatBtn.dataset.value = 0;
            chatRoom.style.display = 'block';
        break;
        case undefined:
            // 처음으로 이버튼을 눌렀을때.
            flag = true;
            getChatRoom();
        break;
    }
})

async function getChatRoom(){
    let url = 'http://localhost:3000/chat'
    let options = {method:'GET'}
    let response = await fetch(url,options) // Promise object
    let result = await response.text();
    // result 값에 실패시에는 json 형태로 오는데
    // result 값이 성공시에는 html형태 즉 text형태로 옵니다.
    if(isJson(result)){
        // 로그인처리가 잘 안됬을때
        let json = JSON.parse(result);
        if(json.result == false) alert(json.msg)
        return 
    } else {
        // 로그인처리가 완료가 잘되었을때.
        chatRoom.innerHTML = result;
        socketChat();
    }
}

function socketChat(){
    socket.on('connect',()=>{});

    socket.on('msg',data=>{
        chatBtn.dataset.value = parseInt(chatBtn.dataset.value)+1;
        //dataset 
        if(flag==false){
            //작업
            chatBtn.innerHTML = `채팅<span style="color:red; padding:2px;">${chatBtn.dataset.value}</span>`
        }
        addCard(data,'you')
    })
}


function send(){
    const msg = document.querySelector('#msg');
    console.log(msg.value);
    socket.emit('send',msg.value);
    addCard(msg.value,'my')
}
            
function addCard(text,type){
    const div = document.createElement('div');
    const span = document.createElement('span');
    const chat = document.querySelector('#chat');

    span.innerHTML = text;
    span.classList.add(type);
    div.appendChild(span);
    chat.appendChild(div);
}

function isJson(str){
    try{
        let json = JSON.parse(str);
        return (typeof json == 'object')
    } catch(e) {
        return false;
    }
}

