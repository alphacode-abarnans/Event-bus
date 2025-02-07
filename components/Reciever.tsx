"use client";
import { useEffect, useState } from "react";
import eventBus from "../utils/eventBus";

const Receiver = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        const handleEvent = (data: any) => {
            setMessage(data.message);
        };

        eventBus.on("customEvent", handleEvent);

        return () => {
            eventBus.off("customEvent", handleEvent);
        };
    }, []);

    return (
        <div className="p-2 border rounded bg-gray-100">
            <h2>Receiver Message: </h2>
            <p className="text-lg text-green-500">{message}</p>
        </div>
    );
};

export default Receiver;
