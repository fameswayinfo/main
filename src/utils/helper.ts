interface String {
    firstLetterCapital: () => void;
}

String.prototype.firstLetterCapital = function () {
    return this.charAt(0) + this.slice(1)
}

export function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}