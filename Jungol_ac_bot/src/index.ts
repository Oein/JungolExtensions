import { Client, Intents } from "discord.js";
import { REST } from "@discordjs/rest";
import { SlashCommandBuilder } from "@discordjs/builders";
import { Routes } from "discord-api-types/v9";

const configFile = require("./config.json");
const token = configFile["TOKEN"];

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
  ],
});

client.once("ready", (bot) => {
  console.log(`${bot.user.username} is online!`);

  const rest = new REST({ version: "9" }).setToken(token);
  const commandBuild = new SlashCommandBuilder();
  commandBuild.setName("vote");
  commandBuild.setDescription("어떤 문제의 랭크를 투표하는 명령어");
  commandBuild.addStringOption((opt) => {
    opt.setName("question");
    opt.setDescription("투표할 문제");
    opt.setRequired(true);
    opt.addChoices([{}])
    return opt;
  });
});

const botChannalId = "988450032141344820";
client.on("interactionCreate", (interaction) => {
  if (!interaction.isCommand()) return;
  const channalId = interaction.channelId;
  if (channalId != botChannalId) return;
});

client.login(token);
