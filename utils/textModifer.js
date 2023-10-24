export function slugify(text) {
    return text
        .toString() // convert to string in case of non-string input
        .toLowerCase()
        .trim() // remove leading/trailing white spaces
        .replace(/\s+/g, '-') // replace spaces with dashes
        .replace(/[^\w-]+/g, '') // remove non-alphanumeric characters except dashes
        .replace(/--+/g, '-') // replace multiple consecutive dashes with a single dash
        .replace(/^-+|-+$/g, ''); // remove dashes from the start and end of the string
}

// export function deslugify(slug) {
//     return slug
//         .replace(/-/g, ' ')
//         .replace(/(^|\s)\S/g, (match) => match.toUpperCase());
// }

export function deslugify(str) {
    // Split the string into an array of words
    const words = str.split('-');

    // Map over each word and capitalize the first letter (except "of")
    const deslugifiedWords = words.map((word, index) => {
        if (index === 0 || word.toLowerCase() !== 'of') {
            return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
            return word;
        }
    });

    // Join the deslugified words into a string
    const deslugifiedString = deslugifiedWords.join(' ');

    return deslugifiedString;
}

export function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
        return text;
    }

    return text.slice(0, maxLength) + '...';
}