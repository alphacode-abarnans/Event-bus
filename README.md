# Event bus

It's a Next.js project for showing the frontend event bus libraries implementation.

## Libraries Used

- [Mitt](https://www.npmjs.com/package/mitt)
- [Nanoevents](https://www.npmjs.com/package/nanoevents)
- [Eventemitter3](https://www.npmjs.com/package/eventemitter3)
- [RxJS](https://www.npmjs.com/package/rxjs-event-bus)

## Installing Command for the Libraries

```bash
# Install mitt
npm install mitt

# Install Nanoevents
npm install nanoevents

# Install EventEmitter3
npm install eventemitter3

# Install RxJS
npm install rxjs
```

## Folder Structure

```plaintext
Project file
├── components
│   └── Eventbus folder
│       ├── Sender.tsx (A sample component to use & explain the event function)
│       └── Receiver.tsx (A sample component to use & explain the event function)
├── utils
│   └── Eventbus.ts (TS file to initialize the event bus)
```

## Components

- Sender: This is a component that contains the message and a button to trigger the event.
- Receiver: This is a component that listens for the event inside useEffect and displays the received message.

## 📊 Comparative Analysis Table

| Library            | Size   | TypeScript Support | Features                                 | Best For                              |
|--------------------|--------|--------------------|----------------------------------|--------------------------------|
| mitt              | ~200B  | ✅ Yes             | Simple event emitter           | Small projects, lightweight apps |
| nanoevents        | ~400B  | ✅ Yes             | Lightweight, async support     | Performance-sensitive apps       |
| eventemitter3     | ~4KB   | ✅ Yes             | Advanced event handling        | Mid-size to large apps           |
| Redux Toolkit (RTK) | Large  | ✅ Yes             | Redux-integrated event handling | Apps using Redux already        |
| RxJS              | ~30KB  | ✅ Yes             | Reactive programming, complex events | Real-time, streaming, WebSockets |

## 🏆 Final Recommendations

| Use Case | Recommended Library |
|----------|--------------------|
| ✅ Basic event handling, lightweight apps | `mitt` or `nanoevents` |
| ✅ Need advanced event handling (wildcards, one-time events) | `eventemitter3` |
| ✅ Already using Redux | `Redux Toolkit (RTK)` |
| ✅ Handling WebSockets, real-time updates | `RxJS` |

Clone it and call it in your components functions pass and render the events.
Have fun....
👋👋👋
#   E v e n t - b u s  
 