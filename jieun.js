

    const profile = document.getElementsByClassName('profile');
    const body = document.querySelector('body');
    const root = document.getElementById('root');
    //root >div 5
    
    for(i=0;i<5;i++){
    let divs=document.createElement('div');
    root.appendChild(divs);
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
    styleMaker('root','350px','600px');
    styleMaker('profile','200px','200px');

    function setDisplay(name){
        name.style.display='flex';
        name.style.textAlign='center';
        name.style.flexDirection= 'column';
        name.style.alignItems= 'center';

    }
    setDisplay('body');
    setDisplay('root');
    setDisplay('profile');
    
    root.style.borderRadius="50px";
    root.style.backgroundColor="gray";
    profile.borderRadius="100px";
    profile.style.backgroundColor="gray";
    profile.style.position='relative';
    profile.style.top = '70px';





