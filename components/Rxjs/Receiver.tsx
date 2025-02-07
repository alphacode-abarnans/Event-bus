"use client";
import { useEffect, useState } from "react";
import RxeventBus from "../../utils/rxjs";

export default function RxjsReceiver() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const subscription = RxeventBus.subscribe({
      next: (event) => {
        if (event.message) {
          setMessage(event.message);
        }
      },
    });

    // Cleanup subscription when the component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="p-2 border rounded bg-gray-100">
      <p>Received Message: {message || "No message yet"}</p>
    </div>
  );
}
