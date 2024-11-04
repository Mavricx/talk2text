let element = document.querySelector(".text");
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-IN";
recognition.continuous = true;
const mic = document.querySelector(".mp");
const stop = document.querySelector(".stop");
const copy = document.querySelector(".copy");

copy.addEventListener("click", () => {
    element.select();
    document.execCommand("copy");
});


mic.addEventListener("click", () => { recognition.start(); });
stop.addEventListener("click", () => { recognition.stop(); })

recognition.onresult = (event) => {
    let transcript = "";
    for (const result of event.results) {
        transcript += result[0].transcript + " ";
    }
    element.value += transcript;
};