import { getRandomAnimal } from '@acme/animal';
export function zoo() {
    const result = getRandomAnimal();
    return `${result.name} says ${result.sound}!`;
}
