# Event Bus in Next.js

A Next.js project demonstrating different frontend event bus libraries.

## 🚀 Libraries Used

- [Mitt](https://www.npmjs.com/package/mitt)
- [Nanoevents](https://www.npmjs.com/package/nanoevents)
- [EventEmitter3](https://www.npmjs.com/package/eventemitter3)
- [RxJS](https://www.npmjs.com/package/rxjs-event-bus)

## 📦 Installation

Install the required libraries using the following commands:

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

## 📂 Folder Structure

```plaintext
Project file
├── components
│   └── Eventbus
│       ├── Sender.tsx  # A component to trigger an event
│       └── Receiver.tsx  # A component to listen and display the event
├── utils
│   └── Eventbus.ts  # Initializes the event bus
```

## 🛠 Components

- **Sender**: A component that contains a message and a button to trigger the event.
- **Receiver**: A component that listens for the event inside `useEffect` and displays the received message.

## 📊 Comparative Analysis

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

Clone the repository, integrate the event bus into your components, and trigger/render events accordingly.

Enjoy coding! 🚀👋
