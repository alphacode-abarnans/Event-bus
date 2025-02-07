import mitt from 'mitt';

type Events = {
  message: string;
};

const mittEventBus = mitt<Events>();

export default mittEventBus;
