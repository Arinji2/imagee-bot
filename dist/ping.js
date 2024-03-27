var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { REST, Routes } from "discord.js";
import dotenv from "dotenv";
dotenv.config();
const commands = [
    {
        name: "ping",
        description: "Replies with Pong!",
    },
];
const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);
export default function ping() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("Started refreshing application (/) commands.");
            yield rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
                body: commands,
            });
            console.log("Successfully reloaded application (/) commands.");
        }
        catch (error) {
            console.error(error);
        }
    });
}
