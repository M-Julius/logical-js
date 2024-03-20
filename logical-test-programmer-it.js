function findAllBreaks(input, dictionary) {
    const results = [];

    function backtrack(start, current) {
        if (start === input.length) {
            results.push(current.join(', '));
            return;
        }

        for (let end = start + 1; end <= input.length; end++) {
            const word = input.substring(start, end);
            if (dictionary.includes(word)) {
                backtrack(end, [...current, word]);
            }
        }
    }

    backtrack(0, []);
    return results;
}

const dictionary = ['pro', 'gram', 'merit', 'program', 'it', 'programmer'];

console.log(findAllBreaks("program", dictionary));
console.log(findAllBreaks("programit", dictionary));
console.log(findAllBreaks("programmerit", dictionary));
console.log(findAllBreaks("programlala", dictionary));
