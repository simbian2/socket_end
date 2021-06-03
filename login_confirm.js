
result = res.json({result:false,msg:'로그인이 필요합니다.'})

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


function isJson(str){
    try{
        let json = JSON.parse(str);
        return (typeof json == 'object')
    } catch(e) {
        return false;
    }
}

