import EventEmitter from "eventemitter3";

type Events = {
  message: string;
};

const eventEmitter3 = new EventEmitter<Events>();

export default eventEmitter3;
