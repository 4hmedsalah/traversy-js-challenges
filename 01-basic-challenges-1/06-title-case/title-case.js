function titleCase(str) {
    return str
        .split(" ") // Split the sentence into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
        .join(" "); // Join the words back into a sentence
}

module.exports = titleCase;
