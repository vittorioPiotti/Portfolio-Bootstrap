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

/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/chart.js@4.4.4/dist/chart.umd.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */

/*!
 * Chart.js v4.4.4
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */

/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */
 
$(document).ready(function() {


    const ctx = document.getElementById('myPieChart').getContext('2d');
    const myPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [' Python', ' Java', ' JavaScript', ' React Native', ' PHP', ' HTML', ' C'],
        datasets: [{
          data: [1, 2, 7, 3, 3, 1, 3], // Quantità degli elementi
          backgroundColor: [
            '#3572A5', // Python
            '#b07219', // Java
            '#f1e05a', // JavaScript
            '#3178C6', // React Native
            '#4F5D95', // PHP
            '#e34c26', // HTML
            '#555555'  // C
          ],
          hoverOffset: 4
        }]
      },
      options: {
        responsive: false,
        plugins: {
          legend: {
            position: 'right', // Imposta la legenda a destra del grafico
            onClick: (e) => e.stopPropagation() // Disabilita l'interazione click sulla legenda
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const label = context.label || '';
                const value = context.raw || 0;
                return `${label}: ${value} progetti`;
              }
            }
          }
        }
      }
    });
    // Handle click on About-Me
    $('#About-Me').click(function() {
        var $this = $(this);
        $this.addClass('active');
        
        // Remove the active class after 0.5 seconds
        setTimeout(function() {
            $this.removeClass('active');
        }, 500);
    });

    // Update padding for nav-elem based on navbar state
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

    // Update padding when the navbar toggler is clicked
    $('.navbar-toggler').on('click', function() {
        // Determine the timeout based on aria-expanded state
        var isOpen = $('.navbar-toggler').attr('aria-expanded') === 'true';
        var timeout = isOpen ? 250 : 0;

        setTimeout(updateNavElemPadding, timeout); // Timeout for waiting for the end of toggle animation
    });

    // Update padding on page load
    updateNavElemPadding();

    // Close navbar when nav-elem is clicked
    $('.nav-elem').on('click', function() {
        var navbarToggler = $('.navbar-toggler');
        if (navbarToggler.attr('aria-expanded') === 'true') {
            setTimeout(function() {
                navbarToggler.click();
            }, 500); // Timeout of 500ms before closing the navbar
        }
    });

    // Toggle active class on nav-elem click
    $('.navbar-nav .nav-elem').click(function() {
        $('.navbar-nav .nav-elem').removeClass('active');
        var $this = $(this);
        $this.addClass('active');
        
        // Remove the active class after 0.5 seconds
        setTimeout(function() {
            $this.removeClass('active');
        }, 500);
    });

    // Adjust layout based on window width
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

    // Initial layout adjustment
    adjustLayout();

    // Adjust layout on window resize
    $(window).resize(function() {
        adjustLayout();
    });

 
    // Handle send button click
    $('#send').click(function() {
    
        

      var name = $('#name').val();
      var email = $('#email').val();
      var object = $('#object').val();
      var message = $('#message').val();


      if(name === '' || email === '' || object === '' || message === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      	 $('#name, #email, #object, #message').removeClass('is-invalid').addClass('is-invalid').prop('disabled', true).addClass('bg-light');
        
      }else{
      

        $.ajax({
          url: 'https://vittoriopiotti.altervista.org/index/server.php?type=write',
          type: 'POST',
          data: {
            name: name,
            email: email,
            object: object,
            message: message
          },
          success: function(response) {
            var result = JSON.parse(response);
            if (result.write && result.write.success) {
              $('#name, #email, #object, #message').addClass('is-valid').removeClass('is-invalid').prop('disabled', true).addClass('bg-light');
            } else {
              $('#name, #email, #object, #message').addClass('is-invalid').removeClass('is-valid').prop('disabled', true).addClass('bg-light');
            }
           
          },
          error: function() {
            $('#name, #email, #object, #message').addClass('is-invalid').removeClass('is-valid').prop('disabled', true).addClass('bg-light');
            
          },
          complete: function() {

          }
        });
        
       }
        setTimeout(function() {
          $('#name, #email, #object, #message').removeClass('is-invalid').removeClass('is-valid').prop('disabled', false).removeClass('bg-light');
        }, 2000);
    });
    
    
});

