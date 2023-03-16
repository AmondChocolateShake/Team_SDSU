// 페이지 id 받아옴
const pageone = document.getElementById("page1");


// 헤더 타이틀을 위한 선언
let header, title1, title2

// 태그 생성 
header = document.createElement('header')
title1 = document.createElement('h1')
title2 = document.createElement('h2')

// html에 태그 적용 
pageone.appendChild(header)
header.appendChild(title1)
header.appendChild(title2)

//hader 
header.style.background = '#C8B074';
header.style.height = '20vh';
header.style.padding = '1vh';
//console.dir(header);
header.style.justifyContent = 'center';
header.style.textAlign = 'center';

//title 1 제목 
title1.style.padding = '10px';
title1.textContent = '세동서유';
title1.fontWeight = ' 100px';

console.dir(title1);

//title 2 한자 내용  
title2.style.padding = '10px';
title2.textContent = '世 인간 세 霘 급할 동 敍 펼 서 流 흐를 유';

// root
let root = document.getElementById('root')
root.style.background = '#88D4F4';

// 


/**-------------------------작업 구분선--------------------------- */

//태그 구조 작성
let tDiscription = document.createElement("section");
let tDiscriptionContainer = document.createElement("div");
let tNameExplain = document.createElement("div");
tDiscription.appendChild(tDiscriptionContainer);
tDiscriptionContainer.appendChild(tNameExplain);
//이름 설명
tNameExplainTopic = document.createElement("div")
tNameExplainAnswer = document.createElement("div")
tNameExplain.appendChild(tNameExplainTopic)
tNameExplain.appendChild(tNameExplainAnswer)
let tWhoWeAre = document.createElement("div");
tDiscriptionContainer.appendChild(tWhoWeAre);
let tColor = document.createElement("div");
tDiscriptionContainer.appendChild(tColor);
let tMotto = document.createElement("div");
tDiscriptionContainer.appendChild(tMotto);
let tPurpose = document.createElement("div");
tDiscriptionContainer.appendChild(tPurpose);
let tMatJjip = document.createElement("div");
tDiscriptionContainer.appendChild(tMatJjip);
//태그 컨텐츠(내용물) 설정
tNameExplainTopic.textContent = "팀 세동서유(世霘敍流)란?";
tNameExplainAnswer.textContent = "팀 세동서유는 이러이러해서 저러저러합니다."
tWhoWeAre.textContent = "우리 팀은 누구인가";
tColor.textContent = "우리의 색깔";
tMotto.textContent = "좌우명";
tPurpose.textContent = "목표";
tMatJjip.textContent = "맛집";
//태그 스타일 설정
function setStyle(styleSet, node) {
  for(let styleKey in styleSet){
    node.style[styleKey] = styleSet[styleKey];
  }
}

//tDiscription
// //크기 설정
// tDiscription.style.maxWidth = "96vw";
// tDiscription.style.maxHeight = "76vh";
// tDiscription.style.boxSizing = "border-box";
// //디스플레이 설정
// tDiscription.style.display = "flex";
// tDiscription.style.flexDirection = "column";
// //여백 설정
// tDiscription.style.margin = "2vh 2vw";
// tDiscription.style.padding = "2vh 2vw";
// //색상 설정
// tDiscription.style.backgroundColor = "#D9D9D9";

// tNameExplain
// //크기 설정
// tNameExplain.style.maxWidth = "100%";
// tNameExplain.style.height = "20%";
// tNameExplain.style.boxSizing = "border-box";
// //디스플레이 설정
// //여백 설정
// tNameExplain.style.margin = "2vh 0";
// tNameExplain.style.padding = "2vh 0";
// //색상 설정
// tNameExplain.style.backgroundColor = "#D06D6D";


//페이지 연결
document.getElementById("page1").appendChild(tDiscription);

//객체로 저장
let tDiscriptionStyle = {
  maxWidth : "100vw",
  maxHeight : "80vh",
  backgroundColor : "88D4F4",
  display : "flex",
  justifyContent : "center",
  alignItems : "center",
}
let tDiscriptionContainerStyle = {
  //크기 설정
  minWidth : "96vw", 
  maxWidth : "96vw",
  maxHeight : "76vh",
  boxSizing : "border-box",
  //디스플레이 설정
  display : "flex",
  flexDirection : "column",
  justifyContent : "center",
  alignItems : "baseline",
  //여백 설정
  margin : "24px 24px",
  padding : "24px 24px",
  //색상 설정
  backgroundColor : "#D9D9D9",
  //폰트 설정
  textAlign : "start",
  fontSize : "1.5em",
  lineHeight : "2em",
}
let tNameExplainStyle = {
  width : "100%",
  height : "20%",
  boxSizing : "border-box",
  //여백 설정
  padding : "24px 24px",
  //색상 설정
  backgroundColor : "#D06D6D",
  //디스플레이 설정
  display : "flex",
  flexDirection : "column",
  lineHeight : "2em",

} 
setStyle(tDiscriptionStyle, tDiscription);
setStyle(tDiscriptionContainerStyle, tDiscriptionContainer);
setStyle(tNameExplainStyle,tNameExplain);