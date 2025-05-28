const findMaxNumber = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }

    if (arr.length === 0) {
        throw new Error("Array must not be empty");
    }
    return Math.max(...arr);
};

module.exports = findMaxNumber;
