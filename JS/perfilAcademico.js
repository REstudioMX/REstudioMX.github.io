(function(){
    const sliders = [...document.querySelectorAll('.slider__yellow')];
    // console.log(sliders)
    const arrowNext = document.querySelector('#next2')
    const arrowBefore = document.querySelector('#before2')
    let value;

    arrowNext.addEventListener('click', ()=>changePosition(1));
    arrowBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change) {
        // console.log(change)
        const currentElement = Number(document.querySelector('.slider__yellow--show').dataset.id);
        // console.log(currentElement)

        value = currentElement;
        value+= change;
        // console.log(value)

        console.log(sliders.length)
        if(value === 0 || value == sliders.length+1) {
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('slider__yellow--show');
        sliders[value-1].classList.toggle('slider__yellow--show');
    }
}) ()