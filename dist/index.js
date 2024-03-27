var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ActivityType, Client, DMChannel, GatewayIntentBits, Partials, } from "discord.js";
import dotenv from "dotenv";
dotenv.config();
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Channel, Partials.Message],
    presence: {
        status: "online",
        activities: [
            {
                name: "DM me a Custom Emoji to get started!",
                type: ActivityType.Playing,
                url: "https://imagee.arinji.com",
            },
        ],
    },
});
client.on("ready", () => {
    console.log(`Discord Bot is Online`);
});
client.on("messageCreate", (message) => __awaiter(void 0, void 0, void 0, function* () {
    if (message.author.bot)
        return;
    if (message.channel instanceof DMChannel) {
        if (message.content.indexOf(":") === -1) {
            yield message.channel.send(`Hiya, use this link to continue with your Imagee Setup:  https://cdn.discordapp.com/emojis/${message.content}.webp. Don't know what's going on? Check out our FAQ: https://imagee.arinji.com/faq?emoji `);
            return;
        }
        const emojiIdRegex = /<:[a-zA-Z0-9_]+:(\d+)>/;
        const match = message.content.match(emojiIdRegex);
        if (match) {
            const emojiId = match[1];
            yield message.channel.send(`Hiya, use this link to continue with your Imagee Setup:  https://cdn.discordapp.com/emojis/${emojiId}.webp. Don't know what's going on? Check out our FAQ: https://imagee.arinji.com/faq?emoji `);
        }
        else {
            yield message.channel.send(`It seems as if you didn't send me a Custom Emoji, have questions? Check out our FAQ: https://imagee.arinji.com/faq?emoji`);
        }
    }
}));
client.login(process.env.TOKEN);
