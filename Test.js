//Promise 목적

let myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve("Success!"); 
    }, 250);
});

// this -> 해당 { } 안에 있는 상위 변수명을 가르킴
// new -> 함수를 객체로 변경해줌 

function User(){
    this.name = 'foo'
    this.age = 20
}


// callback ? 
const pr = new Promise( (resolve,reject)=>{
    reject('실패했습니다.')
})

// pr.then((data)=>{ // 상태값이 이행일때 
//     console.log(data);
// })
// .catch((error)=>{ // 상태값이 리젝일때
//     console.log(error);
// })


function 제발(){
    return new Promise( (resolve,reject)=>{
        resolve(꺼내줘());
    } )
}

function 꺼내줘(){
    const pr = new Promise( (resolve,reject)=>{
        resolve('꺼내줘') // 구출해주셈.
    })

    const obj = {
        text:function(){
            return pr;
        }
    }

    return obj;
}

제발().then(data=>{
    // data.text().then(data2=>{
    //     console.log('첫번쨰방법 : ',data2);
    // })
    data.text().then(data2=>{
        console.log(data2)
    })
})

제발().then(data=>{
    return data.text(); // Promise Object
})
.then(data2=>{
    console.log('두번쨰방법 : ',data2);
})


async function result(){
    let response = await fetch();
    let text = await response.text();
    console.log('세번째방법 : ',text);
}

result();


// 아반떼2()
// .then((data)=>{console.log(data)})


//async await
/*
async function result(){
    let rst = 아반떼2();
    console.log(rst);
}
*/


//callback 함수안에서 함수를 리턴해줄떄 


// 인자값에 함수명을 넣는것 
// 익명함수 

function 아반떼(a){
    //소나타()
    a()
    console.log('1')
}

function 소나타(){
    //그랜저();
    console.log('2')
}

function 그랜저(){
    console.log('3')
}


function 아반떼1(callback){ // 소나타1 텍스트 들어가야되는데 소나타1 함수자체가 들어갔기떄문에
    callback();  // 소나타1()()
    setTimeout(()=>{
        console.log('아반떼1 hi');
    },1000)
}

function 소나타1(callback){
    callback();
    setTimeout(()=>{
        console.log('소나타1 hi');
    },2000)
}

function 그랜저1(){
    setTimeout(()=>{
        console.log('그랜저1 hi');
    },3000)
}


//아반떼1() // 아반떼1 첫번째 인자값 함수명 

// 익명함수는 ()={} 함수명만적엇을떄와 똑같이 처리됨 소나타()x  소나타o

/* callback hell 
아반떼1( ()=>{
    소나타1(()=>{
        그랜저1()
    })
} )


아반떼1(()=>{
    소나타1(그랜저1)
})*/