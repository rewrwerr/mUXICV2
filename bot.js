client.on('voiceStateUpdate', (u, member) => {
  var parent = '479601885029072896';
  var channel = '479602069620260894';
  if(member.voiceChannel === null || member.voiceChannel !== member.guild.channels.get(channel)) return console.log(`${member.user.username}'s channel isnt the needed one.`);
  member.guild.createChannel(`${member.user.username}`, 'voice').then(c => {
    if(!c) return;
    c.setParent(parent);
    member.setVoiceChannel(c);
    setInterval(() => {
      if(!c) return;
      if(c.members.size === 0) {
        c.delete();
      }
    }, 30000);
  });
});

















client.login(process.env.BOT_TOKEN);
