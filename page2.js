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

for(let i = 0; i < 5; i++) {
  for(let j = 0; j < 5; j++) {
    const asd = document.createElement('div');
    textArray[j].innerText = 'text';
    textArray[j].style.width = '90%';
    textArray[j].style.backgroundColor = 'gray';
    textArray[j].style.display = 'flex';
    textArray[j].style.flexDirection = 'center';
    
    if (j === 4) {
      textArray[j].style.height = '25%';
      textArray[j].style.margin = '2%';

    } else {
      textArray[j].style.height = '15%';
      textArray[j].style.margin = '2%';
    }
  };
  mytextsArray[i].appendChild(textArray[i]);
};

// for (let i = 0; i < 5; i++) {
// const text = document.createElement('div');
//     text.innerText = 'text';
//     text.style.width = '90%';
//     text.style.backgroundColor = 'gray';
//     text.style.display = 'flex';
//     text.style.flexDirection = 'center';
    
//     if (i === 4) {
//     text.style.height = '25%';
//     text.style.margin = '2%';

//     } else {
//     text.style.height = '15%';
//     text.style.margin = '2%';
//     }
//     mytextsArray[2].appendChild(text);
// }
//----setStyle  
function setStyle(element, styles) {
    for (const property in styles) {
        element.style[property] = styles[property];
    }
}
setStyle(myimg1, {
  display: 'flex',
  width: '100%',
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
    width: '100%',
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
  width: '100%',
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
  width: '100%',
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
  width: '100%',
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


console.log(mytexts3.children[0]);
mytexts3.children[0].innerText = team.three[1];
mytexts3.children[1].innerText = team.three[2];
mytexts3.children[2].innerText = team.three[3];
mytexts3.children[3].innerText = team.three[4];
mytexts3.children[4].innerText = team.three[5];




