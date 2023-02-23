const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Playlist para programar!"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/664nWWQqdH5QHstL4kNdqx?si=9c6a195c706e4067")
    }

}
