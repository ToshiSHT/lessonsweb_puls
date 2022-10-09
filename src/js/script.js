const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    center: true,
    controls: false,
    navPosition: 'bottom',
    responsive: {
        320:{
            nav: true,
            edgePadding: 20,
            gutter: 20,
        },
        900: {
          nav: false
        }
      }
  });
  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });


    const tab = document.querySelectorAll('.catalog__tab');
    tab.forEach((item,i) => {
        item.addEventListener('click', e => {
            e.preventDefault();
            tab.forEach(item => {
                item.classList.remove('catalog__tab_active');
            });
            tab[i].classList.add('catalog__tab_active');
            document.querySelectorAll('.catalog__content').forEach(item => {
                item.classList.remove('catalog__content_active')
            });
            document.querySelectorAll('.catalog__content')[i].classList.add('catalog__content_active');

        }) 
    });

const itemLink = document.querySelectorAll('.catalog-item__link'),
      backLink = document.querySelectorAll('.catalog-item__back')

function toggleCart (toggleLink) {
    toggleLink.forEach((item,i) => {
        item.addEventListener('click', e => {
            e.preventDefault();
        document.querySelectorAll('.catalog-item__content')[i].classList.toggle('catalog-item__content_active');
        document.querySelectorAll('.catalog-item__list')[i].classList.toggle('catalog-item__list_active');
        })
    });
}
toggleCart (itemLink);
toggleCart (backLink);