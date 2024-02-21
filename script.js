let play = document.querySelectorAll('.btn');
       
        function playM0(){
           let audio = new Audio("./sounds/gospel-choir.mp3");
           audio.play()
        }
        function playM1(){           
           let audio = new Audio("./sounds/mixkit-drumming-jungle-music-2426.wav");
           audio.play()
        }
        function playM2(){           
           let audio = new Audio("./sounds/mixkit-heavenly-swell-2674.wav");
           audio.play()
        }
        function playM3(){           
           let audio = new Audio("./sounds/mixkit-mysterious-long-swell-2671.wav");
           audio.play()
        }
        function playM4(){           
           let audio = new Audio("./sounds/mixkit-heavenly-swell-2674.wav");
           audio.play()
        }
        function playM5(){           
           let audio = new Audio("./sounds/mixkit-mysterious-long-swell-2671.wav");
           audio.play()
        }
        
        play[0].addEventListener('click',playM0);
        play[1].addEventListener('click',playM1);
        play[2].addEventListener('click',playM2);
        play[3].addEventListener('click',playM3);
        play[4].addEventListener('click',playM4);
        play[5].addEventListener('click',playM5);
        