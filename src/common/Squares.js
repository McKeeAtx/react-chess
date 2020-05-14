class Squares {

    static COMPARATOR = (a, b) => a.name.localeCompare(b.name);

    constructor(name, col, row) {
        this.name = name;
        this.col = col;
        this.row = row;
    }

    withOffset(colOffset, rowOffset) {
        return Squares.of(this.col + colOffset, this.row + rowOffset);
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

const A1 = new Squares('A1', 0, 0);
const B1 = new Squares('B1', 1, 0);
const C1 = new Squares('C1', 2, 0);
const D1 = new Squares('D1', 3, 0);
const E1 = new Squares('E1', 4, 0);
const F1 = new Squares('F1', 5, 0);
const G1 = new Squares('G1', 6, 0);
const H1 = new Squares('H1', 7, 0);
const A2 = new Squares('A2', 0, 1);
const B2 = new Squares('B2', 1, 1);
const C2 = new Squares('C2', 2, 1);
const D2 = new Squares('D2', 3, 1);
const E2 = new Squares('E2', 4, 1);
const F2 = new Squares('F2', 5, 1);
const G2 = new Squares('G2', 6, 1);
const H2 = new Squares('H2', 7, 1);
const A3 = new Squares('A3', 0, 2);
const B3 = new Squares('B3', 1, 2);
const C3 = new Squares('C3', 2, 2);
const D3 = new Squares('D3', 3, 2);
const E3 = new Squares('E3', 4, 2);
const F3 = new Squares('F3', 5, 2);
const G3 = new Squares('G3', 6, 2);
const H3 = new Squares('H3', 7, 2);
const A4 = new Squares('A4', 0, 3);
const B4 = new Squares('B4', 1, 3);
const C4 = new Squares('C4', 2, 3);
const D4 = new Squares('D4', 3, 3);
const E4 = new Squares('E4', 4, 3);
const F4 = new Squares('F4', 5, 3);
const G4 = new Squares('G4', 6, 3);
const H4 = new Squares('H4', 7, 3);
const A5 = new Squares('A5', 0, 4);
const B5 = new Squares('B5', 1, 4);
const C5 = new Squares('C5', 2, 4);
const D5 = new Squares('D5', 3, 4);
const E5 = new Squares('E5', 4, 4);
const F5 = new Squares('F5', 5, 4);
const G5 = new Squares('G5', 6, 4);
const H5 = new Squares('H5', 7, 4);
const A6 = new Squares('A6', 0, 5);
const B6 = new Squares('B6', 1, 5);
const C6 = new Squares('C6', 2, 5);
const D6 = new Squares('D6', 3, 5);
const E6 = new Squares('E6', 4, 5);
const F6 = new Squares('F6', 5, 5);
const G6 = new Squares('G6', 6, 5);
const H6 = new Squares('H6', 7, 5);
const A7 = new Squares('A7', 0, 6);
const B7 = new Squares('B7', 1, 6);
const C7 = new Squares('C7', 2, 6);
const D7 = new Squares('D7', 3, 6);
const E7 = new Squares('E7', 4, 6);
const F7 = new Squares('F7', 5, 6);
const G7 = new Squares('G7', 6, 6);
const H7 = new Squares('H7', 7, 6);
const A8 = new Squares('A8', 0, 7);
const B8 = new Squares('B8', 1, 7);
const C8 = new Squares('C8', 2, 7);
const D8 = new Squares('D8', 3, 7);
const E8 = new Squares('E8', 4, 7);
const F8 = new Squares('F8', 5, 7);
const G8 = new Squares('G8', 6, 7);
const H8 = new Squares('H8', 7, 7);

export default Squares;
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