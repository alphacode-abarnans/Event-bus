"use client";

import RxeventBus from "../../utils/rxjs";

export default function RxjsSender() {
  const sendMessage = () => {
    RxeventBus.next({ message: "Hello from Sender! 🚀" });
  };

  return (
    <button onClick={sendMessage} className="p-2 bg-blue-500 text-white rounded">
      Send Message
    </button>
  );
}
