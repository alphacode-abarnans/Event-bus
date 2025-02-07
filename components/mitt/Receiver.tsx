"use client"; // Needed for Next.js (App Router)
import { useEffect, useState } from "react";
import mittEventBus from "../../utils/mittEventBus";

export default function MittReceiver() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const handleMessage = (msg: string) => {
      setMessage(msg);
    };

    mittEventBus.on("message", handleMessage);

    return () => {
        mittEventBus.off("message", handleMessage); // Cleanup event listener
    };
  }, []);

  return (
    <div className="p-2 border rounded bg-gray-100">
      <p>Received Message: {message || "No message yet"}</p>
    </div>
  );
}
