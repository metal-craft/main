(function (window, document, undefined) {
    window.onload = init;

    function init() {
        const slider = document.querySelector('.slider');
        const sliderImages = document.querySelectorAll('.slider_img');
        const sliderLine = document.querySelector('.slider_line');
        const sliderBtnNext = document.querySelector('.slider_btn-next');
        const sliderBtnPrev = document.querySelector('.slider_btn-prev');

        let sliderCount = 0;
        let sliderWidht = slider.offsetWidth;
        let sliderMaxImages = sliderImages.length;

        sliderBtnNext.addEventListener('click', nextSlide);
        sliderBtnPrev.addEventListener('click', prevSlide);

        function nextSlide() {
            if (sliderCount < sliderMaxImages-1) {
                sliderCount++;
            } else {
                sliderCount = 0;
            }
            console.log(sliderCount);
            rollSlider();
        }

        function prevSlide() {
            if (sliderCount > 0) {
                sliderCount--;
            } else {
                sliderCount = sliderMaxImages-1;
            } 
            console.log(sliderCount);
            rollSlider();
        }

        function rollSlider() {
            sliderLine.style.transform = `translateX(${-sliderCount * sliderWidht}px)`;
        }
        
        setInterval( () =>{
            nextSlide()
        }, 3000);
    }

})(window, document, undefined);