const root = document.getElementById('root');
const page2 = document.getElementById('page2');

// page2 style 객체
let page2DomStyle = {
  firstArray : ["width", "height", "backgroundColor", "display", "flexDirection", "justifyContent", "alignContent"],
  secondArray : ["100vw", "100vh", "#AADF7F", "flex", "column", "space-around", "center-around"],
  element : page2
};
// page2 style 적용 함수
function page2DomStyling (object) {
  for (let i = 0; i < object.firstArray.length; i++) {
    object.element.style[object.firstArray[i]] = object.secondArray[i];
  };
};
page2DomStyling(page2DomStyle);

let makeIntroduceBoxArray = ["box1", "box2", "box3", "box4", "box5"];

function introdueBoxMaker(containerElement, childElementOne, childElementTwo) {
  // makeIntroduceBoxArray의 요소 갯수 만큼 반복 진행
  for (let i = 0; i < makeIntroduceBoxArray.length; i++) {
    // 요소 만들고 구조를 생성하는 부분
    const makeIntroduceBox = document.createElement(containerElement);
    const makeCircle = document.createElement(childElementOne);
    const makeBox = document.createElement(childElementTwo);
    page2.appendChild(makeIntroduceBox);
    // 짝수 번째의 박스 원은 배치를 바꿔주는 조건
    if(i%2 === 0) {
      makeIntroduceBox.appendChild(makeCircle);
      makeIntroduceBox.appendChild(makeBox);
    }else {
      makeIntroduceBox.appendChild(makeBox);
      makeIntroduceBox.appendChild(makeCircle);
    }
    makeIntroduceBox.style.width = "100%";
    makeIntroduceBox.style.height = "15%"
    makeIntroduceBox.style.display = "flex";
    makeIntroduceBox.style.justifyContent = "space-around";
    makeIntroduceBox.style.alignContent = "center"

    makeCircle.style.width = "10%";
    makeCircle.style.height = "100%";
    makeCircle.style.backgroundColor = "#CB5F5F";
    makeCircle.style.borderRadius = "50%"

    makeBox.style.width = "70%";
    makeBox.style.height = "100%";
    makeBox.style.backgroundColor = "#62A0DA";
    makeBox.style.borderRadius = "20px";
  };
};
//----------------지은-------------------
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
    three:["사진","정지은","깃허브","je_eun2735@naver.com","서구","자기소개"],
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


