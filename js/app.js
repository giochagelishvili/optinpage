$(document).ready(function() {
    counter = 0;

    $(".open-menu-icon").on('click', function() {
        $('.nav-menu').slideToggle(300);
    });

    $(".nav-link, .underline, button").on('click', function() {
        alert('This would take you to another page');
    });

    // Function to smoothly fade in the data
    function fadeInData(index, data) {
      $('.customer-comment').fadeOut('150', function() {
        $(this).text(data[index].comment).fadeIn('150');
      });
  
      $('.customer-name').fadeOut('150', function() {
        $(this).text(data[index].name).fadeIn('150');
      });
    }

    // Load JSON data from the external file
    $.getJSON('data/data.json', function(data) {
        var jsonData = data;
    
        // Load the first data into the elements on page load
        fadeInData(counter, jsonData);
    });
  
    $("#arrow-left").on('click', function() {
        // Load JSON data from the external file
        $.getJSON('data/data.json', function(data) {
            var jsonData = data;

            counter = counter - 1;

            if (counter < 0) {
                counter = (jsonData.length) - 1;
            }
        
            // Load the first data into the elements on page load
            fadeInData(counter, jsonData);
        });
    });

    $("#arrow-right").on('click', function() {
        // Load JSON data from the external file
        $.getJSON('data/data.json', function(data) {
            var jsonData = data;

            counter = counter + 1;

            if (counter > jsonData.length - 1) {
                counter = 0;
            }
        
            // Load the first data into the elements on page load
            fadeInData(counter, jsonData);
        });
    });
  });