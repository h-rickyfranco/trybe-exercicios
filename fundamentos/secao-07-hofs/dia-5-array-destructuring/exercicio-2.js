const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

function toObject(arr) {
    const newObject = {
        marca: arr[0],
        modelo: arr[1],
        ano: arr[2],
    }
    return newObject;
}

console.log(toObject(palio));