import EventEmitter3Receiver from "../../components/event-emitter3/Receiver";
import EventEmitter3Sender from "../../components/event-emitter3/Sender";
import MittReceiver from "../../components/mitt/Receiver";
import MittSender from "../../components/mitt/Sender";
import NanoEventReceiver from "../../components/nanoevents/Receiver";
import NanoEventSender from "../../components/nanoevents/Sender";
import Receiver from "../../components/Reciever";
import RxjsReceiver from "../../components/Rxjs/Receiver";
import RxjsSender from "../../components/Rxjs/Sender";
import Sender from "../../components/Sender";

export default function Home() {
  return (
    <div>
      {/* basic react */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-xl font-bold">Event Bus Example</h1>
        <Sender />
        <Receiver />
      </div>

      {/* mitt event bus */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-xl font-bold">Event Bus with mitt</h1>
        <MittSender />
        <MittReceiver />
      </div>

      {/* event emitter 3 */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-xl font-bold">Event Bus with EventEmitter3</h1>
        <EventEmitter3Sender />
        <EventEmitter3Receiver />
      </div>

      {/* Rxjs */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-xl font-bold">Event Bus with RxJS</h1>
        <RxjsSender />
        <RxjsReceiver />
      </div>

      {/* nanoevents */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-xl font-bold">Event Bus with Nanoevents</h1>
        <NanoEventSender />
        <NanoEventReceiver />
      </div>

    </div>
  );
}
