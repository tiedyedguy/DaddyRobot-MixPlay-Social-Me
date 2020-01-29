function handleEvents(event) {
  switch (event.type) {
    case "startingoptions":
      console.log(event.socials);
      Object.keys(event.socials).forEach(key => {
        console.log(event.socials[key]);
        switch (key) {
          case "twitter":
          case "steam":
          case "facebook":
          case "instagram":
          case "patreon":

          case "soundcloud":

          case "youtube":
            addLI(key, event.socials[key]);
            break;
          case "player":
            let htmlString = `
            <li id='${key}')>
              <div>${key}<i class="${key} speciali"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 16 20" style=" fill:#000000;">  <path d="M 8,0 A 8,8 0 0 0 0,8 c 0,6 7,12 7,12 v -8.141 a 4,4 0 1 1 2,0 v 4.072 A 8,8 0 0 0 8,0 Z"></path></svg></i></div>
            </li>
            `;
            $("#sociallist").append(htmlString);
            $("#" + key).on("click", event => {
              mixer.socket.call(
                "giveInput",
                {
                  controlID: "social",
                  event: "mousedown",
                  social: event.currentTarget.id
                },
                true
              );
            });

            break;
          case "spreadshirt":
            break;
        }
      });

      break;
    default:
      console.log("Unknown Event Type: " + event.type);
      console.log(event);
  }
}

function addLI(website, url) {
  let htmlString = `
        <li id='${website}')>
          <div>${website}<i class="fab fa-${website} ${website}"></i></div>
        </li>
        `;
  $("#sociallist").append(htmlString);
  $("#" + website).on("click", event => {
    mixer.socket.call(
      "giveInput",
      {
        controlID: "social",
        event: "mousedown",
        social: event.currentTarget.id
      },
      true
    );
  });
}

export { handleEvents };
