

    // const page2 = document.getElementById('page2');
    // const root = document.getElementById('root');

    // function elementMaker(name, target, attri, attriValue) {
    //     const element = document.createElement(name);
    //     target.appendChild(element);
    //         if (attri !== undefined) {
    //             element.setAttribute(attri, attriValue);
    //     }
    // }
    // elementMaker('div','root','id','img');
    // elementMaker('div','root','id','text');

    // //text >div 5
    // for(i=0;i<5;i++){
    // let divs=document.createElement('div');
    // text.appendChild(divs);
    // divs.innerText='text';
    // divs.style.width = '100%';
    // divs.style.height = '100%';
    // }

    // function styleMaker(name,width,height){
    //     name.style.width = width;
    //     name.style.height = height;
    //     name.style.display = 'flex';
    // }
    // styleMaker('body','400px','900px');
    // styleMaker('text','350px','600px');
    // styleMaker('img','200px','200px');

    // function setDisplay(name){
    //     name.style.display='flex';
    //     name.style.textAlign='center';
    //     name.style.flexDirection= 'column';
    //     name.style.alignItems= 'center';

    // }
    // setDisplay('body');
    // setDisplay('text');
    // setDisplay('img');
    
    // text.style.borderRadius="50px";
    // text.style.backgroundColor="gray";
    // text.style.zIndex= '1';
    // img.borderRadius="100px";
    // img.style.backgroundColor="gray";
    // img.style.position='relative';
    // img.style.top = '70px';

//--------------학원에서 첫번째로 짜본 코드

const page2 = document.getElementById('page2');
const root = document.getElementById('root');

let myimg = document.createElement('div');
page2.appendChild(myimg);


let mytexts = document.createElement('div')
page2.appendChild(mytexts);

//mytexts >div 5
for(i=0;i<5;i++){
let text=document.createElement('div');
mytexts.appendChild(text);

if (i===4){
    mytexts.children[i].style.height = '25%';
    text.style.width = '90%';
    text.style.backgroundColor = 'black';
    text.innerText='text';
}
else{
text.innerText='text';
text.style.width = '90%';
text.style.height = '15%';
text.style.margin = '1%';
text.style.backgroundColor = 'black';
}



}
//------------------------------------------

page2.style.display = 'flex';
page2.style.width ='400px';
page2.style.height = '900px';
page2.style.backgroundColor = 'gray';
page2.style.alignItems = 'center';
page2.style.flexDirection= 'column';

myimg.style.display = 'flex';
myimg.style.width ='200px';
myimg.style.height = '200px';
myimg.style.backgroundColor = 'black';
myimg.style.borderRadius="100px";



mytexts.style.display = 'flex';
mytexts.style.width ='350px';
mytexts.style.height = '600px';
mytexts.style.backgroundColor = 'white';
mytexts.style.display = 'flex';
mytexts.style.alignItems = 'center';
mytexts.style.flexDirection= 'column';
mytexts.style.color = 'white';










