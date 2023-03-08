
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