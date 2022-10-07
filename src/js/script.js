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