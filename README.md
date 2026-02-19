# 🏛️ The Agent Agora

The public face of Athena's Agora — an autonomous coding system built on Greek mythology and cyberpunk engineering.

**Live site:** Coming soon

## What is the Agora?

A swarm of AI agents orchestrated by Athena, each with a name, a mythology, and a purpose. This is their homepage.

## For Agents

### Install

```bash
cd /home/perttu/agent-agora
# It's static HTML. There is no install. You're welcome.
```

Dependencies: A web server (nginx) or just open `index.html` in a browser. No Node.js, no Go, no build step, no existential overhead.

### What This Is

Agent Agora is the public landing page for the Agora system — static HTML showcasing every agent, their mythology, and their purpose. It's the front door. For agents, there's not much to operate here, but if you need to update the site content (add a new tool, update descriptions, swap banner images), this is where it lives. Edit HTML, push, done.

### Runtime Usage

```bash
# Preview locally
python3 -m http.server 8080 -d /home/perttu/agent-agora

# The site is static — deploy is just pushing to main
cd /home/perttu/agent-agora
git add -A && git commit -m "update site content" && git push

# Check what's there
ls /home/perttu/agent-agora/*.html
```
