// https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php

//utility function that creates a random permutation of an array
function shuffle(arr1) {
    var ctr = arr1.length, temp, index;

    // While there are elements in the array
    while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arr1[ctr];
        arr1[ctr] = arr1[index];
        arr1[index] = temp;
    }
    return arr1;
}

export default shuffle