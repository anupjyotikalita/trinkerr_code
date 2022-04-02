function outputUniqueFileNames(inputArr) {
    if (!Array.isArray(inputArr)) return new Error("Please provide an array");

    const existingFileNames = {};
    const outputFileNames = [];

    inputArr.forEach(input => {
        let index = 1;

        if (!existingFileNames[input]) {
            outputFileNames.push(input);
            existingFileNames[input] = true;
        } else {
            while(existingFileNames.hasOwnProperty(`${existingFileNames[input]}(${index})`)) {
                index++;
            }
    
            outputFileNames.push(`${input}(${index})`);
            existingFileNames[input] = true;
        }
    });

    return outputFileNames;
}
