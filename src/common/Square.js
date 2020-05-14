class Square {

    static COMPARATOR = (a, b) => a.name.localeCompare(b.name);

    constructor(name, col, row) {
        this.name = name;
        this.col = col;
        this.row = row;
    }

    getName() {
        return this.name;
    }

    withOffset(colOffset, rowOffset) {
        return Square.of(this.col + colOffset, this.row + rowOffset);
    }

    static of(col, row) {
        return this.all().find( square => square.col === col && square.row === row);
    }

    static all() {
        return [
            A1, A2, A3, A4, A5, A6, A7, A8,
            B1, B2, B3, B4, B5, B6, B7, B8,
            C1, C2, C3, C4, C5, C6, C7, C8,
            D1, D2, D3, D4, D5, D6, D7, D8,
            E1, E2, E3, E4, E5, E6, E7, E8,
            F1, F2, F3, F4, F5, F6, F7, F8,
            G1, G2, G3, G4, G5, G6, G7, G8,
            H1, H2, H3, H4, H5, H6, H7, H8
        ];
    }
}

const A1 = new Square('A1', 0, 0);
const B1 = new Square('B1', 1, 0);
const C1 = new Square('C1', 2, 0);
const D1 = new Square('D1', 3, 0);
const E1 = new Square('E1', 4, 0);
const F1 = new Square('F1', 5, 0);
const G1 = new Square('G1', 6, 0);
const H1 = new Square('H1', 7, 0);
const A2 = new Square('A2', 0, 1);
const B2 = new Square('B2', 1, 1);
const C2 = new Square('C2', 2, 1);
const D2 = new Square('D2', 3, 1);
const E2 = new Square('E2', 4, 1);
const F2 = new Square('F2', 5, 1);
const G2 = new Square('G2', 6, 1);
const H2 = new Square('H2', 7, 1);
const A3 = new Square('A3', 0, 2);
const B3 = new Square('B3', 1, 2);
const C3 = new Square('C3', 2, 2);
const D3 = new Square('D3', 3, 2);
const E3 = new Square('E3', 4, 2);
const F3 = new Square('F3', 5, 2);
const G3 = new Square('G3', 6, 2);
const H3 = new Square('H3', 7, 2);
const A4 = new Square('A4', 0, 3);
const B4 = new Square('B4', 1, 3);
const C4 = new Square('C4', 2, 3);
const D4 = new Square('D4', 3, 3);
const E4 = new Square('E4', 4, 3);
const F4 = new Square('F4', 5, 3);
const G4 = new Square('G4', 6, 3);
const H4 = new Square('H4', 7, 3);
const A5 = new Square('A5', 0, 4);
const B5 = new Square('B5', 1, 4);
const C5 = new Square('C5', 2, 4);
const D5 = new Square('D5', 3, 4);
const E5 = new Square('E5', 4, 4);
const F5 = new Square('F5', 5, 4);
const G5 = new Square('G5', 6, 4);
const H5 = new Square('H5', 7, 4);
const A6 = new Square('A6', 0, 5);
const B6 = new Square('B6', 1, 5);
const C6 = new Square('C6', 2, 5);
const D6 = new Square('D6', 3, 5);
const E6 = new Square('E6', 4, 5);
const F6 = new Square('F6', 5, 5);
const G6 = new Square('G6', 6, 5);
const H6 = new Square('H6', 7, 5);
const A7 = new Square('A7', 0, 6);
const B7 = new Square('B7', 1, 6);
const C7 = new Square('C7', 2, 6);
const D7 = new Square('D7', 3, 6);
const E7 = new Square('E7', 4, 6);
const F7 = new Square('F7', 5, 6);
const G7 = new Square('G7', 6, 6);
const H7 = new Square('H7', 7, 6);
const A8 = new Square('A8', 0, 7);
const B8 = new Square('B8', 1, 7);
const C8 = new Square('C8', 2, 7);
const D8 = new Square('D8', 3, 7);
const E8 = new Square('E8', 4, 7);
const F8 = new Square('F8', 5, 7);
const G8 = new Square('G8', 6, 7);
const H8 = new Square('H8', 7, 7);

export default Square;
export { 
    A1, A2, A3, A4, A5, A6, A7, A8, 
    B1, B2, B3, B4, B5, B6, B7, B8, 
    C1, C2, C3, C4, C5, C6, C7, C8, 
    D1, D2, D3, D4, D5, D6, D7, D8, 
    E1, E2, E3, E4, E5, E6, E7, E8, 
    F1, F2, F3, F4, F5, F6, F7, F8, 
    G1, G2, G3, G4, G5, G6, G7, G8, 
    H1, H2, H3, H4, H5, H6, H7, H8
};