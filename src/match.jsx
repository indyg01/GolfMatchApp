import { useNavigate } from "react-router-dom";

// track golfer shown
import React, { useState } from "react";

//hardcoded golfer data
const golfers = [
  {
    id: 1,
    name: "Tiger",
    handicap: 2,
    homeCourse: "Northview Golf Club",
    distance: "n/a",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tiger_Woods_-_AT%26T_National_tournament_2009.jpg/500px-Tiger_Woods_-_AT%26T_National_tournament_2009.jpg"
  },
  {
    id: 2,
    name: "Phil",
    handicap: 4,
    homeCourse: "Surrey Golf Club",
    distance: "n/a",
    photo: "https://media.cnn.com/api/v1/images/stellar/prod/180319165303-phil-mickelson-us-open-2013-thumbs-up.jpg?q=w_680,c_fill/f_webp"
  },
  {
    id: 3,
    name: "Scottie",
    handicap: 1,
    homeCourse: "Morgan Creek Golf Course",
    distance: "n/a",
    photo: "https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/v2/57WHF26XFGLSFWQNMEDQI7PKPY.jpg?auth=b1b3904e4310d9aad109227a9a137a5edc8048ae1adffa4d967bd9f17329897e&quality=80&height=553&width=830&focal=2242,974"
  }
];


// main app component
export default function Match() {
  const navigate = useNavigate();

// tracks currently selected golfer
  const [index, setIndex] = useState(0);
  const current = golfers[index]; 

// User clicks yes, logs golfer name, moves to next golfer
  const handleYes = () => {
  navigate("/chat", { state: { user: current } });
};

// User clicks no, logs golfer name, moves to next golfer
  const handleNo = () => {
      console.log("No to:", current.name);
      nextCard();
    };

// Function to move to next golfer card
  const nextCard = () => {
    setIndex((prev) => (prev + 1 < golfers.length ? prev + 1 : 0));
  };

// jsx returned here builds the UI
  return (
    <main className="min-h-screen bg-[#D9CFC1] flex items-center justify-center p-4">
      {current ? (
      <div
      className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-lg bg-cover bg-center"
      style={{ backgroundImage: `url(${current.photo})` }}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Top-left: Name */}
      <div className="absolute top-4 left-4 z-10">
        <h2 className="text-3xl font-bold text-white drop-shadow">{current.name}</h2>
      </div>

      {/* Bottom-left: Info */}
      <div className="absolute bottom-20 left-4 z-10 text-sm space-y-1 text-white drop-shadow">
        <p>Handicap: {current.handicap}</p>
        <p>Home Course: {current.homeCourse}</p>
        <p>Distance: {current.distance}</p>
      </div>

      {/* ✅ Buttons inside the picture now */}
      {/* Left = Skip */}
      <button
        onClick={handleNo}
        className="absolute bottom-4 left-4 z-10 w-14 h-14 flex items-center justify-center bg-white bg-opacity-90 rounded-full shadow-md hover:bg-opacity-100 transition"
      >
        <span className="text-xl">🔁</span>
      </button>

      {/* Right = Chat */}
      <button
        onClick={handleYes}
        className="absolute bottom-4 right-4 z-10 w-14 h-14 flex items-center justify-center bg-white bg-opacity-90 rounded-full shadow-md hover:bg-opacity-100 transition"
      >
        <span className="text-xl">💬</span>
      </button>
    </div>
      ) : (
        <p className="text-gray-500">No more golfers!</p>
      )}
    </main>
    );
}
