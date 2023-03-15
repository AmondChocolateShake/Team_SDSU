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


// 함수 두개를 쓰지말고 한 함수의 조건을 바꿔보자.
// 조건을 걸어서 짝수 번째의 introduceBox는 원과 박스의 위치가 바뀌게 해야한다..

let makeIntroduceBoxArray = ["box1", "box2", "box3", "box4", "box5"];

function introdueBoxMaker(containerElement, childElementOne, childElementTwo) {
  // makeIntroduceBoxArray의 요소 갯수 만큼 반복 진행
  for (let i = 0; i < makeIntroduceBoxArray.length; i++) {
    // 요소 만들고 구조를 생성하는 부분
    const makeIntroduceBox = document.createElement(containerElement);
    const makeCircle = document.createElement(childElementOne);
    const makeBox = document.createElement(childElementTwo);
    page2.appendChild(makeIntroduceBox);
    // 프로필 사진이 들어갈 circle에 id 부여 circle0 ~ circle4
    makeCircle.setAttribute("id", `circle${i}`);
    // 프로필 사진이 들어갈 Box에 id 부여 Box0 ~ Box4
    makeBox.setAttribute("id", `box${i}`);
    
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
  console.log(page2.children[0].children[1]);
  console.log(box0);

  //------------------------
  box0.appendChild(myimg1);
  box0.appendChild(mytexts1);
  box1.appendChild(myimg2);
  box1.appendChild(mytexts2);
  box2.appendChild(myimg3);
  box2.appendChild(mytexts3);
  box3.appendChild(myimg4);
  box3.appendChild(mytexts4);
  box4.appendChild(myimg5);
  box4.appendChild(mytexts5);
  myimg3.appendChild(img);

  myimg1.style.display="none";
  mytexts1.style.display="none";
  myimg2.style.display="none";
  mytexts2.style.display="none";
  myimg3.style.display="none";
  mytexts3.style.display="none";
  myimg4.style.display="none";
  mytexts4.style.display="none";
  myimg5.style.display="none";
  mytexts5.style.display="none";
  


  // 첫번째 자기소개


// 자기소개 transition 적용 반복 구문
  const boxArray = [box0, box1, box2, box3, box4];
  const zIndexSize = [5, 4, 3, 2, 1];
  for(let i = 0; i < 5; i++) {
    boxArray[i].style.setProperty("transition", "height 1s");
    boxArray[i].addEventListener("mouseover",function(){
      boxArray[i].style.setProperty("height","500px")
      myimgArray[i].style.display="flex";
      mytextsArray[i].style.display="flex";
  });

  boxArray[i].addEventListener("mouseout",function(){
    boxArray[i].style.setProperty("height","100%");
    boxArray[i].style.zIndex =zIndexSize[i];
    myimgArray[i].style.display="none";
    mytextsArray[i].style.display="none";
  });
  }
  
// 원에 프로필 사진을 넣는 반복 구문
  const circleArray = [circle0, circle1, circle2, circle3, circle4];

  console.log(circle0);
  for (let i = 0; i < 5; i++) {
    circleArray[i].style.backgroundImage = 'url("./images.png")';
    circleArray[i].style.backgroundPosition = "center";
    circleArray[i].style.backgroundSize = "250px";
  }
};


const myimg1 = document.createElement('div');
const mytexts1 = document.createElement('div');
const myimg2 = document.createElement('div');
const mytexts2 = document.createElement('div');
const myimg3 = document.createElement('div');
const mytexts3 = document.createElement('div');
const myimg4 = document.createElement('div');
const mytexts4 = document.createElement('div');
const myimg5 = document.createElement('div');
const mytexts5 = document.createElement('div');

const text1 = document.createElement('div');
const text2 = document.createElement('div');
const text3 = document.createElement('div');
const text4 = document.createElement('div');
const text5 = document.createElement('div');
const textArray = [text1, text2, text3, text4, text5];

// myimg 배열 생성
const myimgArray = [myimg1, myimg2, myimg3, myimg4, myimg5];
// mytext 배열 생성
const mytextsArray = [mytexts1, mytexts2, mytexts3, mytexts4, mytexts5];
// mytexts >div 5
// let textArray = [text1,text2,text3,text4,text5];

//for(i=0; i<5; i++){
function textMaker(name,parent){
for (let i = 0; i < 5; i++) {
    let name  = document.createElement('div');
    parent.appendChild(name);
    name.style.width="100%";
    name.style.height="20%";
    name.style.backgroundColor="powderblue";
  }
};

textMaker('text1',mytexts1);
textMaker('text2',mytexts2);
textMaker('text3',mytexts3);
textMaker('text4',mytexts4);
textMaker('text5',mytexts5);


//----setStyle  
function setStyle(element, styles) {
    for (const property in styles) {
        element.style[property] = styles[property];
    }
}
const styles = {
  display: 'flex',
  width: '100%',
  height: '30%',
  backgroundColor: 'white',
  borderRadius: '100px',
};

const textStyles = {
  display: 'flex',
  width: '100%',
  height: '70%',
  backgroundColor: 'white',
  alignItems: 'center',
  flexDirection: 'column',
  color: 'white',
  borderRadius: '10px',
};

setStyle(myimg1, styles);
setStyle(mytexts1, textStyles);
setStyle(myimg2, styles);
setStyle(mytexts2, textStyles);
setStyle(myimg3, styles);
setStyle(mytexts3, textStyles);
setStyle(myimg4, styles);
setStyle(mytexts4, textStyles);
setStyle(myimg5, styles);
setStyle(mytexts5, textStyles);

//-------------------


const team = {
    one:["사진","김동주","https://github.com/AmondChocolateShake","","세종",""],
    two:["사진","이재권","https://github.com/nowkwon97","","서구",""],
    three:["사진","정지은","https://github.com/jiny43","je_eun2735@naver.com","서구","자기소개"],
    four:["사진","최대건","https://github.com/DGChoi3904","","유성구",""],
    five:["사진","임지성","https://github.com/WJKK21","","동구",""]
}
console.dir(team);
const teamArray = Object.entries(team);
console.dir(teamArray);
console.dir(teamArray[0]); // one 과 one의 값들
console.dir(teamArray[0][0]); // one
console.dir(teamArray[0][1]); // team.one의 값들
console.dir(teamArray[0][1][0]); // 사진
console.dir(teamArray[0][1][1]); // 김동주
console.dir(teamArray[0][1][2]); // 깃헙주소

let img = document.createElement('img');
img.setAttribute('src','사진테스트.png');
img.style.width = '100%';
img.style.height = '100%';
img.style.borderRadius ='100px';
for(let i = 0; i < 5; i++){
  for(let j = 0; j < 5; j++) {
    mytextsArray[i].children[j].innerText = teamArray[i][1][j];
  };
};



