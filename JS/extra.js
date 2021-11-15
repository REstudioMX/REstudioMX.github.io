(function(){
    const titleExtra = [...document.querySelectorAll('.copy__extra')];
    // console.log(titleExtra)

    titleExtra.forEach(question => {
        question.addEventListener('click', ()=> {
            // alert('Actividades Extracurriculares Bri')
                let height = 0;
                let answer = question.nextElementSibling;
                let addPadding = question.parentElement.parentElement;

                addPadding.classList.toggle('extra__padding--add');
                question.children[0].classList.toggle('extra__arrow--rotate');

                if(answer.clientHeight === 0){
                    height = answer.scrollHeight;
                }

                answer.style .height = `${height}px`
        })
    });
})();