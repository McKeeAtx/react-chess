class Move {

    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    getName() {
        return this.from.getName() + "-" + this.to.getName();
    }
}

export default Move;