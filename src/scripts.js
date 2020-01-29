import * as EventHandler from "./js/eventhandler.js";

window.addEventListener("load", function initMixer() {
  mixer.socket.on("event", EventHandler.handleEvents);

  mixer.isLoaded();
});
