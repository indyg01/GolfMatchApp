import { useLocation, Link } from "react-router-dom";

export default function ChatPage() {
  const location = useLocation();
  const user = location.state?.user;

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-4">
        <p className="text-gray-500">No user selected. <Link to="/" className="text-blue-500 underline">Go back</Link></p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bunker flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Chat with {user.name}</h1>

      <div className="w-full max-w-sm p-4 border rounded bg-gray-50 shadow">
        <p className="text-gray-500 mb-2">Handicap: {user.handicap}</p>
        <p className="text-gray-500 mb-2">Home Course: {user.homeCourse}</p>

        <textarea
          className="w-full border rounded p-2 mb-2"
          rows="3"
          placeholder="Type a message..."
        />
        <button className="w-full bg-[#3B7A57] text-white py-2 rounded">Send</button>
      </div>

      <Link to="/" className="mt-4 text-blue-500 underline">← Back to Matches</Link>
    </div>
  );
}