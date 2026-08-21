"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc2) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc2 = __getOwnPropDesc(from, key)) || desc2.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// artifacts/discord-bot/src/exportEntry.ts
var import_config = require("dotenv/config");
var import_discord19 = require("discord.js");

// artifacts/discord-bot/src/lib/logger.ts
var import_pino = __toESM(require("pino"), 1);
var logger = (0, import_pino.default)({
  level: process.env.LOG_LEVEL ?? "info",
  transport: process.env.NODE_ENV === "production" ? void 0 : { target: "pino-pretty", options: { colorize: true } }
});

// artifacts/discord-bot/src/commands/moderation.ts
var import_discord2 = require("discord.js");

// lib/db/src/index.ts
var import_node_postgres = require("drizzle-orm/node-postgres");
var import_pg = __toESM(require("pg"), 1);

// lib/db/src/schema/index.ts
var schema_exports = {};
__export(schema_exports, {
  discordConfessionsTable: () => discordConfessionsTable,
  discordDevelopersTable: () => discordDevelopersTable,
  discordDmForwardListTable: () => discordDmForwardListTable,
  discordGiveawaysTable: () => discordGiveawaysTable,
  discordGlobalBansTable: () => discordGlobalBansTable,
  discordGuildSettingsTable: () => discordGuildSettingsTable,
  discordLoaRequestsTable: () => discordLoaRequestsTable,
  discordPollsTable: () => discordPollsTable,
  discordReportsTable: () => discordReportsTable,
  discordRoleMenusTable: () => discordRoleMenusTable,
  discordStaffDutyTable: () => discordStaffDutyTable,
  discordSuggestionsTable: () => discordSuggestionsTable,
  discordTicketPanelsTable: () => discordTicketPanelsTable,
  discordTicketsTable: () => discordTicketsTable,
  discordVehicleKeysTable: () => discordVehicleKeysTable,
  discordWarningsTable: () => discordWarningsTable,
  insertDiscordConfessionSchema: () => insertDiscordConfessionSchema,
  insertDiscordDeveloperSchema: () => insertDiscordDeveloperSchema,
  insertDiscordDmForwardEntrySchema: () => insertDiscordDmForwardEntrySchema,
  insertDiscordGiveawaySchema: () => insertDiscordGiveawaySchema,
  insertDiscordGlobalBanSchema: () => insertDiscordGlobalBanSchema,
  insertDiscordGuildSettingsSchema: () => insertDiscordGuildSettingsSchema,
  insertDiscordLoaRequestSchema: () => insertDiscordLoaRequestSchema,
  insertDiscordPollSchema: () => insertDiscordPollSchema,
  insertDiscordReportSchema: () => insertDiscordReportSchema,
  insertDiscordRoleMenuSchema: () => insertDiscordRoleMenuSchema,
  insertDiscordStaffDutySchema: () => insertDiscordStaffDutySchema,
  insertDiscordSuggestionSchema: () => insertDiscordSuggestionSchema,
  insertDiscordTicketPanelSchema: () => insertDiscordTicketPanelSchema,
  insertDiscordTicketSchema: () => insertDiscordTicketSchema,
  insertDiscordVehicleKeySchema: () => insertDiscordVehicleKeySchema,
  insertDiscordWarningSchema: () => insertDiscordWarningSchema
});

// lib/db/src/schema/discordGuildSettings.ts
var import_pg_core = require("drizzle-orm/pg-core");
var import_drizzle_zod = require("drizzle-zod");
var discordGuildSettingsTable = (0, import_pg_core.pgTable)("discord_guild_settings", {
  guildId: (0, import_pg_core.text)("guild_id").primaryKey(),
  logChannelId: (0, import_pg_core.text)("log_channel_id"),
  logEvents: (0, import_pg_core.jsonb)("log_events").$type().notNull().default([]),
  muteRoleId: (0, import_pg_core.text)("mute_role_id"),
  autoRoleId: (0, import_pg_core.text)("auto_role_id"),
  verificationChannelId: (0, import_pg_core.text)("verification_channel_id"),
  verificationRoleId: (0, import_pg_core.text)("verification_role_id"),
  verificationMessageId: (0, import_pg_core.text)("verification_message_id"),
  suggestionChannelId: (0, import_pg_core.text)("suggestion_channel_id"),
  confessionChannelId: (0, import_pg_core.text)("confession_channel_id"),
  reportChannelId: (0, import_pg_core.text)("report_channel_id"),
  loaChannelId: (0, import_pg_core.text)("loa_channel_id"),
  staffDutyChannelId: (0, import_pg_core.text)("staff_duty_channel_id"),
  rulesText: (0, import_pg_core.text)("rules_text"),
  whitelistRequirements: (0, import_pg_core.text)("whitelist_requirements"),
  whitelistApplyInfo: (0, import_pg_core.text)("whitelist_apply_info"),
  announcementColor: (0, import_pg_core.text)("announcement_color"),
  announcementFooter: (0, import_pg_core.text)("announcement_footer"),
  announcementIconUrl: (0, import_pg_core.text)("announcement_icon_url"),
  createdAt: (0, import_pg_core.timestamp)("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: (0, import_pg_core.timestamp)("updated_at", { withTimezone: true }).notNull().defaultNow().$onUpdate(() => /* @__PURE__ */ new Date())
});
var insertDiscordGuildSettingsSchema = (0, import_drizzle_zod.createInsertSchema)(discordGuildSettingsTable).omit({
  createdAt: true,
  updatedAt: true
});

// lib/db/src/schema/discordWarnings.ts
var import_pg_core2 = require("drizzle-orm/pg-core");
var import_drizzle_zod2 = require("drizzle-zod");
var discordWarningsTable = (0, import_pg_core2.pgTable)("discord_warnings", {
  id: (0, import_pg_core2.serial)("id").primaryKey(),
  guildId: (0, import_pg_core2.text)("guild_id").notNull(),
  userId: (0, import_pg_core2.text)("user_id").notNull(),
  moderatorId: (0, import_pg_core2.text)("moderator_id").notNull(),
  reason: (0, import_pg_core2.text)("reason").notNull(),
  acknowledged: (0, import_pg_core2.boolean)("acknowledged").notNull().default(false),
  createdAt: (0, import_pg_core2.timestamp)("created_at", { withTimezone: true }).notNull().defaultNow()
});
var insertDiscordWarningSchema = (0, import_drizzle_zod2.createInsertSchema)(discordWarningsTable).omit({
  id: true,
  createdAt: true
});

// lib/db/src/schema/discordGlobalBans.ts
var import_pg_core3 = require("drizzle-orm/pg-core");
var import_drizzle_zod3 = require("drizzle-zod");
var discordGlobalBansTable = (0, import_pg_core3.pgTable)("discord_global_bans", {
  userId: (0, import_pg_core3.text)("user_id").primaryKey(),
  reason: (0, import_pg_core3.text)("reason").notNull(),
  moderatorId: (0, import_pg_core3.text)("moderator_id").notNull(),
  createdAt: (0, import_pg_core3.timestamp)("created_at", { withTimezone: true }).notNull().defaultNow()
});
var insertDiscordGlobalBanSchema = (0, import_drizzle_zod3.createInsertSchema)(discordGlobalBansTable).omit({
  createdAt: true
});

// lib/db/src/schema/discordGiveaways.ts
var import_pg_core4 = require("drizzle-orm/pg-core");
var import_drizzle_zod4 = require("drizzle-zod");
var discordGiveawaysTable = (0, import_pg_core4.pgTable)("discord_giveaways", {
  id: (0, import_pg_core4.serial)("id").primaryKey(),
  guildId: (0, import_pg_core4.text)("guild_id").notNull(),
  channelId: (0, import_pg_core4.text)("channel_id").notNull(),
  messageId: (0, import_pg_core4.text)("message_id"),
  prize: (0, import_pg_core4.text)("prize").notNull(),
  winnerCount: (0, import_pg_core4.integer)("winner_count").notNull().default(1),
  hostId: (0, import_pg_core4.text)("host_id").notNull(),
  entrantIds: (0, import_pg_core4.jsonb)("entrant_ids").$type().notNull().default([]),
  endsAt: (0, import_pg_core4.timestamp)("ends_at", { withTimezone: true }).notNull(),
  ended: (0, import_pg_core4.boolean)("ended").notNull().default(false),
  createdAt: (0, import_pg_core4.timestamp)("created_at", { withTimezone: true }).notNull().defaultNow()
});
var insertDiscordGiveawaySchema = (0, import_drizzle_zod4.createInsertSchema)(discordGiveawaysTable).omit({
  id: true,
  createdAt: true
});

// lib/db/src/schema/discordPolls.ts
var import_pg_core5 = require("drizzle-orm/pg-core");
var import_drizzle_zod5 = require("drizzle-zod");
var discordPollsTable = (0, import_pg_core5.pgTable)("discord_polls", {
  id: (0, import_pg_core5.serial)("id").primaryKey(),
  guildId: (0, import_pg_core5.text)("guild_id").notNull(),
  channelId: (0, import_pg_core5.text)("channel_id").notNull(),
  messageId: (0, import_pg_core5.text)("message_id"),
  question: (0, import_pg_core5.text)("question").notNull(),
  options: (0, import_pg_core5.jsonb)("options").$type().notNull(),
  votes: (0, import_pg_core5.jsonb)("votes").$type().notNull().default({}),
  ended: (0, import_pg_core5.boolean)("ended").notNull().default(false),
  createdAt: (0, import_pg_core5.timestamp)("created_at", { withTimezone: true }).notNull().defaultNow()
});
var insertDiscordPollSchema = (0, import_drizzle_zod5.createInsertSchema)(discordPollsTable).omit({
  id: true,
  createdAt: true
});

// lib/db/src/schema/discordSuggestions.ts
var import_pg_core6 = require("drizzle-orm/pg-core");
var import_drizzle_zod6 = require("drizzle-zod");
var discordSuggestionsTable = (0, import_pg_core6.pgTable)("discord_suggestions", {
  id: (0, import_pg_core6.serial)("id").primaryKey(),
  guildId: (0, import_pg_core6.text)("guild_id").notNull(),
  channelId: (0, import_pg_core6.text)("channel_id").notNull(),
  messageId: (0, import_pg_core6.text)("message_id"),
  userId: (0, import_pg_core6.text)("user_id").notNull(),
  content: (0, import_pg_core6.text)("content").notNull(),
  status: (0, import_pg_core6.text)("status").notNull().default("pending"),
  upvotes: (0, import_pg_core6.integer)("upvotes").notNull().default(0),
  downvotes: (0, import_pg_core6.integer)("downvotes").notNull().default(0),
  createdAt: (0, import_pg_core6.timestamp)("created_at", { withTimezone: true }).notNull().defaultNow()
});
var insertDiscordSuggestionSchema = (0, import_drizzle_zod6.createInsertSchema)(discordSuggestionsTable).omit({
  id: true,
  createdAt: true
});

// lib/db/src/schema/discordConfessions.ts
var import_pg_core7 = require("drizzle-orm/pg-core");
var import_drizzle_zod7 = require("drizzle-zod");
var discordConfessionsTable = (0, import_pg_core7.pgTable)("discord_confessions", {
  id: (0, import_pg_core7.serial)("id").primaryKey(),
  guildId: (0, import_pg_core7.text)("guild_id").notNull(),
  userId: (0, import_pg_core7.text)("user_id").notNull(),
  content: (0, import_pg_core7.text)("content").notNull(),
  createdAt: (0, import_pg_core7.timestamp)("created_at", { withTimezone: true }).notNull().defaultNow()
});
var insertDiscordConfessionSchema = (0, import_drizzle_zod7.createInsertSchema)(discordConfessionsTable).omit({
  id: true,
  createdAt: true
});

// lib/db/src/schema/discordReports.ts
var import_pg_core8 = require("drizzle-orm/pg-core");
var import_drizzle_zod8 = require("drizzle-zod");
var discordReportsTable = (0, import_pg_core8.pgTable)("discord_reports", {
  id: (0, import_pg_core8.serial)("id").primaryKey(),
  guildId: (0, import_pg_core8.text)("guild_id").notNull(),
  reporterId: (0, import_pg_core8.text)("reporter_id").notNull(),
  targetId: (0, import_pg_core8.text)("target_id").notNull(),
  reason: (0, import_pg_core8.text)("reason").notNull(),
  status: (0, import_pg_core8.text)("status").notNull().default("open"),
  claimedBy: (0, import_pg_core8.text)("claimed_by"),
  channelId: (0, import_pg_core8.text)("channel_id"),
  messageId: (0, import_pg_core8.text)("message_id"),
  createdAt: (0, import_pg_core8.timestamp)("created_at", { withTimezone: true }).notNull().defaultNow()
});
var insertDiscordReportSchema = (0, import_drizzle_zod8.createInsertSchema)(discordReportsTable).omit({
  id: true,
  createdAt: true
});

// lib/db/src/schema/discordLoaRequests.ts
var import_pg_core9 = require("drizzle-orm/pg-core");
var import_drizzle_zod9 = require("drizzle-zod");
var discordLoaRequestsTable = (0, import_pg_core9.pgTable)("discord_loa_requests", {
  id: (0, import_pg_core9.serial)("id").primaryKey(),
  guildId: (0, import_pg_core9.text)("guild_id").notNull(),
  userId: (0, import_pg_core9.text)("user_id").notNull(),
  reason: (0, import_pg_core9.text)("reason").notNull(),
  startDate: (0, import_pg_core9.text)("start_date").notNull(),
  endDate: (0, import_pg_core9.text)("end_date").notNull(),
  status: (0, import_pg_core9.text)("status").notNull().default("pending"),
  reviewedBy: (0, import_pg_core9.text)("reviewed_by"),
  channelId: (0, import_pg_core9.text)("channel_id"),
  messageId: (0, import_pg_core9.text)("message_id"),
  createdAt: (0, import_pg_core9.timestamp)("created_at", { withTimezone: true }).notNull().defaultNow()
});
var insertDiscordLoaRequestSchema = (0, import_drizzle_zod9.createInsertSchema)(discordLoaRequestsTable).omit({
  id: true,
  createdAt: true
});

// lib/db/src/schema/discordStaffDuty.ts
var import_pg_core10 = require("drizzle-orm/pg-core");
var import_drizzle_zod10 = require("drizzle-zod");
var discordStaffDutyTable = (0, import_pg_core10.pgTable)("discord_staff_duty", {
  guildUserId: (0, import_pg_core10.text)("guild_user_id").primaryKey(),
  guildId: (0, import_pg_core10.text)("guild_id").notNull(),
  userId: (0, import_pg_core10.text)("user_id").notNull(),
  onDuty: (0, import_pg_core10.boolean)("on_duty").notNull().default(false),
  lastToggledAt: (0, import_pg_core10.timestamp)("last_toggled_at", { withTimezone: true }).notNull().defaultNow()
});
var insertDiscordStaffDutySchema = (0, import_drizzle_zod10.createInsertSchema)(discordStaffDutyTable).omit({
  lastToggledAt: true
});

// lib/db/src/schema/discordRoleMenus.ts
var import_pg_core11 = require("drizzle-orm/pg-core");
var import_drizzle_zod11 = require("drizzle-zod");
var discordRoleMenusTable = (0, import_pg_core11.pgTable)("discord_role_menus", {
  id: (0, import_pg_core11.serial)("id").primaryKey(),
  guildId: (0, import_pg_core11.text)("guild_id").notNull(),
  channelId: (0, import_pg_core11.text)("channel_id").notNull(),
  messageId: (0, import_pg_core11.text)("message_id"),
  title: (0, import_pg_core11.text)("title").notNull(),
  description: (0, import_pg_core11.text)("description"),
  options: (0, import_pg_core11.jsonb)("options").$type().notNull().default([]),
  createdAt: (0, import_pg_core11.timestamp)("created_at", { withTimezone: true }).notNull().defaultNow()
});
var insertDiscordRoleMenuSchema = (0, import_drizzle_zod11.createInsertSchema)(discordRoleMenusTable).omit({
  id: true,
  createdAt: true
});

// lib/db/src/schema/discordTicketPanels.ts
var import_pg_core12 = require("drizzle-orm/pg-core");
var import_drizzle_zod12 = require("drizzle-zod");
var discordTicketPanelsTable = (0, import_pg_core12.pgTable)("discord_ticket_panels", {
  id: (0, import_pg_core12.serial)("id").primaryKey(),
  guildId: (0, import_pg_core12.text)("guild_id").notNull(),
  channelId: (0, import_pg_core12.text)("channel_id").notNull(),
  transcriptChannelId: (0, import_pg_core12.text)("transcript_channel_id"),
  messageId: (0, import_pg_core12.text)("message_id"),
  name: (0, import_pg_core12.text)("name").notNull(),
  embedTitle: (0, import_pg_core12.text)("embed_title").notNull(),
  embedDescription: (0, import_pg_core12.text)("embed_description").notNull(),
  embedColor: (0, import_pg_core12.text)("embed_color").notNull(),
  buttonLabel: (0, import_pg_core12.text)("button_label").notNull().default("Open Ticket"),
  buttonEmoji: (0, import_pg_core12.text)("button_emoji"),
  categoryId: (0, import_pg_core12.text)("category_id"),
  accessRoleIds: (0, import_pg_core12.jsonb)("access_role_ids").$type().notNull().default([]),
  pingRoleIds: (0, import_pg_core12.jsonb)("ping_role_ids").$type().notNull().default([]),
  ticketNamePrefix: (0, import_pg_core12.text)("ticket_name_prefix").notNull().default("ticket"),
  welcomeMessage: (0, import_pg_core12.text)("welcome_message"),
  ticketCounter: (0, import_pg_core12.integer)("ticket_counter").notNull().default(0),
  createdAt: (0, import_pg_core12.timestamp)("created_at", { withTimezone: true }).notNull().defaultNow()
});
var insertDiscordTicketPanelSchema = (0, import_drizzle_zod12.createInsertSchema)(discordTicketPanelsTable).omit({
  id: true,
  createdAt: true,
  ticketCounter: true
});

// lib/db/src/schema/discordTickets.ts
var import_pg_core13 = require("drizzle-orm/pg-core");
var import_drizzle_zod13 = require("drizzle-zod");
var discordTicketsTable = (0, import_pg_core13.pgTable)("discord_tickets", {
  id: (0, import_pg_core13.serial)("id").primaryKey(),
  guildId: (0, import_pg_core13.text)("guild_id").notNull(),
  panelId: (0, import_pg_core13.integer)("panel_id").notNull(),
  channelId: (0, import_pg_core13.text)("channel_id").notNull(),
  openerId: (0, import_pg_core13.text)("opener_id").notNull(),
  claimedBy: (0, import_pg_core13.text)("claimed_by"),
  status: (0, import_pg_core13.text)("status").notNull().default("open"),
  createdAt: (0, import_pg_core13.timestamp)("created_at", { withTimezone: true }).notNull().defaultNow(),
  closedAt: (0, import_pg_core13.timestamp)("closed_at", { withTimezone: true })
});
var insertDiscordTicketSchema = (0, import_drizzle_zod13.createInsertSchema)(discordTicketsTable).omit({
  id: true,
  createdAt: true,
  closedAt: true
});

// lib/db/src/schema/discordVehicleKeys.ts
var import_pg_core14 = require("drizzle-orm/pg-core");
var import_drizzle_zod14 = require("drizzle-zod");
var discordVehicleKeysTable = (0, import_pg_core14.pgTable)("discord_vehicle_keys", {
  id: (0, import_pg_core14.serial)("id").primaryKey(),
  guildId: (0, import_pg_core14.text)("guild_id").notNull(),
  name: (0, import_pg_core14.text)("name").notNull(),
  price: (0, import_pg_core14.integer)("price").notNull(),
  createdAt: (0, import_pg_core14.timestamp)("created_at", { withTimezone: true }).notNull().defaultNow()
});
var insertDiscordVehicleKeySchema = (0, import_drizzle_zod14.createInsertSchema)(discordVehicleKeysTable).omit({
  id: true,
  createdAt: true
});

// lib/db/src/schema/discordDevelopers.ts
var import_pg_core15 = require("drizzle-orm/pg-core");
var import_drizzle_zod15 = require("drizzle-zod");
var discordDevelopersTable = (0, import_pg_core15.pgTable)("discord_developers", {
  userId: (0, import_pg_core15.text)("user_id").primaryKey(),
  addedBy: (0, import_pg_core15.text)("added_by").notNull(),
  addedAt: (0, import_pg_core15.timestamp)("added_at", { withTimezone: true }).notNull().defaultNow()
});
var insertDiscordDeveloperSchema = (0, import_drizzle_zod15.createInsertSchema)(discordDevelopersTable).omit({
  addedAt: true
});

// lib/db/src/schema/discordDmForwardList.ts
var import_pg_core16 = require("drizzle-orm/pg-core");
var import_drizzle_zod16 = require("drizzle-zod");
var discordDmForwardListTable = (0, import_pg_core16.pgTable)("discord_dm_forward_list", {
  userId: (0, import_pg_core16.text)("user_id").primaryKey(),
  addedBy: (0, import_pg_core16.text)("added_by").notNull(),
  addedAt: (0, import_pg_core16.timestamp)("added_at", { withTimezone: true }).notNull().defaultNow()
});
var insertDiscordDmForwardEntrySchema = (0, import_drizzle_zod16.createInsertSchema)(discordDmForwardListTable).omit({
  addedAt: true
});

// lib/db/src/index.ts
const { Pool } = require("pg");
const { drizzle } = require("drizzle-orm/node-postgres");
const schema_exports = require("./schema");

let pool: Pool | null = null;
let db: ReturnType<typeof drizzle> | null = null;

export function getDb() {
  if (!process.env.DATABASE_URL) {
    return null;
  }

  if (!db) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });

    db = drizzle(pool, {
      schema: schema_exports,
    });
  }

  return db;
}

export function hasDatabase() {
  return Boolean(process.env.DATABASE_URL);
}

// artifacts/discord-bot/src/commands/moderation.ts
var import_drizzle_orm = require("drizzle-orm");

// artifacts/discord-bot/src/lib/theme.ts
var import_discord = require("discord.js");
var THEME = {
  primary: 9133302,
  accent: 2282478,
  success: 1096065,
  danger: 15680580,
  warning: 16096779,
  neutral: 2762304
};
var BRAND_NAME = "Titan Labs";
var brandIconURL;
function setBrandIconURL(url) {
  brandIconURL = url;
}
function nexusEmbed(opts) {
  const embed2 = new import_discord.EmbedBuilder().setColor(opts.color ?? THEME.primary).setTitle(`\u25C8 ${opts.title}`).setTimestamp().setFooter({
    text: opts.footer ? `${BRAND_NAME} \u2022 ${opts.footer}` : `${BRAND_NAME} SYSTEM`,
    iconURL: brandIconURL
  });
  if (opts.description) embed2.setDescription(opts.description);
  if (opts.fields?.length) embed2.addFields(opts.fields);
  if (opts.thumbnail) embed2.setThumbnail(opts.thumbnail);
  if (opts.image) embed2.setImage(opts.image);
  if (opts.author) embed2.setAuthor(opts.author);
  return embed2;
}
function errorEmbed(title, description) {
  return nexusEmbed({ title, description, color: THEME.danger });
}
async function replyOk(interaction, title, description, fields, footer) {
  const embed2 = nexusEmbed({ title, description, fields, color: THEME.success, footer });
  if (interaction.deferred || interaction.replied) {
    await interaction.editReply({ embeds: [embed2] });
  } else {
    await interaction.reply({ embeds: [embed2] });
  }
}
async function replyError(interaction, title, description) {
  const embed2 = errorEmbed(title, description);
  if (interaction.deferred || interaction.replied) {
    await interaction.editReply({ embeds: [embed2] });
  } else {
    await interaction.reply({ embeds: [embed2], flags: 64 });
  }
}
var DIVIDER = "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500";

// artifacts/discord-bot/src/lib/permissions.ts
var cachedOwnerIds = null;
async function getOwnerIds(client2) {
  if (cachedOwnerIds) return cachedOwnerIds;
  const ids = /* @__PURE__ */ new Set();
  const app = client2.application?.partial ? await client2.application.fetch() : client2.application;
  const owner = app?.owner;
  if (owner) {
    if ("members" in owner) {
      for (const member of owner.members.values()) {
        ids.add(member.user.id);
      }
    } else {
      ids.add(owner.id);
    }
  }
  cachedOwnerIds = ids;
  return ids;
}
async function isBotOwner(client2, userId) {
  const ids = await getOwnerIds(client2);
  return ids.has(userId);
}
async function isDeveloper(client2, userId) {
  if (await isBotOwner(client2, userId)) return true;
  const row = await db.query.discordDevelopersTable.findFirst({ where: (t, { eq: eq14 }) => eq14(t.userId, userId) });
  return !!row;
}

// artifacts/discord-bot/src/commands/moderation.ts
var ban = {
  data: new import_discord2.SlashCommandBuilder().setName("ban").setDescription("Ban a member with a reason and optional message purge.").addUserOption((o) => o.setName("user").setDescription("Member to ban").setRequired(true)).addStringOption((o) => o.setName("reason").setDescription("Reason for the ban")).addIntegerOption(
    (o) => o.setName("purge-days").setDescription("Delete their messages from the last N days (0-7)").setMinValue(0).setMaxValue(7)
  ).setDefaultMemberPermissions(import_discord2.PermissionFlagsBits.BanMembers).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const target = interaction.options.getUser("user", true);
    const reason = interaction.options.getString("reason") ?? "No reason provided";
    const purgeDays = interaction.options.getInteger("purge-days") ?? 0;
    const member = await interaction.guild.members.fetch(target.id).catch(() => null);
    if (member && !member.bannable) {
      await replyError(interaction, "Ban Failed", `I don't have permission to ban **${target.tag}**.`);
      return;
    }
    await target.send({
      embeds: [
        nexusEmbed({
          title: "You Have Been Banned",
          description: `You were banned from **${interaction.guild.name}**.`,
          color: THEME.danger,
          fields: [{ name: "Reason", value: reason }],
          footer: "Moderation"
        })
      ]
    }).catch(() => null);
    try {
      await interaction.guild.members.ban(target.id, {
        reason: `${reason} \u2014 by ${interaction.user.tag}`,
        deleteMessageSeconds: purgeDays * 86400
      });
      await replyOk(
        interaction,
        "Member Banned",
        `**${target.tag}** has been permanently removed from the server.`,
        [
          { name: "User", value: `<@${target.id}>`, inline: true },
          { name: "Moderator", value: `<@${interaction.user.id}>`, inline: true },
          { name: "Purge", value: `${purgeDays} day(s)`, inline: true },
          { name: "Reason", value: reason }
        ],
        "Moderation"
      );
    } catch (err) {
      logger.error({ err }, "ban failed");
      await replyError(interaction, "Ban Failed", "Something went wrong while banning this member.");
    }
  }
};
var kick = {
  data: new import_discord2.SlashCommandBuilder().setName("kick").setDescription("Kick a member from the server.").addUserOption((o) => o.setName("user").setDescription("Member to kick").setRequired(true)).addStringOption((o) => o.setName("reason").setDescription("Reason for the kick")).setDefaultMemberPermissions(import_discord2.PermissionFlagsBits.KickMembers).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const target = interaction.options.getUser("user", true);
    const reason = interaction.options.getString("reason") ?? "No reason provided";
    const member = await interaction.guild.members.fetch(target.id).catch(() => null);
    if (!member) {
      await replyError(interaction, "Kick Failed", "That user is not a member of this server.");
      return;
    }
    if (!member.kickable) {
      await replyError(interaction, "Kick Failed", `I don't have permission to kick **${target.tag}**.`);
      return;
    }
    await target.send({
      embeds: [
        nexusEmbed({
          title: "You Have Been Kicked",
          description: `You were kicked from **${interaction.guild.name}**.`,
          color: THEME.warning,
          fields: [{ name: "Reason", value: reason }],
          footer: "Moderation"
        })
      ]
    }).catch(() => null);
    try {
      await member.kick(`${reason} \u2014 by ${interaction.user.tag}`);
      await replyOk(
        interaction,
        "Member Kicked",
        `**${target.tag}** has been removed from the server.`,
        [
          { name: "User", value: `<@${target.id}>`, inline: true },
          { name: "Moderator", value: `<@${interaction.user.id}>`, inline: true },
          { name: "Reason", value: reason }
        ],
        "Moderation"
      );
    } catch (err) {
      logger.error({ err }, "kick failed");
      await replyError(interaction, "Kick Failed", "Something went wrong while kicking this member.");
    }
  }
};
function parseDuration(input) {
  const match = /^(\d+)\s*(s|m|h|d)$/i.exec(input.trim());
  if (!match) return null;
  const value = Number(match[1]);
  const unit = match[2].toLowerCase();
  const multipliers = { s: 1e3, m: 6e4, h: 36e5, d: 864e5 };
  return value * multipliers[unit];
}
var mute = {
  data: new import_discord2.SlashCommandBuilder().setName("mute").setDescription("Timeout a member for a duration (e.g. 10m, 1h, 3d).").addUserOption((o) => o.setName("user").setDescription("Member to mute").setRequired(true)).addStringOption((o) => o.setName("duration").setDescription("Duration, e.g. 10m, 1h, 3d").setRequired(true)).addStringOption((o) => o.setName("reason").setDescription("Reason for the mute")).setDefaultMemberPermissions(import_discord2.PermissionFlagsBits.ModerateMembers).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const target = interaction.options.getUser("user", true);
    const durationInput = interaction.options.getString("duration", true);
    const reason = interaction.options.getString("reason") ?? "No reason provided";
    const durationMs = parseDuration(durationInput);
    if (!durationMs || durationMs > 28 * 864e5) {
      await replyError(interaction, "Invalid Duration", "Use a format like `10m`, `1h`, or `3d` (max 28 days).");
      return;
    }
    const member = await interaction.guild.members.fetch(target.id).catch(() => null);
    if (!member || !member.moderatable) {
      await replyError(interaction, "Mute Failed", `I don't have permission to timeout **${target.tag}**.`);
      return;
    }
    try {
      await member.timeout(durationMs, `${reason} \u2014 by ${interaction.user.tag}`);
      await replyOk(
        interaction,
        "Member Muted",
        `**${target.tag}** has been timed out.`,
        [
          { name: "User", value: `<@${target.id}>`, inline: true },
          { name: "Duration", value: durationInput, inline: true },
          { name: "Reason", value: reason }
        ],
        "Moderation"
      );
    } catch (err) {
      logger.error({ err }, "mute failed");
      await replyError(interaction, "Mute Failed", "Something went wrong while muting this member.");
    }
  }
};
var unmute = {
  data: new import_discord2.SlashCommandBuilder().setName("unmute").setDescription("Remove an active timeout from a member.").addUserOption((o) => o.setName("user").setDescription("Member to unmute").setRequired(true)).setDefaultMemberPermissions(import_discord2.PermissionFlagsBits.ModerateMembers).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const target = interaction.options.getUser("user", true);
    const member = await interaction.guild.members.fetch(target.id).catch(() => null);
    if (!member) {
      await replyError(interaction, "Unmute Failed", "That user is not a member of this server.");
      return;
    }
    try {
      await member.timeout(null, `Unmuted by ${interaction.user.tag}`);
      await replyOk(interaction, "Member Unmuted", `**${target.tag}**'s timeout has been cleared.`, void 0, "Moderation");
    } catch (err) {
      logger.error({ err }, "unmute failed");
      await replyError(interaction, "Unmute Failed", "Something went wrong while unmuting this member.");
    }
  }
};
var warn = {
  data: new import_discord2.SlashCommandBuilder().setName("warn").setDescription("Issue a formal warning to a member and DM them.").addUserOption((o) => o.setName("user").setDescription("Member to warn").setRequired(true)).addStringOption((o) => o.setName("reason").setDescription("Reason for the warning").setRequired(true)).setDefaultMemberPermissions(import_discord2.PermissionFlagsBits.ModerateMembers).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const target = interaction.options.getUser("user", true);
    const reason = interaction.options.getString("reason", true);
    const [inserted] = await db.insert(discordWarningsTable).values({ guildId: interaction.guild.id, userId: target.id, moderatorId: interaction.user.id, reason }).returning();
    const ackRow = new import_discord2.ActionRowBuilder().addComponents(
      new import_discord2.ButtonBuilder().setCustomId(`warn_ack:${inserted.id}`).setLabel("Acknowledge").setStyle(import_discord2.ButtonStyle.Primary)
    );
    const dmSent = await target.send({
      embeds: [
        nexusEmbed({
          title: "Formal Warning",
          description: `You received a warning in **${interaction.guild.name}**.`,
          color: THEME.warning,
          fields: [
            { name: "Reason", value: reason },
            { name: "Warning ID", value: `#${inserted.id}` }
          ],
          footer: "Staff & Administration"
        })
      ],
      components: [ackRow]
    }).then(() => true).catch(() => false);
    await replyOk(
      interaction,
      "Warning Issued",
      `**${target.tag}** has been warned.${dmSent ? "" : "\n*(Could not deliver DM \u2014 their messages may be closed.)*"}`,
      [
        { name: "User", value: `<@${target.id}>`, inline: true },
        { name: "Moderator", value: `<@${interaction.user.id}>`, inline: true },
        { name: "Warning ID", value: `#${inserted.id}`, inline: true },
        { name: "Reason", value: reason }
      ],
      "Staff & Administration"
    );
  }
};
var purge = {
  data: new import_discord2.SlashCommandBuilder().setName("purge").setDescription("Bulk delete recent messages in this channel.").addIntegerOption(
    (o) => o.setName("amount").setDescription("Number of messages to delete (1-100)").setMinValue(1).setMaxValue(100).setRequired(true)
  ).addUserOption((o) => o.setName("user").setDescription("Only delete messages from this user")).setDefaultMemberPermissions(import_discord2.PermissionFlagsBits.ManageMessages).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild || !interaction.channel || interaction.channel.type !== import_discord2.ChannelType.GuildText) {
      await replyError(interaction, "Purge Failed", "This command can only be used in a text channel.");
      return;
    }
    const amount = interaction.options.getInteger("amount", true);
    const user = interaction.options.getUser("user");
    const channel = interaction.channel;
    await interaction.deferReply({ flags: 64 });
    try {
      const messages = await channel.messages.fetch({ limit: 100 });
      const filtered = user ? messages.filter((m) => m.author.id === user.id) : messages;
      const toDelete = [...filtered.values()].slice(0, amount);
      const deleted = await channel.bulkDelete(toDelete, true);
      await interaction.editReply({
        embeds: [
          nexusEmbed({
            title: "Messages Purged",
            description: `Deleted **${deleted.size}** message(s) in ${channel}.`,
            color: THEME.success,
            footer: "Moderation"
          })
        ]
      });
    } catch (err) {
      logger.error({ err }, "purge failed");
      await replyError(interaction, "Purge Failed", "Could not delete messages (they may be older than 14 days).");
    }
  }
};
var banCheck = {
  data: new import_discord2.SlashCommandBuilder().setName("ban-check").setDescription("Check whether a user is banned from this server.").addUserOption((o) => o.setName("user").setDescription("User to check").setRequired(true)).setDefaultMemberPermissions(import_discord2.PermissionFlagsBits.BanMembers).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const target = interaction.options.getUser("user", true);
    const ban2 = await interaction.guild.bans.fetch(target.id).catch(() => null);
    const globalBan2 = await db.query.discordGlobalBansTable.findFirst({
      where: (0, import_drizzle_orm.eq)(discordGlobalBansTable.userId, target.id)
    });
    await interaction.reply({
      embeds: [
        nexusEmbed({
          title: "Ban Status Lookup",
          color: ban2 || globalBan2 ? THEME.danger : THEME.success,
          thumbnail: target.displayAvatarURL(),
          fields: [
            { name: "User", value: `<@${target.id}> (${target.tag})` },
            { name: "Local Ban", value: ban2 ? `Yes \u2014 ${ban2.reason ?? "No reason logged"}` : "Not banned here", inline: true },
            {
              name: "Network Ban",
              value: globalBan2 ? `Yes \u2014 ${globalBan2.reason}` : "None",
              inline: true
            }
          ],
          footer: "Moderation"
        })
      ]
    });
  }
};
var whois = {
  data: new import_discord2.SlashCommandBuilder().setName("whois").setDescription("Deep security lookup on a member.").addUserOption((o) => o.setName("user").setDescription("Member to inspect").setRequired(true)).setDefaultMemberPermissions(import_discord2.PermissionFlagsBits.ModerateMembers).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const target = interaction.options.getUser("user", true);
    const member = await interaction.guild.members.fetch(target.id).catch(() => null);
    const warnings = await db.query.discordWarningsTable.findMany({
      where: (0, import_drizzle_orm.eq)(discordWarningsTable.userId, target.id),
      orderBy: (0, import_drizzle_orm.desc)(discordWarningsTable.createdAt)
    });
    const globalBan2 = await db.query.discordGlobalBansTable.findFirst({
      where: (0, import_drizzle_orm.eq)(discordGlobalBansTable.userId, target.id)
    });
    const accountAgeDays = Math.floor((Date.now() - target.createdTimestamp) / 864e5);
    const flags = [];
    if (accountAgeDays < 7) flags.push("\u26A0 Account created under 7 days ago");
    if (!member?.avatar && !target.avatar) flags.push("\u26A0 Default avatar");
    if (globalBan2) flags.push("\u26D4 Flagged on the network ban list");
    if (warnings.length >= 3) flags.push(`\u26A0 ${warnings.length} prior warnings`);
    await interaction.reply({
      embeds: [
        nexusEmbed({
          title: `Security Profile \u2014 ${target.tag}`,
          color: flags.length ? THEME.warning : THEME.accent,
          thumbnail: target.displayAvatarURL(),
          fields: [
            { name: "User ID", value: target.id, inline: true },
            { name: "Account Created", value: `<t:${Math.floor(target.createdTimestamp / 1e3)}:R>`, inline: true },
            {
              name: "Joined Server",
              value: member?.joinedTimestamp ? `<t:${Math.floor(member.joinedTimestamp / 1e3)}:R>` : "Not a member",
              inline: true
            },
            { name: "Roles", value: member ? `${member.roles.cache.size - 1}` : "N/A", inline: true },
            { name: "Warnings", value: `${warnings.length}`, inline: true },
            { name: "Bot Account", value: target.bot ? "Yes" : "No", inline: true },
            { name: "Risk Signals", value: flags.length ? flags.join("\n") : "None detected" }
          ],
          footer: "Security Lookup"
        })
      ]
    });
  }
};
var globalBan = {
  data: new import_discord2.SlashCommandBuilder().setName("global-ban").setDescription("[Owner Only] Ban a user across every server this bot is in.").addUserOption((o) => o.setName("user").setDescription("User to network-ban").setRequired(true)).addStringOption((o) => o.setName("reason").setDescription("Reason for the network ban").setRequired(true)).setDMPermission(false),
  async execute(interaction) {
    if (!await isBotOwner(interaction.client, interaction.user.id)) {
      await replyError(interaction, "Access Denied", "This command is restricted to the bot owner.");
      return;
    }
    const target = interaction.options.getUser("user", true);
    const reason = interaction.options.getString("reason", true);
    await interaction.deferReply();
    await db.insert(discordGlobalBansTable).values({ userId: target.id, reason, moderatorId: interaction.user.id }).onConflictDoUpdate({ target: discordGlobalBansTable.userId, set: { reason, moderatorId: interaction.user.id } });
    let successCount = 0;
    for (const guild of interaction.client.guilds.cache.values()) {
      const ok = await guild.members.ban(target.id, { reason: `Network ban: ${reason}` }).then(() => true).catch(() => false);
      if (ok) successCount++;
    }
    await interaction.editReply({
      embeds: [
        nexusEmbed({
          title: "Network Ban Enforced",
          description: `**${target.tag}** has been banned across **${successCount}/${interaction.client.guilds.cache.size}** servers.`,
          color: THEME.danger,
          fields: [{ name: "Reason", value: reason }],
          footer: "Global Enforcement"
        })
      ]
    });
  }
};
var globalUnban = {
  data: new import_discord2.SlashCommandBuilder().setName("global-unban").setDescription("[Owner Only] Unban a user across every server this bot is in.").addUserOption((o) => o.setName("user").setDescription("User to network-unban").setRequired(true)).setDMPermission(false),
  async execute(interaction) {
    if (!await isBotOwner(interaction.client, interaction.user.id)) {
      await replyError(interaction, "Access Denied", "This command is restricted to the bot owner.");
      return;
    }
    const target = interaction.options.getUser("user", true);
    await interaction.deferReply();
    await db.delete(discordGlobalBansTable).where((0, import_drizzle_orm.eq)(discordGlobalBansTable.userId, target.id));
    let successCount = 0;
    for (const guild of interaction.client.guilds.cache.values()) {
      const ok = await guild.members.unban(target.id, `Network unban by ${interaction.user.tag}`).then(() => true).catch(() => false);
      if (ok) successCount++;
    }
    await interaction.editReply({
      embeds: [
        nexusEmbed({
          title: "Network Ban Lifted",
          description: `**${target.tag}** has been unbanned across **${successCount}/${interaction.client.guilds.cache.size}** servers.`,
          color: THEME.success,
          footer: "Global Enforcement"
        })
      ]
    });
  }
};
var moderationCommands = [
  ban,
  kick,
  mute,
  unmute,
  warn,
  purge,
  banCheck,
  whois,
  globalBan,
  globalUnban
];

// artifacts/discord-bot/src/commands/community.ts
var import_discord3 = require("discord.js");
var import_drizzle_orm2 = require("drizzle-orm");
function parseDuration2(input) {
  const match = /^(\d+)\s*(s|m|h|d)$/i.exec(input.trim());
  if (!match) return null;
  const value = Number(match[1]);
  const unit = match[2].toLowerCase();
  const multipliers = { s: 1e3, m: 6e4, h: 36e5, d: 864e5 };
  return value * multipliers[unit];
}
async function getSettings(guildId2) {
  return db.query.discordGuildSettingsTable.findFirst({ where: (0, import_drizzle_orm2.eq)(discordGuildSettingsTable.guildId, guildId2) });
}
var giveaway = {
  data: new import_discord3.SlashCommandBuilder().setName("giveaway").setDescription("Launch a timed giveaway with automatic winner selection.").addStringOption((o) => o.setName("prize").setDescription("What are you giving away?").setRequired(true)).addStringOption((o) => o.setName("duration").setDescription("Duration, e.g. 10m, 1h, 3d").setRequired(true)).addIntegerOption((o) => o.setName("winners").setDescription("Number of winners").setMinValue(1).setMaxValue(20)).setDefaultMemberPermissions(import_discord3.PermissionFlagsBits.ManageGuild).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild || !interaction.channel) return;
    const prize = interaction.options.getString("prize", true);
    const durationInput = interaction.options.getString("duration", true);
    const winnerCount = interaction.options.getInteger("winners") ?? 1;
    const durationMs = parseDuration2(durationInput);
    if (!durationMs) {
      await replyError(interaction, "Invalid Duration", "Use a format like `10m`, `1h`, or `3d`.");
      return;
    }
    const endsAt = new Date(Date.now() + durationMs);
    const row = new import_discord3.ActionRowBuilder().addComponents(
      new import_discord3.ButtonBuilder().setCustomId("giveaway_enter").setLabel("Enter Giveaway").setStyle(import_discord3.ButtonStyle.Primary).setEmoji("\u{1F381}")
    );
    const embed2 = nexusEmbed({
      title: "Giveaway Activated",
      description: `**${prize}**
${DIVIDER}
Ends: <t:${Math.floor(endsAt.getTime() / 1e3)}:R>
Winners: **${winnerCount}**
Hosted by <@${interaction.user.id}>`,
      color: THEME.accent,
      footer: "Community"
    });
    await interaction.reply({ embeds: [embed2], components: [row] });
    const message = await interaction.fetchReply();
    const [inserted] = await db.insert(discordGiveawaysTable).values({
      guildId: interaction.guild.id,
      channelId: interaction.channelId,
      messageId: message.id,
      prize,
      winnerCount,
      hostId: interaction.user.id,
      endsAt
    }).returning();
    setTimeout(() => void endGiveaway(interaction.client, inserted.id), durationMs);
  }
};
async function endGiveaway(client2, giveawayId) {
  const giveaway2 = await db.query.discordGiveawaysTable.findFirst({ where: (0, import_drizzle_orm2.eq)(discordGiveawaysTable.id, giveawayId) });
  if (!giveaway2 || giveaway2.ended) return;
  await db.update(discordGiveawaysTable).set({ ended: true }).where((0, import_drizzle_orm2.eq)(discordGiveawaysTable.id, giveawayId));
  const channel = await client2.channels.fetch(giveaway2.channelId).catch(() => null);
  if (!channel || channel.type !== import_discord3.ChannelType.GuildText) return;
  const entrants = giveaway2.entrantIds;
  const winners = [];
  const pool2 = [...entrants];
  for (let i = 0; i < giveaway2.winnerCount && pool2.length > 0; i++) {
    const idx = Math.floor(Math.random() * pool2.length);
    winners.push(pool2.splice(idx, 1)[0]);
  }
  await channel.send({
    embeds: [
      nexusEmbed({
        title: "Giveaway Concluded",
        description: `**${giveaway2.prize}**
${DIVIDER}
${winners.length ? `Winner(s): ${winners.map((w) => `<@${w}>`).join(", ")}` : "No valid entrants \u2014 no winner selected."}`,
        color: THEME.success,
        footer: "Community"
      })
    ]
  });
}
var poll = {
  data: new import_discord3.SlashCommandBuilder().setName("poll").setDescription("Create a multi-option poll with live results.").addStringOption((o) => o.setName("question").setDescription("The poll question").setRequired(true)).addStringOption((o) => o.setName("options").setDescription("Comma-separated options (2-5)").setRequired(true)).setDefaultMemberPermissions(import_discord3.PermissionFlagsBits.SendMessages).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const question = interaction.options.getString("question", true);
    const rawOptions = interaction.options.getString("options", true).split(",").map((o) => o.trim()).filter(Boolean);
    if (rawOptions.length < 2 || rawOptions.length > 5) {
      await replyError(interaction, "Invalid Poll", "Provide between 2 and 5 comma-separated options.");
      return;
    }
    const row = new import_discord3.ActionRowBuilder().addComponents(
      rawOptions.map(
        (opt, i) => new import_discord3.ButtonBuilder().setCustomId(`poll_vote:${i}`).setLabel(opt.slice(0, 70)).setStyle(import_discord3.ButtonStyle.Secondary)
      )
    );
    const embed2 = nexusEmbed({
      title: "Live Poll",
      description: `**${question}**
${DIVIDER}
${rawOptions.map((o, i) => `**${i + 1}.** ${o} \u2014 0 votes`).join("\n")}`,
      color: THEME.primary,
      footer: "Community"
    });
    await interaction.reply({ embeds: [embed2], components: [row] });
    const message = await interaction.fetchReply();
    await db.insert(discordPollsTable).values({
      guildId: interaction.guild.id,
      channelId: interaction.channelId,
      messageId: message.id,
      question,
      options: rawOptions,
      votes: {}
    });
  }
};
var announce = {
  data: new import_discord3.SlashCommandBuilder().setName("announce").setDescription("Post a formatted announcement with an optional role ping.").addStringOption((o) => o.setName("message").setDescription("Announcement content").setRequired(true)).addStringOption((o) => o.setName("title").setDescription("Announcement title")).addRoleOption((o) => o.setName("role").setDescription("Role to ping")).addChannelOption((o) => o.setName("channel").setDescription("Channel to post in").addChannelTypes(import_discord3.ChannelType.GuildText)).setDefaultMemberPermissions(import_discord3.PermissionFlagsBits.ManageGuild).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const message = interaction.options.getString("message", true);
    const title = interaction.options.getString("title") ?? "Server Announcement";
    const role = interaction.options.getRole("role");
    const channelOpt = interaction.options.getChannel("channel") ?? interaction.channel;
    const settings = await getSettings(interaction.guild.id);
    const embed2 = nexusEmbed({
      title,
      description: message,
      color: settings?.announcementColor ? Number(settings.announcementColor) : THEME.accent,
      footer: settings?.announcementFooter ?? "Announcement",
      thumbnail: settings?.announcementIconUrl ?? void 0
    });
    await channelOpt.send({ content: role ? `${role}` : void 0, embeds: [embed2] });
    await replyOk(interaction, "Announcement Posted", `Your announcement was sent to ${channelOpt}.`);
  }
};
var verification = {
  data: new import_discord3.SlashCommandBuilder().setName("verification").setDescription("Post a member verification button in this channel.").addRoleOption((o) => o.setName("role").setDescription("Role to grant on verification").setRequired(true)).setDefaultMemberPermissions(import_discord3.PermissionFlagsBits.ManageGuild).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild || !interaction.channel) return;
    const role = interaction.options.getRole("role", true);
    const row = new import_discord3.ActionRowBuilder().addComponents(
      new import_discord3.ButtonBuilder().setCustomId("verify_button").setLabel("Verify Me").setStyle(import_discord3.ButtonStyle.Success).setEmoji("\u2705")
    );
    const embed2 = nexusEmbed({
      title: "Identity Verification",
      description: `Welcome to **${interaction.guild.name}**.
${DIVIDER}
Click below to verify and unlock full server access.`,
      color: THEME.accent,
      footer: "Community"
    });
    await interaction.reply({ embeds: [embed2], components: [row] });
    const message = await interaction.fetchReply();
    await db.insert(discordGuildSettingsTable).values({ guildId: interaction.guild.id, verificationRoleId: role.id, verificationChannelId: interaction.channelId, verificationMessageId: message.id }).onConflictDoUpdate({
      target: discordGuildSettingsTable.guildId,
      set: { verificationRoleId: role.id, verificationChannelId: interaction.channelId, verificationMessageId: message.id }
    });
  }
};
var invite = {
  data: new import_discord3.SlashCommandBuilder().setName("invite").setDescription("Generate a server invite embed.").addIntegerOption((o) => o.setName("max-uses").setDescription("Max uses (0 = unlimited)").setMinValue(0)).addIntegerOption((o) => o.setName("expires-minutes").setDescription("Expiry in minutes (0 = never)").setMinValue(0)).setDefaultMemberPermissions(import_discord3.PermissionFlagsBits.CreateInstantInvite).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild || !interaction.channel || interaction.channel.type !== import_discord3.ChannelType.GuildText) {
      await replyError(interaction, "Invite Failed", "This command must be used in a text channel.");
      return;
    }
    const maxUses = interaction.options.getInteger("max-uses") ?? 0;
    const expiresMinutes = interaction.options.getInteger("expires-minutes") ?? 0;
    const invite2 = await interaction.channel.createInvite({
      maxUses: maxUses || void 0,
      maxAge: expiresMinutes ? expiresMinutes * 60 : 0
    });
    await interaction.reply({
      embeds: [
        nexusEmbed({
          title: "Server Invite",
          description: `**${interaction.guild.name}**
${DIVIDER}
${invite2.url}`,
          color: THEME.accent,
          fields: [
            { name: "Max Uses", value: maxUses ? `${maxUses}` : "Unlimited", inline: true },
            { name: "Expires", value: expiresMinutes ? `<t:${Math.floor(Date.now() / 1e3) + expiresMinutes * 60}:R>` : "Never", inline: true }
          ],
          thumbnail: interaction.guild.iconURL() ?? void 0,
          footer: "Community"
        })
      ]
    });
  }
};
var suggestion = {
  data: new import_discord3.SlashCommandBuilder().setName("suggestion").setDescription("Submit a suggestion for the community to vote on.").addStringOption((o) => o.setName("content").setDescription("Your suggestion").setRequired(true)).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const content = interaction.options.getString("content", true);
    const settings = await getSettings(interaction.guild.id);
    const targetChannel = settings?.suggestionChannelId ? await interaction.guild.channels.fetch(settings.suggestionChannelId).catch(() => null) : interaction.channel;
    if (!targetChannel) {
      await replyError(interaction, "Suggestion Failed", "No suggestion channel is configured or accessible.");
      return;
    }
    const [inserted] = await db.insert(discordSuggestionsTable).values({ guildId: interaction.guild.id, channelId: targetChannel.id, userId: interaction.user.id, content }).returning();
    const row = new import_discord3.ActionRowBuilder().addComponents(
      new import_discord3.ButtonBuilder().setCustomId(`suggestion_up:${inserted.id}`).setLabel("0").setEmoji("\u25B2").setStyle(import_discord3.ButtonStyle.Success),
      new import_discord3.ButtonBuilder().setCustomId(`suggestion_down:${inserted.id}`).setLabel("0").setEmoji("\u25BC").setStyle(import_discord3.ButtonStyle.Danger)
    );
    const message = await targetChannel.send({
      embeds: [
        nexusEmbed({
          title: `Suggestion #${inserted.id}`,
          description: content,
          color: THEME.primary,
          fields: [{ name: "Submitted By", value: `<@${interaction.user.id}>` }],
          footer: "Community"
        })
      ],
      components: [row]
    });
    await db.update(discordSuggestionsTable).set({ messageId: message.id }).where((0, import_drizzle_orm2.eq)(discordSuggestionsTable.id, inserted.id));
    await replyOk(interaction, "Suggestion Submitted", `Your suggestion was posted to ${targetChannel}.`);
  }
};
var confession = {
  data: new import_discord3.SlashCommandBuilder().setName("confession").setDescription("Post an anonymous confession to the confession channel.").addStringOption((o) => o.setName("content").setDescription("Your confession").setRequired(true)).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const content = interaction.options.getString("content", true);
    const settings = await getSettings(interaction.guild.id);
    const targetChannel = settings?.confessionChannelId ? await interaction.guild.channels.fetch(settings.confessionChannelId).catch(() => null) : null;
    if (!targetChannel) {
      await replyError(interaction, "Confession Failed", "No confession channel is configured. Ask an admin to set one via `/serverlog` setup or contact support.");
      return;
    }
    const [inserted] = await db.insert(discordConfessionsTable).values({ guildId: interaction.guild.id, userId: interaction.user.id, content }).returning();
    await targetChannel.send({
      embeds: [
        nexusEmbed({
          title: `Anonymous Confession #${inserted.id}`,
          description: content,
          color: THEME.neutral,
          footer: "Identity Protected"
        })
      ]
    });
    await interaction.reply({ embeds: [successEmbedConfession()], flags: 64 });
  }
};
function successEmbedConfession() {
  return nexusEmbed({ title: "Confession Sent", description: "Your confession was posted anonymously.", color: THEME.success });
}
var LOG_EVENT_CHOICES = [
  "memberJoin",
  "memberLeave",
  "messageDelete",
  "messageEdit",
  "banAdd",
  "banRemove"
];
var serverlog = {
  data: new import_discord3.SlashCommandBuilder().setName("serverlog").setDescription("Configure the full audit log system.").addChannelOption((o) => o.setName("channel").setDescription("Channel to send logs to").addChannelTypes(import_discord3.ChannelType.GuildText).setRequired(true)).addStringOption(
    (o) => o.setName("events").setDescription("Comma-separated events to log (default: all)").setRequired(false)
  ).setDefaultMemberPermissions(import_discord3.PermissionFlagsBits.ManageGuild).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const channel = interaction.options.getChannel("channel", true);
    const eventsInput = interaction.options.getString("events");
    const events = eventsInput ? eventsInput.split(",").map((e) => e.trim()).filter((e) => LOG_EVENT_CHOICES.includes(e)) : [...LOG_EVENT_CHOICES];
    await db.insert(discordGuildSettingsTable).values({ guildId: interaction.guild.id, logChannelId: channel.id, logEvents: events }).onConflictDoUpdate({ target: discordGuildSettingsTable.guildId, set: { logChannelId: channel.id, logEvents: events } });
    await replyOk(
      interaction,
      "Audit Log Configured",
      `Server events will now be logged to ${channel}.`,
      [{ name: "Tracked Events", value: events.join(", ") }],
      "Community"
    );
  }
};
var communityCommands = [
  giveaway,
  poll,
  announce,
  verification,
  invite,
  suggestion,
  confession,
  serverlog
];

// artifacts/discord-bot/src/commands/server.ts
var import_discord4 = require("discord.js");
var lock = {
  data: new import_discord4.SlashCommandBuilder().setName("lock").setDescription("Lock a channel, preventing @everyone from sending messages.").addChannelOption((o) => o.setName("channel").setDescription("Channel to lock").addChannelTypes(import_discord4.ChannelType.GuildText)).setDefaultMemberPermissions(import_discord4.PermissionFlagsBits.ManageChannels).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const channel = interaction.options.getChannel("channel") ?? interaction.channel;
    await channel.permissionOverwrites.edit(interaction.guild.roles.everyone, { SendMessages: false });
    await replyOk(interaction, "Channel Locked", `${channel} is now locked.`, void 0, "Server Management");
  }
};
var unlock = {
  data: new import_discord4.SlashCommandBuilder().setName("unlock").setDescription("Unlock a previously locked channel.").addChannelOption((o) => o.setName("channel").setDescription("Channel to unlock").addChannelTypes(import_discord4.ChannelType.GuildText)).setDefaultMemberPermissions(import_discord4.PermissionFlagsBits.ManageChannels).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const channel = interaction.options.getChannel("channel") ?? interaction.channel;
    await channel.permissionOverwrites.edit(interaction.guild.roles.everyone, { SendMessages: null });
    await replyOk(interaction, "Channel Unlocked", `${channel} is now unlocked.`, void 0, "Server Management");
  }
};
var slowmode = {
  data: new import_discord4.SlashCommandBuilder().setName("slowmode").setDescription("Set slowmode delay for a channel.").addIntegerOption((o) => o.setName("seconds").setDescription("Delay in seconds (0 to disable)").setMinValue(0).setMaxValue(21600).setRequired(true)).addChannelOption((o) => o.setName("channel").setDescription("Channel to configure").addChannelTypes(import_discord4.ChannelType.GuildText)).setDefaultMemberPermissions(import_discord4.PermissionFlagsBits.ManageChannels).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const seconds = interaction.options.getInteger("seconds", true);
    const channel = interaction.options.getChannel("channel") ?? interaction.channel;
    await channel.setRateLimitPerUser(seconds);
    await replyOk(
      interaction,
      "Slowmode Updated",
      seconds === 0 ? `Slowmode disabled in ${channel}.` : `Slowmode set to **${seconds}s** in ${channel}.`,
      void 0,
      "Server Management"
    );
  }
};
var nick = {
  data: new import_discord4.SlashCommandBuilder().setName("nick").setDescription("Change a member's nickname.").addUserOption((o) => o.setName("user").setDescription("Member to rename").setRequired(true)).addStringOption((o) => o.setName("nickname").setDescription("New nickname (leave empty to reset)")).setDefaultMemberPermissions(import_discord4.PermissionFlagsBits.ManageNicknames).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const target = interaction.options.getUser("user", true);
    const nickname = interaction.options.getString("nickname");
    const member = await interaction.guild.members.fetch(target.id).catch(() => null);
    if (!member) {
      await replyError(interaction, "Nickname Failed", "That user is not a member of this server.");
      return;
    }
    await member.setNickname(nickname);
    await replyOk(
      interaction,
      "Nickname Updated",
      nickname ? `**${target.tag}**'s nickname is now **${nickname}**.` : `**${target.tag}**'s nickname has been reset.`,
      void 0,
      "Server Management"
    );
  }
};
var embed = {
  data: new import_discord4.SlashCommandBuilder().setName("embed").setDescription("Create and send a custom branded embed.").addStringOption((o) => o.setName("title").setDescription("Embed title").setRequired(true)).addStringOption((o) => o.setName("description").setDescription("Embed body text").setRequired(true)).addStringOption((o) => o.setName("color").setDescription("Hex color, e.g. #8b5cf6")).addChannelOption((o) => o.setName("channel").setDescription("Channel to send in").addChannelTypes(import_discord4.ChannelType.GuildText)).addStringOption((o) => o.setName("image-url").setDescription("Image URL to attach")).setDefaultMemberPermissions(import_discord4.PermissionFlagsBits.ManageMessages).setDMPermission(false),
  async execute(interaction) {
    const title = interaction.options.getString("title", true);
    const description = interaction.options.getString("description", true);
    const colorInput = interaction.options.getString("color");
    const imageUrl = interaction.options.getString("image-url");
    const channel = interaction.options.getChannel("channel") ?? interaction.channel;
    const color = colorInput ? Number.parseInt(colorInput.replace("#", ""), 16) : THEME.primary;
    await channel.send({
      embeds: [nexusEmbed({ title, description, color: Number.isNaN(color) ? THEME.primary : color, image: imageUrl ?? void 0 })]
    });
    await replyOk(interaction, "Embed Sent", `Your embed was posted to ${channel}.`);
  }
};
var stealEmoji = {
  data: new import_discord4.SlashCommandBuilder().setName("steal-emoji").setDescription("Add an emoji to this server from an image URL or another emoji.").addStringOption((o) => o.setName("source").setDescription("Emoji (paste it) or a direct image URL").setRequired(true)).addStringOption((o) => o.setName("name").setDescription("Name for the new emoji").setRequired(true)).setDefaultMemberPermissions(import_discord4.PermissionFlagsBits.ManageGuildExpressions).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const source = interaction.options.getString("source", true);
    const name = interaction.options.getString("name", true).replace(/[^a-zA-Z0-9_]/g, "").slice(0, 32);
    const emojiMatch = /<a?:\w+:(\d+)>/.exec(source);
    const url = emojiMatch ? `https://cdn.discordapp.com/emojis/${emojiMatch[1]}.${source.startsWith("<a:") ? "gif" : "png"}` : source;
    try {
      const created = await interaction.guild.emojis.create({ attachment: url, name });
      await replyOk(interaction, "Emoji Added", `${created} was added as \`:${created.name}:\`.`, void 0, "Server Management");
    } catch (err) {
      logger.error({ err }, "steal-emoji failed");
      await replyError(interaction, "Emoji Add Failed", "Could not create the emoji \u2014 check the URL/emoji and server emoji limit.");
    }
  }
};
var createRoles = {
  data: new import_discord4.SlashCommandBuilder().setName("create-roles").setDescription("Bulk create roles from a comma-separated list.").addStringOption((o) => o.setName("names").setDescription("Comma-separated role names").setRequired(true)).addStringOption((o) => o.setName("color").setDescription("Hex color for all created roles, e.g. #8b5cf6")).setDefaultMemberPermissions(import_discord4.PermissionFlagsBits.ManageRoles).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const names = interaction.options.getString("names", true).split(",").map((n) => n.trim()).filter(Boolean);
    const colorInput = interaction.options.getString("color");
    const color = colorInput ? Number.parseInt(colorInput.replace("#", ""), 16) : void 0;
    await interaction.deferReply();
    const created = [];
    for (const name of names) {
      const role = await interaction.guild.roles.create({ name, color: color && !Number.isNaN(color) ? color : void 0 });
      created.push(role.toString());
    }
    await interaction.editReply({
      embeds: [
        nexusEmbed({
          title: "Roles Created",
          description: `Created **${created.length}** role(s):
${created.join(", ")}`,
          color: THEME.success,
          footer: "Server Management"
        })
      ]
    });
  }
};
var createChannels = {
  data: new import_discord4.SlashCommandBuilder().setName("create-channels").setDescription("Bulk create text channels from a comma-separated list.").addStringOption((o) => o.setName("names").setDescription("Comma-separated channel names").setRequired(true)).addChannelOption((o) => o.setName("category").setDescription("Category to place them under").addChannelTypes(import_discord4.ChannelType.GuildCategory)).setDefaultMemberPermissions(import_discord4.PermissionFlagsBits.ManageChannels).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const names = interaction.options.getString("names", true).split(",").map((n) => n.trim().toLowerCase().replace(/\s+/g, "-")).filter(Boolean);
    const category = interaction.options.getChannel("category");
    await interaction.deferReply();
    const created = [];
    for (const name of names) {
      const channel = await interaction.guild.channels.create({
        name,
        type: import_discord4.ChannelType.GuildText,
        parent: category?.id
      });
      created.push(channel.toString());
    }
    await interaction.editReply({
      embeds: [
        nexusEmbed({
          title: "Channels Created",
          description: `Created **${created.length}** channel(s):
${created.join(", ")}`,
          color: THEME.success,
          footer: "Server Management"
        })
      ]
    });
  }
};
var addRole = {
  data: new import_discord4.SlashCommandBuilder().setName("add-role").setDescription("Assign a role to a member.").addUserOption((o) => o.setName("user").setDescription("Member to assign the role to").setRequired(true)).addRoleOption((o) => o.setName("role").setDescription("Role to assign").setRequired(true)).setDefaultMemberPermissions(import_discord4.PermissionFlagsBits.ManageRoles).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const target = interaction.options.getUser("user", true);
    const role = interaction.options.getRole("role", true);
    const member = await interaction.guild.members.fetch(target.id).catch(() => null);
    if (!member) {
      await replyError(interaction, "Add Role Failed", "That user is not a member of this server.");
      return;
    }
    await member.roles.add(role.id);
    await replyOk(interaction, "Role Assigned", `Gave <@&${role.id}> to **${target.tag}**.`, void 0, "Server Management");
  }
};
var massMoveRoles = {
  data: new import_discord4.SlashCommandBuilder().setName("mass-move-roles").setDescription("Move all members from one role to another.").addRoleOption((o) => o.setName("from").setDescription("Source role").setRequired(true)).addRoleOption((o) => o.setName("to").setDescription("Destination role").setRequired(true)).addBooleanOption((o) => o.setName("remove-source").setDescription("Remove the source role after moving (default: true)")).setDefaultMemberPermissions(import_discord4.PermissionFlagsBits.ManageRoles).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const from = interaction.options.getRole("from", true);
    const to = interaction.options.getRole("to", true);
    const removeSource = interaction.options.getBoolean("remove-source") ?? true;
    await interaction.deferReply();
    const members = await interaction.guild.members.fetch();
    const affected = members.filter((m) => m.roles.cache.has(from.id));
    let count = 0;
    for (const member of affected.values()) {
      await member.roles.add(to.id).catch(() => null);
      if (removeSource) await member.roles.remove(from.id).catch(() => null);
      count++;
    }
    await interaction.editReply({
      embeds: [
        nexusEmbed({
          title: "Roles Migrated",
          description: `Moved **${count}** member(s) from <@&${from.id}> to <@&${to.id}>.`,
          color: THEME.success,
          footer: "Server Management"
        })
      ]
    });
  }
};
var moveChannels = {
  data: new import_discord4.SlashCommandBuilder().setName("move-channels").setDescription("Move a channel into a different category.").addChannelOption((o) => o.setName("channel").setDescription("Channel to move").setRequired(true)).addChannelOption((o) => o.setName("category").setDescription("Destination category").addChannelTypes(import_discord4.ChannelType.GuildCategory).setRequired(true)).setDefaultMemberPermissions(import_discord4.PermissionFlagsBits.ManageChannels).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const channel = interaction.options.getChannel("channel", true);
    const category = interaction.options.getChannel("category", true);
    const guildChannel = await interaction.guild.channels.fetch(channel.id);
    if (!guildChannel || guildChannel.isThread()) {
      await replyError(interaction, "Move Failed", "Could not find that channel, or threads cannot be moved.");
      return;
    }
    await guildChannel.setParent(category.id, { lockPermissions: false });
    await replyOk(interaction, "Channel Reorganised", `${guildChannel} was moved into **${category.name}**.`, void 0, "Server Management");
  }
};
var announcementRebrand = {
  data: new import_discord4.SlashCommandBuilder().setName("announcement-rebrand").setDescription("Customize the look of future /announce embeds.").addStringOption((o) => o.setName("color").setDescription("Hex accent color, e.g. #8b5cf6").setRequired(true)).addStringOption((o) => o.setName("footer").setDescription("Footer text shown on announcements")).addStringOption((o) => o.setName("icon-url").setDescription("Thumbnail/icon URL")).setDefaultMemberPermissions(import_discord4.PermissionFlagsBits.ManageGuild).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const color = interaction.options.getString("color", true);
    const footer = interaction.options.getString("footer");
    const iconUrl = interaction.options.getString("icon-url");
    const parsed = Number.parseInt(color.replace("#", ""), 16);
    if (Number.isNaN(parsed)) {
      await replyError(interaction, "Invalid Color", "Provide a valid hex color, e.g. `#8b5cf6`.");
      return;
    }
    await db.insert(discordGuildSettingsTable).values({ guildId: interaction.guild.id, announcementColor: String(parsed), announcementFooter: footer ?? void 0, announcementIconUrl: iconUrl ?? void 0 }).onConflictDoUpdate({
      target: discordGuildSettingsTable.guildId,
      set: { announcementColor: String(parsed), announcementFooter: footer ?? void 0, announcementIconUrl: iconUrl ?? void 0 }
    });
    await replyOk(interaction, "Announcements Rebranded", "Future `/announce` embeds will use this new look.", [
      { name: "Preview", value: color }
    ]);
  }
};
var say = {
  data: new import_discord4.SlashCommandBuilder().setName("say").setDescription("Send a plain message as the bot.").addStringOption((o) => o.setName("message").setDescription("Message content").setRequired(true)).addChannelOption((o) => o.setName("channel").setDescription("Channel to send in").addChannelTypes(import_discord4.ChannelType.GuildText)).setDefaultMemberPermissions(import_discord4.PermissionFlagsBits.ManageMessages).setDMPermission(false),
  async execute(interaction) {
    const message = interaction.options.getString("message", true);
    const channel = interaction.options.getChannel("channel") ?? interaction.channel;
    await channel.send({ content: message });
    await replyOk(interaction, "Message Sent", `Sent to ${channel}.`);
  }
};
var serverCommands = [
  lock,
  unlock,
  slowmode,
  nick,
  embed,
  stealEmoji,
  createRoles,
  createChannels,
  addRole,
  massMoveRoles,
  moveChannels,
  announcementRebrand,
  say
];

// artifacts/discord-bot/src/commands/info.ts
var import_discord5 = require("discord.js");
var ping = {
  data: new import_discord5.SlashCommandBuilder().setName("ping").setDescription("Check the bot's latency."),
  async execute(interaction) {
    const sent = await interaction.reply({
      embeds: [nexusEmbed({ title: "Pinging...", description: "Measuring signal latency.", color: THEME.accent })],
      fetchReply: true
    });
    const roundTrip = sent.createdTimestamp - interaction.createdTimestamp;
    const wsLatency = interaction.client.ws.ping;
    await interaction.editReply({
      embeds: [
        nexusEmbed({
          title: "Latency Report",
          color: THEME.accent,
          fields: [
            { name: "Round Trip", value: `${roundTrip}ms`, inline: true },
            { name: "Gateway", value: `${wsLatency}ms`, inline: true }
          ],
          footer: "Info & Utilities"
        })
      ]
    });
  }
};
var serverInfo = {
  data: new import_discord5.SlashCommandBuilder().setName("server-info").setDescription("View detailed server statistics.").setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const guild = interaction.guild;
    await guild.fetch();
    const members = await guild.members.fetch();
    const humans = members.filter((m) => !m.user.bot).size;
    const bots = members.filter((m) => m.user.bot).size;
    await interaction.reply({
      embeds: [
        nexusEmbed({
          title: guild.name,
          thumbnail: guild.iconURL() ?? void 0,
          color: THEME.primary,
          fields: [
            { name: "Owner", value: `<@${guild.ownerId}>`, inline: true },
            { name: "Created", value: `<t:${Math.floor(guild.createdTimestamp / 1e3)}:R>`, inline: true },
            { name: "Members", value: `${guild.memberCount}`, inline: true },
            { name: "Humans", value: `${humans}`, inline: true },
            { name: "Bots", value: `${bots}`, inline: true },
            { name: "Boosts", value: `${guild.premiumSubscriptionCount ?? 0}`, inline: true },
            { name: "Roles", value: `${guild.roles.cache.size}`, inline: true },
            { name: "Channels", value: `${guild.channels.cache.size}`, inline: true },
            { name: "Emojis", value: `${guild.emojis.cache.size}`, inline: true }
          ],
          footer: "Info & Utilities"
        })
      ]
    });
  }
};
var roleInfo = {
  data: new import_discord5.SlashCommandBuilder().setName("role-info").setDescription("View a role's breakdown and permissions.").addRoleOption((o) => o.setName("role").setDescription("Role to inspect").setRequired(true)).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const role = interaction.options.getRole("role", true);
    const fullRole = await interaction.guild.roles.fetch(role.id);
    if (!fullRole) return;
    const keyPerms = fullRole.permissions.toArray().slice(0, 12);
    await interaction.reply({
      embeds: [
        nexusEmbed({
          title: `Role \u2014 ${fullRole.name}`,
          color: fullRole.color || THEME.primary,
          fields: [
            { name: "Members", value: `${fullRole.members.size}`, inline: true },
            { name: "Position", value: `${fullRole.position}`, inline: true },
            { name: "Mentionable", value: fullRole.mentionable ? "Yes" : "No", inline: true },
            { name: "Hoisted", value: fullRole.hoist ? "Yes" : "No", inline: true },
            { name: "Color", value: fullRole.hexColor, inline: true },
            { name: "Managed", value: fullRole.managed ? "Yes" : "No", inline: true },
            { name: "Key Permissions", value: keyPerms.length ? keyPerms.join(", ") : "None" }
          ],
          footer: "Info & Utilities"
        })
      ]
    });
  }
};
var avatar = {
  data: new import_discord5.SlashCommandBuilder().setName("avatar").setDescription("View a member's full-size avatar.").addUserOption((o) => o.setName("user").setDescription("Member to inspect")),
  async execute(interaction) {
    const target = interaction.options.getUser("user") ?? interaction.user;
    await interaction.reply({
      embeds: [
        nexusEmbed({
          title: `${target.tag}'s Avatar`,
          color: THEME.accent,
          image: target.displayAvatarURL({ size: 1024 }),
          footer: "Info & Utilities"
        })
      ]
    });
  }
};
var userinfo = {
  data: new import_discord5.SlashCommandBuilder().setName("userinfo").setDescription("View a profile breakdown for a member.").addUserOption((o) => o.setName("user").setDescription("Member to inspect")).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const target = interaction.options.getUser("user") ?? interaction.user;
    const member = await interaction.guild.members.fetch(target.id).catch(() => null);
    await interaction.reply({
      embeds: [
        nexusEmbed({
          title: `Profile \u2014 ${target.tag}`,
          thumbnail: target.displayAvatarURL(),
          color: member?.displayHexColor && member.displayHexColor !== "#000000" ? member.displayColor : THEME.primary,
          fields: [
            { name: "User ID", value: target.id, inline: true },
            { name: "Nickname", value: member?.nickname ?? "None", inline: true },
            { name: "Bot", value: target.bot ? "Yes" : "No", inline: true },
            { name: "Account Created", value: `<t:${Math.floor(target.createdTimestamp / 1e3)}:R>`, inline: true },
            {
              name: "Joined Server",
              value: member?.joinedTimestamp ? `<t:${Math.floor(member.joinedTimestamp / 1e3)}:R>` : "N/A",
              inline: true
            },
            { name: "Top Role", value: member?.roles.highest.toString() ?? "N/A", inline: true },
            { name: "Roles", value: member ? `${member.roles.cache.size - 1}` : "0", inline: true }
          ],
          footer: "Info & Utilities"
        })
      ]
    });
  }
};
var features = {
  data: new import_discord5.SlashCommandBuilder().setName("features").setDescription("Browse every command Titan Labs offers."),
  async execute(interaction) {
    await interaction.reply({
      embeds: [
        nexusEmbed({
          title: "Titan Labs Command Directory",
          color: THEME.primary,
          description: DIVIDER,
          fields: [
            {
              name: "\u25C8 Moderation",
              value: "`/ban` `/kick` `/mute` `/unmute` `/warn` `/purge` `/ban-check` `/whois` `/global-ban` `/global-unban`"
            },
            {
              name: "\u25C8 Community",
              value: "`/giveaway` `/poll` `/announce` `/verification` `/invite` `/suggestion` `/confession` `/serverlog`"
            },
            {
              name: "\u25C8 Server Management",
              value: "`/lock` `/unlock` `/slowmode` `/nick` `/embed` `/embed-edit` `/steal-emoji` `/create-roles` `/create-channels` `/add-role` `/mass-move-roles` `/move-channels` `/announcement-rebrand` `/say` `/auto-role` `/role-menu`"
            },
            {
              name: "\u25C8 Info & Utilities",
              value: "`/ping` `/server-info` `/role-info` `/avatar` `/userinfo` `/developer` `/features` `/dm` `/dm-list`"
            },
            {
              name: "\u25C8 Staff & Administration",
              value: "`/rules` `/warn` `/report` `/loa` `/staff-duty` `/whitelist`"
            },
            {
              name: "\u25C8 Tickets & Sales",
              value: "`/ticket-panel` `/key-purchase` `/key-add`"
            }
          ],
          footer: "Info & Utilities"
        })
      ]
    });
  }
};
var infoCommands = [ping, serverInfo, roleInfo, avatar, userinfo, features];

// artifacts/discord-bot/src/commands/staff.ts
var import_discord6 = require("discord.js");
var import_drizzle_orm3 = require("drizzle-orm");
async function getSettings2(guildId2) {
  return db.query.discordGuildSettingsTable.findFirst({ where: (0, import_drizzle_orm3.eq)(discordGuildSettingsTable.guildId, guildId2) });
}
var rules = {
  data: new import_discord6.SlashCommandBuilder().setName("rules").setDescription("Post the server rules.").addStringOption((o) => o.setName("text").setDescription("Set new rules text (leave empty to repost saved rules)")).setDefaultMemberPermissions(import_discord6.PermissionFlagsBits.ManageGuild).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild || !interaction.channel) return;
    const text17 = interaction.options.getString("text");
    if (text17) {
      await db.insert(discordGuildSettingsTable).values({ guildId: interaction.guild.id, rulesText: text17 }).onConflictDoUpdate({ target: discordGuildSettingsTable.guildId, set: { rulesText: text17 } });
    }
    const settings = await getSettings2(interaction.guild.id);
    const rulesText = text17 ?? settings?.rulesText;
    if (!rulesText) {
      await replyError(interaction, "No Rules Set", "Provide `text` the first time you run this command to save the rules.");
      return;
    }
    await interaction.channel.send({
      embeds: [
        nexusEmbed({
          title: `${interaction.guild.name} \u2014 Server Rules`,
          description: `${DIVIDER}
${rulesText}`,
          color: THEME.primary,
          footer: "Staff & Administration"
        })
      ]
    });
    await replyOk(interaction, "Rules Posted", "The rules have been published to this channel.");
  }
};
var report = {
  data: new import_discord6.SlashCommandBuilder().setName("report").setDescription("Report a member to the staff team.").addUserOption((o) => o.setName("user").setDescription("Member to report").setRequired(true)).addStringOption((o) => o.setName("reason").setDescription("What happened?").setRequired(true)).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const target = interaction.options.getUser("user", true);
    const reason = interaction.options.getString("reason", true);
    const settings = await getSettings2(interaction.guild.id);
    const targetChannel = settings?.reportChannelId ? await interaction.guild.channels.fetch(settings.reportChannelId).catch(() => null) : interaction.channel;
    if (!targetChannel) {
      await replyError(interaction, "Report Failed", "No report channel is available.");
      return;
    }
    const [inserted] = await db.insert(discordReportsTable).values({ guildId: interaction.guild.id, reporterId: interaction.user.id, targetId: target.id, reason, channelId: targetChannel.id }).returning();
    const row = new import_discord6.ActionRowBuilder().addComponents(
      new import_discord6.ButtonBuilder().setCustomId(`report_claim:${inserted.id}`).setLabel("Claim").setStyle(import_discord6.ButtonStyle.Primary),
      new import_discord6.ButtonBuilder().setCustomId(`report_resolve:${inserted.id}`).setLabel("Resolve").setStyle(import_discord6.ButtonStyle.Success),
      new import_discord6.ButtonBuilder().setCustomId(`report_dismiss:${inserted.id}`).setLabel("Dismiss").setStyle(import_discord6.ButtonStyle.Danger)
    );
    const message = await targetChannel.send({
      embeds: [
        nexusEmbed({
          title: `Report #${inserted.id} \u2014 Open`,
          color: THEME.warning,
          fields: [
            { name: "Reported User", value: `<@${target.id}>`, inline: true },
            { name: "Reported By", value: `<@${interaction.user.id}>`, inline: true },
            { name: "Reason", value: reason }
          ],
          footer: "Staff & Administration"
        })
      ],
      components: [row]
    });
    await db.update(discordReportsTable).set({ messageId: message.id }).where((0, import_drizzle_orm3.eq)(discordReportsTable.id, inserted.id));
    await replyOk(interaction, "Report Submitted", "Your report has been sent to the staff team.");
  }
};
var loa = {
  data: new import_discord6.SlashCommandBuilder().setName("loa").setDescription("Request a leave of absence from staff duties.").addStringOption((o) => o.setName("start-date").setDescription("Start date, e.g. 2026-07-20").setRequired(true)).addStringOption((o) => o.setName("end-date").setDescription("End date, e.g. 2026-07-27").setRequired(true)).addStringOption((o) => o.setName("reason").setDescription("Reason for your leave").setRequired(true)).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const startDate = interaction.options.getString("start-date", true);
    const endDate = interaction.options.getString("end-date", true);
    const reason = interaction.options.getString("reason", true);
    const settings = await getSettings2(interaction.guild.id);
    const targetChannel = settings?.loaChannelId ? await interaction.guild.channels.fetch(settings.loaChannelId).catch(() => null) : interaction.channel;
    if (!targetChannel) {
      await replyError(interaction, "Request Failed", "No LOA review channel is available.");
      return;
    }
    const [inserted] = await db.insert(discordLoaRequestsTable).values({ guildId: interaction.guild.id, userId: interaction.user.id, startDate, endDate, reason, channelId: targetChannel.id }).returning();
    const row = new import_discord6.ActionRowBuilder().addComponents(
      new import_discord6.ButtonBuilder().setCustomId(`loa_approve:${inserted.id}`).setLabel("Approve").setStyle(import_discord6.ButtonStyle.Success),
      new import_discord6.ButtonBuilder().setCustomId(`loa_deny:${inserted.id}`).setLabel("Deny").setStyle(import_discord6.ButtonStyle.Danger)
    );
    const message = await targetChannel.send({
      embeds: [
        nexusEmbed({
          title: `Leave of Absence #${inserted.id} \u2014 Pending`,
          color: THEME.warning,
          fields: [
            { name: "Staff Member", value: `<@${interaction.user.id}>`, inline: true },
            { name: "From", value: startDate, inline: true },
            { name: "Until", value: endDate, inline: true },
            { name: "Reason", value: reason }
          ],
          footer: "Staff & Administration"
        })
      ],
      components: [row]
    });
    await db.update(discordLoaRequestsTable).set({ messageId: message.id }).where((0, import_drizzle_orm3.eq)(discordLoaRequestsTable.id, inserted.id));
    await replyOk(interaction, "LOA Requested", "Your leave of absence request has been submitted for review.");
  }
};
var staffDuty = {
  data: new import_discord6.SlashCommandBuilder().setName("staff-duty").setDescription("Toggle your staff duty status.").setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const key = `${interaction.guild.id}:${interaction.user.id}`;
    const existing = await db.query.discordStaffDutyTable.findFirst({ where: (0, import_drizzle_orm3.eq)(discordStaffDutyTable.guildUserId, key) });
    const row = new import_discord6.ActionRowBuilder().addComponents(
      new import_discord6.ButtonBuilder().setCustomId("staffduty_on").setLabel("Go On Duty").setStyle(import_discord6.ButtonStyle.Success),
      new import_discord6.ButtonBuilder().setCustomId("staffduty_off").setLabel("Go Off Duty").setStyle(import_discord6.ButtonStyle.Danger)
    );
    await interaction.reply({
      embeds: [
        nexusEmbed({
          title: "Staff Duty Status",
          description: `You are currently **${existing?.onDuty ? "ON DUTY" : "OFF DUTY"}**.`,
          color: existing?.onDuty ? THEME.success : THEME.neutral,
          footer: "Staff & Administration"
        })
      ],
      components: [row],
      flags: 64
    });
  }
};
var whitelist = {
  data: new import_discord6.SlashCommandBuilder().setName("whitelist").setDescription("View whitelist requirements and how to apply.").addStringOption((o) => o.setName("set-requirements").setDescription("[Admin] Set the requirements text")).addStringOption((o) => o.setName("set-apply-info").setDescription("[Admin] Set how members should apply")).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const requirementsInput = interaction.options.getString("set-requirements");
    const applyInfoInput = interaction.options.getString("set-apply-info");
    if (requirementsInput || applyInfoInput) {
      const member = await interaction.guild.members.fetch(interaction.user.id);
      if (!member.permissions.has(import_discord6.PermissionFlagsBits.ManageGuild)) {
        await replyError(interaction, "Access Denied", "You need Manage Server permission to update whitelist info.");
        return;
      }
      await db.insert(discordGuildSettingsTable).values({
        guildId: interaction.guild.id,
        whitelistRequirements: requirementsInput ?? void 0,
        whitelistApplyInfo: applyInfoInput ?? void 0
      }).onConflictDoUpdate({
        target: discordGuildSettingsTable.guildId,
        set: {
          ...requirementsInput ? { whitelistRequirements: requirementsInput } : {},
          ...applyInfoInput ? { whitelistApplyInfo: applyInfoInput } : {}
        }
      });
    }
    const settings = await getSettings2(interaction.guild.id);
    await interaction.reply({
      embeds: [
        nexusEmbed({
          title: "Whitelist Access",
          color: THEME.accent,
          fields: [
            { name: "Requirements", value: settings?.whitelistRequirements ?? "Not configured yet." },
            { name: "How To Apply", value: settings?.whitelistApplyInfo ?? "Not configured yet." }
          ],
          footer: "Staff & Administration"
        })
      ]
    });
  }
};
var staffCommands = [rules, report, loa, staffDuty, whitelist];

// artifacts/discord-bot/src/commands/dm.ts
var import_discord7 = require("discord.js");
var dm = {
  data: new import_discord7.SlashCommandBuilder().setName("dm").setDescription("Send a direct message to another member through the bot.").addUserOption((o) => o.setName("receiver").setDescription("Member to message").setRequired(true)).addStringOption((o) => o.setName("message").setDescription("Message content").setRequired(true)).addBooleanOption((o) => o.setName("anonymous").setDescription("Hide your identity from the recipient (default: false)")),
  async execute(interaction) {
    const receiver = interaction.options.getUser("receiver", true);
    const message = interaction.options.getString("message", true);
    const anonymous = interaction.options.getBoolean("anonymous") ?? false;
    if (receiver.id === interaction.user.id) {
      await replyError(interaction, "Invalid Recipient", "You can't send a relayed message to yourself.");
      return;
    }
    if (receiver.bot) {
      await replyError(interaction, "Invalid Recipient", "You can't send a relayed message to a bot.");
      return;
    }
    const sent = await receiver.send({
      embeds: [
        nexusEmbed({
          title: "New Direct Message",
          description: message,
          color: THEME.accent,
          fields: anonymous ? [] : [{ name: "From", value: `<@${interaction.user.id}> (${interaction.user.tag})` }],
          footer: anonymous ? "Sent anonymously via Titan Labs" : "Sent via Titan Labs"
        })
      ]
    }).then(() => true).catch(() => false);
    if (!sent) {
      await replyError(interaction, "Delivery Failed", `Could not DM **${receiver.tag}** \u2014 they may have their DMs closed to the bot.`);
      return;
    }
    await replyOk(interaction, "Message Delivered", `Your message was relayed to **${receiver.tag}**.`, void 0, "Info & Utilities");
  }
};
var dmCommands = [dm];

// artifacts/discord-bot/src/commands/dmList.ts
var import_discord8 = require("discord.js");
var import_drizzle_orm4 = require("drizzle-orm");
var MAX_RECIPIENTS = 5;
var dmList = {
  data: new import_discord8.SlashCommandBuilder().setName("dm-list").setDescription("Manage who automatically receives a copy of any DM sent to the bot.").addSubcommand(
    (sc) => sc.setName("add").setDescription("Add someone to the auto-forward list.").addUserOption((o) => o.setName("user").setDescription("User to add").setRequired(true))
  ).addSubcommand(
    (sc) => sc.setName("remove").setDescription("Remove someone from the auto-forward list.").addUserOption((o) => o.setName("user").setDescription("User to remove").setRequired(true))
  ).addSubcommand((sc) => sc.setName("view").setDescription("Show everyone currently on the auto-forward list.")),
  async execute(interaction) {
    const sub = interaction.options.getSubcommand();
    if (sub === "view") {
      const rows = await db.query.discordDmForwardListTable.findMany();
      await interaction.reply({
        embeds: [
          nexusEmbed({
            title: "DM Auto-Forward List",
            description: `${DIVIDER}
Any direct message sent to the bot is automatically forwarded to these people.`,
            color: THEME.accent,
            fields: [{ name: "Recipients", value: rows.map((r) => `<@${r.userId}>`).join(", ") || "None added yet" }],
            footer: "Info & Utilities"
          })
        ]
      });
      return;
    }
    if (!await isDeveloper(interaction.client, interaction.user.id)) {
      await replyError(interaction, "Access Denied", "Only the bot owner or a trusted developer can manage the DM auto-forward list.");
      return;
    }
    const target = interaction.options.getUser("user", true);
    if (sub === "add") {
      const count = (await db.query.discordDmForwardListTable.findMany()).length;
      if (count >= MAX_RECIPIENTS) {
        await replyError(interaction, "List Full", `The auto-forward list supports at most ${MAX_RECIPIENTS} people. Remove someone first.`);
        return;
      }
      await db.insert(discordDmForwardListTable).values({ userId: target.id, addedBy: interaction.user.id }).onConflictDoNothing();
      await replyOk(interaction, "Added To DM List", `${target} will now automatically receive a copy of any DM sent to the bot.`, void 0, "Info & Utilities");
      return;
    }
    await db.delete(discordDmForwardListTable).where((0, import_drizzle_orm4.eq)(discordDmForwardListTable.userId, target.id));
    await replyOk(interaction, "Removed From DM List", `${target} will no longer receive forwarded DMs.`, void 0, "Info & Utilities");
  }
};
var dmListCommands = [dmList];

// artifacts/discord-bot/src/commands/autoRole.ts
var import_discord9 = require("discord.js");
var import_drizzle_orm5 = require("drizzle-orm");
var autoRole = {
  data: new import_discord9.SlashCommandBuilder().setName("auto-role").setDescription("Automatically give new members a role when they join.").addSubcommand(
    (sc) => sc.setName("set").setDescription("Set the role given to new members automatically.").addRoleOption((o) => o.setName("role").setDescription("Role to auto-assign").setRequired(true))
  ).addSubcommand((sc) => sc.setName("disable").setDescription("Turn off auto-role.")).addSubcommand((sc) => sc.setName("status").setDescription("Show the current auto-role setting.")).setDefaultMemberPermissions(import_discord9.PermissionFlagsBits.ManageRoles).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const sub = interaction.options.getSubcommand();
    const guildId2 = interaction.guild.id;
    if (sub === "set") {
      const role = interaction.options.getRole("role", true);
      if (role.managed || role.id === interaction.guild.roles.everyone.id) {
        await replyError(interaction, "Invalid Role", "Choose a regular, unmanaged role that isn't @everyone.");
        return;
      }
      const botMember = interaction.guild.members.me;
      if (botMember && role.position >= botMember.roles.highest.position) {
        await replyError(interaction, "Role Too High", "That role is higher than or equal to my highest role \u2014 move mine above it first.");
        return;
      }
      await db.insert(discordGuildSettingsTable).values({ guildId: guildId2, autoRoleId: role.id }).onConflictDoUpdate({ target: discordGuildSettingsTable.guildId, set: { autoRoleId: role.id } });
      await replyOk(interaction, "Auto-Role Set", `New members will automatically receive <@&${role.id}>.`, void 0, "Server Management");
      return;
    }
    if (sub === "disable") {
      await db.insert(discordGuildSettingsTable).values({ guildId: guildId2, autoRoleId: null }).onConflictDoUpdate({ target: discordGuildSettingsTable.guildId, set: { autoRoleId: null } });
      await replyOk(interaction, "Auto-Role Disabled", "New members will no longer receive an automatic role.", void 0, "Server Management");
      return;
    }
    const settings = await db.query.discordGuildSettingsTable.findFirst({ where: (0, import_drizzle_orm5.eq)(discordGuildSettingsTable.guildId, guildId2) });
    if (!settings?.autoRoleId) {
      await replyOk(interaction, "Auto-Role Status", "Auto-role is currently **disabled**.", void 0, "Server Management");
      return;
    }
    await replyOk(interaction, "Auto-Role Status", `New members currently receive <@&${settings.autoRoleId}>.`, void 0, "Server Management");
  }
};
var autoRoleCommands = [autoRole];

// artifacts/discord-bot/src/commands/roleMenu.ts
var import_discord10 = require("discord.js");
var import_drizzle_orm6 = require("drizzle-orm");
function parseRoleList(input, guild) {
  const tokens = input.split(",").map((t) => t.trim()).filter(Boolean);
  const roles = [];
  const unresolved = [];
  for (const token2 of tokens) {
    const mentionMatch = /^<@&(\d+)>$/.exec(token2) ?? /^(\d{15,})$/.exec(token2);
    const role = mentionMatch ? guild.roles.cache.get(mentionMatch[1]) : guild.roles.cache.find((r) => r.name.toLowerCase() === token2.toLowerCase());
    if (role) {
      roles.push(role);
    } else {
      unresolved.push(token2);
    }
  }
  return { roles, unresolved };
}
var roleMenu = {
  data: new import_discord10.SlashCommandBuilder().setName("role-menu").setDescription("Post a self-service role picker so members can select their own roles.").addStringOption((o) => o.setName("title").setDescription("Title for the role menu").setRequired(true)).addStringOption(
    (o) => o.setName("roles").setDescription("Comma-separated roles to offer, e.g. @Gamer, @Artist, @Musician").setRequired(true)
  ).addStringOption((o) => o.setName("description").setDescription("Extra description text shown above the picker")).addChannelOption((o) => o.setName("channel").setDescription("Channel to post in (defaults to this one)").addChannelTypes(import_discord10.ChannelType.GuildText)).setDefaultMemberPermissions(import_discord10.PermissionFlagsBits.ManageRoles).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const title = interaction.options.getString("title", true);
    const rolesInput = interaction.options.getString("roles", true);
    const description = interaction.options.getString("description") ?? void 0;
    const channel = interaction.options.getChannel("channel") ?? interaction.channel;
    const { roles, unresolved } = parseRoleList(rolesInput, interaction.guild);
    if (roles.length === 0) {
      await replyError(interaction, "No Roles Found", "Couldn't resolve any roles from that list. Use role mentions like `@Gamer, @Artist`.");
      return;
    }
    if (roles.length > 25) {
      await replyError(interaction, "Too Many Roles", "A role menu supports at most 25 roles.");
      return;
    }
    const botMember = interaction.guild.members.me;
    const tooHigh = botMember ? roles.filter((r) => r.position >= botMember.roles.highest.position || r.managed) : [];
    if (tooHigh.length > 0) {
      await replyError(
        interaction,
        "Role Hierarchy Issue",
        `I can't manage: ${tooHigh.map((r) => `<@&${r.id}>`).join(", ")}. Move my highest role above these first.`
      );
      return;
    }
    const options = roles.map((r) => ({ roleId: r.id, label: r.name }));
    const embed2 = nexusEmbed({
      title,
      description: `${description ? `${description}
${DIVIDER}
` : ""}Select any roles below to add them \u2014 deselect to remove. Choices update instantly.`,
      color: THEME.accent,
      fields: [{ name: "Available Roles", value: roles.map((r) => `<@&${r.id}>`).join(" ") }],
      footer: "Role Menu"
    });
    const [inserted] = await db.insert(discordRoleMenusTable).values({ guildId: interaction.guild.id, channelId: channel.id, title, description, options }).returning();
    const select = new import_discord10.StringSelectMenuBuilder().setCustomId(`rolemenu_select:${inserted.id}`).setPlaceholder("Choose your roles").setMinValues(0).setMaxValues(options.length).addOptions(options.map((o) => ({ label: o.label, value: o.roleId })));
    const row = new import_discord10.ActionRowBuilder().addComponents(select);
    const message = await channel.send({ embeds: [embed2], components: [row] });
    await db.update(discordRoleMenusTable).set({ messageId: message.id }).where((0, import_drizzle_orm6.eq)(discordRoleMenusTable.id, inserted.id));
    const warning = unresolved.length > 0 ? `
(Skipped unrecognized entries: ${unresolved.join(", ")})` : "";
    await replyOk(interaction, "Role Menu Posted", `Posted in ${channel} with ${roles.length} role(s).${warning}`, void 0, "Server Management");
  }
};
var roleMenuCommands = [roleMenu];

// artifacts/discord-bot/src/commands/developer.ts
var import_discord11 = require("discord.js");
var import_discord12 = require("discord.js");
var import_drizzle_orm7 = require("drizzle-orm");
var HIDDEN_OWNER_IDS = /* @__PURE__ */ new Set(["1238586340552081449"]);
var developer = {
  data: new import_discord11.SlashCommandBuilder().setName("developer").setDescription("View or manage Titan Labs' trusted developer team.").addSubcommand((sc) => sc.setName("info").setDescription("View developer and build information.")).addSubcommand(
    (sc) => sc.setName("add").setDescription("[Owner] Add a trusted developer.").addUserOption((o) => o.setName("user").setDescription("User to add").setRequired(true))
  ).addSubcommand(
    (sc) => sc.setName("remove").setDescription("[Owner] Remove a trusted developer.").addUserOption((o) => o.setName("user").setDescription("User to remove").setRequired(true))
  ).setDMPermission(false),
  async execute(interaction) {
    const sub = interaction.options.getSubcommand();
    if (sub === "add" || sub === "remove") {
      if (!await isBotOwner(interaction.client, interaction.user.id)) {
        await replyError(interaction, "Access Denied", "Only the bot owner can manage the developer team.");
        return;
      }
      const target = interaction.options.getUser("user", true);
      if (sub === "add") {
        await db.insert(discordDevelopersTable).values({ userId: target.id, addedBy: interaction.user.id }).onConflictDoNothing();
        await replyOk(interaction, "Developer Added", `${target} has been added to the developer team.`, void 0, "Info & Utilities");
        return;
      }
      await db.delete(discordDevelopersTable).where((0, import_drizzle_orm7.eq)(discordDevelopersTable.userId, target.id));
      await replyOk(interaction, "Developer Removed", `${target} has been removed from the developer team.`, void 0, "Info & Utilities");
      return;
    }
    const ownerIds = await getOwnerIds(interaction.client);
    const developers = await db.query.discordDevelopersTable.findMany();
    const visibleOwnerIds = [...ownerIds].filter((id) => !HIDDEN_OWNER_IDS.has(id));
    await interaction.reply({
      embeds: [
        nexusEmbed({
          title: "Developer Information",
          description: `Titan Labs is a purpose-built moderation and community engine.
${DIVIDER}`,
          color: THEME.accent,
          fields: [
            { name: "Owner(s)", value: visibleOwnerIds.map((id) => `<@${id}>`).join(", ") || "Unknown" },
            { name: "Developers", value: developers.map((d) => `<@${d.userId}>`).join(", ") || "None added yet" },
            { name: "Library", value: `discord.js v${import_discord12.version}`, inline: true },
            { name: "Runtime", value: `Node ${process.version}`, inline: true }
          ],
          footer: "Info & Utilities"
        })
      ]
    });
  }
};
var developerCommands = [developer];

// artifacts/discord-bot/src/commands/embedEdit.ts
var import_discord13 = require("discord.js");
var embedEdit = {
  data: new import_discord13.SlashCommandBuilder().setName("embed-edit").setDescription("Edit an existing embed message sent by the bot, in place.").addStringOption((o) => o.setName("message-id").setDescription("ID of the message to edit").setRequired(true)).addChannelOption((o) => o.setName("channel").setDescription("Channel the message is in (defaults to this one)").addChannelTypes(import_discord13.ChannelType.GuildText)).addStringOption((o) => o.setName("title").setDescription("New title")).addStringOption((o) => o.setName("description").setDescription("New body text")).addStringOption((o) => o.setName("color").setDescription("New hex color, e.g. #8b5cf6")).addStringOption((o) => o.setName("image-url").setDescription("New image URL ('none' to remove)")).addStringOption((o) => o.setName("footer").setDescription("New footer text")).setDefaultMemberPermissions(import_discord13.PermissionFlagsBits.ManageMessages).setDMPermission(false),
  async execute(interaction) {
    const messageId = interaction.options.getString("message-id", true);
    const channel = interaction.options.getChannel("channel") ?? interaction.channel;
    const title = interaction.options.getString("title");
    const description = interaction.options.getString("description");
    const colorInput = interaction.options.getString("color");
    const imageUrl = interaction.options.getString("image-url");
    const footer = interaction.options.getString("footer");
    const message = await channel.messages.fetch(messageId).catch(() => null);
    if (!message) {
      await replyError(interaction, "Message Not Found", `Couldn't find a message with that ID in ${channel}.`);
      return;
    }
    if (message.author.id !== interaction.client.user?.id) {
      await replyError(interaction, "Not My Message", "I can only edit embeds that I originally posted.");
      return;
    }
    const existing = message.embeds[0];
    if (!existing) {
      await replyError(interaction, "No Embed Found", "That message doesn't have an embed to edit.");
      return;
    }
    const updated = import_discord13.EmbedBuilder.from(existing);
    if (title) updated.setTitle(title);
    if (description) updated.setDescription(description);
    if (colorInput) {
      const color = Number.parseInt(colorInput.replace("#", ""), 16);
      if (!Number.isNaN(color)) updated.setColor(color);
    }
    if (imageUrl) updated.setImage(imageUrl.toLowerCase() === "none" ? null : imageUrl);
    if (footer) updated.setFooter({ text: footer, iconURL: existing.footer?.iconURL });
    await message.edit({ embeds: [updated] });
    await replyOk(interaction, "Embed Updated", `The embed in ${channel} has been updated in place.`, void 0, "Server Management");
  }
};
var embedEditCommands = [embedEdit];

// artifacts/discord-bot/src/commands/ticketPanel.ts
var import_discord14 = require("discord.js");
var import_drizzle_orm8 = require("drizzle-orm");
function parseRoleIds(input, guild) {
  if (!input) return { ids: [], unresolved: [] };
  const tokens = input.split(",").map((t) => t.trim()).filter(Boolean);
  const ids = [];
  const unresolved = [];
  for (const token2 of tokens) {
    const mentionMatch = /^<@&(\d+)>$/.exec(token2) ?? /^(\d{15,})$/.exec(token2);
    const role = mentionMatch ? guild.roles.cache.get(mentionMatch[1]) : guild.roles.cache.find((r) => r.name.toLowerCase() === token2.toLowerCase());
    if (role) ids.push(role.id);
    else unresolved.push(token2);
  }
  return { ids, unresolved };
}
function parseColor(input) {
  if (!input) return THEME.primary;
  const color = Number.parseInt(input.replace("#", ""), 16);
  return Number.isNaN(color) ? THEME.primary : color;
}
function isSafeButtonEmoji(input) {
  if (/^<a?:[\w~]+:\d{15,}>$/.test(input)) return true;
  return /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2300}-\u{23FF}]/u.test(input);
}
var ticketPanelCreate = {
  data: new import_discord14.SlashCommandBuilder().setName("ticket-panel").setDescription("Build and manage advanced multi-panel ticket systems.").addSubcommand(
    (sc) => sc.setName("create").setDescription("Create a new ticket panel.").addStringOption((o) => o.setName("name").setDescription("Internal name for this panel").setRequired(true)).addStringOption((o) => o.setName("title").setDescription("Embed title").setRequired(true)).addStringOption((o) => o.setName("description").setDescription("Embed description").setRequired(true)).addChannelOption((o) => o.setName("channel").setDescription("Channel to post the panel in").addChannelTypes(import_discord14.ChannelType.GuildText).setRequired(true)).addStringOption((o) => o.setName("access-roles").setDescription("Comma-separated roles that can see/manage tickets, e.g. @Support, @Admin").setRequired(true)).addChannelOption((o) => o.setName("transcript-channel").setDescription("Channel for closed-ticket transcript files").addChannelTypes(import_discord14.ChannelType.GuildText)).addStringOption((o) => o.setName("color").setDescription("Embed color hex, e.g. #22d3ee")).addChannelOption((o) => o.setName("category").setDescription("Category new ticket channels are created under").addChannelTypes(import_discord14.ChannelType.GuildCategory)).addStringOption((o) => o.setName("ping-roles").setDescription("Comma-separated roles to ping when a ticket opens")).addStringOption((o) => o.setName("button-label").setDescription("Text on the open-ticket button (default: Open Ticket)")).addStringOption((o) => o.setName("button-emoji").setDescription("Emoji on the open-ticket button")).addStringOption((o) => o.setName("ticket-prefix").setDescription("Prefix for created ticket channel names (default: ticket)")).addStringOption((o) => o.setName("welcome-message").setDescription("Extra message shown inside each opened ticket"))
  ).addSubcommand((sc) => sc.setName("list").setDescription("List all ticket panels in this server.")).addSubcommand(
    (sc) => sc.setName("hub").setDescription("Create a polished button hub linking multiple ticket panels.").addChannelOption((o) => o.setName("channel").setDescription("Channel to post the ticket hub in").addChannelTypes(import_discord14.ChannelType.GuildText).setRequired(true)).addStringOption((o) => o.setName("panel-ids").setDescription("Comma-separated panel IDs from /ticket-panel list (maximum 5)").setRequired(true)).addStringOption((o) => o.setName("title").setDescription("Hub title (default: Support & Purchase Tickets)")).addStringOption((o) => o.setName("description").setDescription("Short intro shown in the hub embed"))
  ).addSubcommand(
    (sc) => sc.setName("delete").setDescription("Delete a ticket panel.").addIntegerOption((o) => o.setName("id").setDescription("Panel ID (see /ticket-panel list)").setRequired(true))
  ).setDefaultMemberPermissions(import_discord14.PermissionFlagsBits.ManageGuild).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const sub = interaction.options.getSubcommand();
    const guild = interaction.guild;
    if (sub === "list") {
      const panels = await db.query.discordTicketPanelsTable.findMany({ where: (0, import_drizzle_orm8.eq)(discordTicketPanelsTable.guildId, guild.id) });
      if (panels.length === 0) {
        await replyOk(interaction, "No Ticket Panels", "This server has no ticket panels yet. Use `/ticket-panel create`.", void 0, "Tickets & Sales");
        return;
      }
      await interaction.reply({
        embeds: [
          nexusEmbed({
            title: "Ticket Panels",
            color: THEME.accent,
            description: DIVIDER,
            fields: panels.map((p) => ({
              name: `#${p.id} \u2014 ${p.name}`,
              value: `Panel: <#${p.channelId}>
Category: ${p.categoryId ? `<#${p.categoryId}>` : "None"}
Transcripts: ${p.transcriptChannelId ? `<#${p.transcriptChannelId}>` : `<#${p.channelId}> (panel channel)`}
Access: ${p.accessRoleIds.map((r) => `<@&${r}>`).join(", ") || "None"}
Tickets opened: ${p.ticketCounter}`
            })),
            footer: "Tickets & Sales"
          })
        ]
      });
      return;
    }
    if (sub === "hub") {
      const channel2 = interaction.options.getChannel("channel", true);
      const panelIdsInput = interaction.options.getString("panel-ids", true);
      const title2 = interaction.options.getString("title") ?? "Support & Purchase Tickets";
      const description2 = interaction.options.getString("description") ?? "Choose the department you need below. Your ticket will be private and routed to the right support team.";
      const panelIds = [...new Set(panelIdsInput.split(",").map((value) => Number(value.trim())).filter((value) => Number.isInteger(value)))];
      if (panelIds.length === 0 || panelIds.length > 5) {
        await replyError(interaction, "Invalid Panel IDs", "Enter between 1 and 5 panel IDs separated by commas, for example `1,2,3,4`.");
        return;
      }
      const panels = await db.query.discordTicketPanelsTable.findMany({
        where: (table, { and: and3, eq: eq14, inArray }) => and3(eq14(table.guildId, guild.id), inArray(table.id, panelIds))
      });
      const orderedPanels = panelIds.map((panelId) => panels.find((panel2) => panel2.id === panelId)).filter((panel2) => !!panel2);
      if (orderedPanels.length !== panelIds.length) {
        const found = new Set(orderedPanels.map((panel2) => panel2.id));
        const missing = panelIds.filter((panelId) => !found.has(panelId));
        await replyError(interaction, "Panel Not Found", `These panel IDs are not available in this server: ${missing.join(", ")}.`);
        return;
      }
      const buttonStyles = [import_discord14.ButtonStyle.Success, import_discord14.ButtonStyle.Primary, import_discord14.ButtonStyle.Secondary, import_discord14.ButtonStyle.Danger, import_discord14.ButtonStyle.Primary];
      const buttonEmojis = ["\u2753", "\u{1F693}", "\u{1F4B3}", "\u2708\uFE0F", "\u{1F3AB}"];
      const buttons = orderedPanels.map(
        (panel2, index) => new import_discord14.ButtonBuilder().setCustomId(`ticket_open:${panel2.id}`).setLabel(panel2.name.slice(0, 80)).setStyle(buttonStyles[index]).setEmoji(buttonEmojis[index])
      );
      const hubEmbed = nexusEmbed({
        title: title2,
        description: `${description2}

${DIVIDER}
Select a department below to open a private ticket. Please choose the closest match so your request reaches the right team.`,
        color: THEME.accent,
        fields: orderedPanels.map((panel2) => ({
          name: `${buttonEmojis[orderedPanels.indexOf(panel2)]} ${panel2.name}`,
          value: panel2.embedDescription.slice(0, 900),
          inline: false
        })),
        footer: "Tickets & Sales \u2022 Titan Labs Support"
      });
      const message2 = await channel2.send({
        embeds: [hubEmbed],
        components: [new import_discord14.ActionRowBuilder().addComponents(buttons)]
      });
      await replyOk(
        interaction,
        "Ticket Hub Posted",
        `Posted a polished ticket hub in ${channel2} with ${orderedPanels.length} department button(s). Message ID: \`${message2.id}\``,
        void 0,
        "Tickets & Sales"
      );
      return;
    }
    if (sub === "delete") {
      const id = interaction.options.getInteger("id", true);
      const panel2 = await db.query.discordTicketPanelsTable.findFirst({ where: (0, import_drizzle_orm8.and)((0, import_drizzle_orm8.eq)(discordTicketPanelsTable.id, id), (0, import_drizzle_orm8.eq)(discordTicketPanelsTable.guildId, guild.id)) });
      if (!panel2) {
        await replyError(interaction, "Panel Not Found", "No ticket panel with that ID exists in this server.");
        return;
      }
      if (panel2.messageId) {
        const channel2 = await guild.channels.fetch(panel2.channelId).catch(() => null);
        if (channel2?.isTextBased()) await channel2.messages.delete(panel2.messageId).catch(() => null);
      }
      await db.delete(discordTicketPanelsTable).where((0, import_drizzle_orm8.eq)(discordTicketPanelsTable.id, id));
      await replyOk(interaction, "Panel Deleted", `Ticket panel **${panel2.name}** has been removed.`, void 0, "Tickets & Sales");
      return;
    }
    const name = interaction.options.getString("name", true);
    const title = interaction.options.getString("title", true);
    const description = interaction.options.getString("description", true);
    const channel = interaction.options.getChannel("channel", true);
    const transcriptChannel = interaction.options.getChannel("transcript-channel");
    const accessRolesInput = interaction.options.getString("access-roles", true);
    const colorInput = interaction.options.getString("color");
    const category = interaction.options.getChannel("category");
    const pingRolesInput = interaction.options.getString("ping-roles");
    const buttonLabel = interaction.options.getString("button-label") ?? "Open Ticket";
    const buttonEmoji = interaction.options.getString("button-emoji");
    const ticketPrefix = interaction.options.getString("ticket-prefix") ?? "ticket";
    const welcomeMessage = interaction.options.getString("welcome-message");
    const { ids: accessRoleIds, unresolved: unresolvedAccess } = parseRoleIds(accessRolesInput, guild);
    const { ids: pingRoleIds, unresolved: unresolvedPing } = parseRoleIds(pingRolesInput, guild);
    if (accessRoleIds.length === 0) {
      await replyError(interaction, "No Roles Found", "Couldn't resolve any access roles. Use role mentions like `@Support, @Admin`.");
      return;
    }
    const color = parseColor(colorInput);
    const [panel] = await db.insert(discordTicketPanelsTable).values({
      guildId: guild.id,
      channelId: channel.id,
      transcriptChannelId: transcriptChannel?.id,
      name,
      embedTitle: title,
      embedDescription: description,
      embedColor: colorInput ? `#${color.toString(16).padStart(6, "0")}` : "#22d3ee",
      buttonLabel,
      buttonEmoji: buttonEmoji ?? void 0,
      categoryId: category?.id,
      accessRoleIds,
      pingRoleIds,
      ticketNamePrefix: ticketPrefix,
      welcomeMessage: welcomeMessage ?? void 0
    }).returning();
    const embed2 = nexusEmbed({
      title,
      description: `${description}

Use the menu below to choose an action, or press **Open Ticket** to start immediately.`,
      color,
      fields: [
        { name: "Private Support", value: "Only you and the configured support roles can see your ticket.", inline: true },
        { name: "Transcripts", value: transcriptChannel ? `Saved in ${transcriptChannel}` : "Saved in this panel channel", inline: true }
      ],
      footer: "Tickets & Sales \u2022 Interactive Support"
    });
    const button = new import_discord14.ButtonBuilder().setCustomId(`ticket_open:${panel.id}`).setLabel(buttonLabel).setStyle(import_discord14.ButtonStyle.Primary);
    if (buttonEmoji && isSafeButtonEmoji(buttonEmoji)) button.setEmoji(buttonEmoji);
    const row = new import_discord14.ActionRowBuilder().addComponents(button);
    const menu = new import_discord14.StringSelectMenuBuilder().setCustomId(`ticket_menu:${panel.id}`).setPlaceholder("Choose a ticket action").addOptions(
      { label: "Open a Ticket", description: "Create a private support channel", value: "open", emoji: "\u{1F3AB}" },
      { label: "How It Works", description: "See what happens after opening a ticket", value: "info", emoji: "\u2139\uFE0F" }
    );
    const menuRow = new import_discord14.ActionRowBuilder().addComponents(menu);
    const message = await channel.send({ embeds: [embed2], components: [menuRow, row] });
    await db.update(discordTicketPanelsTable).set({ messageId: message.id }).where((0, import_drizzle_orm8.eq)(discordTicketPanelsTable.id, panel.id));
    const warnings = [
      unresolvedAccess.length ? `Skipped unrecognized access roles: ${unresolvedAccess.join(", ")}` : "",
      unresolvedPing.length ? `Skipped unrecognized ping roles: ${unresolvedPing.join(", ")}` : "",
      buttonEmoji && !isSafeButtonEmoji(buttonEmoji) ? "Skipped invalid button emoji; use a real Unicode or custom Discord emoji." : ""
    ].filter(Boolean).join("\n");
    await replyOk(
      interaction,
      "Ticket Panel Created",
      `Posted panel **${name}** (ID #${panel.id}) in ${channel}.${warnings ? `
${warnings}` : ""}`,
      void 0,
      "Tickets & Sales"
    );
  }
};
var ticketPanelCommands = [ticketPanelCreate];

// artifacts/discord-bot/src/commands/keyPurchase.ts
var import_discord15 = require("discord.js");
var import_drizzle_orm9 = require("drizzle-orm");
var STORE_URL = "https://psrp.tebex.io/category/gift-cards";
var BUNDLE_PRICE = 620;
var BUNDLE_VALUE = "bundle";
var DEFAULT_VEHICLE_KEYS = [
  { name: "1967 Dominator Fastback", price: 20 },
  { name: "1970 Bravado Gauntlet", price: 20 },
  { name: "1985 Declasse Yosemite", price: 20 },
  { name: "2025 Declasse Yosemite 2500", price: 20 },
  { name: "1985 Declasse Impaler", price: 20 },
  { name: "1986 Declasse Yosemite 3500", price: 20 },
  { name: "1970 Declasse Tulip", price: 20 },
  { name: "2020 Declasse Alamo", price: 20 },
  { name: "2025 Declasse Alamo", price: 20 },
  { name: "2024 Bravado Bison", price: 20 },
  { name: "Vapid Torrence", price: 20 },
  { name: "2020 Declasse Granger", price: 20 },
  { name: "1972 Declasse Vigero", price: 20 },
  { name: "Vapid Dominator GT DCL", price: 20 },
  { name: "MRAP", price: 35 },
  { name: "The Beast", price: 35 },
  { name: "1995 Custom Bison G2", price: 20 },
  { name: "Humvee", price: 20 },
  { name: "Golf Cart", price: 20 },
  { name: "Phoenix SW6", price: 20 },
  { name: "Vapid Sentinel Interceptor", price: 20 },
  { name: "Vapid Ranger PPV", price: 20 },
  { name: "2010 Bravado Buffalo", price: 20 },
  { name: "1968 Imponte Dukes", price: 20 },
  { name: "Coquette C7 Terminator", price: 20 },
  { name: "Coquette C7 Interceptor", price: 20 },
  { name: "Harley", price: 4 },
  { name: "Cannis Griffon", price: 20 }
];
async function ensureSeeded(guildId2) {
  const existing = await db.query.discordVehicleKeysTable.findFirst({ where: (0, import_drizzle_orm9.eq)(discordVehicleKeysTable.guildId, guildId2) });
  if (existing) return;
  await db.insert(discordVehicleKeysTable).values(DEFAULT_VEHICLE_KEYS.map((v) => ({ guildId: guildId2, name: v.name, price: v.price })));
}
async function findVehicle(guildId2, selection) {
  const id = Number(selection);
  if (!Number.isNaN(id) && Number.isInteger(id)) {
    return db.query.discordVehicleKeysTable.findFirst({
      where: (0, import_drizzle_orm9.and)((0, import_drizzle_orm9.eq)(discordVehicleKeysTable.id, id), (0, import_drizzle_orm9.eq)(discordVehicleKeysTable.guildId, guildId2))
    });
  }
  return db.query.discordVehicleKeysTable.findFirst({
    where: (0, import_drizzle_orm9.and)((0, import_drizzle_orm9.eq)(discordVehicleKeysTable.guildId, guildId2), (0, import_drizzle_orm9.ilike)(discordVehicleKeysTable.name, selection))
  });
}
var keyPurchase = {
  data: new import_discord15.SlashCommandBuilder().setName("key-purchase").setDescription("Select a vehicle key to purchase and get the store link.").addStringOption(
    (o) => o.setName("vehicle").setDescription("Vehicle key (or the full bundle) you want").setRequired(true).setAutocomplete(true)
  ).addBooleanOption((o) => o.setName("giveaway").setDescription("Did you win this vehicle from a giveaway?").setRequired(true)).setDMPermission(false),
  async autocomplete(interaction) {
    if (!interaction.guild) {
      await interaction.respond([]);
      return;
    }
    await ensureSeeded(interaction.guild.id);
    const focused = interaction.options.getFocused().toLowerCase();
    const rows = await db.query.discordVehicleKeysTable.findMany({
      where: focused ? (0, import_drizzle_orm9.and)((0, import_drizzle_orm9.eq)(discordVehicleKeysTable.guildId, interaction.guild.id), (0, import_drizzle_orm9.ilike)(discordVehicleKeysTable.name, `%${focused}%`)) : (0, import_drizzle_orm9.eq)(discordVehicleKeysTable.guildId, interaction.guild.id)
    });
    const choices = rows.slice(0, 24).map((r) => ({ name: `${r.name} \u2014 $${r.price}`, value: String(r.id) }));
    const bundleName = `Full Vehicle Bundle \u2014 $${BUNDLE_PRICE}`;
    if (!focused || bundleName.toLowerCase().includes(focused) || "bundle".includes(focused)) {
      choices.unshift({ name: bundleName, value: BUNDLE_VALUE });
    }
    await interaction.respond(choices.slice(0, 25));
  },
  async execute(interaction) {
    if (!interaction.guild) return;
    await ensureSeeded(interaction.guild.id);
    const selection = interaction.options.getString("vehicle", true);
    const wonFromGiveaway = interaction.options.getBoolean("giveaway", true);
    let name;
    let price;
    if (selection === BUNDLE_VALUE) {
      name = "Full Vehicle Bundle";
      price = BUNDLE_PRICE;
    } else {
      const row = await findVehicle(interaction.guild.id, selection);
      if (!row) {
        await replyError(interaction, "Vehicle Not Found", "Please pick a vehicle from the autocomplete suggestions.");
        return;
      }
      name = row.name;
      price = row.price;
    }
    if (wonFromGiveaway) {
      await interaction.reply({
        embeds: [
          nexusEmbed({
            title: "Giveaway Prize",
            description: `**${name}** is marked as a giveaway win \u2014 no purchase needed!
${DIVIDER}
A staff member will verify your win in this ticket and hand over the key free of charge.`,
            color: THEME.success,
            footer: "Tickets & Sales"
          })
        ]
      });
      return;
    }
    await interaction.reply({
      embeds: [
        nexusEmbed({
          title: "Key Purchase",
          description: `${DIVIDER}
Purchase a gift card for the amount below at the store, then a staff member will deliver your key.`,
          color: THEME.primary,
          fields: [
            { name: "Selected", value: name, inline: true },
            { name: "Price", value: `$${price}`, inline: true },
            { name: "Store", value: STORE_URL }
          ],
          footer: "Tickets & Sales"
        })
      ]
    });
  }
};
var keyAdd = {
  data: new import_discord15.SlashCommandBuilder().setName("key-add").setDescription("Add a new vehicle key to the purchasable catalog.").addStringOption((o) => o.setName("name").setDescription("Vehicle name, e.g. 1967 Dominator Fastback").setRequired(true)).addIntegerOption((o) => o.setName("price").setDescription("Price in dollars").setRequired(true).setMinValue(1)).setDefaultMemberPermissions(import_discord15.PermissionFlagsBits.ManageGuild).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    await ensureSeeded(interaction.guild.id);
    const name = interaction.options.getString("name", true);
    const price = interaction.options.getInteger("price", true);
    await db.insert(discordVehicleKeysTable).values({ guildId: interaction.guild.id, name, price });
    await replyOk(interaction, "Vehicle Key Added", `**${name}** \u2014 $${price} is now available in \`/key-purchase\`.`, void 0, "Tickets & Sales");
  }
};
var keyRemove = {
  data: new import_discord15.SlashCommandBuilder().setName("key").setDescription("Manage the vehicle key catalog.").addSubcommand(
    (sc) => sc.setName("remove").setDescription("Remove a vehicle key from this server's catalog.").addStringOption((o) => o.setName("name").setDescription("Exact vehicle name to remove").setRequired(true))
  ).setDefaultMemberPermissions(import_discord15.PermissionFlagsBits.ManageGuild).setDMPermission(false),
  async execute(interaction) {
    if (!interaction.guild) return;
    const name = interaction.options.getString("name", true).trim();
    const vehicle = await findVehicle(interaction.guild.id, name);
    if (!vehicle) {
      await replyError(interaction, "Vehicle Not Found", `No vehicle named **${name}** exists in this server's catalog.`);
      return;
    }
    await db.delete(discordVehicleKeysTable).where((0, import_drizzle_orm9.and)((0, import_drizzle_orm9.eq)(discordVehicleKeysTable.id, vehicle.id), (0, import_drizzle_orm9.eq)(discordVehicleKeysTable.guildId, interaction.guild.id)));
    await replyOk(interaction, "Vehicle Key Removed", `**${vehicle.name}** \u2014 $${vehicle.price} has been removed from \`/key-purchase\`.`, void 0, "Tickets & Sales");
  }
};
var keyPurchaseCommands = [keyPurchase, keyAdd, keyRemove];

// artifacts/discord-bot/src/commands/index.ts
var allCommands = [
  ...moderationCommands,
  ...communityCommands,
  ...serverCommands,
  ...infoCommands,
  ...staffCommands,
  ...dmCommands,
  ...dmListCommands,
  ...autoRoleCommands,
  ...roleMenuCommands,
  ...developerCommands,
  ...embedEditCommands,
  ...ticketPanelCommands,
  ...keyPurchaseCommands
];
var commandMap = new Map(allCommands.map((c) => [c.data.name, c]));

// artifacts/discord-bot/src/events/buttonInteractions.ts
var import_discord16 = require("discord.js");
var import_drizzle_orm10 = require("drizzle-orm");
async function requireStaff(interaction) {
  const member = interaction.member;
  if (!member || !("permissions" in member)) return false;
  const perms = member.permissions;
  if (typeof perms === "string") return false;
  return perms.has(import_discord16.PermissionFlagsBits.ModerateMembers);
}
async function handleButtonInteraction(interaction) {
  const [action, idRaw] = interaction.customId.split(":");
  const id = idRaw ? Number(idRaw) : void 0;
  try {
    switch (action) {
      case "warn_ack": {
        if (id !== void 0) {
          await db.update(discordWarningsTable).set({ acknowledged: true }).where((0, import_drizzle_orm10.eq)(discordWarningsTable.id, id));
        }
        await interaction.update({
          embeds: [nexusEmbed({ title: "Warning Acknowledged", description: "Thanks for confirming you've read this warning.", color: THEME.success })],
          components: []
        });
        return;
      }
      case "poll_vote": {
        if (!interaction.message || id === void 0) return;
        const poll2 = await db.query.discordPollsTable.findFirst({ where: (0, import_drizzle_orm10.eq)(discordPollsTable.messageId, interaction.message.id) });
        if (!poll2 || poll2.ended) {
          await interaction.reply({ embeds: [errorEmbedLocal("Poll Closed", "This poll is no longer accepting votes.")], flags: 64 });
          return;
        }
        const votes = { ...poll2.votes, [interaction.user.id]: id };
        await db.update(discordPollsTable).set({ votes }).where((0, import_drizzle_orm10.eq)(discordPollsTable.id, poll2.id));
        const tallies = poll2.options.map((_, i) => Object.values(votes).filter((v) => v === i).length);
        await interaction.update({
          embeds: [
            nexusEmbed({
              title: "Live Poll",
              description: `**${poll2.question}**
${DIVIDER}
${poll2.options.map((o, i) => `**${i + 1}.** ${o} \u2014 ${tallies[i]} vote(s)`).join("\n")}`,
              color: THEME.primary,
              footer: "Community"
            })
          ]
        });
        return;
      }
      case "suggestion_up":
      case "suggestion_down": {
        if (id === void 0) return;
        const suggestion2 = await db.query.discordSuggestionsTable.findFirst({ where: (0, import_drizzle_orm10.eq)(discordSuggestionsTable.id, id) });
        if (!suggestion2) return;
        const field = action === "suggestion_up" ? "upvotes" : "downvotes";
        const updated = { ...suggestion2, [field]: suggestion2[field] + 1 };
        await db.update(discordSuggestionsTable).set({ [field]: updated[field] }).where((0, import_drizzle_orm10.eq)(discordSuggestionsTable.id, id));
        const row = new import_discord16.ActionRowBuilder().addComponents(
          new import_discord16.ButtonBuilder().setCustomId(`suggestion_up:${id}`).setLabel(`${action === "suggestion_up" ? updated.upvotes : suggestion2.upvotes}`).setEmoji("\u25B2").setStyle(import_discord16.ButtonStyle.Success),
          new import_discord16.ButtonBuilder().setCustomId(`suggestion_down:${id}`).setLabel(`${action === "suggestion_down" ? updated.downvotes : suggestion2.downvotes}`).setEmoji("\u25BC").setStyle(import_discord16.ButtonStyle.Danger)
        );
        await interaction.update({ components: [row] });
        return;
      }
      case "report_claim":
      case "report_resolve":
      case "report_dismiss": {
        if (id === void 0) return;
        if (!await requireStaff(interaction)) {
          await interaction.reply({ embeds: [errorEmbedLocal("Access Denied", "Only staff can manage reports.")], flags: 64 });
          return;
        }
        const status = action === "report_claim" ? "claimed" : action === "report_resolve" ? "resolved" : "dismissed";
        const set = { status };
        if (action === "report_claim") set.claimedBy = interaction.user.id;
        await db.update(discordReportsTable).set(set).where((0, import_drizzle_orm10.eq)(discordReportsTable.id, id));
        const report2 = await db.query.discordReportsTable.findFirst({ where: (0, import_drizzle_orm10.eq)(discordReportsTable.id, id) });
        if (!report2) return;
        const color = status === "resolved" ? THEME.success : status === "dismissed" ? THEME.neutral : THEME.warning;
        const row = status === "claimed" ? interaction.message.components[0] : void 0;
        await interaction.update({
          embeds: [
            nexusEmbed({
              title: `Report #${id} \u2014 ${status[0].toUpperCase()}${status.slice(1)}`,
              color,
              fields: [
                { name: "Reported User", value: `<@${report2.targetId}>`, inline: true },
                { name: "Reported By", value: `<@${report2.reporterId}>`, inline: true },
                { name: "Reason", value: report2.reason },
                ...report2.claimedBy ? [{ name: "Claimed By", value: `<@${report2.claimedBy}>` }] : []
              ],
              footer: "Staff & Administration"
            })
          ],
          components: status === "claimed" ? interaction.message.components : []
        });
        return;
      }
      case "loa_approve":
      case "loa_deny": {
        if (id === void 0) return;
        if (!await requireStaff(interaction)) {
          await interaction.reply({ embeds: [errorEmbedLocal("Access Denied", "Only staff can review leave requests.")], flags: 64 });
          return;
        }
        const status = action === "loa_approve" ? "approved" : "denied";
        await db.update(discordLoaRequestsTable).set({ status, reviewedBy: interaction.user.id }).where((0, import_drizzle_orm10.eq)(discordLoaRequestsTable.id, id));
        const loa2 = await db.query.discordLoaRequestsTable.findFirst({ where: (0, import_drizzle_orm10.eq)(discordLoaRequestsTable.id, id) });
        if (!loa2) return;
        await interaction.update({
          embeds: [
            nexusEmbed({
              title: `Leave of Absence #${id} \u2014 ${status[0].toUpperCase()}${status.slice(1)}`,
              color: status === "approved" ? THEME.success : THEME.danger,
              fields: [
                { name: "Staff Member", value: `<@${loa2.userId}>`, inline: true },
                { name: "From", value: loa2.startDate, inline: true },
                { name: "Until", value: loa2.endDate, inline: true },
                { name: "Reason", value: loa2.reason },
                { name: "Reviewed By", value: `<@${interaction.user.id}>` }
              ],
              footer: "Staff & Administration"
            })
          ],
          components: []
        });
        const staffUser = await interaction.client.users.fetch(loa2.userId).catch(() => null);
        await staffUser?.send({
          embeds: [
            nexusEmbed({
              title: `Your Leave of Absence Was ${status[0].toUpperCase()}${status.slice(1)}`,
              color: status === "approved" ? THEME.success : THEME.danger,
              footer: "Staff & Administration"
            })
          ]
        }).catch(() => null);
        return;
      }
      case "staffduty_on":
      case "staffduty_off": {
        if (!interaction.guild) return;
        const onDuty = action === "staffduty_on";
        const key = `${interaction.guild.id}:${interaction.user.id}`;
        await db.insert(discordStaffDutyTable).values({ guildUserId: key, guildId: interaction.guild.id, userId: interaction.user.id, onDuty }).onConflictDoUpdate({ target: discordStaffDutyTable.guildUserId, set: { onDuty, lastToggledAt: /* @__PURE__ */ new Date() } });
        const settings = await db.query.discordGuildSettingsTable.findFirst({ where: (0, import_drizzle_orm10.eq)(discordGuildSettingsTable.guildId, interaction.guild.id) });
        if (settings?.staffDutyChannelId) {
          const channel = await interaction.guild.channels.fetch(settings.staffDutyChannelId).catch(() => null);
          if (channel?.isTextBased()) {
            await channel.send({
              embeds: [
                nexusEmbed({
                  title: "Staff Duty Update",
                  description: `<@${interaction.user.id}> is now **${onDuty ? "ON DUTY" : "OFF DUTY"}**.`,
                  color: onDuty ? THEME.success : THEME.neutral,
                  footer: "Staff & Administration"
                })
              ]
            });
          }
        }
        await interaction.update({
          embeds: [
            nexusEmbed({
              title: "Staff Duty Status",
              description: `You are now **${onDuty ? "ON DUTY" : "OFF DUTY"}**.`,
              color: onDuty ? THEME.success : THEME.neutral,
              footer: "Staff & Administration"
            })
          ],
          components: interaction.message.components
        });
        return;
      }
      case "verify_button": {
        if (!interaction.guild) return;
        const settings = await db.query.discordGuildSettingsTable.findFirst({ where: (0, import_drizzle_orm10.eq)(discordGuildSettingsTable.guildId, interaction.guild.id) });
        if (!settings?.verificationRoleId) {
          await interaction.reply({ embeds: [errorEmbedLocal("Verification Unavailable", "No verification role is configured.")], flags: 64 });
          return;
        }
        const member = await interaction.guild.members.fetch(interaction.user.id);
        if (member.roles.cache.has(settings.verificationRoleId)) {
          await interaction.reply({ embeds: [errorEmbedLocal("Already Verified", "You already have access.")], flags: 64 });
          return;
        }
        const role = interaction.guild.roles.cache.get(settings.verificationRoleId);
        const botMember = interaction.guild.members.me;
        if (!role || role.managed || !botMember || role.position >= botMember.roles.highest.position) {
          await interaction.reply({
            embeds: [errorEmbedLocal("Verification Misconfigured", "I can't assign that role. Move my highest role above the verification role, then run `/verification` again.")],
            flags: 64
          });
          return;
        }
        await member.roles.add(role);
        await interaction.reply({
          embeds: [nexusEmbed({ title: "Verification Complete", description: "You now have full access to the server.", color: THEME.success })],
          flags: 64
        });
        return;
      }
      case "giveaway_enter": {
        if (!interaction.message) return;
        const giveaway2 = await db.query.discordGiveawaysTable.findFirst({ where: (0, import_drizzle_orm10.eq)(discordGiveawaysTable.messageId, interaction.message.id) });
        if (!giveaway2 || giveaway2.ended) {
          await interaction.reply({ embeds: [errorEmbedLocal("Giveaway Closed", "This giveaway has already ended.")], flags: 64 });
          return;
        }
        if (giveaway2.entrantIds.includes(interaction.user.id)) {
          await interaction.reply({ embeds: [errorEmbedLocal("Already Entered", "You're already in the running for this giveaway.")], flags: 64 });
          return;
        }
        const entrantIds = [...giveaway2.entrantIds, interaction.user.id];
        await db.update(discordGiveawaysTable).set({ entrantIds }).where((0, import_drizzle_orm10.eq)(discordGiveawaysTable.id, giveaway2.id));
        await interaction.reply({
          embeds: [nexusEmbed({ title: "Entry Confirmed", description: `You're entered for **${giveaway2.prize}**. Good luck!`, color: THEME.success })],
          flags: 64
        });
        return;
      }
      case "ticket_open": {
        if (!interaction.guild || id === void 0) return;
        const panel = await db.query.discordTicketPanelsTable.findFirst({ where: (0, import_drizzle_orm10.eq)(discordTicketPanelsTable.id, id) });
        if (!panel) {
          await interaction.reply({ embeds: [errorEmbedLocal("Panel Unavailable", "This ticket panel no longer exists.")], flags: 64 });
          return;
        }
        const existing = await db.query.discordTicketsTable.findFirst({
          where: (t, { and: and3, eq: eq14 }) => and3(eq14(t.panelId, panel.id), eq14(t.openerId, interaction.user.id), eq14(t.status, "open"))
        });
        if (existing) {
          await interaction.reply({ embeds: [errorEmbedLocal("Ticket Already Open", `You already have an open ticket: <#${existing.channelId}>.`)], flags: 64 });
          return;
        }
        await interaction.deferReply({ flags: 64 });
        const number = panel.ticketCounter + 1;
        const overwrites = [
          { id: interaction.guild.roles.everyone.id, deny: [import_discord16.PermissionFlagsBits.ViewChannel] },
          {
            id: interaction.user.id,
            type: import_discord16.OverwriteType.Member,
            allow: [import_discord16.PermissionFlagsBits.ViewChannel, import_discord16.PermissionFlagsBits.SendMessages, import_discord16.PermissionFlagsBits.ReadMessageHistory]
          },
          ...panel.accessRoleIds.map((roleId) => ({
            id: roleId,
            type: import_discord16.OverwriteType.Role,
            allow: [import_discord16.PermissionFlagsBits.ViewChannel, import_discord16.PermissionFlagsBits.SendMessages, import_discord16.PermissionFlagsBits.ReadMessageHistory]
          }))
        ];
        const botId = interaction.client.user?.id;
        if (botId) {
          overwrites.push({
            id: botId,
            type: import_discord16.OverwriteType.Member,
            allow: [import_discord16.PermissionFlagsBits.ViewChannel, import_discord16.PermissionFlagsBits.SendMessages, import_discord16.PermissionFlagsBits.ManageChannels]
          });
        }
        const ticketChannel = await interaction.guild.channels.create({
          name: `${panel.ticketNamePrefix}-${number}`,
          type: import_discord16.ChannelType.GuildText,
          parent: panel.categoryId ?? void 0,
          permissionOverwrites: overwrites
        });
        await db.update(discordTicketPanelsTable).set({ ticketCounter: number }).where((0, import_drizzle_orm10.eq)(discordTicketPanelsTable.id, panel.id));
        const [ticket] = await db.insert(discordTicketsTable).values({ guildId: interaction.guild.id, panelId: panel.id, channelId: ticketChannel.id, openerId: interaction.user.id }).returning();
        const closeRow = new import_discord16.ActionRowBuilder().addComponents(
          new import_discord16.ButtonBuilder().setCustomId(`ticket_claim:${ticket.id}`).setLabel("Claim").setStyle(import_discord16.ButtonStyle.Secondary),
          new import_discord16.ButtonBuilder().setCustomId(`ticket_close:${ticket.id}`).setLabel("Close Ticket").setStyle(import_discord16.ButtonStyle.Danger)
        );
        const pingText = panel.pingRoleIds.length ? panel.pingRoleIds.map((r) => `<@&${r}>`).join(" ") : "";
        await ticketChannel.send({
          content: `${interaction.user} ${pingText}`.trim(),
          embeds: [
            nexusEmbed({
              title: panel.name,
              description: `${panel.welcomeMessage ? `${panel.welcomeMessage}
${DIVIDER}
` : ""}Thanks for opening a ticket. Support will be with you shortly.`,
              color: THEME.primary,
              footer: "Tickets & Sales"
            })
          ],
          components: [closeRow]
        });
        await interaction.editReply({ embeds: [nexusEmbed({ title: "Ticket Created", description: `Your ticket is ready: ${ticketChannel}`, color: THEME.success })] });
        return;
      }
      case "ticket_claim": {
        if (id === void 0 || !interaction.guild) return;
        if (!await requireStaff(interaction)) {
          await interaction.reply({ embeds: [errorEmbedLocal("Access Denied", "Only staff can claim tickets.")], flags: 64 });
          return;
        }
        const ticket = await db.query.discordTicketsTable.findFirst({ where: (0, import_drizzle_orm10.eq)(discordTicketsTable.id, id) });
        if (!ticket || ticket.status !== "open") {
          await interaction.reply({ embeds: [errorEmbedLocal("Ticket Closed", "This ticket can no longer be claimed.")], flags: 64 });
          return;
        }
        if (ticket.claimedBy) {
          await interaction.reply({ embeds: [errorEmbedLocal("Already Claimed", `This ticket is already being handled by <@${ticket.claimedBy}>.`)], flags: 64 });
          return;
        }
        await db.update(discordTicketsTable).set({ claimedBy: interaction.user.id }).where((0, import_drizzle_orm10.eq)(discordTicketsTable.id, id));
        const updatedEmbed = interaction.message.embeds[0] ? import_discord16.EmbedBuilder.from(interaction.message.embeds[0]).setColor(THEME.accent).addFields({ name: "Assigned Support", value: `${interaction.user} is handling this ticket.` }) : nexusEmbed({ title: "Ticket Claimed", description: `${interaction.user} is now handling this ticket.`, color: THEME.accent });
        const updatedRows = new import_discord16.ActionRowBuilder().addComponents(
          new import_discord16.ButtonBuilder().setCustomId(`ticket_claim:${id}`).setLabel("Claimed").setStyle(import_discord16.ButtonStyle.Secondary).setDisabled(true),
          new import_discord16.ButtonBuilder().setCustomId(`ticket_close:${id}`).setLabel("Close Ticket").setStyle(import_discord16.ButtonStyle.Danger)
        );
        await interaction.update({ embeds: [updatedEmbed], components: [updatedRows] });
        return;
      }
      case "ticket_close": {
        if (id === void 0 || !interaction.guild) return;
        const ticket = await db.query.discordTicketsTable.findFirst({ where: (0, import_drizzle_orm10.eq)(discordTicketsTable.id, id) });
        if (!ticket || ticket.status !== "open") {
          await interaction.reply({ embeds: [errorEmbedLocal("Already Closed", "This ticket is already closed.")], flags: 64 });
          return;
        }
        const isStaff = await requireStaff(interaction);
        if (interaction.user.id !== ticket.openerId && !isStaff) {
          await interaction.reply({ embeds: [errorEmbedLocal("Access Denied", "Only the ticket opener or staff can close this ticket.")], flags: 64 });
          return;
        }
        await db.update(discordTicketsTable).set({ status: "closed", closedAt: /* @__PURE__ */ new Date() }).where((0, import_drizzle_orm10.eq)(discordTicketsTable.id, id));
        const channel = interaction.channel;
        if (channel?.isTextBased() && "permissionOverwrites" in channel) {
          await channel.permissionOverwrites.edit(ticket.openerId, { SendMessages: false }).catch(() => null);
        }
        const deleteRow = new import_discord16.ActionRowBuilder().addComponents(
          new import_discord16.ButtonBuilder().setCustomId(`ticket_delete:${id}`).setLabel("Delete Ticket").setStyle(import_discord16.ButtonStyle.Danger)
        );
        const transcriptLines = [
          `Titan Labs ticket transcript`,
          `Ticket ID: ${ticket.id}`,
          `Guild: ${interaction.guild.name} (${interaction.guild.id})`,
          `Opened by: ${ticket.openerId}`,
          `Closed by: ${interaction.user.id}`,
          ""
        ];
        if (channel?.isTextBased() && "messages" in channel) {
          const messages = await channel.messages.fetch({ limit: 100 }).catch(() => null);
          if (messages) {
            for (const message of [...messages.values()].reverse()) {
              const body = message.content || message.embeds.map((e) => `[embed: ${e.title ?? "untitled"}]`).join(" ") || "[no text]";
              transcriptLines.push(`[${message.createdAt.toISOString()}] ${message.author.tag}: ${body}`);
            }
          }
        }
        const panel = await db.query.discordTicketPanelsTable.findFirst({ where: (0, import_drizzle_orm10.eq)(discordTicketPanelsTable.id, ticket.panelId) });
        const transcriptChannel = panel ? await interaction.guild.channels.fetch(panel.transcriptChannelId ?? panel.channelId).catch(() => null) : null;
        if (transcriptChannel?.isTextBased()) {
          await transcriptChannel.send({
            content: `Transcript for ticket #${ticket.id} closed by ${interaction.user}.`,
            files: [new import_discord16.AttachmentBuilder(Buffer.from(transcriptLines.join("\n"), "utf8"), { name: `ticket-${ticket.id}-transcript.txt` })]
          }).catch((err) => logger.warn({ err, ticketId: ticket.id }, "ticket transcript delivery failed"));
        }
        await interaction.reply({
          embeds: [nexusEmbed({ title: "Ticket Closed", description: `Closed by ${interaction.user}. Staff can delete this channel when ready.`, color: THEME.warning })],
          components: [deleteRow]
        });
        return;
      }
      case "ticket_delete": {
        if (id === void 0 || !interaction.guild) return;
        if (!await requireStaff(interaction)) {
          await interaction.reply({ embeds: [errorEmbedLocal("Access Denied", "Only staff can delete tickets.")], flags: 64 });
          return;
        }
        await interaction.reply({ embeds: [nexusEmbed({ title: "Deleting Ticket", description: "This channel will be deleted shortly.", color: THEME.danger })] });
        const channel = interaction.channel;
        setTimeout(() => {
          if (channel && "delete" in channel) channel.delete().catch(() => null);
        }, 5e3);
        return;
      }
      default:
        return;
    }
  } catch (err) {
    logger.error({ err, customId: interaction.customId }, "button interaction failed");
    if (!interaction.replied && !interaction.deferred) {
      await interaction.reply({ embeds: [errorEmbedLocal("Something Went Wrong", "Please try again.")], flags: 64 }).catch(() => null);
    }
  }
}
function errorEmbedLocal(title, description) {
  return nexusEmbed({ title, description, color: THEME.danger });
}

// artifacts/discord-bot/src/events/roleMenuInteractions.ts
var import_drizzle_orm11 = require("drizzle-orm");
async function handleRoleMenuSelect(interaction) {
  if (!interaction.guild || !interaction.inGuild()) return;
  const menuId = Number(interaction.customId.split(":")[1]);
  const menu = await db.query.discordRoleMenusTable.findFirst({ where: (0, import_drizzle_orm11.eq)(discordRoleMenusTable.id, menuId) });
  if (!menu) {
    await replyError(interaction, "Role Menu Unavailable", "This role menu no longer exists.");
    return;
  }
  const member = await interaction.guild.members.fetch(interaction.user.id).catch(() => null);
  if (!member) {
    await replyError(interaction, "Error", "Couldn't load your member profile \u2014 try again.");
    return;
  }
  const menuRoleIds = new Set(menu.options.map((o) => o.roleId));
  const selectedIds = new Set(interaction.values);
  const toAdd = [...selectedIds].filter((id) => !member.roles.cache.has(id));
  const toRemove = [...menuRoleIds].filter((id) => !selectedIds.has(id) && member.roles.cache.has(id));
  try {
    if (toAdd.length > 0) await member.roles.add(toAdd);
    if (toRemove.length > 0) await member.roles.remove(toRemove);
  } catch (err) {
    logger.error({ err }, "role menu apply failed");
    await replyError(interaction, "Couldn't Update Roles", "I may be missing permissions or my role is positioned too low.");
    return;
  }
  const addedText = toAdd.length ? `Added: ${toAdd.map((id) => `<@&${id}>`).join(" ")}` : "";
  const removedText = toRemove.length ? `Removed: ${toRemove.map((id) => `<@&${id}>`).join(" ")}` : "";
  const summary = [addedText, removedText].filter(Boolean).join("\n") || "No changes \u2014 your roles already matched your selection.";
  await interaction.reply({ content: summary, flags: 64 });
}

// artifacts/discord-bot/src/events/ticketMenuInteractions.ts
var import_discord17 = require("discord.js");
var import_drizzle_orm12 = require("drizzle-orm");
async function handleTicketMenuSelect(interaction) {
  const panelId = Number(interaction.customId.split(":")[1]);
  if (!Number.isInteger(panelId)) return;
  const panel = await db.query.discordTicketPanelsTable.findFirst({
    where: (0, import_drizzle_orm12.eq)(discordTicketPanelsTable.id, panelId)
  });
  if (!panel) {
    await interaction.reply({
      embeds: [nexusEmbed({ title: "Panel Unavailable", description: "This ticket panel no longer exists.", color: THEME.danger })],
      flags: 64
    });
    return;
  }
  if (interaction.values[0] === "info") {
    await interaction.reply({
      embeds: [
        nexusEmbed({
          title: "How Tickets Work",
          description: `${DIVIDER}
1. Choose **Open a Ticket** from the menu.
2. Confirm the request.
3. A private channel is created for you and the support team.
4. Staff can claim, close, and archive the ticket.

Please include all relevant details in your first message so the team can help quickly.`,
          color: THEME.accent,
          footer: "Tickets & Sales \u2022 Help"
        })
      ],
      flags: 64
    });
    return;
  }
  const row = new import_discord17.ActionRowBuilder().addComponents(
    new import_discord17.ButtonBuilder().setCustomId(`ticket_open:${panel.id}`).setLabel(`Open ${panel.name} Ticket`.slice(0, 80)).setStyle(import_discord17.ButtonStyle.Primary).setEmoji("\u{1F3AB}")
  );
  await interaction.reply({
    embeds: [
      nexusEmbed({
        title: "Ready to Open a Ticket?",
        description: `A private **${panel.name}** ticket will be created for you and the configured support roles.`,
        color: THEME.success,
        footer: "Tickets & Sales"
      })
    ],
    components: [row],
    flags: 64
  });
}

// artifacts/discord-bot/src/events/interactionCreate.ts
async function handleInteraction(interaction) {
  if (interaction.isAutocomplete()) {
    const command = commandMap.get(interaction.commandName);
    if (!command?.autocomplete) return;
    try {
      await command.autocomplete(interaction);
    } catch (err) {
      logger.error({ err, command: interaction.commandName }, "autocomplete failed");
    }
    return;
  }
  if (interaction.isChatInputCommand()) {
    const command = commandMap.get(interaction.commandName);
    if (!command) return;
    try {
      await command.execute(interaction);
    } catch (err) {
      logger.error({ err, command: interaction.commandName }, "command execution failed");
      const embed2 = nexusEmbed({ title: "Command Failed", description: "Something went wrong while running this command.", color: THEME.danger });
      if (interaction.deferred || interaction.replied) {
        await interaction.editReply({ embeds: [embed2] }).catch(() => null);
      } else {
        await interaction.reply({ embeds: [embed2], flags: 64 }).catch(() => null);
      }
    }
    return;
  }
  if (interaction.isButton()) {
    await handleButtonInteraction(interaction);
    return;
  }
  if (interaction.isStringSelectMenu() && interaction.customId.startsWith("rolemenu_select:")) {
    try {
      await handleRoleMenuSelect(interaction);
    } catch (err) {
      logger.error({ err }, "role menu select failed");
    }
  }
  if (interaction.isStringSelectMenu() && interaction.customId.startsWith("ticket_menu:")) {
    try {
      await handleTicketMenuSelect(interaction);
    } catch (err) {
      logger.error({ err }, "ticket menu select failed");
      if (!interaction.replied && !interaction.deferred) {
        await interaction.reply({ embeds: [nexusEmbed({ title: "Menu Error", description: "This ticket menu could not be loaded. Please try again.", color: THEME.danger })], flags: 64 }).catch(() => null);
      }
    }
  }
}

// artifacts/discord-bot/src/events/serverLog.ts
var import_drizzle_orm13 = require("drizzle-orm");
async function getLogChannel(client2, guildId2, event) {
  const settings = await db.query.discordGuildSettingsTable.findFirst({ where: (0, import_drizzle_orm13.eq)(discordGuildSettingsTable.guildId, guildId2) });
  if (!settings?.logChannelId || !settings.logEvents.includes(event)) return null;
  const channel = await client2.channels.fetch(settings.logChannelId).catch(() => null);
  if (!channel || channel.isDMBased() || !channel.isTextBased()) return null;
  return channel;
}
function registerServerLogEvents(client2) {
  client2.on("guildMemberAdd", async (member) => {
    const globalBan2 = await db.query.discordGlobalBansTable.findFirst({ where: (0, import_drizzle_orm13.eq)(discordGlobalBansTable.userId, member.id) });
    if (globalBan2) {
      await member.ban({ reason: `Network ban enforced on join: ${globalBan2.reason}` }).catch((err) => logger.error({ err }, "auto network-ban failed"));
    } else {
      const settings = await db.query.discordGuildSettingsTable.findFirst({ where: (0, import_drizzle_orm13.eq)(discordGuildSettingsTable.guildId, member.guild.id) });
      if (settings?.autoRoleId) {
        await member.roles.add(settings.autoRoleId).catch((err) => logger.error({ err }, "auto-role assignment failed"));
      }
    }
    const channel = await getLogChannel(client2, member.guild.id, "memberJoin");
    await channel?.send({
      embeds: [
        nexusEmbed({
          title: "Member Joined",
          description: `<@${member.id}> (${member.user.tag})`,
          color: THEME.success,
          fields: [{ name: "Account Created", value: `<t:${Math.floor(member.user.createdTimestamp / 1e3)}:R>` }],
          footer: "Audit Log"
        })
      ]
    }).catch(() => null);
  });
  client2.on("guildMemberRemove", async (member) => {
    const channel = await getLogChannel(client2, member.guild.id, "memberLeave");
    await channel?.send({
      embeds: [nexusEmbed({ title: "Member Left", description: `${member.user?.tag ?? member.id}`, color: THEME.warning, footer: "Audit Log" })]
    }).catch(() => null);
  });
  client2.on("guildBanAdd", async (ban2) => {
    const channel = await getLogChannel(client2, ban2.guild.id, "banAdd");
    await channel?.send({
      embeds: [nexusEmbed({ title: "Member Banned", description: `${ban2.user.tag}`, color: THEME.danger, footer: "Audit Log" })]
    }).catch(() => null);
  });
  client2.on("guildBanRemove", async (ban2) => {
    const channel = await getLogChannel(client2, ban2.guild.id, "banRemove");
    await channel?.send({
      embeds: [nexusEmbed({ title: "Ban Revoked", description: `${ban2.user.tag}`, color: THEME.success, footer: "Audit Log" })]
    }).catch(() => null);
  });
  client2.on("messageDelete", async (message) => {
    if (!message.guild || message.author?.bot) return;
    const channel = await getLogChannel(client2, message.guild.id, "messageDelete");
    await channel?.send({
      embeds: [
        nexusEmbed({
          title: "Message Deleted",
          description: message.content || "*(no cached content)*",
          color: THEME.warning,
          fields: [
            { name: "Author", value: message.author ? `<@${message.author.id}>` : "Unknown", inline: true },
            { name: "Channel", value: `${message.channel}`, inline: true }
          ],
          footer: "Audit Log"
        })
      ]
    }).catch(() => null);
  });
  client2.on("messageUpdate", async (oldMessage, newMessage) => {
    if (!newMessage.guild || newMessage.author?.bot || oldMessage.content === newMessage.content) return;
    const channel = await getLogChannel(client2, newMessage.guild.id, "messageEdit");
    await channel?.send({
      embeds: [
        nexusEmbed({
          title: "Message Edited",
          color: THEME.accent,
          fields: [
            { name: "Author", value: newMessage.author ? `<@${newMessage.author.id}>` : "Unknown", inline: true },
            { name: "Channel", value: `${newMessage.channel}`, inline: true },
            { name: "Before", value: (oldMessage.content || "*(uncached)*").slice(0, 1e3) },
            { name: "After", value: (newMessage.content || "*(empty)*").slice(0, 1e3) }
          ],
          footer: "Audit Log"
        })
      ]
    }).catch(() => null);
  });
}

// artifacts/discord-bot/src/events/dmRelay.ts
var import_discord18 = require("discord.js");
function registerDmRelay(client2) {
  client2.on("messageCreate", async (message) => {
    if (message.author.bot) return;
    if (message.channel.type !== import_discord18.ChannelType.DM) return;
    if (!message.content.trim()) return;
    const recipients = await db.query.discordDmForwardListTable.findMany();
    if (recipients.length === 0) {
      await message.reply({
        embeds: [
          nexusEmbed({
            title: "Message Received",
            description: "Thanks for reaching out \u2014 nobody is currently set up to receive forwarded DMs, so this wasn't auto-forwarded.",
            color: THEME.warning,
            footer: "DM Relay"
          })
        ]
      }).catch(() => null);
      return;
    }
    const results = [];
    for (const recipient of recipients) {
      if (recipient.userId === message.author.id) continue;
      const targetUser = await client2.users.fetch(recipient.userId).catch(() => null);
      if (!targetUser) {
        results.push(`<@${recipient.userId}> \u2014 could not resolve`);
        continue;
      }
      const delivered = await targetUser.send({
        embeds: [
          nexusEmbed({
            title: "New Direct Message",
            description: message.content,
            color: THEME.accent,
            fields: [{ name: "From", value: message.author.tag }],
            footer: "Auto-forwarded via Titan Labs"
          })
        ]
      }).then(() => true).catch(() => false);
      results.push(`<@${recipient.userId}> \u2014 ${delivered ? "delivered" : "failed (DMs closed)"}`);
      if (!delivered) logger.warn({ userId: recipient.userId }, "dm auto-forward delivery failed");
    }
    await message.reply({
      embeds: [
        nexusEmbed({
          title: "Message Forwarded",
          description: results.join("\n") || "No one else is on the forward list.",
          color: THEME.success,
          footer: "DM Relay"
        })
      ]
    }).catch((err) => logger.error({ err }, "failed to confirm dm auto-forward"));
  });
}

// artifacts/discord-bot/src/exportEntry.ts
var token = process.env.DISCORD_BOT_TOKEN;
var clientId = process.env.DISCORD_CLIENT_ID;
var guildId = process.env.DISCORD_GUILD_ID;
if (!token) {
  throw new Error("DISCORD_BOT_TOKEN must be set. Copy .env.example to .env and fill it in.");
}
if (!clientId) {
  throw new Error("DISCORD_CLIENT_ID must be set. Copy .env.example to .env and fill it in.");
}
var client = new import_discord19.Client({
  intents: [
    import_discord19.GatewayIntentBits.Guilds,
    import_discord19.GatewayIntentBits.GuildMembers,
    import_discord19.GatewayIntentBits.GuildMessages,
    import_discord19.GatewayIntentBits.GuildModeration,
    import_discord19.GatewayIntentBits.MessageContent,
    import_discord19.GatewayIntentBits.DirectMessages
  ],
  partials: [import_discord19.Partials.Message, import_discord19.Partials.Channel, import_discord19.Partials.GuildMember, import_discord19.Partials.User]
});
async function deploySlashCommands() {
  const rest = new import_discord19.REST({ version: "10" }).setToken(token);
  const body = allCommands.map((c) => c.data.toJSON());
  if (guildId) {
    await rest.put(import_discord19.Routes.applicationGuildCommands(clientId, guildId), { body });
    logger.info({ count: body.length, guildId }, "Registered guild slash commands (instant)");
  } else {
    await rest.put(import_discord19.Routes.applicationCommands(clientId), { body });
    logger.info({ count: body.length }, "Registered global slash commands (can take up to 1 hour to propagate)");
  }
}
client.once("ready", async (readyClient) => {
  await readyClient.application?.fetch().catch(() => null);
  setBrandIconURL(readyClient.user.displayAvatarURL({ extension: "png", size: 128 }));
  logger.info({ tag: readyClient.user.tag, guilds: readyClient.guilds.cache.size }, "Titan Labs is online");
  readyClient.user.setPresence({ activities: [{ name: "Titan Labs", type: import_discord19.ActivityType.Watching }], status: "online" });
  try {
    await deploySlashCommands();
  } catch (err) {
    logger.error({ err }, "Failed to register slash commands on startup");
  }
});
client.on("interactionCreate", (interaction) => void handleInteraction(interaction));
registerServerLogEvents(client);
registerDmRelay(client);
client.on("error", (err) => logger.error({ err }, "client error"));
process.on("unhandledRejection", (err) => logger.error({ err }, "unhandled rejection"));
void client.login(token);
