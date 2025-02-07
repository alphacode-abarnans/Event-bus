"use client";
import mittEventBus from "../../utils/mittEventBus";

 // Needed for Next.js (App Router)

export default function MittSender() {
  const sendMessage = () => {
    mittEventBus.emit("message", "Hello from Mitt Sender! 🚀");
  };

  return (
    <button onClick={sendMessage} className="p-2 bg-blue-500 text-white rounded">
      Send Message
    </button>
  );
}
