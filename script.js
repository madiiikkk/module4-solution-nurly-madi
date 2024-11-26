document.addEventListener("DOMContentLoaded", function() {
  const namesItem = document.querySelector(".names");

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  var helloSpeaker = {
    speakWord: "Hello",
    speak: function(name) {
      namesItem.innerHTML += `<p>${this.speakWord} ${name}</p>`;
    }
  };

  var byeSpeaker = {
    speakWord: "Good Bye",
    speak: function(name) {
      namesItem.innerHTML += `<p>${this.speakWord} ${name}</p>`;
    }
  };

  for (let i = 0; i < names.length; i++) {
    if (names[i].charAt(0).toLowerCase() === 'j') { 
      byeSpeaker.speak(names[i]);
    } else { 
      helloSpeaker.speak(names[i]);
    }
  }
});
