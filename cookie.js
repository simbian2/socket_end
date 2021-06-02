let cookie = 'AccessToken=eyJ0cHkiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiJhZG1pbiIsImV4cCI6MTYyMjYwNTE0MDQ3Mn0.C4Ydyyhm3V93dZfWxTExY31%2Bdc0GPT3mBUYXAoKUqbc; token=zxcv; ggggg=ë©ë¡±ì¿ í¤; user=John'
let cookieArr = cookie.split(';');
// split -> 특정 글자를 split 인자값 안에있는 글자 기준으로 짤라서 배열형태로 반환해줍니다.


cookieArr.forEach(v=>{
    let [name,value] = v.split('=');
    if(name.trim() == 'AccessToken'){
        let jwt = value.split('.');
        let payload = Buffer.from(jwt[1],'base64').toString();
        let {userid} = JSON.parse(payload);
        console.log('첫번쨰 방법 : ',userid);
    }
})

let [userid] = 
cookie.split(';').filter( v => v.indexOf('AccessToken') == 0)
                 .map( v=>{
                     let [name,value] = v.split('=');
                     return JSON.parse(Buffer.from(value.split('.')[1],'base64').toString()).userid
                 })

console.log('두번쨰 방법 : ',userid);
                        