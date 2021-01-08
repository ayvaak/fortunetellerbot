const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

const prefix = "!";

client.on("message", function(message) {
    //does not respond to bots
    if (message.author.bot) return; 
    //does not respond to commands not preceded with '#'
    if (!message.content.startsWith(prefix)) return; //not a command

    //set up formatting
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    //listen for commands
    if (command === "fortunetellerhelp") {
        
        //gives information on how to use bot
        message.reply('You wish to have your fortune told?' +
            '\n\nPick a number: :one: :two: :three: :four: (one, two, three, four)' +
            '\n\nPick a color: :red_square: :blue_square: :yellow_square: :green_square: (red, blue, yellow, green)' +
            '\n\nAnd pick a shape: :large_orange_diamond: :orange_heart: :orange_circle: :orange_square: (diamond, heart, circle, square)' +
            '\n\nOnce you have made your final decisions, notify me with the command !fortune, in the format !fortune one red diamond, and I will determine what the future holds for your ephemeral little life.');
    
    } else if (command === "fortune") {
        
        //generates fortune based on nested switch cases
        switch(args[0]) {
            case 'one':
                switch(args[1]) {
                case 'red':
                    switch(args[2]) {
                    case 'diamond':
                        message.reply('I see... I see.')
                        message.reply('Tonight, you should check your shoes for inhabitants. ')
                    break;
                    case 'heart':
                        message.reply('I see... I see.')
                        message.reply('Tomorrow, you will sleep weird on your neck and be weird the whole day. ')
                    break;
                    case 'circle':
                        message.reply('I see... I see.')
                        message.reply('Beware of the one who drinks water far too loudly. ')
                    break;
                    case 'square':
                        message.reply('I see... I see.')
                        message.reply('I see you eating mayonnaise straight out the jar. ')
                    break;
                    }
                break;
                case 'blue':
                    switch(args[2]) {
                    case 'diamond':
                        message.reply('I see... I see.')
                        message.reply('One year from now, you’ll rage, rage against the dying of the light. ')
                    break;
                    case 'heart':
                        message.reply('I see... I see.')
                        message.reply('I see you sitting alone in your room for the next three months. ')
                    break;
                    case 'circle':
                        message.reply('I see... I see.')
                        message.reply('Tonight, you’ll dream of pasta. ')
                    break;
                    case 'square':
                        message.reply('I see... I see.')
                        message.reply('Tomorrow, you will be blessed by a small cat. ')
                    break;
                    }
                break;
                case 'yellow':
                    switch(args[2]) {
                    case 'diamond':
                        message.reply('I see... I see.')
                        message.reply('I see you holding a dog. A dog that loves you. ')
                    break;
                    case 'heart':
                        message.reply('I see... I see.')
                        message.reply('I see you slicing the inside of your mouth with an unfortunate tortilla chip. ')
                    break;
                    case 'circle':
                        message.reply('I see... I see.')
                        message.reply('Tonight, you’ll dream an entire oscar-winning movie and forget it completely. ')
                    break;
                    case 'square':
                        message.reply('I see... I see.')
                        message.reply('Beware of the one who serenades you. ')
                    break;
                    }
                break;
                case 'green':
                    switch(args[2]) {
                    case 'diamond':
                        message.reply('I see... I see.')
                        message.reply('One year from now, you’ll have one less kidney. ')
                    break;
                    case 'heart':
                        message.reply('I see... I see.')
                        message.reply('I see you reading a book. That… that can’t be right. ')
                    break;
                    case 'circle':
                        message.reply('I see... I see.')
                        message.reply('Tomorrow, you will meet someone briefly and lose them forever. ')
                    break;
                    case 'square':
                        message.reply('I see... I see.')
                        message.reply('Seek out the one who never learned how to read. ')
                    break;
                    }
                break;
                }
            break;
            case 'two':
                switch(args[1]) {
                case 'red':
                    switch(args[2]) {
                    case 'diamond':
                        message.reply('I see... I see.')
                        message.reply('Tonight, your hair will look fantastic but no one will be around to see it. ')
                    break;
                    case 'heart':
                        message.reply('I see... I see.')
                        message.reply('Beware of the one who complains about being corporeal. ')
                    break;
                    case 'circle':
                        message.reply('I see... I see.')
                        message.reply('Tonight, it’s in your best interest to keep your shirt on. ')
                    break;
                    case 'square':
                        message.reply('I see... I see.')
                        message.reply('I see you just barely catching the bus by a painfully narrow margin. ')
                    break;
                    }
                break;
                case 'blue':
                    switch(args[2]) {
                    case 'diamond':
                        message.reply('I see... I see.')
                        message.reply('Beware of the one who listens exclusively to sea shanties. ')
                    break;
                    case 'heart':
                        message.reply('I see... I see.')
                        message.reply('Seek out the one who never calls you by your name. ')
                    break;
                    case 'circle':
                        message.reply('I see... I see.')
                        message.reply('Beware of the one who finds a counterpoint to your argument three days later. ')
                    break;
                    case 'square':
                        message.reply('I see... I see.')
                        message.reply('Tomorrow, you will feel an emotion that you won’t be able to name. ')
                    break;
                    }
                break;
                case 'yellow':
                    switch(args[2]) {
                    case 'diamond':
                        message.reply('I see... I see.')
                        message.reply('Seek out the one who is at soup. ')
                    break;
                    case 'heart':
                        message.reply('I see... I see.')
                        message.reply('One year from now, you’ll be exactly where you are today. ')
                    break;
                    case 'circle':
                        message.reply('I see... I see.')
                        message.reply('One year from now, you’ll have made a powerful enemy. ')
                    break;
                    case 'square':
                        message.reply('I see... I see.')
                        message.reply('I see you making online purchases that you will later regret. ')
                    break;
                    }
                break;
                case 'green':
                    switch(args[2]) {
                    case 'diamond':
                        message.reply('I see... I see.')
                        message.reply('One year from now, you’ll be horrified by what you look like right now. ')
                    break;
                    case 'heart':
                        message.reply('I see... I see.')
                        message.reply('I see you setting a world record for oreos stuffed in mouth at once. ')
                    break;
                    case 'circle':
                        message.reply('I see... I see.')
                        message.reply('One year from now, things will begin to make sense. ')
                    break;
                    case 'square':
                        message.reply('I see... I see.')
                        message.reply('Tonight, you’ll be an npc extra in someone else’s dream. ')
                    break;
                    }
                break;
                }
            break;
            case 'three':
                switch(args[1]) {
                case 'red':
                    switch(args[2]) {
                    case 'diamond':
                        message.reply('I see... I see.')
                        message.reply('I see you blissfully sleeping through a deadline. ')
                    break;
                    case 'heart':
                        message.reply('I see... I see.')
                        message.reply('Seek out the one who grooves. ')
                    break;
                    case 'circle':
                        message.reply('I see... I see.')
                        message.reply('One year from now, you’ll see their face every time you close your eyes. ')
                    break;
                    case 'square':
                        message.reply('I see... I see.')
                        message.reply('Tomorrow, you will be kissed by a ghost. You won’t feel it. ')
                    break;
                    }
                break;
                case 'blue':
                    switch(args[2]) {
                    case 'diamond':
                        message.reply('I see... I see.')
                        message.reply('Tonight, if you see someone with too many eyes, don’t comment on it. ')
                    break;
                    case 'heart':
                        message.reply('I see... I see.')
                        message.reply('Beware of the one who believes in giraffes. ')
                    break;
                    case 'circle':
                        message.reply('I see... I see.')
                        message.reply('Beware of the one who puts ranch on their pizza. ')
                    break;
                    case 'square':
                        message.reply('I see... I see.')
                        message.reply('Beware of the one who withholds you from your prophecy. ')
                    break;
                    }
                break;
                case 'yellow':
                    switch(args[2]) {
                    case 'diamond':
                        message.reply('I see... I see.')
                        message.reply('Seek out the one who screams in G Major. ')
                    break;
                    case 'heart':
                        message.reply('I see... I see.')
                        message.reply('Seek out the one who breathes with incredible ferocity. ')
                    break;
                    case 'circle':
                        message.reply('I see... I see.')
                        message.reply('I see you developing a habit that could be your undoing. ')
                    break;
                    case 'square':
                        message.reply('I see... I see.')
                        message.reply('One year from now, you’ll go a little bald. Just a little. ')
                    break;
                    }
                break;
                case 'green':
                    switch(args[2]) {
                    case 'diamond':
                        message.reply('I see... I see.')
                        message.reply('Tonight, you will make a grilled cheese. You deserve it. ')
                    break;
                    case 'heart':
                        message.reply('I see... I see.')
                        message.reply('I see you flubbing a handshake and sort of recovering with a high five. ')
                    break;
                    case 'circle':
                        message.reply('I see... I see.')
                        message.reply('I see you twenty tabs deep inside a youtube rabbit hole. ')
                    break;
                    case 'square':
                        message.reply('I see... I see.')
                        message.reply('Tomorrow, you will remember a video from years ago, and you’ll find it deleted. ')
                    break;
                    }
                break;
                }
            break;
            case 'four':
                switch(args[1]) {
                case 'red':
                    switch(args[2]) {
                    case 'diamond':
                        message.reply('I see... I see.')
                        message.reply('Tomorrow, you will see what you weren’t supposed to see. ')
                    break;
                    case 'heart':
                        message.reply('I see... I see.')
                        message.reply('Tomorrow, you will cry internally for about an hour. ')
                    break;
                    case 'circle':
                        message.reply('I see... I see.')
                        message.reply('Seek out the one who fears light.  ')
                    break;
                    case 'square':
                        message.reply('I see... I see.')
                        message.reply('Seek out the one who coughs in morse code.  ')
                    break;
                    }
                break;
                case 'blue':
                    switch(args[2]) {
                    case 'diamond':
                        message.reply('I see... I see.')
                        message.reply('Tomorrow, you will be grudgingly productive. ')
                    break;
                    case 'heart':
                        message.reply('I see... I see.')
                        message.reply('One year from now, you’ll receive an email that’ll change your life. ')
                    break;
                    case 'circle':
                        message.reply('I see... I see.')
                        message.reply('I see you holding hands with someone and sweating so much that you scare them.  ')
                    break;
                    case 'square':
                        message.reply('I see... I see.')
                        message.reply('Tonight, there’ll be no way of knowing who isn’t a zombie. ')
                    break;
                    }
                break;
                case 'yellow':
                    switch(args[2]) {
                    case 'diamond':
                        message.reply('I see... I see.')
                        message.reply('One year from now, you’ll somehow be even more beautiful. ')
                    break;
                    case 'heart':
                        message.reply('I see... I see.')
                        message.reply('I see you beginning to finally accept yourself. ')
                    break;
                    case 'circle':
                        message.reply('I see... I see.')
                        message.reply('Seek out the one who owes you three dollars of bubble tea money. ')
                    break;
                    case 'square':
                        message.reply('I see... I see.')
                        message.reply('Beware of the one who summons you into their home. ')
                    break;
                    }
                break;
                case 'green':
                    switch(args[2]) {
                    case 'diamond':
                        message.reply('I see... I see.')
                        message.reply('Seek out the one who promises a different reality than the one we’re in. ')
                    break;
                    case 'heart':
                        message.reply('I see... I see.')
                        message.reply('Beware of the one who blinks manually. ')
                    break;
                    case 'circle':
                        message.reply('I see... I see.')
                        message.reply('Tonight, you will put something in a safe place and never see it again. ')
                    break;
                    case 'square':
                        message.reply('I see... I see.')
                        message.reply('Tomorrow, you will compliment a friend and they’ll remember it for years. ')
                    break;
                    }
                break;
                }
            break;
        }
    }
});

client.login(config.BOT_TOKEN);