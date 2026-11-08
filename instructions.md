# RoboSats

## Documentation

- [RoboSats upstream repository](https://github.com/RoboSats/robosats) — the upstream project source and README.

## What you get on StartOS

- The **self-hosted RoboSats client** exposed as the **Web UI** interface — your private front-end to the RoboSats P2P Bitcoin exchange network.
- All coordinator traffic is routed through Tor automatically; you do not configure a SOCKS proxy yourself.
- Your garage key and client settings stay in your browser. StartOS backups do not include your garage key; save it separately.

This package runs the **client**, not a coordinator. Trades clear against the public RoboSats coordinators you select inside the web UI.

## Getting set up

1. Install [Tor](https://github.com/Start9Labs/tor-startos) first — it is a required dependency for routing RoboSats traffic.
2. Start RoboSats and open the **Web UI** interface.
3. On first launch the client generates a **garage key** (it starts with `robo1`). Save this key somewhere safe — it is your identity, and a fresh robot is made from it for each trade. Anyone with the key can act as you; losing it means losing access to any active orders and to your reputation. If you have a robot token from an older version, use **Legacy** mode to recover an ongoing trade, then switch to **Garage Key** mode for new orders. Switching modes clears the robots saved in that browser, so save your token or key first.

## Using RoboSats

### Web UI

Open the **Web UI** interface to access the full client. From there you can:

- Generate or restore your identity using a garage key (or a legacy robot token).
- Pick a coordinator from the order book.
- Create or take orders, paying and receiving sats over Lightning using an external Lightning wallet.

You will need an external Lightning wallet to fund escrow and to receive payouts — RoboSats does not custody funds and does not run a wallet for you.
