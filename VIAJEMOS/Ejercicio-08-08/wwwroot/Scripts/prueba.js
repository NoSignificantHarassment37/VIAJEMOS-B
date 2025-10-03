class TryParseRegistry {
    constructor() {
        this.parsers = new Map();
    }

    add(name, fn) {
        this.parsers.set(name, fn);
    }

    parse(type, value) {
        const parser = this.parsers.get(type);
        if (!parser) throw new Error(`No existe parser para tipo ${type}`);
        return parser(value);
    }
}

// Instancia global con parsers registrados
const TryParse = new TryParseRegistry();

TryParse.add("int", (str) => {
    if (!/^-?\d+$/.test(str)) return undefined;
    const n = Number(str);
    return Number.isSafeInteger(n) ? n : undefined;
});

TryParse.add("float", (str) => {
    const n = Number(str);
    return isNaN(n) ? undefined : n;
});

TryParse.add("bool", (str) => {
    if (str === "true" || str === true) return true;
    if (str === "false" || str === false) return false;
    return undefined;
});

TryParse.add("date", (str) => {
    const d = new Date(str);
    return isNaN(d.getTime()) ? undefined : d;
});