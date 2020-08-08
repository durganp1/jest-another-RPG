
<<<<<<< HEAD
function Potion(name) {
    this.types = ['strength', 'agility', 'health'];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
=======
class Potion {
    constructor(name) {
        this.types = ['strength', 'agility', 'health'];
        this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
>>>>>>> develop

    if (this.name === 'health') {
        this.value = Math.floor(Math.random() * 10 + 30);
    } else {
        this.value = Math.floor(Math.random() * 5 + 7);
    }
<<<<<<< HEAD
=======
    }
>>>>>>> develop
}

module.exports = Potion;