function occurrences(string, subString) {

    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);

    var n = 0,
        pos = 0,
        step = 1;

    while (true) {
        pos = string.indexOf(subString, pos) + ;
        if (pos >= 0) {
            ++n;
            pos += step;
            
        } else break;
    }
    return n;
}