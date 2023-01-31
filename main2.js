$(document).ready(function() {
    var healthValue = 100;
    var hungerValue = 0;
  
    $("#set-pet-name-button").click(function() {
      var petName = $("#pet-name-input").val();
      $(".pet-name").text(petName);
    });
  
    $("#feed-button").click(function() {
      hungerValue -= 20;
      if (hungerValue < 0) {
        hungerValue = 0;
      }
      updateValues();
    });
  
    $("#clean-button").click(function() {
      healthValue += 20;
      if (healthValue > 100) {
        healthValue = 100;
      }
      updateValues();
    });
  
    $("#play-button").click(function() {
      healthValue -= 10;
      hungerValue += 10;
      updateValues();
    });
  
    function updateValues() {
      $("#health-value").text(healthValue);
      $("#hunger-value").text(hungerValue);
  
      if (healthValue <= 0 || hungerValue >= 100) {
        $(".pet-image").attr("src", "./images/dead.png");
      } else if (hungerValue >= 50) {
        $(".pet-image").attr("src", "./images/sad.gif");
      } else {
        $(".pet-image").attr("src", "./images/happy.gif");
      }
    }
  });
  