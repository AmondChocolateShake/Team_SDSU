const root = document.getElementById('root');
const page2 = document.getElementById('page2');
// page2 style
// page2.style.width = "100vw";
// page2.style.height = "100vh";
// page2.style.backgroundColor = "#AADF7F";
// page2.style.display = "flex";
// page2.style.flexDirection = "column";
// page2.style.justifyContent = "space-around";
// page2.style.alignContent = "center-around";

/// 객체화 진행 중
// const page2StyleObject = ["width", "height", "backgroundColor", "display", "flexDirection", "justifyContent", "alignContent"];
// const page2StyleValue = ["100vw", "100vh", "#AADF7F", "flex", "column", "space-around", "center-around"];

// function page2Domstyling (firstArray, secondArray, element) {
//   for (let i = 0; i < firstArray.length; i++) {
//     element.style[firstArray[i]] = secondArray[i];
//   };
// };
// page2Domstyling(page2StyleObject, page2StyleValue, page2);

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
///
// // 원과 박스를 감싸는 div
// const makeIntroduceBox1 = document.createElement('div');
// // 원
// const makeCircle = document.createElement('div');
// // 박스
// const makeBox = document.createElement('div');
// // page2에 원과 박스를 감싸는 div 추가
// page2.appendChild(makeIntroduceBox1);
// // 원과 박스를 감싸는 div 에 원, 박스 추가
// makeIntroduceBox1.appendChild(makeCircle);
// makeIntroduceBox1.appendChild(makeBox)
// // 원과 박스를 감싸는 박스에 id = box1 설정
// makeIntroduceBox1.setAttribute('id', 'box1');
// /// makeIntroduceBox1 style 설정
// // width, height 설정
// makeIntroduceBox1.style.width = "100%";
// makeIntroduceBox1.style.height = "20%";
// // flex 설정
// makeIntroduceBox1.style.display = "flex";
// makeIntroduceBox1.style.justifyContent = "space-around";
// makeIntroduceBox1.style.alignContent = "center";
// /// makeCircle style 설정
// makeCircle.style.width = "15%";
// makeCircle.style.height = "100%";
// makeCircle.style.backgroundColor = "#CB5F5F";
// makeCircle.style.borderRadius = "50%";
// /// makeBox style 설정
// makeBox.style.width = "60%";
// makeBox.style.height = "100%";
// makeBox.style.backgroundColor = "#62A0DA"

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

  
  // 첫번째 자기소개
 box0.style.setProperty("transition", "height 1s");
 box0.addEventListener("mouseover",function(){
  box0.style.setProperty("height","500px")});

  box0.addEventListener("mouseout",function(){
    box0.style.setProperty("height","100%");
    box0.style.zIndex ="5";
  });
  // 두번째 자기소개
  box1.style.setProperty("transition", "height 1s");
  box1.addEventListener("mouseover",function(){
    box1.style.setProperty("height","500px")});

    box1.addEventListener("mouseout",function(){
    box1.style.setProperty("height","100%");
    box1.style.zIndex ="4";
  });

  // 세번째 자기소개
  box2.style.setProperty("transition", "height 1s");
  box2.addEventListener("mouseover",function(){
    box2.style.setProperty("height","500px")});

  box2.addEventListener("mouseout",function(){
    box2.style.setProperty("height","100%");
    box2.style.zIndex ="3";
  });

  // 네번째 자기소개
  box3.style.setProperty("transition", "height 1s");
  box3.addEventListener("mouseover",function(){
    box3.style.setProperty("height","500px")});

  box3.addEventListener("mouseout",function(){
    box3.style.setProperty("height","100%");
    box3.style.zIndex ="2";
  });

  // 다섯번째 자기소개
  box4.style.setProperty("transition", "height 1s");
  box4.addEventListener("mouseover",function(){
    box4.style.setProperty("height","500px")});

  box4.addEventListener("mouseout",function(){
    box4.style.setProperty("height","100%");
    box4.style.zIndex ="1";
  });

  console.log(circle0);
  circle0.style.backgroundImage = 'url("./images.png")';
  circle0.style.backgroundPosition = "center";
  circle0.style.backgroundSize = "250px";
  
  
  circle1.style.backgroundImage = 'url("./images.png")';
  circle1.style.backgroundPosition = "center";
  circle1.style.backgroundSize = "250px";
  
  
  circle2.style.backgroundImage = 'url("./images.png")';
  circle2.style.backgroundPosition = "center";
  circle2.style.backgroundSize = "250px";
  
  
  circle3.style.backgroundImage = 'url("./images.png")';
  circle3.style.backgroundPosition = "center";
  circle3.style.backgroundSize = "250px";
  
  
  circle4.style.backgroundImage = 'url("./images.png")';
  circle4.style.backgroundPosition = "center";
  circle4.style.backgroundSize = "250px";
};
//   // 요소를 만들고 구조를 생성하는 부분
//   const makeIntroduceBox = document.createElement('div');
//   const makeCircle = document.createElement('div');
//   const makeBox = document.createElement('div');
//   page2.appendChild(makeIntroduceBox);
//   // 원, 사각형을 감싸는 div의 id, name 설정
//   makeIntroduceBox.setAttribute(id, idName);
//   // 원, 사각형을 하나의 div에 포함시키기
//   makeIntroduceBox.appendChild(makeCircle);
//   makeIntroduceBox.appendChild(makeBox);

//   makeIntroduceBox.style.width = "100%";
//   makeIntroduceBox.style.height = "15%"
//   makeIntroduceBox.style.display = "flex";
//   makeIntroduceBox.style.justifyContent = "space-around";
//   makeIntroduceBox.style.alignContent = "center"

//   makeCircle.style.width = "10%";
//   makeCircle.style.height = "100%";
//   makeCircle.style.backgroundColor = "#CB5F5F";
//   makeCircle.style.borderRadius = "50%"

//   makeBox.style.width = "70%";
//   makeBox.style.height = "100%";
//   makeBox.style.backgroundColor = "#62A0DA";
//   makeBox.style.borderRadius = "20px";
// };

// function introdueBoxMakerReverse(id, idName) {
//   // 요소를 만들고 구조를 생성하는 부분
//   const makeIntroduceBox = document.createElement('div');
//   const makeCircle = document.createElement('div');
//   const makeBox = document.createElement('div');
//   page2.appendChild(makeIntroduceBox);
// // 원, 사각형을 감싸는 div의 id, name 설정
//   makeIntroduceBox.setAttribute(id, idName);
//   // 원, 사각형을 하나의 div에 포함시키기
//   makeIntroduceBox.appendChild(makeBox)
//   makeIntroduceBox.appendChild(makeCircle);

//   makeIntroduceBox.style.width = "100%";
//   makeIntroduceBox.style.height = "15%"
//   makeIntroduceBox.style.display = "flex";
//   makeIntroduceBox.style.justifyContent = "space-around";
//   makeIntroduceBox.style.alignContent = "center"

//   makeCircle.style.width = "10%";
//   makeCircle.style.height = "100%";
//   makeCircle.style.backgroundColor = "#CB5F5F";
//   makeCircle.style.borderRadius = "50%"

//   makeBox.style.width = "70%";
//   makeBox.style.height = "100%";
//   makeBox.style.backgroundColor = "#62A0DA";
//   makeBox.style.borderRadius = "20px";
// };




