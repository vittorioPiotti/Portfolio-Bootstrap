/*
  Portfolio-Bootstrap v1.0.0 (https://github.com/vittorioPiotti/Portfolio-Bootstrap/releases/tag/1.0.0)
  Copyright 2024 Vittorio Piotti
  Licensed under GPL-3.0 (https://github.com/vittorioPiotti/Portfolio-Bootstrap/blob/main/LICENSE.md)
*/

/*
 Bootstrap v4.5.2 (https://getbootstrap.com/)
 Copyright 2011-2020 The Bootstrap Authors
 Copyright 2011-2020 Twitter, Inc.
 Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/

/*
 jQuery v3.5.1  (https://jquery.com/download/)
 (c) JS Foundation and other contributors
 jquery.org/license Licensed under MIT (https://github.com/jquery/jquery/blob/main/LICENSE.txt)
*/


                                        
$(document).ready(function() {
    $(document).ready(function() {
        $('#About-Me').click(function() {
            var $this = $(this);
            $this.addClass('active');
            
            // Rimuovi la classe active dopo 0.4 secondi
            setTimeout(function() {
                $this.removeClass('active');
            }, 500);
        });
    });

    
    $(document).ready(function(){
        $('a[href^="#"]').on('click', function(event) {
            var target = $(this.getAttribute('href'));
            if(target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 700);
            }
        });
    });

    $(document).ready(function() {
        // Funzione per aggiornare il padding degli elementi nav-elem
        function updateNavElemPadding() {
            if ($('.navbar-toggler').attr('aria-expanded') === 'true') {
                $('.nav-elem').css({
                    'padding-top': '0.5rem',
                    'padding-bottom': '0.5rem',
                    'padding-left': '0',
                    'padding-right': '0'
                });
            } else {
                $('.nav-elem').css({
                    'padding': '0.5rem 1rem'
                });
            }
        }
    
        // Aggiorna il padding quando la navbar viene aperta o chiusa
        $('.navbar-toggler').on('click', function() {
            // Determina il timeout in base allo stato di aria-expanded
            var isOpen = $('.navbar-toggler').attr('aria-expanded') === 'true';
            var timeout = isOpen ? 250 : 0;
    
            setTimeout(updateNavElemPadding, timeout); // Timeout per aspettare la fine dell'animazione del toggle
        });
    
        // Aggiorna il padding al caricamento della pagina
        updateNavElemPadding();
    });
    
    
    $(document).ready(function() {
       // Seleziona tutti gli elementi della nav con la classe "nav-elem"
    $('.nav-elem, #About-Me').on('click', function() {
        var navbarToggler = $('.navbar-toggler');
        if (navbarToggler.attr('aria-expanded') === 'true') {
            setTimeout(function() {
                navbarToggler.click();
            }, 500); // Timeout di 200ms prima di chiudere la navbar
        }
    });
    });
    $(document).ready(function() {
        $('.navbar-nav .nav-elem').click(function() {
            $('.navbar-nav .nav-elem').removeClass('active');
            var $this = $(this);
            $this.addClass('active');
            
            // Rimuovi la classe active dopo 0.4 secondi
            setTimeout(function() {
                $this.removeClass('active');
            }, 500);
        });
    });
    
    function adjustLayout() {
        if ($(window).width() <= 766) {
            $('#left-content').css({
                'flex-direction': 'row',
                'align-items': 'center',
                'justify-content': 'flex-start',
                'text-align': 'center'
            });
            $('#responsive-image').css({
                'width': '90px',
                'height': '90px'
            });
            $('#inner-left-content').addClass('text-start').removeClass('text-center').addClass('d-flex').removeClass('d-block');
            $('#status-space').addClass('m-0');
            $('p').css({
                'text-align': 'left',
                'margin-left': '1rem'
            });
        } else {
            $('#left-content').css({
                'text-align': 'center'
            });
            $('#responsive-image').css({
                'width': '290px',
                'height': '290px'
            });
            $('#inner-left-content').removeClass('text-start').addClass('text-center').removeClass('d-flex').addClass('d-block');
            $('#status-space').removeClass('m-0');
            $('p').css({
                'text-align': 'left',
                'margin-left': '1rem'
            });
        }
    }

    // Initial adjustment
    adjustLayout();

    // Adjust on window resize
    $(window).resize(function() {
        adjustLayout();
    });
});
