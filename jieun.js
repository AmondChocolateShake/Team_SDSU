

    const page2 = document.getElementById('page2');
    const root = document.getElementById('root');
  
    function elementMaker(name, target, attri, attriValue) {
        const element = document.createElement(name);
        target.appendChild(element);
            if (attri !== undefined) {
                element.setAttribute(attri, attriValue);
        }
    }

    elementMaker('div','root','id','img');
    elementMaker('div','root','id','text');

    //text >div 5
    for(i=0;i<5;i++){
    let divs=document.createElement('div');
    text.appendChild(divs);
    divs.innerText='text';
    divs.style.width = '100%';
    divs.style.height = '100%';
    }

    function styleMaker(name,width,height){
        name.style.width = width;
        name.style.height = height;
        name.style.display = 'flex';
    }
    styleMaker('body','400px','900px');
    styleMaker('text','350px','600px');
    styleMaker('img','200px','200px');

    function setDisplay(name){
        name.style.display='flex';
        name.style.textAlign='center';
        name.style.flexDirection= 'column';
        name.style.alignItems= 'center';

    }
    setDisplay('body');
    setDisplay('text');
    setDisplay('img');
    
    text.style.borderRadius="50px";
    text.style.backgroundColor="gray";
    text.style.zIndex= '1';
    img.borderRadius="100px";
    img.style.backgroundColor="gray";
    img.style.position='relative';
    img.style.top = '70px';





