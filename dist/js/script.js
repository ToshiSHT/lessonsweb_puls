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
function closeModal (){
    document.querySelector('#consultation').classList.remove('modal_show');
        document.querySelector('#order').classList.remove('modal_show');
        document.querySelector('#thanks').classList.remove('modal_show');
        document.querySelector('.overlay').classList.remove('overlay_show');
        document.querySelectorAll('.feed-form').forEach(item => {
            item.reset();
        })
};
document.querySelectorAll('.modal__close').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault;
        closeModal();
    });
});
/* document.querySelector('.overlay').addEventListener('click', e => {
    e.preventDefault;
    if ( !(e.target === document.querySelectorAll('.modal'))) {
        closeModal();
    }
    

}); */
 
document.querySelectorAll('.button_mini').forEach((item,i) => {
    item.addEventListener('click', (e) => {
        e.preventDefault;
        document.querySelector('#order .modal__subtitle').textContent = document.querySelectorAll('.catalog-item__subtitle')[i].textContent; 
        document.querySelector('#order').classList.add('modal_show');
        document.querySelector('.overlay').classList.add('overlay_show');

    });
});


    async function sendFetch (selector) {
        document.querySelector('.overlay').classList.add('overlay_show');
        document.querySelector('.loading').classList.add('loading_show');
        let formData = new FormData();
        let response = await fetch('mailer/smart.php', {
            method: 'POST',
            body: formData
        });
            console.log(response.ok);
        if (response.ok) {
                 document.querySelector(selector).reset();
                 closeModal();
                 document.querySelector('.overlay').classList.add('overlay_show');
                 document.querySelector('#thanks').classList.add('modal_show');
                 document.querySelector('.loading').classList.remove('loading_show');
                
        } else {
            alert('????????????');
        }
        
         } 


let validateForm = function (selector) {
    const validate = new window.JustValidate(selector, {
        errorLabelCssClass: 'error_Label',
        errorLabelStyle: {},
        errorFieldCssClass: 'error_Field',
    }
    );
    validate
        .addField('.feed-form__name', [
        {
            rule: 'required',
            errorMessage: '?????? ???????? ??????????????????????',
          }])

        .addField('.feed-form__phone', [
        {
            rule: 'required',
            errorMessage: '?????? ???????? ??????????????????????',
          }])

        .addField('.feed-form__email',[
            {
              rule: 'required',
              errorMessage: '?????? ???????? ??????????????????????',
            },
            {
              rule: 'email',
              errorMessage: '???????????????? ???????????? ??????????',
            },
          ])
          
            document.querySelector(selector).addEventListener('submit', e => {
                e.preventDefault;
                 validate.onSuccess((event) => {
                 console.log('validation ok');
                 
                     sendFetch(selector); 

                    });
 
        
            });
   

          document.querySelectorAll('.modal__close').forEach((item,i) => {
            item.addEventListener('click', (e) => {
                e.preventDefault;
                validate.refresh(selector);
        
            });
            })
          
        
        };
validateForm ('.consultation form');
validateForm ('#consultation form');
validateForm ('#order form');


document.querySelectorAll('.feed-form__phone').forEach(item => {
Inputmask({"mask": "+7 (999) 999-9999"}).mask(item);
});

//send mail

// button up
const pageup =document.querySelector('.pageup')

window.addEventListener('scroll', (e) => {
     if (window.pageYOffset > 1600) {
        pageup.classList.add('pageup_show');
     } else{
        pageup.classList.remove('pageup_show');
     }
});
pageup.addEventListener('click', e => {
    document.querySelector('#up').scrollIntoView({block: "center", behavior: "smooth"})

});

