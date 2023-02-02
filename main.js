
    let healthValue = 100;
    let hungerValue = 0;
    const imageT = document.querySelector(".tamagotchi-image");
    const progressBar_hunger = document.querySelector(".progress-bar-hunger");
    const progressBar_health = document.querySelector(".progress-bar-health");
    const feed_button = document.querySelector("#feed-button");
    const clean_button = document.querySelector("#clean-button");
    const play_button = document.querySelector("#play-button");
    

    let setIntervalHungry = setInterval(function() {
        hungerValue += 10;
        if (hungerValue > 100) {
          clearInterval(this);
          hungerValue = 100;
        }
        updateValuesHunger();
      }, 2000);

      
      
    let setIntervalHealth = setInterval(function() {
        if(hungerValue == 100){
            healthValue -= 5;
            if (healthValue < 0) {
            clearInterval(this);
            healthValue = 0;
            }
        }
        updateValuesHealth()
    }, 2000);


    feed_button.addEventListener("click", function() {
      hungerValue -= 10;
        if (hungerValue < 0) {
            hungerValue = 0;
        }
        updateValuesHunger()
      });

      clean_button.addEventListener("click", function() {
        healthValue += 5;
        if (healthValue > 100) {
          healthValue = 100;
        }
        updateValuesHealth()
      });


      play_button.addEventListener("click", function() {
        hungerValue += 10;
        healthValue -= 10;
        if (hungerValue > 100) {
            hungerValue = 100;
          }
          if (healthValue < 0) {
            healthValue = 0;
            }
            
           
        updateValuesHealth();
        updateValuesHunger();
      });


      function updateValuesHunger() {      
        progressBar_hunger.style.width = `${hungerValue}%`;

        if (hungerValue <= 50) {
          progressBar_hunger.style.backgroundColor = "green";
          
        } else if (hungerValue <= 90) {
          progressBar_hunger.style.backgroundColor = "yellow";
        } else {
          progressBar_hunger.style.backgroundColor = "red";
        }

            
      }

      function updateValuesHealth() {
        reboot();
        progressBar_health.style.width = `${healthValue}%`;

        if (healthValue >= 51) {
            progressBar_health.style.backgroundColor = "green"; 
            imageT.style.backgroundImage = "url(./images/happy.gif)";           
          } else if ((healthValue < 50 && healthValue > 10) || hungerValue == 100) {
            progressBar_health.style.backgroundColor = "yellow"; 
            imageT.style.backgroundImage = "url(./images/sad.gif)";           
          } else if (healthValue <= 10 ){
            progressBar_health.style.backgroundColor = "red";
            imageT.style.backgroundImage = "url(./images/dead.gif)";            
          }
      }

      function reboot(){
        if(healthValue == 0 && hungerValue == 100){
            alert("presione aceptar si quiere reiniciar el tamagotchi")           
                
                hungerValue = 0;
                healthValue = 100;
                progressBar_hunger.style.width = "0%";
                progressBar_health.style.width = "100%";
                clearInterval(setIntervalHealth);
                clearInterval(setIntervalHungry);
                location.reload();
            
           
        }
      }




      