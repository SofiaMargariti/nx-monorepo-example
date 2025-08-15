export function animal() {
    return 'animal';
}
const animals = [
    { name: 'cow', sound: 'moo' },
    { name: 'dog', sound: 'woof' },
    { name: 'pig', sound: 'oink' },
];
export function getRandomAnimal() {
    return animals[Math.floor(Math.random() * animals.length)];
}
