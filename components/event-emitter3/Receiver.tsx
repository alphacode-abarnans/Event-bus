"use client";
import { useEffect, useState } from "react";
import eventEmitter3 from "../../utils/eventEmitter3";

export default function EventEmitter3Receiver() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const handleMessage = (msg: string) => {
      setMessage(msg);
    };

    eventEmitter3.on("message", handleMessage);

    return () => {
        eventEmitter3.off("message", handleMessage); // Cleanup event listener
    };
  }, []);

  return (
    <div className="p-2 border rounded bg-gray-100">
      <p>Received Message: {message || "No message yet"}</p>
    </div>
  );
}
