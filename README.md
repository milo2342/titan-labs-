# Titan Labs Discord Bot

A standalone GitHub-ready build of the Titan Labs Discord bot. It runs from one bundled `index.js` file and keeps persistent configuration in PostgreSQL.

## Files

- `.env.example` — environment variable template
- `.gitignore` — excludes secrets, dependencies, and logs
- `.gitkeep` — keeps the package directory tracked
- `README.md` — setup and operation guide
- `index.js` — bundled bot application
- `package.json` — production dependencies and start command

## Setup

1. Create a Discord application at https://discord.com/developers/applications.
2. Create a bot under the application and copy its token.
3. Enable **Server Members Intent** and **Message Content Intent** under Bot -> Privileged Gateway Intents.
4. Copy this folder to GitHub or your hosting provider.
5. Run `npm install`.
6. Copy `.env.example` to `.env` and fill in the values. Never commit `.env` or expose the token.
7. Run `npm start`.

The bot registers slash commands automatically at startup. Set `DISCORD_GUILD_ID` for instant registration during testing; leave it blank for global registration.

## Database

`DATABASE_URL` must point to PostgreSQL. The bundled export expects the Titan Labs Discord tables to already exist. The original workspace contains the Drizzle schema and can push it with `pnpm --filter @workspace/db run push`; for a completely separate host, export the schema SQL from the original project before first launch.

## Features

- Moderation, community, staff, server-management, developer, and embed tools
- `/dm` for direct sends and `/dm-list add|remove|view` for automatic forwarding when someone DMs the bot
- Multiple configurable ticket panels with custom colors, buttons, access roles, ping roles, welcome text, and an optional Discord category parent
- Interactive ticket dropdown menus with Open a Ticket and How It Works actions
- Private ticket channels with claim, close, delete, and text transcript delivery to each panel's dedicated transcript channel
- `/key-purchase`, `/key-add`, and `/key remove`, including the full vehicle bundle and giveaway-winner flow
- Click-to-verify and automatic role assignment

## Ticket categories

When creating a panel with `/ticket-panel create`, choose a Discord category in the `category` option. Every ticket opened from that panel is created under that category. You can also choose a separate text channel with the `transcript-channel` option. Closed-ticket transcript files are sent there; if it is left blank, transcripts go to the panel channel. If no ticket category is selected, the ticket is created without a category.

## Permissions

The bot needs the permissions for the features you enable, including View Channel, Send Messages, Embed Links, Attach Files, Read Message History, Manage Channels, Manage Roles, Moderate Members, Manage Messages, and Ban/Kick Members. Its highest role must be above every role it assigns.

## Commands

The bot currently registers 52 slash commands. Run `/features` in Discord for the in-bot list. Global commands may take up to one hour to appear after a change.

## Security

Keep `DISCORD_BOT_TOKEN`, `DISCORD_CLIENT_ID`, and `DATABASE_URL` private. Use your hosting provider's secret/environment-variable manager instead of committing `.env`.
