"use client";
import eventEmitter3 from "../../utils/eventEmitter3";

export default function EventEmitter3Sender() {
  const sendMessage = () => {
    eventEmitter3.emit("message", "Hello from Sender! 🚀");
  };

  return (
    <button onClick={sendMessage} className="p-2 bg-blue-500 text-white rounded">
      Send Message
    </button>
  );
}
