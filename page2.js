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
const page2StyleObject = ["width", "height", "backgroundColor", "display", "flexDirection", "justifyContent", "alignContent"];
const page2StyleValue = ["100vw", "100vh", "#AADF7F", "flex", "column", "space-around", "center-around"];

// let page2DomStyle = {
//   firstArray : ["width", "height", "backgroundColor", "display", "flexDirection", "justifyContent", "alignContent"],
//   secondArray : ["100vw", "100vh", "#AADF7F", "flex", "column", "space-around", "center-around"],
//   element : root.children[1]
// };

function page2Domstyling (firstArray, secondArray, element) {
  for (let i = 0; i < firstArray.length; i++) {
    element.style[firstArray[i]] = secondArray[i];
  };
};
page2Domstyling(page2StyleObject, page2StyleValue, page2);
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
function introdueBoxMaker(id, idName) {
  const makeIntroduceBox = document.createElement('div');
  const makeCircle = document.createElement('div');
  const makeBox = document.createElement('div');
  page2.appendChild(makeIntroduceBox);
  makeIntroduceBox.setAttribute(id, idName);
  
  makeIntroduceBox.appendChild(makeCircle);
  makeIntroduceBox.appendChild(makeBox);

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
function introdueBoxMakerReverse(id, idName) {
  const makeIntroduceBox = document.createElement('div');
  const makeCircle = document.createElement('div');
  const makeBox = document.createElement('div');
  page2.appendChild(makeIntroduceBox);
  makeIntroduceBox.setAttribute(id, idName);
  
  makeIntroduceBox.appendChild(makeBox)
  makeIntroduceBox.appendChild(makeCircle);

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
