"use client";
import eventBus from "../utils/eventBus";

const Sender = () => {
    const sendMessage = () => {
        eventBus.emit("customEvent", { message: "Hello from Sender!" });
    };

    return (
        <div>
            <button onClick={sendMessage} className="border p-2 bg-blue-500 text-white">
                Send Message
            </button>
        </div>
    );
};

export default Sender;