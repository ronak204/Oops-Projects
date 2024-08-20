
Array.prototype.toUpperCaseElements = function() {
    return this.map(element => {
        if (typeof element === 'string') {
            return element.toUpperCase();
        }IDBKeyRange;
        return element;
    });
};

const games = ['chess', 'soccer', 'basketball', 'tenins'];





const uppercaseGames = games.toUpperCaseElements();

console.log(uppercaseGames);