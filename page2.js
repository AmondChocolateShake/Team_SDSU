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
    // 프로필 images.png이 들어갈 circle에 id 부여 circle0 ~ circle4
    makeCircle.setAttribute("id", `circle${i}`);
    // 프로필 images.png이 들어갈 Box에 id 부여 Box0 ~ Box4
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

  myimg1.appendChild(img1);
  myimg2.appendChild(img2);
  myimg3.appendChild(img3);
  myimg4.appendChild(img4);
  myimg5.appendChild(img5);


  

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

// let trans = false;
// if (trans) {
//   myimg.style.display="none";
//   mytexts.style.display="none";
//   trans = false;
// } else {
//   myimg.style.display="flex";
//   mytexts.style.display="flex";
//   trans = true;
// }

  box0.style.setProperty("transition", "height 1s");

  box0.addEventListener("mouseover",function(){
  box0.style.setProperty("height","500px")
  myimg1.style.display="flex";
  mytexts1.style.display="flex";
});

  box0.addEventListener("mouseout",function(){
    box0.style.setProperty("height","100%");
    box0.style.zIndex ="5";
    myimg1.style.display="none";
    mytexts1.style.display="none";
   

  });
  // 두번째 자기소개
  box1.style.setProperty("transition", "height 1s");
  box1.addEventListener("mouseover",function(){
    box1.style.setProperty("height","500px")
    myimg2.style.display="flex";
    mytexts2.style.display="flex";});

    box1.addEventListener("mouseout",function(){
    box1.style.setProperty("height","100%");
    box1.style.zIndex ="4";
    myimg2.style.display="none";
    mytexts2.style.display="none";
  });

 
  // 세번째 자기소개
  box2.style.setProperty("transition", "height 1s");
  box2.addEventListener("mouseover",function(){
    box2.style.setProperty("height","500px")
    myimg3.style.display="flex";
    mytexts3.style.display="flex";
  }
  );

  box2.addEventListener("mouseout",function(){
    box2.style.setProperty("height","100%");
    box2.style.zIndex ="3";
    myimg3.style.display="none";
    mytexts3.style.display="none";
  
  });

  // 네번째 자기소개
  box3.style.setProperty("transition", "height 1s");
  box3.addEventListener("mouseover",function(){
    box3.style.setProperty("height","500px")
    myimg4.style.display="flex";
    mytexts4.style.display="flex";});

  box3.addEventListener("mouseout",function(){
    box3.style.setProperty("height","100%");
    box3.style.zIndex ="2";
    myimg4.style.display="none";
    mytexts4.style.display="none";
  });

  // 다섯번째 자기소개
  box4.style.setProperty("transition", "height 1s");
  box4.addEventListener("mouseover",function(){
    box4.style.setProperty("height","500px")
    myimg5.style.display="flex";
    mytexts5.style.display="flex";});

  box4.addEventListener("mouseout",function(){
    box4.style.setProperty("height","100%");
    box4.style.zIndex ="1";
    myimg5.style.display="none";
    mytexts5.style.display="none";
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

// ----------------------
// function elementMaker(tagName,target){
//   const mytexts = document.createElement(tagName);
//   const myimg = document.createElement(tagName);
//   target.appendChild(mytexts);
//   target.appendChild(myimg);

// }
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
setStyle(myimg1, {
  display: 'flex',
  width: '50%',
  height: '30%',
  backgroundColor: 'white',
  borderRadius: '100px',
});
//text
setStyle(mytexts1, {
  display: 'flex',
  width: '100%',
  height: '70%',
  backgroundColor: 'white',
  alignItems: 'center',
  flexDirection: 'column',
  color: 'white',
  borderRadius: '10px',

});

setStyle(myimg2, {
    display: 'flex',
    width: '50%',
    height: '30%',
    backgroundColor: 'white',
    borderRadius: '100px',
});

setStyle(mytexts2, {
    display: 'flex',
    width: '100%',
    height: '70%',
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'white',
    borderRadius: '10px',

});
setStyle(myimg3, {
  display: 'flex',
  width: '50%',
  height: '30%',
  backgroundColor: 'white',
  borderRadius: '100px',
});
//text
setStyle(mytexts3, {
  display: 'flex',
  width: '100%',
  height: '70%',
  backgroundColor: 'white',
  alignItems: 'center',
  flexDirection: 'column',
  color: 'white',
  borderRadius: '10px',

});
setStyle(myimg4, {
  display: 'flex',
  width: '50%',
  height: '30%',
  backgroundColor: 'white',
  borderRadius: '100px',
});
//text
setStyle(mytexts4, {
  display: 'flex',
  width: '100%',
  height: '70%',
  backgroundColor: 'white',
  alignItems: 'center',
  flexDirection: 'column',
  color: 'white',
  borderRadius: '10px',

});
setStyle(myimg5, {
  display: 'flex',
  width: '50%',
  height: '30%',
  backgroundColor: 'white',
  borderRadius: '100px',
});
//text
setStyle(mytexts5, {
  display: 'flex',
  width: '100%',
  height: '70%',
  backgroundColor: 'white',
  alignItems: 'center',
  flexDirection: 'column',
  color: 'white',
  borderRadius: '10px',

});


const team = {
    one:["images.png","김동주","https://github.com/AmondChocolateShake","","세종",""],
    two:["images.png","이재권","https://github.com/nowkwon97","","서구","프론트와 백을 자유롭게 다루는 풀스텍 개발자가 되기위해 노력중인 개발자입니다. 앞으로의 모습을 기대해주시기 바랍니다!"],
    three:["images.png","정지은","https://github.com/jiny43","je_eun2735@naver.com","서구","자기소개"],
    four:["images.png","최대건","https://github.com/DGChoi3904","","유성구",""],
    five:["images.png","임지성","https://github.com/WJKK21","","동구",""]
}

let img1 = document.createElement('img');
img1.setAttribute('src',team.one[0]);
img1.style.width = '100%';
img1.style.height = '100%';
img1.style.borderRadius ='100px';

let img2 = document.createElement('img');
img2.setAttribute('src',team.two[0]);
img2.style.width = '100%';
img2.style.height = '100%';
img2.style.borderRadius ='100px';

let img3 = document.createElement('img');
img3.setAttribute('src',team.three[0]);
img3.style.width = '100%';
img3.style.height = '100%';
img3.style.borderRadius ='100px';

let img4 = document.createElement('img');
img4.setAttribute('src',team.four[0]);
img4.style.width = '100%';
img4.style.height = '100%';
img4.style.borderRadius ='100px';

let img5 = document.createElement('img');
img5.setAttribute('src',team.five[0]);
img5.style.width = '100%';
img5.style.height = '100%';
img5.style.borderRadius ='100px';

// console.dir(team);
// const teamArray = Object.entries(team);
// console.dir(teamArray);
// console.dir(teamArray[0]); // one 과 one의 값들
// console.dir(teamArray[0][0]); // one
// console.dir(teamArray[0][1]); // team.one의 값들
// console.dir(teamArray[0][1][0]); // 사진
// console.dir(teamArray[0][1][1]); // 김동주
// console.dir(teamArray[0][1][2]); // 깃헙주소

// // let img = document.createElement('img');
// // img.setAttribute('src','사진테스트.png');
// // img.style.width = '100%';
// // img.style.height = '100%';
// // img.style.borderRadius ='100px';
// for(let i = 0; i < 5; i++){
//   for(let j = 0; j < 5; j++) {
//     mytextsArray[i].children[j].innerText = teamArray[i][1][j];
//   };
// };

mytexts1.children[0].innerText = team.one[1];
mytexts1.children[1].innerText = team.one[2];
mytexts1.children[2].innerText = team.one[3];
mytexts1.children[3].innerText = team.one[4];
mytexts1.children[4].innerText = team.one[5];

mytexts2.children[0].innerText = team.two[1];
mytexts2.children[1].innerText = team.two[2];
mytexts2.children[2].innerText = team.two[3];
mytexts2.children[3].innerText = team.two[4];
mytexts2.children[4].innerText = team.two[5];

mytexts3.children[0].innerText = team.three[1];
mytexts3.children[1].innerText = team.three[2];
mytexts3.children[2].innerText = team.three[3];
mytexts3.children[3].innerText = team.three[4];
mytexts3.children[4].innerText = team.three[5];

mytexts4.children[0].innerText = team.four[1];
mytexts4.children[1].innerText = team.four[2];
mytexts4.children[2].innerText = team.four[3];
mytexts4.children[3].innerText = team.four[4];
mytexts4.children[4].innerText = team.four[5];

mytexts5.children[0].innerText = team.five[1];
mytexts5.children[1].innerText = team.five[2];
mytexts5.children[2].innerText = team.five[3];
mytexts5.children[3].innerText = team.five[4];
mytexts5.children[4].innerText = team.five[5];



