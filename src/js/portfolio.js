// import select from 'react-select';

import $ from 'jquery';
$(document).ready(function(){

  $(".filter-button").click(function(){
      var value = $(this).attr('data-filter');
      
      if(value == "all")
      {
          //$('.filter').removeClass('hidden');
          $('.filter').show('1000');
      }
      else
      {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
          $(".filter").not('.'+value).hide('3000');
          $('.filter').filter('.'+value).show('3000');
          
      }
  });
  
  if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});


//New


// window.addEventListener('load', () => {
//     let portfolioContainer = select('.portfolio-container');
//     if (portfolioContainer) {
//       let portfolioIsotope = new Isotope(portfolioContainer, {
//         itemSelector: '.portfolio-item'
//       });

//       let portfolioFilters = select('#portfolio-flters li', true);

//       on('click', '#portfolio-flters li', function(e) {
//         e.preventDefault();
//         portfolioFilters.forEach(function(el) {
//           el.classList.remove('filter-active');
//         });
//         this.classList.add('filter-active');

//         portfolioIsotope.arrange({
//           filter: this.getAttribute('data-filter')
//         });
//         portfolioIsotope.on('arrangeComplete', function() {
//           AOS.refresh()
//         });
//       }, true);
//     }

//   });


//   const portfolioLightbox = GLightbox({
//     selector: '.portfolio-lightbox'
//   });

//   new Swiper('.portfolio-details-slider', {
//     speed: 400,
//     loop: true,
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       type: 'bullets',
//       clickable: true
//     }
//   });
