import path from "path";
import { config } from "dotenv";
const { SERVER } = config().parsed;
import { MessageEmbed } from "discord.js";

import maplookup from "./mapcommand.js";
import players from "./playerscommand.js";

const join = {
  descr: "explain how to join this epic server",
  respond: async () => {
    return {
      embed: [
        new MessageEmbed()
          .setColor("#ffcece")
          .setTitle("Joining this server")
          .setURL(`http://${SERVER}`)
          .addField(
            "Option one:",
            `type \`${SERVER}\` into the **join a game** field`
          )
          .addField(
            "Option two:",
            `create a \`kartexec.cfg\` file in your srb2kart folder and add the following line:
> alias joinserver "connect ${SERVER}"
and join the server by opening the console with using the \\\` key and enter \`joinserver\`
`
          )
          .addField(
            "Option three:",
            `Copy paste the following url into your browser (when supported on your device) \`srb2kart://ip/${SERVER}\``
          ),
      ],
    };
  },
};

export default {
  players,
  join,
  maplookup,
};
