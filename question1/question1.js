function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            reject("Input is not an array");
            return;
        }

        const filteredWords = arr.filter((item) => typeof item === "string");

        if (filteredWords.length === 0) {
            reject("No strings found in the array");
        } else {
            const lowercasedWords = filteredWords.map((word) => word.toLowerCase());
            resolve(lowercasedWords);
        }
    });
}

const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];
console.log(lowerCaseWords(mixedArray))