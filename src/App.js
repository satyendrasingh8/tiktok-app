import React from "react";
import Video from "./Video";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="/videos/v4.mp4"
          channel="satyendra"
          description="Woow this works"
          song="mere naal ek baar nach soniye"
          likes={301}
          messages={124}
          shares={234}
        />
        <Video
          url="/videos/v2.mp4"
          channel="nanci"
          description="this works amazing guys"
          song="amazing song Gitiya to to ..."
          likes={244}
          messages={104}
          shares={214}
        />
        <Video
          url="/videos/v1.mp4"
          channel="philips"
          description="this is latest song"
          song="kux kux hota h.."
          likes={201}
          messages={144}
          shares={234}
        />
        <Video
          url="/videos/v3.mp4"
          channel="Jesica"
          description="this works amazing"
          song="bhool to hogai jo kiya so kiya"
          likes={341}
          messages={324}
          shares={212}
        />
      </div>
    </div>
  );
}

export default App;
