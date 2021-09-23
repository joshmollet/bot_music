function getRandomIntInclusive() {
    return Math.floor(Math.random() * (16 - 0 +1)) + 0;
  }

    const legends = ['Bloodhound', 'Gibraltar', 'Lifeline', 'Pathfinder', 'Wraith', 'Bangalore', 'Caustic', 'Mirage', 'Octane', 'Wattson', 'Crypto', 'Revenant', 'Loba', 'Rampart', 'Horizon', 'Fuse', 'Valkyrie', 'Seer'];


module.exports = {
    name: "rand3",
    description: "Donne 3 légendes aléatoires",
    execute(message){
        message.channel.send("Joueur 1 tu prends " + legends[getRandomIntInclusive()]);
        message.channel.send("Joueur 2 tu prends " + legends[getRandomIntInclusive()]);
        return message.channel.send("Joueur 3 tu prends " + legends[getRandomIntInclusive()]);
    }
}