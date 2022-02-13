const btns = Array.from(document.getElementsByTagName('button'));

btns.forEach(btn => {
    btn.addEventListener('click', (event) => {

        const targetTxt = btn.parentNode.getElementsByClassName('text')[0];

        if (!targetTxt.classList.contains('opened')){
            console.log('open this. close others')
            Array.from(document.getElementsByClassName('text')).forEach(elem => {
                elem.classList.remove('opened');
                elem.style.height = '0px';
            });
            targetTxt.style.height = targetTxt.scrollHeight + 'px';
            targetTxt.classList.add('opened');
        } else {
            console.log('close this.')
            targetTxt.classList.remove('opened');
            targetTxt.style.height = '0px';
        }

    });
})
