export const  abreviateNumber = (number) => {
    var newValue = number;
    if (number >= 1000) {
        var suffixes = ["", "k", "m", "b","t"];
        var suffixNum = Math.floor((""+number).length/3);
        var shortValue = parseFloat((suffixNum !== 0 ? (number / Math.pow(1000,suffixNum)) : number).toPrecision(2));
    
        if (shortValue % 1 !== 0) {
            shortValue = shortValue.toFixed(1);
        }
    
        newValue = shortValue+suffixes[suffixNum];
    }

    return newValue;
}