window.addEventListener('DOMContentLoaded', () =>{

    //form
    const btn = document.querySelector('.form__button');
    const input = document.querySelectorAll('.form__item');
    btn.addEventListener('click', (e) => {
        e.preventDefault();
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
    console.dir(timer);
    
    function getTime() {
        if (window.pageYOffset + document.documentElement.clientHeight >= timer.offsetTop + timer.offsetHeight) {
            const interval =setInterval(function() {
                Number(timer.innerHTML++);
            }, 1000 );
            window.removeEventListener('scroll', getTime);
        }
    }
    window.addEventListener('scroll', getTime);
});
    