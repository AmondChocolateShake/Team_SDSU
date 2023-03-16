//단일 프로젝트 컨테이너 객체 생성하고 return하는 캡슐화 함수
//module.exports으로 export함.
module.exports = function projContainer() {
    const projContainer = {
    //이 그룹의 부모 역활을 할 태그
    main : document.createElement('div'),
    //그룹의 자식역활을 맡는 태그
    sub : {
      //sub Container #1 child - picture, projDiscription
      shortContainer : document.createElement('div'),
      picture : document.createElement('img'),
      //sub conatiner #2 child - title, explainShort
      projDiscription : document.createElement('div'),
      title : document.createElement('div'),
      explainShort : document.createElement('div'),
      explainFull : document.createElement('div'),
      //sub Container #3 child - button1,button2
      btnContainer : document.createElement('div'),
      btnProduct : document.createElement('button'),
      btnCode : document.createElement('button'),
    },
    //텍스트 컨텐츠가 들어갈 태그들 내용
    textContent : {
      title : "여기가 타이틀입니다.",
      explainShort : "여기가 프로젝트 한줄 설명란입니다.",
      explainFull : "여기가 프로젝트 긴 설명란입니다. 기입하고 싶은 것을 기입해주세요.",
      btnProduct : "-실행하기-",
      btnCode : "-코드보기-"
    },
    //모든 태그의 스타일셋
    styleSet : {
      //Parent Tag
        main : {
        width : "100%",
        height : "auto",
        minHeight : "30vh",
        boxSizing : "border-box",
        padding: "24px",
        border : "1px solid black",
        borderRadius : "24px",
        backgroundColor : "#d9d9d9",
        display : "flex",
        flexDirection : "column",
        transition : "height 1s"
      },
      //Child Tag
      shortContainer : {
        width : "100%",
        height : "auto",
        boxSizing : "border-box",
        display : "flex",
      },
      picture : {
        minWidth : "200px",
        minHeight : "200px",
        height : "auto",
        boxSizing : "border-box",
        border : "1px solid black",
        borderRadius : "25%",
        backgroundColor : "#58BF69",
        display : "flex",
      },
      projDiscription : {
        width : "100%",
        height : "auto",
        boxSizing : "border-box",
        padding : "12px 12px",
      },
      title : {
        width : "auto",
        height : "3em",
        boxSizing : "border-box",
        border : "1px solid black"
      },
      explainShort : {
        width : "100%",
        height : "2em",
        boxSizing : "border-box",
        marginTop : "12px",
        border : "1px solid black"
      },
      explainFull : {
        width : "100%",
        height : "2em",
        boxSizing : "border-box",
        marginTop: "12px",
        padding: "24px 24px",
        border : "1px solid black"
      },
      btnContainer : {
        width : "100%",
        height : "auto",
        boxSizing : "border-box",
        padding : "12px",
        display: "flex",
        justifyContent : "flex-end"
      }
    },
    //메서드, 호출시 객체 안 부모에게 자식을 정해진 규칙대로 할당한다.
    setChildren() {
      for(let child in this.sub){
        if(child === "picture" || child === "projDiscription"){
          this.sub.shortContainer.appendChild(this.sub[child]);
        }else if(child === "title" || child === "explainShort"){
          this.sub.projDiscription.appendChild(this.sub[child]);
        } else if(child ==="btnProduct" || child ==="btnCode"){
          this.sub.btnContainer.appendChild(this.sub[child]);
        } else {
          this.main.appendChild(this.sub[child]);
        }
      }  
    },
    //메서드, 호출시 객체안 모든 태그들의 스타일을 설정한다.
    setAllStyle(){
      for(let subKey in this.styleSet){
          for(let styleKey in this.styleSet[subKey]){
            //스타일셋의 서브키가 main일 경우
            if(subKey === "main"){
              this.main.style[styleKey] = this.styleSet[subKey][styleKey];
            } else { // 그외
              this.sub[subKey].style[styleKey] = this.styleSet[subKey][styleKey];
            }
          }
      }
    },
    //메서드, 호출시 지정된 텍스트 내용을 지정한 태그에 삽입한다.
    setTextContent() {
      for(let tcKey in this.textContent){
        this.sub[tcKey].textContent = this.textContent[tcKey];
      }
    },
    setTitle(text){
      this.sub[title].textContent = text;
    },
    setShortDiscription(text){
      this.sub[explainShort].textContent = text;
    },
    setFullDiscription(text){
      this.sub[explainFull].textContent = text;
    }
  }
  projContainer.setChildren();
  projContainer.setAllStyle();
  projContainer.setTextContent();
  projContainer.main.addEventListener('click', function(){
  
  });
  return projContainer;
}

//메서드 작성용 함수 테스트
//부모 태그에 자식들을 할당하는 함수.
  function start() {
    //배열용 appendChild구문
    for(let i=0; i < projContainer.sub.length; i++){
      if(i === 2 || i === 3){
          console.log(i);
          projContainer.sub[1].appendChild(projContainer.sub[i]);
        } else 
          projContainer.main.appendChild(projContainer.sub[i]);
    }
    //객체용 appendChild구문
    for(let child in projContainer.sub){
      if(child === "picture" || child === "projDiscription"){
        projContainer.sub.shortContainer.appendChild(projContainer.sub[child]);
      }else if(child === "title" || child === "explainShort"){
        projContainer.sub.projDiscription.appendChild(projContainer.sub[child]);
      } else if(child ==="btnProduct" || child ==="btnCode"){
        projContainer.sub.btnContainer.appendChild(projContainer.sub[child]);
      } else {
        projContainer.main.appendChild(projContainer.sub[child]);
      }

    }
  }
//모든 태그의 스타일을 배정하는 함수
function setAllStyle(){
  for(let subKey in projContainer.styleSet){
    console.log(subKey);
      for(let styleKey in projContainer.styleSet[subKey]){
        //스타일셋의 서브키가 main일 경우
        if(subKey === "main"){
          projContainer.main.style[styleKey] = projContainer.styleSet[subKey][styleKey];
        } else { // 그외
          projContainer.sub[subKey].style[styleKey] = projContainer.styleSet[subKey][styleKey];
        }
      }
  }
}
//지정된 텍스트 컨텐츠를 배정하는 함수
function setTextContent() {
  for(let tcKey in projContainer.textContent){
    projContainer.sub[tcKey].textContent = projContainer.textContent[tcKey];
  }
}
// const root = document.getElementById('root');
// projContainer.setChildren();
// projContainer.setAllStyle();
// projContainer.setTextContent();
// projContainer.main.addEventListener('click', function(){
  
// });
// root.appendChild(projContainer.main);
// console.dir(projContainer.element);