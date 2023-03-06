

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
    text.style.backgroundColor = 'black';
    if (i === 4) {
    text.style.height = '25%';
    } else {
    text.style.height = '15%';
    text.style.margin = '1%';
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
    width: '400px',
    height: '900px',
    backgroundColor: 'gray',
    alignItems: 'center',
    flexDirection: 'column',
});
//img
setStyle(myimg, {
    display: 'flex',
    width: '200px',
    height: '200px',
    backgroundColor: 'black',
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

// 요소 추가
page2.appendChild(myimg);
page2.appendChild(mytexts);








