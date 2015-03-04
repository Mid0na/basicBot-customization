(function () {

    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

        /*
         Extend the bot here, either by calling another function or here directly.
         Model code for a bot command:

         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }

         */

        bot.commands.baconCommand = {
            command: 'lgdbot',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Heroes do their best, Legends reach the top !");
                }
            }
        };

        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "LGD_Bot",
        language: "french",
        chatLink: "https://rawgit.com/Mid0na/LGDbot/master/lang/fr.json",
        startupCap: 200, // 1-200
        startupVolume: 15, // 0-100
        startupEmoji: true, // true or false
        maximumAfk: 120,
        afkRemoval: false,
        maximumDc: 60,
        bouncerPlus: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        voteSkip: true,
        voteSkipLimit: 10,
        timeGuard: true,
        maximumSongLength: 8,
        autodisable: true,
        commandCooldown: 2,
        usercommandsEnabled: true,
        lockskipPosition: 3,
        lockskipReasons: [
            ["theme", "Cette chanson ne correspond pas au theme de la salle. "],
            ["op", "Cette chanson est dans la liste des chansons trop jouees. "],
            ["history", "Cette chanson est deja passee. "],
            ["mix", "Les mix ne sont pas autorises. "],
            ["sound", "Cette chanson a un son de mauvaise qualite / pas de son. "],
            ["nsfw", "La chanson proposee a un contenu NSFW (image ou son). "],
            ["unavailable", "La chanson proposee est indisponible pour les utilisateurs. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: false,
        motdInterval: 5,
        motd: "Temporary Message of the Day",
        filterChat: true,
        etaRestriction: false,
        welcome: true,
        opLink: null,
        rulesLink: null,
        themeLink: null,
        fbLink: "https://www.facebook.com/legends.esport.eu",
        youtubeLink: "https://www.youtube.com/channel/UC5xy4phdRJ2tCsaXSfazZ_w",
        website: "http://legends-esport.eu",
        intervalMessages: [],
        messageInterval: 5,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/Yemasthui/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/Yemasthui/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript('https://rawgit.com/Mid0na/LGDBot/master/basicBot.js', extend);

}).call(this);
