$(document).ready(function() {
    counter = 0;

    // Function to smoothly fade in the data
    function fadeInData(index, data) {
      $('.customer-comment').fadeOut('slow', function() {
        $(this).text(data[index].comment).fadeIn('slow');
      });
  
      $('.customer-name').fadeOut('slow', function() {
        $(this).text(data[index].name).fadeIn('slow');
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