let backgroundWords = "";
window.onload = say("");

function feelsGoodMan(){
    backgroundWords += "FeelsGoodMan. ";
    say("FeelsGoodMan. ");
    document.getElementById("backgroundWords").innerHTML=backgroundWords;
    
}

function say(m) {
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    var index = Math.floor(Math.random()*voices.length);
    msg.voice = voices[index];
    msg.voiceURI = "native";
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 0.8;
    msg.text = m;
    msg.lang = 'en-US';
    speechSynthesis.speak(msg);
}  
