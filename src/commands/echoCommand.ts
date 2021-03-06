import Command from "./commandInterface";
import { Message } from "discord.js";

export class EchoCommand implements Command {
  commandNames = ["echo", "print"];

  help(commandPrefix: string): string {
    return `Use ${commandPrefix}echo to get same message.`;
  }

  async run(message: Message): Promise<void> {
    await message.reply(message.content);

    if (message.content.indexOf('hage') !== -1) {
      await message.reply("DON'T SAY THAT AGAIN");
    }
  }
}
