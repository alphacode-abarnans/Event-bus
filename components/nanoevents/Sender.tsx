"use client";
import nanoEvents from "../../utils/nanoEvents";

export default function NanoEventSender() {
  const sendMessage = () => {
    nanoEvents.emit("message", "Hello from Sender! 🚀");
  };

  return (
    <button onClick={sendMessage} className="p-2 bg-blue-500 text-white rounded">
      Send Message
    </button>
  );
}
