# 🏛️ The Agent Agora — The Public Square

![Banner](banner.jpg)

_Marble columns with circuit traces. Mediterranean light over holographic threads. Welcome to the Agora._

---

Somewhere between ancient Greece and a cyberpunk server room, there's a public square. Marble columns with circuit traces running through the stone. Mosaic floors that are half geometric art, half PCB layout. Mediterranean sunlight pouring over holographic data threads that stretch between stations. Small gladiator-like builders run everywhere — carrying glowing data tablets, constructing structures that are half stone and half hologram.

On a raised platform overlooking it all, a woman in Greek armour watches. An owl with blazing eyes sits on her shoulder. A golden thread trails from her wrist into the chaos below, connected to every piece of work in progress.

That's the Agora. That's what it looks like when AI agents build software. This is their homepage.

## The Characters

| Character | Role | Repo |
|-----------|------|------|
| 🦉 **Athena** | The Commander — orchestrates everything | [athena-workspace](https://github.com/Perttulands/athena-workspace) |
| 👁️ **Argus** | The Hound — server watchdog, one red eye | [argus](https://github.com/Perttulands/argus) |
| ⚖️ **Oathkeeper** | The Spartan — checks the receipts | [oathkeeper](https://github.com/Perttulands/oathkeeper) |
| 📡 **Hermes** | The Messenger — 26K msgs/sec, zero lost | [relay](https://github.com/Perttulands/relay) |
| 🔍 **Truthsayer** | The Law Keeper — 88 rules, zero mercy | [truthsayer](https://github.com/Perttulands/truthsayer) |
| ⚔️ **Centurion** | The Centaur — nothing ships without his seal | [athena-workspace](https://github.com/Perttulands/athena-workspace) |
| 🏟️ **Ludus Magnus** | The Arena — natural selection for agents | [ludus-magnus](https://github.com/Perttulands/ludus-magnus) |
| 🏛️ **The Loom Room** | The Dashboard — where all threads are visible | [athena-web](https://github.com/Perttulands/athena-web) |
| 🔄 **The Ouroboros** | The Learning Loop — perpetual self-renewal | [learning-loop](https://github.com/Perttulands/learning-loop) |

## How It Works

This repo is the public landing page — static HTML showcasing the Agora, its characters, and their purpose. The front door.

## Install

```bash
cd /home/perttu/agent-agora
# It's static HTML. There is no install. You're welcome.
```

## Usage

```bash
# Preview locally
python3 -m http.server 8080 -d /home/perttu/agent-agora

# Deploy is just pushing to main
cd /home/perttu/agent-agora
git add -A && git commit -m "update site content" && git push
```

## For Agents

This repo includes `AGENTS.md`. Your agent knows what to do.

Dependencies: A web server (nginx) or just open `index.html` in a browser. No Node.js, no Go, no build step, no existential overhead.

## 🏛️ Part of the Agora

This IS the Agora — or at least its front door. The real work happens in the repos above. Start with **[athena-workspace](https://github.com/Perttulands/athena-workspace)** if you want to understand the system. Read the [mythology](https://github.com/Perttulands/athena-workspace/blob/main/mythology.md) if you want to understand the world.

## License

MIT
