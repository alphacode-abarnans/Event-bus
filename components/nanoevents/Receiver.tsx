"use client";
import { useEffect, useState } from "react";
import nanoEvents from "../../utils/nanoEvents";

export default function NanoEventReceiver() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const unsubscribe = nanoEvents.on("message", (msg: string) => {
      setMessage(msg);
    });

    // Cleanup the event listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="p-2 border rounded bg-gray-100">
      <p>Received Message: {message || "No message yet"}</p>
    </div>
  );
}
