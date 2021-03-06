import "./styles.css";
import React, { useState } from "react";

const dictionary = {
  "ðīïļ": "Person in Suit Levitating",
  "ð§": "Person Climbing",
  "ð§ââïļ": "Man Climbing",
  "ð§ââïļ": "Woman Climbing",
  "ðĪš": "Person Fencing",
  "ð": "Horse Racing",
  "â·ïļ": "Skier",
  "ð ": "Snowboarder",
  "ðïļ ": "Person Golfing",
  "ðïļââïļ": "Man Golfing",
  "ðķ": "Canoe",
  "ð": "Reminder Ribbon",
  "ðïļ": "Admission Tickets",
  "ðŦ": "Ticket",
  "ð": "Military Medal",
  "ð": "Trophy",
  "ð": "Sports Medal",
  "ðĨ": "1st Place Medal",
  "ðĨ": "2nd Place Medal",
  "ðĨ": "3rd Place Medal",
  "â―": "Soccer Ball",
  "âū": "Baseball",
  "ðĨ": "Softball",
  "ð": "Basketball",
  "ð": "Volleyball",
  "ð": "American Football",
  "ð": "Rugby Football",
  "ðū": "Tennis",
  "ðĨ": "Flying Disc",
  "ðģ": "Bowling",
  "ð": "Cricket Game",
  "ð": "Field Hockey",
  "ð": "Ice Hockey",
  "ðĨ": "Lacrosse",
  "ð": "Smiling",
  "ðģ": "Disbelief",
  "ð": "Sad",
  "ðĨĄ": "Takeout Box",
  "âĪïļ": "Love",
  "ð": "Annoyance"
};

const emojisWeKnow = Object.keys(dictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiClickHandler(emoji) {
    const meaning = dictionary[emoji];
    setMeaning(meaning);
  }

  function emojiInputHandler(event) {
    const userInput = event.target.value;
    var meaning = dictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our DataBase.";
    }

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji</h1>
      <h2>Know meaning of different emojis!!</h2>
      <input onChange={emojiInputHandler} />
      <div className="meaning"> {meaning} </div>
      <h3> Emojis we know </h3>

      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
