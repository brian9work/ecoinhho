export default function shuffleArray(array) {
    let shuffledArray = array.slice(); // Clonar el array para no modificar el original
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // Índice aleatorio
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Intercambiar elementos
    }
    return shuffledArray;
}