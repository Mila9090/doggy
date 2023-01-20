window.addEventListener('DOMContentLoaded', () =>{
    //select
    const element = document.querySelector('select');
    const choices = new Choices(element);

    element.addEventListener('change', () => {
        const option = document.querySelector('[aria-selected = "true"]');
        if(option.innerText.length >= 21 && document.documentElement.clientWidth > 578) {
            option.innerText = option.innerText.slice(0, 20) + '...'; 
        } 
    });
    
    //form
    const form = document.querySelector('.form');
    const input = document.querySelectorAll('.form__item');
    form.addEventListener('submit', (e) => {
        const option = document.querySelector('[aria-selected = "true"]');
        e.preventDefault();
        option.innerText = "Select service";
        input.forEach(item => {
            item.value = '';
        });
    });
    //Tabs

    const tabs = document.querySelectorAll('.gallery__tabheader-item'),
          tabsContent = document.querySelectorAll('.gallery__tabcontent'),
          tabParent = document.querySelector('.gallery__tabheader-items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show','fade');
        });

        tabs.forEach(item => {
            item.classList.remove('gallery__tabheader-item_active');
        });
    }

    function showTabContent(i = 1) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('gallery__tabheader-item_active');
    }

    hideTabContent();
    showTabContent();
    tabParent.addEventListener('click', (event) => {
        if(event.target && event.target.classList.contains('gallery__tabheader-item')) {
            tabs.forEach((item, i) => {
                if(event.target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        };
    });


    //Timer
    const timer = document.querySelector('.appointment__count');
    timer.innerHTML = 0;

    function getTime() {
        if (window.pageYOffset + document.documentElement.clientHeight >= timer.offsetTop + timer.offsetHeight) {
            const interval = setInterval(function() {
                Number(timer.innerHTML++);
                if (timer.innerHTML >= 200) {
                    clearInterval(interval);
                    timer.innerHTML = `200+`;
                }
            }, 10);
            window.removeEventListener('scroll', getTime);
        }
    }
    window.addEventListener('scroll', getTime);
});
    
