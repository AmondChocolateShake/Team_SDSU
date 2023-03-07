function elementMaker (type) {
  const item = {
    element : El = document.createElement(type),
    //엘리먼트의 타입.
    type : function() {return this.element.localName},
    //엘리먼트의 id설정
    id : function() {return this.element.id},
    //엘리먼트의 클래스 리스트
    class : function(){return this.element.classList},
    //엘리먼트의 텍스트 컨텐츠(다른 엘리먼트 제외)
    textContent : function(){return this.element.textContent},
    //엘리먼트의 스타일
    style : function(){
      let list = {};
      for(let property in this.element.style){
        if(this.element.style[property] != ""){
          list[property] = this.element.style[property];
        }
      }
      return list;
    },
    //엘리먼트의 부모
    parent : function(){return this.element.parentElement},
    //엘리먼트의 자식들
    child : function(){return this.element.children},
  }
  return item;
}

const div = elementMaker("div");
div.element.style.width = "100px";
console.log(div);
console.dir(div);