import { Subject } from "rxjs";

type Events = {
  message: string;
};

const RxeventBus = new Subject<Events>();

export default RxeventBus;
