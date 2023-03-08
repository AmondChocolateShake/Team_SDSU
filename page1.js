
const pageone = document.getElementById("page1");
// 페이지 id 받아옴
let header, title1, title2
// 헤더 타이틀을 위한 선언
header = document.createElement('header')
title1 = document.createElement('h1')
title2 = document.createElement('h2')
// 태그 생성 
pageone.appendChild(header)
header.appendChild(title1)
header.appendChild(title2)
// html에 태그 적용 
header.style.borderStyle = 'solid'
header.style.padding = '100px'
title1.style.borderStyle = 'solid'
title1.style.padding = '10px'
title2.style.borderStyle = 'solid'
title2.style.padding = '10px'





/**-------------------------작업 구분선--------------------------- */

//태그 구조 작성
let tDiscription = document.createElement("section");
let tNameExplain = document.createElement("h3");
tDiscription.appendChild(tNameExplain);
let tWhoWeAre = document.createElement("p");
tDiscription.appendChild(tWhoWeAre);
let tColor = document.createElement("p");
tDiscription.appendChild(tColor);
let tMotto = document.createElement("p");
tDiscription.appendChild(tMotto);
let tPurpose = document.createElement("p");
tDiscription.appendChild(tPurpose);
let tMatJjip = document.createElement("p");
tDiscription.appendChild(tMatJjip);
//태그 컨텐츠(내용물) 설정
tNameExplain.textContent = "팀 명 뜻";
tWhoWeAre.textContent = "우리 팀은 누구인가";
tColor.textContent = "우리의 색깔";
tMotto.textContent = "좌우명";
tPurpose.textContent = "목표";
tMatJjip.textContent = "맛집";
//페이지 
document.getElementById("root").appendChild(section2);

