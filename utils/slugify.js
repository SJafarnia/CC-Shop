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

export function deslugify(slug) {
    return slug
        .replace(/-/g, ' ')
        .replace(/(^|\s)\S/g, (match) => match.toUpperCase());
}