module.exports = {

    name: "woolliam",
    description: "alias Wingliam",
    execute(message){
        // message.channel.send('J\'peux pas j\'attends New World');
        // message.channel.send('https://tenor.com/view/new-world-gif-22562955');
        message.channel.send('J\'peux pas j\'attends dans New World');
        // message.chanel.send('J\'peux pas j\'attends dans New World', { files : 'https://i.ibb.co/RywTyyX/att.png'});

        message.channel.send({
            files: ['https://i.ibb.co/RywTyyX/att.png']
          })
    }
}