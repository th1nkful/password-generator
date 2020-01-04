import generator from './generate-password';

export const getPassword = async (length:number = 18) => {
    const numParts : number = 3;
    const lengthOfPart : number = length / numParts;

    const parts = await generator.generateMultiple(numParts, {
        length: lengthOfPart,
        numbers: true,
    });

    const thePassword = parts.join('-');
    return thePassword;
};
