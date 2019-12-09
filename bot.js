const myid = "331044493140688896";
const id2 = "464310531621388308";
const id4a = ["331044493140688896", "464310531621388308"];
const Discord = require("discord.js");
const Sniper = new Discord.Client();
const Sniper1 = new Discord.Client();
const cmd = require("node-cmd");
const a7a = "-";
const ms = "10000";
const bn = "spam1";
const bn1 = "spam2";

Sniper.on("message", async message => {
  if (!myid.includes(message.author.id)) return;
  if (message.content === a7a + "stop") {
    await cmd.run("refresh");
    await message.channel.send("Stoped,hahah!!");
  }
});

Sniper.on("message", async message => {
  if (message.author.bot) return;
  if (message.content.startsWith("-t" + bn)) {
    if (!id2.includes(message.author.id))
      if (!myid.includes(message.author.id))
        return message.channel.send("You are not a dev fuck off *!* ");
    var args = message.content
      .trim()
      .split(/ +/g)
      .slice(1);
    let cname = args[0];
    let chan = message.guild.channels.find(element => element.name === cname);
    if (chan) {
      let text = args.slice(1).join("  ");
      message.delete();
      chan.send(text);
    } else {
      let text = args.join(" ");
      message.delete();
      message.channel.send(text);
    }
  }
});

Sniper.on("message", async message => {
  const filter = m => m.author.id === message.author.id;
  if (message.content.startsWith(a7a + "d")) {
    message.channel.send("#daily");
  }
});

Sniper.on("message", async message => {
  const filter = m => m.author.id === message.author.id;
  if (message.content.startsWith(a7a + "p")) {
    message.channel.send("#profile");
  }
});

Sniper.on("message", message => {
  if (message.content.startsWith(a7a + "c")) {
    message.channel.send("#credits");
  }
});

Sniper.on("message", message => {
  if (message.content.startsWith(a7a + "rep")) {
    message.channel.send("#rep " + "<@" + myid + ">");
  }
});

Sniper.on("message", async message => {
  setTimeout(() => {
    cmd.run("refresh");
  }, 64800000);
});

Sniper.on("message", async message => {
  if (message.author.bot) return;
  if (message.content.startsWith("spam")) {
    let Sniper = [
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر  ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 1 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 2 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 3 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 4 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 5 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 6 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 7 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 8 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 9 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 11 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 12 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 13 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 14 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 15 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 16 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 17 "
    ];
    setInterval(() => {
      message.channel.sendMessage(
        `${Sniper[Math.floor(Math.random() * Sniper.length)]}`
      );
    }, ms);
  }
});

//-------------------------

Sniper1.on("message", async message => {
  if (!myid.includes(message.author.id)) return;
  if (message.content === a7a + "stop") {
    await cmd.run("refresh");
    await message.channel.send("Stoped,hahah!!");
  }
});

Sniper1.on("message", async message => {
  if (message.author.bot) return;
  if (message.content.startsWith("-t" + bn1)) {
    if (!id2.includes(message.author.id))
    if (!myid.includes(message.author.id))
      return message.channel.send("You are not a dev fuck off *!* ");
    var args = message.content
      .trim()
      .split(/ +/g)
      .slice(1);
    let cname = args[0];
    let chan = message.guild.channels.find(element => element.name === cname);
    if (chan) {
      let text = args.slice(1).join("  ");
      message.delete();
      chan.send(text);
    } else {
      let text = args.join(" ");
      message.delete();
      message.channel.send(text);
    }
  }
});

Sniper1.on("message", async message => {
  const filter = m => m.author.id === message.author.id;
  if (message.content.startsWith(a7a + "d")) {
    message.channel.send("#daily");
  }
});

Sniper1.on("message", async message => {
  const filter = m => m.author.id === message.author.id;
  if (message.content.startsWith(a7a + "p")) {
    message.channel.send("#profile");
  }
});

Sniper1.on("message", message => {
  if (message.content.startsWith(a7a + "c")) {
    message.channel.send("#credits");
  }
});

Sniper1.on("message", message => {
  if (message.content.startsWith(a7a + "rep")) {
    message.channel.send("#rep " + "<@" + myid + ">");
  }
});

Sniper1.on("message", async message => {
  if (message.author.bot) return;
  if (message.content.startsWith("spam")) {
    let Sniper = [
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر  ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 1 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 2 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 3 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 4 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 5 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 6 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 7 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 8 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 9 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 11 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 12 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 13 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 14 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 15 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 16 ",
      " Sniper is gamed  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر 17 "
    ];
    setInterval(() => {
      message.channel.sendMessage(
        `${Sniper[Math.floor(Math.random() * Sniper.length)]}`
      );
    }, ms);
  }
});

Sniper.on("message", message => {
  if (message.content === "-help") {
    if (!id4a.includes(message.author.id)) return;
    const embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setThumbnail(message.author.avatarURL).setDescription(`**Help|هيلب
 
    spam       | علشان تسبم

    ${a7a}p     |  يوريك بروفايل البوت

    ${a7a}c    | بيبين لك الكرديت على عند الحساب
	   
	  ${a7a}d  | يعمل #daily
	   
	  ${a7a}rep  | يعطيك ريب 

       ** `);
    message.author.sendEmbed(embed);
  }
});

Sniper1.on("message", message => {
  if (message.content === "-help") {
    if (!id4a.includes(message.author.id)) return;
    const embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setThumbnail(message.author.avatarURL).setDescription(`**Help|هيلب
 
    spam       | علشان تسبم

    ${a7a}p     |  يوريك بروفايل البوت

    ${a7a}c    | بيبين لك الكرديت على عند الحساب
	   
	  ${a7a}d  | يعمل #daily
	   
	  ${a7a}rep  | يعطيك ريب 

       ** `);
    message.author.sendEmbed(embed);
  }
});

Sniper1.login("NjUzNjkzNTI5NzAwMzAyODY4.Xe6wTA.hcccKFMWeGo2shS63Ll03wC0VqA"); //1
Sniper.login("NjUzNjk3MzQ5MjMwNjU3NTU2.Xe6xaA.giMAhNDwDsQVzUYU3zzfFV4E-ao"); //1
