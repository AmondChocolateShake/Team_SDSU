

    // const page2 = document.getElementById('page2');
    // const root = document.getElementById('root');

    // function elementMaker(name, target, attri, attriValue) {
    //     const element = document.createElement(name);
    //     target.appendChild(element);
    //         if (attri !== undefined) {
    //             element.setAttribute(attri, attriValue);
    //     }
    // }
    // elementMaker('div','root','id','img');
    // elementMaker('div','root','id','text');

    // //text >div 5
    // for(i=0;i<5;i++){
    // let divs=document.createElement('div');
    // text.appendChild(divs);
    // divs.innerText='text';
    // divs.style.width = '100%';
    // divs.style.height = '100%';
    // }

    // function styleMaker(name,width,height){
    //     name.style.width = width;
    //     name.style.height = height;
    //     name.style.display = 'flex';
    // }
    // styleMaker('body','400px','900px');
    // styleMaker('text','350px','600px');
    // styleMaker('img','200px','200px');

    // function setDisplay(name){
    //     name.style.display='flex';
    //     name.style.textAlign='center';
    //     name.style.flexDirection= 'column';
    //     name.style.alignItems= 'center';

    // }
    // setDisplay('body');
    // setDisplay('text');
    // setDisplay('img');
    
    // text.style.borderRadius="50px";
    // text.style.backgroundColor="gray";
    // text.style.zIndex= '1';
    // img.borderRadius="100px";
    // img.style.backgroundColor="gray";
    // img.style.position='relative';
    // img.style.top = '70px';

//--------------함수없이 작성한 두번째 스크립트

// const page2 = document.getElementById('page2');
// const root = document.getElementById('root');

// // 이미지 공간
// let myimg = document.createElement('div');
// page2.appendChild(myimg);

// //프로필 공간
// let mytexts = document.createElement('div')
// page2.appendChild(mytexts);

// //mytexts >div 5 프로필공간의 구역을 5개로 나눔.
// for(i=0;i<5;i++){
// let text=document.createElement('div');
// mytexts.appendChild(text);

// if (i===4){
//     mytexts.children[i].style.height = '25%';
//     text.style.width = '90%';
//     text.style.backgroundColor = 'black';
//     text.innerText='text';
// }
// //마지막 자기소개란은 사이즈를 다르게 구성함.
// else{
// text.innerText='text';
// text.style.width = '90%';
// text.style.height = '15%';
// text.style.margin = '1%';
// text.style.backgroundColor = 'black';
// }
// // 나머지는 같게

// }
// //------------임의로 작성한 디자인 -----------

// page2.style.display = 'flex';
// page2.style.width ='400px';
// page2.style.height = '900px';
// page2.style.backgroundColor = 'gray';
// page2.style.alignItems = 'center';
// page2.style.flexDirection= 'column';

// myimg.style.display = 'flex';
// myimg.style.width ='200px';
// myimg.style.height = '200px';
// myimg.style.backgroundColor = 'black';
// myimg.style.borderRadius="100px";


// mytexts.style.display = 'flex';
// mytexts.style.width ='350px';
// mytexts.style.height = '600px';
// mytexts.style.backgroundColor = 'white';
// mytexts.style.display = 'flex';
// mytexts.style.alignItems = 'center';
// mytexts.style.flexDirection= 'column';
// mytexts.style.color = 'white';

// //---------------------다시--------------------------

// // 요소 생성
// const page2 = document.getElementById('page2');
// const myimg = document.createElement('div');
// const mytexts = document.createElement('div');

// // mytexts >div 5
// for (let i = 0; i < 5; i++) {
//   const text = document.createElement('div');
//   text.innerText = 'text';
//   text.style.width = '90%';
//   text.style.backgroundColor = 'black';
//   if (i === 4) {
//     text.style.height = '25%';
//   } else {
//     text.style.height = '15%';
//     text.style.margin = '1%';
//   }
//   mytexts.appendChild(text);
// }

// // 스타일 설정
// page2.style.display = 'flex';
// page2.style.width = '400px';
// page2.style.height = '900px';
// page2.style.backgroundColor = 'gray';
// page2.style.alignItems = 'center';
// page2.style.flexDirection = 'column';

// myimg.style.display = 'flex';
// myimg.style.width = '200px';
// myimg.style.height = '200px';
// myimg.style.backgroundColor = 'black';
// myimg.style.borderRadius = '100px';

// mytexts.style.display = 'flex';
// mytexts.style.width = '350px';
// mytexts.style.height = '600px';
// mytexts.style.backgroundColor = 'white';
// mytexts.style.display = 'flex';
// mytexts.style.alignItems = 'center';
// mytexts.style.flexDirection = 'column';
// mytexts.style.color = 'white';

// // 요소 추가
// page2.appendChild(myimg);
// page2.appendChild(mytexts);


//----------------세번째-----------------------

// 요소 생성
const page2 = document.getElementById('page2');
const myimg = document.createElement('div');
const mytexts = document.createElement('div');

// mytexts >div 5
for (let i = 0; i < 5; i++) {
const text = document.createElement('div');
    text.innerText = 'text';
    text.style.width = '90%';
    text.style.backgroundColor = 'gray';
    text.style.display = 'flex';
    text.style.flexDirection = 'center';
    
    if (i === 4) {
    text.style.height = '25%';
    text.style.margin = '2%';

    } else {
    text.style.height = '15%';
    text.style.margin = '2%';
    }mytexts.appendChild(text);
}
//----setStyle  
//for...in 으로 스타일 객체의 각 속성에 대해 요소에 스타일을 설정
function setStyle(element, styles) {
    for (const property in styles) {
        element.style[property] = styles[property];
    }
}

//호출하기 page2
setStyle(page2, {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'gray',
    alignItems: 'center',
    flexDirection: 'column',
});
//img
setStyle(myimg, {
    display: 'flex',
    width: '200px',
    height: '200px',
    backgroundColor: 'white',
    borderRadius: '100px',
});
//text
setStyle(mytexts, {
    display: 'flex',
    width: '350px',
    height: '600px',
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'white',
});
//mytexts> div
//setStyle(mytexts.children,{
  



//});

//----------03/07추가 obj에서 꺼내쓰기
const team = {
    one:["사진","김동주","","","",""],
    two:["사진","이재권","","","",""],
    three:["사진","정지은","깃허브","je_eun2735@naver.com","서구"," 이것은 글자수를 확인하기 위한 예시입니다. 기본 폰트크기에 맞춘 글자수 입니다. 폰트크키를 변경하면 글자수가 달라지니 유의해주세요! 110자 내외로 작성하시고 의논 후 수정하면 될 것 같습니다."],
    four:["사진","최대건","","","",""],
    five:["사진","임지성","","","",""]
}


let img = document.createElement('img');
img.setAttribute('src','사진테스트.png');
img.style.width = '100%';
img.style.height = '100%';
img.style.borderRadius ='100px';


console.log(mytexts.children[0]);
mytexts.children[0].innerText = team.three[1];
mytexts.children[1].innerText = team.three[2];
mytexts.children[2].innerText = team.three[3];
mytexts.children[3].innerText = team.three[4];
mytexts.children[4].innerText = team.three[5];

console.dir(mytexts);

console.log(img);











// 요소 추가
page2.appendChild(myimg);
page2.appendChild(mytexts);
myimg.appendChild(img);