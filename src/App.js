import "./styles.css";
import React, { useState } from "react";

const dictionary = {
  "🕴️": "Person in Suit Levitating",
  "🧗": "Person Climbing",
  "🧗‍♂️": "Man Climbing",
  "🧗‍♀️": "Woman Climbing",
  "🤺": "Person Fencing",
  "🏇": "Horse Racing",
  "⛷️": "Skier",
  "🏂 ": "Snowboarder",
  "🏌️ ": "Person Golfing",
  "🏌️‍♂️": "Man Golfing",
  "🛶": "Canoe",
  "🎗": "Reminder Ribbon",
  "🎟️": "Admission Tickets",
  "🎫": "Ticket",
  "🎖": "Military Medal",
  "🏆": "Trophy",
  "🏅": "Sports Medal",
  "🥇": "1st Place Medal",
  "🥈": "2nd Place Medal",
  "🥉": "3rd Place Medal",
  "⚽": "Soccer Ball",
  "⚾": "Baseball",
  "🥎": "Softball",
  "🏀": "Basketball",
  "🏐": "Volleyball",
  "🏈": "American Football",
  "🏉": "Rugby Football",
  "🎾": "Tennis",
  "🥏": "Flying Disc",
  "🎳": "Bowling",
  "🏏": "Cricket Game",
  "🏑": "Field Hockey",
  "🏒": "Ice Hockey",
  "🥍": "Lacrosse",
  "😊": "Smiling",
  "😳": "Disbelief",
  "😔": "Sad",
  "🥡": "Takeout Box",
  "❤️": "Love",
  "😑": "Annoyance"
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
