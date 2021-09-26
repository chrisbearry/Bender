const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS"] });
const covid = require('novelcovid')
const prefix = '+'

client.on('ready', () => {
    console.log('Bender is online!');
    client.user.setStatus('online');
    client.user.setActivity('+help', {
        type: "STREAMING",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    })
});

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'twitter') {
        message.reply('https://twitter.com/Chrisbearry_ ');
    } else if (command == 'youtube') {
        message.reply('https://www.youtube.com/channel/UCEjkFrKf7W9MBQrStVa5z_A?view_as=subscriber');
    } else if (command == 'ban') {
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.reply('Hey... you cannot use this command.')
        }
        {
            const userBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
            let UBtarget = message.guild.members.cache.get(userBan.id)
            const reason = args.slice(1).join(" ");
            if (!reason) return message.reply(`Please type a reason.`);
            if (userBan) {
                var member = message.guild.member(userBan);
                if (member) {
                    member.ban({
                        reason: `${reason}`
                    })
                    let kEmbed = new Discord.MessageEmbed()
                        .setColor('#FF0000')
                        .setTitle(`${UBtarget.user.tag} was banned!`)
                        .setDescription(`**${UBtarget.user.tag} banned by **${message.author.tag}.\n**reason:** ${reason}`)
                    message.channel.send({ embed: kEmbed })
                }
            }
            let pvEmbed = new Discord.MessageEmbed()
                .setFooter(`Banned by ${message.author.tag}`)
                .setColor('#FF0000')
                .setTitle('***You were Banned***')
                .setDescription(`**reason: ${reason}**`)
            userBan.send({ embed: pvEmbed })

        }
    } else if (command == 'kick') {
        if (!message.member.hasPermission("KICK_MEMBERS")) {
            return message.reply('Hey... you cannot use this command.')
        } {
            const userKick = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
            let kickTarget = message.guild.members.cache.get(userKick.id)
            const reason = args.slice(1).join(" ");
            if (!reason) return message.reply(`Please type a reason.`);
            if (userKick) {
                var member = message.guild.member(userKick);

                if (member) {
                    member.kick({
                        reason: `${reason}`
                    });
                    let kEmbed = new Discord.MessageEmbed()
                        .setColor('#FF0000')
                        .setTitle(`${kickTarget.user.tag} was kicked!`)
                        .setDescription(`**${kickTarget.user.tag} kicked by **${message.author.username}.\n**reason:** ${reason}`)
                    message.channel.send({ embed: kEmbed })
                }
            }
            let pvEmbed = new Discord.MessageEmbed()
                .setFooter(`Kicked by ${message.author.tag}`)
                .setColor('#FF0000')
                .setTitle('***You were Kicked***')
                .setDescription(`**reason: ${reason}**`)
            userKick.send({ embed: pvEmbed })
        }
    } else if (command == 'twitch') {
        message.reply('https://twitch.tv/Chrisbearry1')
    } else if (message.content.toLowerCase == 'who') {
        message.channel.send('Cares')
    } else if (command == 'ping') {
        message.reply(`:satellite: getting Bender's ping :)`).then(message => {
            message.edit(`:satellite_orbital: the bots ping is ${Math.round(client.ws.ping)}ms`)
        })
    } else if (command == 'test') {
        message.reply('I am online and working fine :)')
    } else if (command == 'stickbug') {
        message.channel.send('https://tenor.com/view/rick-roll-stick-bug-stick-bugged-gif-18088057')
    } else if (command == 'gfys') {
        message.channel.send('https://tenor.com/view/gfy-go-fuck-yourself-gif-12366013')
    } else if (command == 'stfu') {
        message.channel.send('https://tenor.com/view/shut-the-fuck-up-dave-chappelle-shut-up-stfu-gif-5518509')
    } else if (command == 'noc') {
        message.channel.send('https://tenor.com/view/no-one-cares-i-dont-care-idc-nobody-cares-gif-8737514')
    } else if (command == 'no') {
        let number = Math.floor(Math.random() * 3);
        if (number == 0) {
            return message.channel.send('https://tenor.com/view/spiderman-magic-no-no-sabrina-tv-gif-14293457')
        }
        if (number == 1) {
            return message.channel.send('https://tenor.com/view/tonton-tonton-sticker-no-nope-gif-13636081')
        }
        if (number == 2) {
            return message.channel.send('https://tenor.com/view/nope-dont-like-that-no-gif-18487207')
        }
    } else if (command == 'gtfo') {
        message.channel.send('https://tenor.com/view/get-the-fuck-out-gtfo-gif-8331817')
    } else if (command == 'fucku') {
        message.channel.send('https://tenor.com/view/middle-finger-fuck-off-fuck-you-flip-off-screw-you-gif-12669379')
    } else if (command == 'fuck') {
        message.channel.send('https://tenor.com/view/fuck-fuckoff-fuckity-pissedoff-gif-9736688')
    } else if (command == 'idgaf') {
        let number = Math.floor(Math.random() * 2);
        if (number == 0) {
            return message.channel.send('https://tenor.com/view/hold-on-idgaf-spongebob-searching-gif-9197318')
        }
        if (number == 1) {
            return message.channel.send('https://tenor.com/view/idgaf-idc-tupac-frankly-my-dear-gif-15920224')
        }
    } else if (command == 'idk') {
        message.channel.send('https://tenor.com/view/i-dont-know-man-bubba-thompson-the-cowboy-way-idk-not-sure-gif-17822878')
    } else if (command == 'ily') {
        let number = Math.floor(Math.random() * 3);
        if (number == 0) {
            return message.channel.send('https://tenor.com/view/love-i-love-you-always-forever-gif-12687654')
        }
        if (number == 1) {
            return message.channel.send('https://tenor.com/view/ifucking-love-you-ilove-fucking-you-ilove-you-so-bad-gif-11211599')
        }
        if (number == 2) {
            return message.channel.send('https://tenor.com/view/sparkling-i-love-you-heart-all-is-love-gif-17824535')
        }
    } else if (command == 'clear') {
        if (message.deletable) {
            message.delete();
        }
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply('you do not have permisson to do that').then(m => m.delete(5000));
        }
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply('this is not a number').then(m => m.delete(5000));
        }
        let deleteAmount;
        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.reply(`I have deleted ${deleteAmount} messages`))
            .catch(err => message.reply(`something went wrong ... ${err}`))
    } else if (command == 'wc') {
        message.channel.send('https://tenor.com/view/family-guy-peter-griffin-omg-oh-my-god-who-the-hell-cares-gif-4959616')
    } else if (command == 'omegle') {
        message.reply('Chris does omegle streams sometimes lol')
    } else if (command == 'servers') {
        message.reply(`I'm serving ${client.guilds.cache.size} servers!`)
    } else if (command == 'bot-info') {
        const embed = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('bot info')
            .setColor('#000000')
            .addFields(
                {
                    name: 'Owner',
                    value: '<@735258386157010994>',
                    inline: true
                },
                {
                    name: '🌐 Servers',
                    value: `Serving ${client.guilds.cache.size} servers.`,
                    inline: true
                },
                {
                    name: '📺 Channels',
                    value: `Serving ${client.channels.cache.size} channels.`,
                    inline: true
                },
                {
                    name: '👥 Server Users',
                    value: `Serving ${client.users.cache.size}`,
                    inline: true
                },
                {
                    name: '⏳ Ping',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: 'Join Date',
                    value: client.user.createdAt,
                    inline: true
                },
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        message.channel.send(embed)
    } else if (command == 'unban') {
        if (message.member.hasPermission('BAN_MEMBERS')) {
            const userUnban = message.mentions.users.first();
            if (userUnban) {
                var member = message.guild.member(userUnban);
                userBan.send('you have been banned for breaking the rules!')
                if (member) {
                    member.unBan({

                        reason: 'you broke the rules.'
                    }).then(() => {
                        message.reply(`${userUnban.tag} was banned from the server`)
                    })
                }
            }
        }
    } else if (command == 'slowmode') {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`You don't have permisson to use that command!`)
        var time = message.content.split(' ').slice(1).join(' ')
        if (!time) return message.reply('Please state the time you want!')
        message.channel.setRateLimitPerUser(time)
        message.reply(`I have set the slowmode to ${time} seconds`)
        timeout: 2000
    } else if (command == 'ah-shit') {
        message.channel.send('https://tenor.com/view/ah-shit-here-we-go-again-ah-shit-cj-gta-gta-san-andreas-gif-13933485')
    } else if (command == 'serverinvite') {
        message.reply('https://discord.gg/HxHnabv here is the server invite if you want to invite anyone :)')
    } else if (command == 'damn-bro') {
        message.channel.send('https://tenor.com/view/disney-damn-thats-crazy-did-iask-no-one-asked-gif-17744004')
    } else if (command == 'bruh') {
        message.channel.send('https://tenor.com/view/facepalm-dismay-disappointed-stressed-gif-4367180')
    } else if (command == 'invite') {
        message.react('👍')
        message.reply('check your dms')
        const embed = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('invite')
            .setColor('#000000')
            .addFields(
                {
                    name: 'invite link',
                    value: `https://discord.com/api/oauth2/authorize?client_id=754455880849686608&permissions=8&scope=bot here is my invite link if you want to invite me to your server :)`,
                    inline: true
                },
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        message.author.send(embed)
    } else if (command == 'help') {
        message.react('👍')
        const embed = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('commands')
            .setColor('RANDOM')
            .addFields(
                {
                    name: 'prefix',
                    value: '+',
                    inline: true
                },
                {
                    name: '+fun',
                    value: 'Shows list of fun commands',
                },
                {
                    name: '+animals',
                    value: 'Shows list of animal pic commands',
                },
                {
                    name: '+gifs',
                    value: 'Shows list of gif commands',
                },
                {
                    name: '+moderation',
                    value: 'Shows list of moderation commands',
                },
                {
                    name: '+info',
                    value: 'Shows list of commands that give you info',
                },
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        message.channel.send(embed)
    } else if (command == 'socials') {
        message.react('👍')
        const embed = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('all of my owners socials')
            .setColor('#000000')
            .addFields(
                {
                    name: 'twitter',
                    value: `https://twitter.com/chrisboiclique`,
                },
                {
                    name: 'twitch',
                    value: `https://twitch.tv/chrisboiclique_`,
                },
                {
                    name: 'youtube',
                    value: `https://www.youtube.com/channel/UCEjkFrKf7W9MBQrStVa5z_A?view_as=subscriber`,
                },
                {
                    name: 'tiktok',
                    value: `https://www.tiktok.com/@morganbearry?lang=en`,
                },
                {
                    name: 'snapchat',
                    value: `chrisboiclique1`,
                },
                {
                    name: 'Discord',
                    value: '<@735258386157010994>',
                },
                {
                    name: 'discord server',
                    value: 'https://discord.gg/RPfSKPuaMz',
                },
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        message.channel.send(embed)
    } else if (command == 'support-server') {
        message.reply('https://discord.gg/MezfttD here is my support server and my official server')
    } else if (command == 'gifs') {
        message.react('👍')
        const embed = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('gif commands')
            .setColor('RANDOM')
            .addFields(
                {
                    name: 'stickbug',
                    value: `sends a stickbug gif`,
                },
                {
                    name: 'gfys',
                    value: `sends a gif that says go fuck yourself`,
                },
                {
                    name: 'stfu',
                    value: `sends a gif that says stfu`,
                },
                {
                    name: 'noc',
                    value: `sends a gif that says no one cares`,
                },
                {
                    name: 'no',
                    value: 'sends a random gif that says no',
                },
                {
                    name: 'gtfo',
                    value: 'sends a gif that says get the fuck out',
                },
                {
                    name: 'fucku',
                    value: 'sends a gif that says fuck you',
                },
                {
                    name: 'fuck',
                    value: 'sends a gif that says fuck',
                },
                {
                    name: 'idgaf',
                    value: 'sends a random gif that says I don\'t give a fuck',
                },
                {
                    name: 'idk',
                    value: 'sends a gif that says I don\'t know',
                },
                {
                    name: 'ily',
                    value: 'sends a random gif that says I love you',
                },
                {
                    name: 'wc',
                    value: 'sends a gif that says who cares'
                },
                {
                    name: 'damn-bro',
                    value: 'sends a gif that says damn bro thats crazy but did I ask ',
                },
                {
                    name: 'bruh',
                    value: 'sends a gif that says bruh',
                },
                {
                    name: 'who-asked',
                    value: 'sends a random gif that says who asked',
                },
                {
                    name: 'are-you-sure',
                    value: 'sends a gif that says are you sure about that',
                },
                {
                    name: 'damn',
                    value: 'sends a gif that says damn',
                },
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        message.channel.send(embed)
    } else if (command == 'who-asked') {
        let number = Math.floor(Math.random() * 2);
        if (number == 0) {
            return message.channel.send('https://tenor.com/view/bean-dance-crazy-aye-dats-fr-crazy-hoe-now-show-me-one-person-who-asked-gif-16195074')
        }
        if (number == 1) {
            return message.channel.send('https://tenor.com/view/me-looking-for-who-tf-asked-looking-around-kid-kazoo-kid-gif-17654948')
        }
    } else if (command == 'server-info') {
        let region;
        switch (message.guild.region) {
            case "europe":
                region = '🇪🇺 Europe';
                break;
            case "us-east":
                region = '🇺🇸 us-east'
                break;
            case "us-west":
                region = '🇺🇸 us-west';
                break;
            case "us-south":
                region = '🇺🇸 us-south'
                break;
            case "us-central":
                region = '🇺🇸 us-central'
                break;
        }

        const embed = new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setColor('#f3f3f3')
            .setTitle(`${message.guild.name} server stats`)
            .addFields(
                {
                    name: "Owner: ",
                    value: message.guild.owner.user.tag,
                    inline: true
                },
                {
                    name: "Members: ",
                    value: `There are ${message.guild.memberCount} users!`,
                    inline: true
                },
                {
                    name: "Members Online: ",
                    value: `There are ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} users online!`,
                    inline: true
                },
                {
                    name: "Total Bots: ",
                    value: `There are ${message.guild.members.cache.filter(m => m.user.bot).size} bots!`,
                    inline: true
                },
                {
                    name: "Creation Date: ",
                    value: message.guild.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: "Roles Count: ",
                    value: `There are ${message.guild.roles.cache.size} roles in this server.`,
                    inline: true,
                },
                {
                    name: `🗺 Region: `,
                    value: region,
                    inline: true
                },
                {
                    name: `Verified: `,
                    value: message.guild.verified ? 'Server is verified' : `Server isn't verified`,
                    inline: true
                },
                {
                    name: 'Boosters: ',
                    value: message.guild.premiumSubscriptionCount >= 1 ? `There are ${message.guild.premiumSubscriptionCount} Boosters` : `There are no boosters`,
                    inline: true
                },
                {
                    name: "Emojis: ",
                    value: message.guild.emojis.cache.size >= 1 ? `There are ${message.guild.emojis.cache.size} emojis!` : 'There are no emojis',
                    inline: true
                }
            )
        message.channel.send(embed)

    } else if (command == 'user-info') {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        switch (user.presence.status) {
            case "online":
                status = "<:online:729181184193462285> online";
                break;
            case "dnd":
                status = "<:dnd:729181212530442311> dnd";
                break;
            case "idle":
                status = "<:idle:729181121933475931> idle";
                break;
            case "offline":
                status = "<:offline:729181162182017051> offline";
                break;
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(`${user.user.username} stats`)
            .setColor(`#f3f3f3`)
            .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
            .addFields(
                {
                    name: "Name: ",
                    value: user.user.username,
                    inline: true
                },
                {
                    name: "#️⃣ Discriminator: ",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "🆔: ",
                    value: user.user.id,
                },
                {
                    name: "Current Status: ",
                    value: status,
                    inline: true
                },
                {
                    name: "Activity: ",
                    value: user.presence.activities[0] ? user.presence.activities[0].name : `User isn't playing a game!`,
                    inline: true
                },
                {
                    name: 'Avatar link: ',
                    value: `[Click Here](${user.user.displayAvatarURL()})`
                },
                {
                    name: 'Creation Date: ',
                    value: user.user.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: 'Joined Date: ',
                    value: user.joinedAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: 'User Roles: ',
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),
                    inline: true
                }
            )

        message.channel.send(embed)

    } else if (command == '8ball') {
        if (!args[2]) {
            return message.channel.send('Please ask a full questions.')
        }
        let number = Math.floor(Math.random() * 6);
        if (number == 0) {
            return message.channel.send('Yes, definitely so.')
        }
        if (number == 1) {
            return message.channel.send('No, definitely not.')
        }
        if (number == 2) {
            return message.channel.send('Ask again later.')
        }
        if (number == 3) {
            return message.channel.send('It is uncertain.')
        }
        if (number == 4) {
            return message.channel.send('Odds are not in your favor.')
        }
        if (number == 5) {
            return message.channel.send('Odds are in your favor.')
        }

    } else if (command == 'kill') {
        let user = message.mentions.users.first() || message.author
        if (!user) {
            return message.channel.send('Please include who you are killing.')
        }
        return message.channel.send(message.author.username + ' Killed ' + user.username)
    } else if (command == 'rate') {
        let user = message.mentions.users.first() || message.author
        let number = Math.floor(Math.random() * 101);
        message.channel.send(`I rate <@${user.id}> a ` + number + '/100')
     } else if (command == 'are-you-sure') {
        message.channel.send('https://tenor.com/view/are-you-sure-john-cena-ru-sure-about-dat-gif-14258954')
    } else if (command == 'damn') {
        message.channel.send('https://tenor.com/view/damn-shookt-shocked-gif-5580082')
    } else if (command == 'lock') {
        if (!message.member.hasPermission("MANAGE_MESSAGES"))
            return message.reply('You do not have permisson to use that!'); {
            const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
            if (args[0] === 'on') {
                channels.forEach(channel => {
                    channel.updateOverwrite(message.guild.roles.everyone, {
                        SEND_MESSAGES: false
                    }).then(() => {
                        channel.setName(channel.name += `🔒`)
                    })
                })
                return message.reply('I have locked all channels no raids and only admins can talk now!');
            } else if (args[0] === 'off') {
                channels.forEach(channel => {
                    channel.updateOverwrite(message.guild.roles.everyone, {
                        SEND_MESSAGES: true
                    }).then(() => {
                        channel.setName(channel.name.replace('🔒', ''))
                    }

                    )

                })
                return message.reply('unlocked all channels!')
            }
        }
    } else if (command == 'meme') {
        const got = require('got')
        got(`https://www.reddit.com/r/memes/random/.json`).then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;

            const memeEmbed = new Discord.MessageEmbed()
                .setTitle(`${memeTitle}`)
                .setURL(`${memeUrl}`)
                .setImage(memeImage, ({
                    dynamic: true
                }))
                .setColor("RANDOM")
                .setFooter(`👍${memeUpvotes} 👎${memeDownvotes} 💬${memeNumComments}`)
            message.channel.send(memeEmbed)
        })
    } else if (command == 'warn') {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply('Hey... you cannot use this command.')
        }
        const userWarn = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
        let warnTarget = message.guild.members.cache.get(userWarn.id)
        if (!userWarn) return message.channel.send("**Couldn't find that user**.")
        const reason = args.slice(1).join(" ");
        if (!reason) return message.reply(`Please type a reason.`);
        let kEmbed = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle(`${warnTarget.user.tag} was warned!`)
            .setDescription(`**${warnTarget.user.tag} Warned by **${message.author.username}.\n**reason:** ${reason}`)
        message.channel.send({ embed: kEmbed })
        let pvEmbed = new Discord.MessageEmbed()
            .setFooter(`Warned by ${message.author.tag}`)
            .setColor('#FF0000')
            .setTitle('***You were warned***')
            .setDescription(`**reason: ${reason}**`)
        userWarn.send({ embed: pvEmbed })
    } else if (command == 'dog') {
        const fetch = require('superagent')
        fetch.get("https://some-random-api.ml/img/dog").then(x => {
            const dogEmbed = new Discord.MessageEmbed()
                .setTitle('Heres a dog photo!')
                .setColor("RANDOM")
                .setImage(x.body.link);
            message.channel.send(dogEmbed)
        })
    } else if (command == 'cat') {
        const fetch = require('superagent')
        fetch.get("https://some-random-api.ml/img/cat").then(x => {
            const catEmbed = new Discord.MessageEmbed()
                .setTitle('Heres a cat photo!')
                .setColor("RANDOM")
                .setImage(x.body.link);
            message.channel.send(catEmbed)
        })
    } else if (command == 'fox') {
        const fetch = require('superagent')
        fetch.get("https://some-random-api.ml/img/fox").then(x => {
            const foxEmbed = new Discord.MessageEmbed()
                .setTitle('Heres a fox photo!')
                .setColor("RANDOM")
                .setImage(x.body.link);
            message.channel.send(foxEmbed)
        })
    } else if (command == 'koala') {
        const fetch = require('superagent')
        fetch.get("https://some-random-api.ml/img/koala").then(x => {
            const koalaEmbed = new Discord.MessageEmbed()
                .setTitle('Heres a koala photo!')
                .setColor("RANDOM")
                .setImage(x.body.link);
            message.channel.send(koalaEmbed)
        })
    } else if (command == 'panda') {
        const fetch = require('superagent')
        fetch.get("https://some-random-api.ml/img/panda").then(x => {
            const pandaEmbed = new Discord.MessageEmbed()
                .setTitle('Heres a panda photo!')
                .setColor("RANDOM")
                .setImage(x.body.link);
            message.channel.send(pandaEmbed)
        })
    } else if (command == 'bird') {
        const fetch = require('superagent')
        fetch.get("https://some-random-api.ml/img/birb").then(x => {
            const birdEmbed = new Discord.MessageEmbed()
                .setTitle('Heres a bird photo!')
                .setColor("RANDOM")
                .setImage(x.body.link);
            message.channel.send(birdEmbed)
        })
    } else if (command == 'animals') {
        message.react('👍')
        const embed = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('all animal picture commands')
            .setColor('RANDOM')
            .addFields(
                {
                    name: 'dog',
                    value: `sends a picture of a dog`,
                },
                {
                    name: 'cat',
                    value: `sends a picture of a cat`,
                },
                {
                    name: 'fox',
                    value: `sends a picture of a fox`,
                },
                {
                    name: 'koala',
                    value: `sends a picture of a koala`,
                },
                {
                    name: 'panda',
                    value: `sends a picture of a panda`,
                },
                {
                    name: 'bird',
                    value: `sends a picture of a bird`,
                },
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        message.channel.send(embed)
    } else if (command == 'covid') {
        const covid = require('novelcovid')
        const covidStats = await covid.all();
        const cvembed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle('Covid19 stats')
            .addFields(
                {
                    name: 'Cases',
                    value: covidStats.cases,
                    inline: true
                },
                {
                    name: 'Cases Today',
                    value: covidStats.todayCases,
                    inline: true
                },
                {
                    name: 'Deaths',
                    value: covidStats.deaths,
                    inline: true
                },
                {
                    name: 'Deaths Today',
                    value: covidStats.todayDeaths,
                    inline: true
                },
                {
                    name: 'Recovered',
                    value: covidStats.recovered,
                    inline: true
                },
                {
                    name: 'Recovered Today',
                    value: covidStats.todayRecovered,
                    inline: true
                },
                {
                    name: 'Infected Right Now',
                    value: covidStats.active,
                    inline: true
                },
                {
                    name: 'Critical Condition',
                    value: covidStats.critical,
                    inline: true
                },
                {
                    name: 'Tested',
                    value: covidStats.tests,
                    inline: true
                },

            )
        message.channel.send(cvembed)
    } else if (command == 'weather') {
        const weather = require("weather-js");
        if (args[0] === 'f') {
            let city = args.join(" ");
            let degreetype = "F"; // You can change it to F. (fahrenheit.)
    
            await weather.find({ search: city, degreeType: degreetype }, function (err, result) {
                if (!city) return message.channel.send("Please insert the city.");
                if (err || result === undefined || result.length === 0) return message.channel.send("Unknown city. Please try again.");
    
                let current = result[0].current;
                let location = result[0].location;
    
                const embed = new Discord.MessageEmbed()
                    .setAuthor(current.observationpoint)
                    .setDescription(`> ${current.skytext}`)
                    .setThumbnail(current.imageUrl)
                    .setTimestamp()
                    .setColor("RANDOM")
    
                embed.addField("Latitude", location.lat, true)
                    .addField("Longitude", location.long, true)
                    .addField("Feels Like", `${current.feelslike}° Degrees`, true)
                    .addField("Degree Type", `Fahrenheit`, true)
                    .addField("Winds", current.winddisplay, true)
                    .addField("Humidity", `${current.humidity}%`, true)
                    .addField("Timezone", `GMT ${location.timezone}`, true)
                    .addField("Temperature", `${current.temperature}° Degrees`, true)
                    .addField("Observation Time", current.observationtime, true)
    
                return message.channel.send(embed);
            })
        } else if (args[0] === 'c') {
            let city = args.join(" ");
            let degreetype = "C"; // You can change it to F. (fahrenheit.)

            await weather.find({ search: city, degreeType: degreetype }, function (err, result) {
                if (!city) return message.channel.send("Please insert the city.");
                if (err || result === undefined || result.length === 0) return message.channel.send("Unknown city. Please try again.");
    
                let current = result[0].current;
                let location = result[0].location;
    
                const embed = new Discord.MessageEmbed()
                    .setAuthor(current.observationpoint)
                    .setDescription(`> ${current.skytext}`)
                    .setThumbnail(current.imageUrl)
                    .setTimestamp()
                    .setColor("RANDOM")
    
                embed.addField("Latitude", location.lat, true)
                    .addField("Longitude", location.long, true)
                    .addField("Feels Like", `${current.feelslike}° Degrees`, true)
                    .addField("Degree Type", `Celsius`, true)
                    .addField("Winds", current.winddisplay, true)
                    .addField("Humidity", `${current.humidity}%`, true)
                    .addField("Timezone", `GMT ${location.timezone}`, true)
                    .addField("Temperature", `${current.temperature}° Degrees`, true)
                    .addField("Observation Time", current.observationtime, true)
    
                return message.channel.send(embed);
            })
        }
    } else if(command == 'nick'){
        if (!message.member.hasPermission("MANAGE_NICKNAMES")){
            return message.reply('You do not have permission to use this command!')
        } 
        const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const nickname = args.slice(1).join(" ");
        
        if (!args[0]){
          return message.reply('You must state a member to change a nickname')
        } 
        if (!mentionedMember){
           return message.reply('that user is not in this server!')
        }
        if(!nickname){
            return message.reply('You must state a nickname for the member!')
        } else 
        await mentionedMember.setNickname(nickname)
        message.reply(`Their nickname has been set to **${nickname}**`)
    } else if (command == 'swagmeter') {
        let user = message.mentions.users.first() || message.author
        let number = Math.floor(Math.random() * 11);
        if (number == 0) {
            return message.channel.send(`Swag rank for <@${user.id}> is 0 :joy:\n\n:red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square:`)
        }
        if (number == 1) {
            return message.channel.send(`Swag rank for <@${user.id}> is 1\n\n:green_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square:`)
        }
        if (number == 2) {
            return message.channel.send(`Swag rank for <@${user.id}> is 2\n\n:green_square::green_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square:`)
        }
        if (number == 3) {
            return message.channel.send(`Swag rank for <@${user.id}> is 3\n\n:green_square::green_square::green_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square:`)
        }
        if (number == 4) {
            return message.channel.send(`Swag rank for <@${user.id}> is 4\n\n:green_square::green_square::green_square::green_square::red_square::red_square::red_square::red_square::red_square::red_square:`)
        }
        if (number == 5) {
            return message.channel.send(`Swag rank for <@${user.id}> is 5\n\n:green_square::green_square::green_square::green_square::green_square::red_square::red_square::red_square::red_square::red_square:`)
        }
        if (number == 6) {
            return message.channel.send(`Swag rank for <@${user.id}> is 6\n\n:green_square::green_square::green_square::green_square::green_square::green_square::red_square::red_square::red_square::red_square:`)
        }
        if (number == 7) {
            return message.channel.send(`Swag rank for <@${user.id}> is 7\n\n:green_square::green_square::green_square::green_square::green_square::green_square::green_square::red_square::red_square::red_square:`)
        }
        if (number == 8) {
            return message.channel.send(`Swag rank for <@${user.id}> is 8\n\n:green_square::green_square::green_square::green_square::green_square::green_square::green_square::green_square::red_square::red_square:`)
        }
        if (number == 9) {
            return message.channel.send(`Swag rank for <@${user.id}> is 9\n\n:green_square::green_square::green_square::green_square::green_square::green_square::green_square::green_square::green_square::red_square:`)
        }
        if (number == 10) {
            return message.channel.send(`Swag rank for <@${user.id}> is 10\n\n:green_square::green_square::green_square::green_square::green_square::green_square::green_square::green_square::green_square::green_square:`)
        }
    } else if(command == 'uptime'){
        message.channel.send(`I have been online for ${process.uptime().toFixed(2)}s`)
    } else if(command == 'anna'){
        message.channel.send(`Her personality is perfect and her voiceee her voice is literally so cute. She's a 10/10 tbh <33`)
    } else if(command == 'corey'){
      message.channel.send('god damn his voice is hot and he cute asf')
    } else if(command == 'favsongs'){
      message.channel.send('https://www.youtube.com/watch?v=0VaeyqMK0GU').then(() => {
      message.channel.send('https://www.youtube.com/watch?v=gOMhN-hfMtY')
      }).then(() => {
      message.channel.send('https://www.youtube.com/watch?v=NGFSNE18Ywc')
      }).then(() => {
      message.channel.send(`These are my owner and maintainers aka <@735258386157010994>'s 3 fav songs right now :)`)
      })
    } else if(command == 'annafavsongs'){
      message.channel.send('https://www.youtube.com/watch?v=NGFSNE18Ywc').then(() => {
      message.channel.send('https://www.youtube.com/watch?v=A63VwWz1ij0')
      }).then(() => {
      message.channel.send('https://www.youtube.com/watch?v=KdJHBYb8S4Y')
      }).then(() => {
      message.channel.send(`These are my Anna's fav songs right now :)`)
      })
    } else if(command == 'moderation'){
        const embed = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Moderation commands')
            .setColor('RANDOM')
            .addFields(
                {
                    name: '+ban',
                    value: `Bans a user. Usage "+ban @user reason"`,
                },
                {
                    name: '+kick',
                    value: `Kicks a user. Usage "+kick @user reason"`,
                },
                {
                    name: '+warn',
                    value: `Warns a user. Usage "+warn @user reason"`,
                },
                {
                    name: '+slowmode',
                    value: `Sets a slowmode for a channel. Usage "+slowmode (seconds)"`,
                },
                {
                    name: '+clear',
                    value: `Deletes multiple messages. Usage "+clear (number of messages)"`,
                },
                {
                    name: '+nick',
                    value: `Sets a nickname for a user. Usage "+nick @user (nickname)"`,
                },
                {
                    name: '+lock on',
                    value: `Locks all channels.`,
                },
                {
                    name: '+lock off',
                    value: `Unlocks all channels.`,
                },
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        message.channel.send(embed)
    } else if(command == 'fun'){
        const embed = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Fun commands')
            .setColor('RANDOM')
            .addFields(
                {
                    name: '+8ball',
                    value: `Sends answers a regular 8ball would give. Usage "+8ball (question)"`,
                },
                {
                    name: '+kill',
                    value: `Kills someone. Usage "+kill @user"`,
                },
                {
                    name: '+rate',
                    value: `Rates a you or another user. Usage "+rate" if you're rating yourself, "+rate @user" if rating someone else"`,
                },
                {
                    name: '+meme',
                    value: `Sends a meme.`,
                },
                {
                    name: '+swagmeter',
                    value: `Gives you or another user a swag rank. Usage "+swagmeter" if you want a ranking for yourself, "+swagmeter @user" for another user.`,
                },
                {
                    name: '+favsongs',
                    value: `Sends my owner/maintainers fav songs.`,
                },
                {
                    name: '+annafavsongs',
                    value: `Sends Anna's fav songs (One of my owner/maintainers close friends)`,
                },
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        message.channel.send(embed)
    } else if(command == 'info'){
        const embed = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Info commands')
            .setColor('RANDOM')
            .addFields(
                {
                    name: '+bot-info',
                    value: `Gives you info about Bender.`,
                },
                {
                    name: '+server-info',
                    value: `Gives you info about a server.`,
                },
                {
                    name: '+user-info',
                    value: `Gives you info about a user. Usage "+user-info @user"`,
                },
                {
                    name: '+covid',
                    value: `Gives you worldwide info about covid.`,
                },
                {
                    name: '+invite',
                    value: `Sends Benders invite if you want to add it to your server. :)`,
                },
                {
                    name: '+socials',
                    value: `Sends the socials of my owner/maintainer.`,
                },
                {
                    name: 'weather',
                    value: `Gives you info about the weather. Usage for fahrenheit "+weather f (City/State/Region)" Usage for celsius "+weather c (City/State/Region)"`,
                },
                {
                    name: '+uptime',
                    value: `Gives you the uptime of Bender.`,
                },
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        message.channel.send(embed)
    }
});

client.login('TOKEN');
