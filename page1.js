//기본 페이지1 연결
const pageOne = document.getElementById("page1");
// 중복적용할 클래스 셋 작성.
const classSet = {
  flex : {
    display : "flex",
    flexDirection : "column",
    justifyContent: undefined,
    alignItems: undefined
  }
}
//테스트용 요소들 스타일 작성
const styleSet = {
  page1 : {
    width: "100vw",
    minHeight : "100vh",
    backgroundColor : "88D4F4"
  },
  section1 : {
    width : "100%",
    height : "10vh",
    backgroundColor : "#C8B074",
  },
  titleH1 : {
    textAlign: "center",
    fontSize: "3.5em"
  },
  titleH2 : {
    textAlign: "center",
    fontSize: "2em",
  },
}
// 기본 객체 생성 예시 작성
// const sectionOne = {
//   type : "section",
//   id : undefined,
//   class : undefined,
//   textContent : undefined,
//   style : {
//     width : "100%",
//     height : "10vh",
//     backgroundColor : "#C8B074",
//   },
//   parent : pageOne,
//   children : ["h1","h2"],
// }

//요소를 제작하고 그것을 객체에 담아 반환하는 함수 작성
function elementMaker (type) {
  let element = document.createElement(type);
  const item = {
    element : element,
    type : element.localName,
    id : element.id,
    class : element.classList,
    textContent : element.textContent,
    style : element.style,
    parent : element.parentElement,
    child : element.children,
  }
  return item;
}
//작성한 함를 테스트하기위해 임시 작성한 appendChild를 하는 함수
function addChild(parent, childobj){
  parent.appendChild(childobj.element);
}
//테스트용 구문.
const section1 = elementMaker("section");
console.log(section1);
console.log(document.getElementById('page1'));
addChild(pageOne,section1);