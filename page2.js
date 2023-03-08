













/**-------------------------작업 구분선--------------------------- */
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