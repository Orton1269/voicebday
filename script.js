const btn=document.querySelector(".talk");
const content=document.querySelector(".content");
const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition=new SpeechRecognition();
recognition.onstart=function(){
  console.log("Voice Activated");  
};
recognition.onresult=function(event){
    console.log(event);

    const current=event.resultIndex;

    const text=event.results[current][0].transcript;
    content.textContent=text;

    pleaseSay(text);
}
btn.addEventListener("click",()=>{
    recognition.start();
})

function pleaseSay(text){
    const speech=new SpeechSynthesisUtterance();
    speech.text="Welcome";
    if(text.includes("anything for me")){
        speech.text="Happy birthday";
    }
    speech.volume=1;
    speech.rate=1;
    speech.pitch=1;
    window.speechSynthesis.speak(speech);
}