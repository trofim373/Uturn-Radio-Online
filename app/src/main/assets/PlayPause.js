const dubstep = document.getElementById("dubstep");
const drum = document.getElementById("drum");
const electro = document.getElementById("electro");
const rock = document.getElementById("rock");

const pauseRadio = () => {
    dubstep.pause();
    drum.pause();
    electro.pause();
    rock.pause();
};

let playStop = false; //true
let tempName = "nameRadio"; 

const playRadio = (name) => { //dubstep
    if (playStop === false || tempName != name){
        playStop = !playStop; //false => true
        tempName = name;
        pauseRadio();
        name.play();
    }else{
        playStop = !playStop;
        pauseRadio();
        tempName = "nameRadio";
    }
  
};
