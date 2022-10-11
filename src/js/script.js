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

//modal


document.querySelectorAll('[data-modal="consultation"]').forEach(item => {
    item.addEventListener('click', (e) => {
      document.querySelector('#consultation').classList.add('modal_show');
      document.querySelector('.overlay').classList.add('overlay_show');
    });
});

document.querySelectorAll('.modal__close').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault;
        document.querySelector('#consultation').classList.remove('modal_show');
        document.querySelector('#order').classList.remove('modal_show');
        document.querySelector('#thanks').classList.remove('modal_show');
        document.querySelector('.overlay').classList.remove('overlay_show');
    });
});
 
document.querySelectorAll('.button_mini').forEach((item,i) => {
    item.addEventListener('click', (e) => {
        e.preventDefault;
        document.querySelector('#order .modal__subtitle').textContent = document.querySelectorAll('.catalog-item__subtitle')[i].textContent; 
        document.querySelector('#order').classList.add('modal_show');
        document.querySelector('.overlay').classList.add('overlay_show');

    });
});

//validate

let validateForm = function (selector) {
    const validate = new window.JustValidate(selector/* , {
       errorFieldCssClass: 'is-invalid',
        errorFieldStyle: {
          border: '1px solid red',
        },
        errorLabelCssClass: 'is-label-invalid',
        errorLabelStyle: {
          color: 'red',
          textDecoration: 'underlined',
        },
        focusInvalidField: true,
        lockForm: true,
        tooltip: {
          position: 'top',
        }
    }  */);
    validate
        .addField('.feed-form__name', [
        {
            rule: 'required',
            errorMessage: 'Это поле обязательно',
          }])

        .addField('.feed-form__phone', [
        {
            rule: 'required',
            errorMessage: 'Это поле обязательно',
          }])

        .addField('.feed-form__email',[
            {
              rule: 'required',
              errorMessage: 'Это поле обязательно',
            },
            {
              rule: 'email',
              errorMessage: 'Неверный адресс почты',
            },
          ]);
}

validateForm ('.consultation form');
validateForm ('#consultation form');
validateForm ('#order form');