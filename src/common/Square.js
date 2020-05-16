class Square {

    static A1 = new Square('A1', 0, 0);
    static B1 = new Square('B1', 1, 0);
    static C1 = new Square('C1', 2, 0);
    static D1 = new Square('D1', 3, 0);
    static E1 = new Square('E1', 4, 0);
    static F1 = new Square('F1', 5, 0);
    static G1 = new Square('G1', 6, 0);
    static H1 = new Square('H1', 7, 0);
    static A2 = new Square('A2', 0, 1);
    static B2 = new Square('B2', 1, 1);
    static C2 = new Square('C2', 2, 1);
    static D2 = new Square('D2', 3, 1);
    static E2 = new Square('E2', 4, 1);
    static F2 = new Square('F2', 5, 1);
    static G2 = new Square('G2', 6, 1);
    static H2 = new Square('H2', 7, 1);
    static A3 = new Square('A3', 0, 2);
    static B3 = new Square('B3', 1, 2);
    static C3 = new Square('C3', 2, 2);
    static D3 = new Square('D3', 3, 2);
    static E3 = new Square('E3', 4, 2);
    static F3 = new Square('F3', 5, 2);
    static G3 = new Square('G3', 6, 2);
    static H3 = new Square('H3', 7, 2);
    static A4 = new Square('A4', 0, 3);
    static B4 = new Square('B4', 1, 3);
    static C4 = new Square('C4', 2, 3);
    static D4 = new Square('D4', 3, 3);
    static E4 = new Square('E4', 4, 3);
    static F4 = new Square('F4', 5, 3);
    static G4 = new Square('G4', 6, 3);
    static H4 = new Square('H4', 7, 3);
    static A5 = new Square('A5', 0, 4);
    static B5 = new Square('B5', 1, 4);
    static C5 = new Square('C5', 2, 4);
    static D5 = new Square('D5', 3, 4);
    static E5 = new Square('E5', 4, 4);
    static F5 = new Square('F5', 5, 4);
    static G5 = new Square('G5', 6, 4);
    static H5 = new Square('H5', 7, 4);
    static A6 = new Square('A6', 0, 5);
    static B6 = new Square('B6', 1, 5);
    static C6 = new Square('C6', 2, 5);
    static D6 = new Square('D6', 3, 5);
    static E6 = new Square('E6', 4, 5);
    static F6 = new Square('F6', 5, 5);
    static G6 = new Square('G6', 6, 5);
    static H6 = new Square('H6', 7, 5);
    static A7 = new Square('A7', 0, 6);
    static B7 = new Square('B7', 1, 6);
    static C7 = new Square('C7', 2, 6);
    static D7 = new Square('D7', 3, 6);
    static E7 = new Square('E7', 4, 6);
    static F7 = new Square('F7', 5, 6);
    static G7 = new Square('G7', 6, 6);
    static H7 = new Square('H7', 7, 6);
    static A8 = new Square('A8', 0, 7);
    static B8 = new Square('B8', 1, 7);
    static C8 = new Square('C8', 2, 7);
    static D8 = new Square('D8', 3, 7);
    static E8 = new Square('E8', 4, 7);
    static F8 = new Square('F8', 5, 7);
    static G8 = new Square('G8', 6, 7);
    static H8 = new Square('H8', 7, 7);

    static COMPARATOR = (a, b) => a.name.localeCompare(b.name);

    static allSquares = [
        Square.A1, Square.A2, Square.A3, Square.A4, Square.A5, Square.A6, Square.A7, Square.A8,
        Square.B1, Square.B2, Square.B3, Square.B4, Square.B5, Square.B6, Square.B7, Square.B8,
        Square.C1, Square.C2, Square.C3, Square.C4, Square.C5, Square.C6, Square.C7, Square.C8,
        Square.D1, Square.D2, Square.D3, Square.D4, Square.D5, Square.D6, Square.D7, Square.D8,
        Square.E1, Square.E2, Square.E3, Square.E4, Square.E5, Square.E6, Square.E7, Square.E8,
        Square.F1, Square.F2, Square.F3, Square.F4, Square.F5, Square.F6, Square.F7, Square.F8,
        Square.G1, Square.G2, Square.G3, Square.G4, Square.G5, Square.G6, Square.G7, Square.G8,
        Square.H1, Square.H2, Square.H3, Square.H4, Square.H5, Square.H6, Square.H7, Square.H8
    ];

    static LOOKUP = Square.generateLookup()

    static generateLookup() {
        let result = new Array(8).fill(0).map(() => new Array(8).fill(undefined));
        Square.allSquares.forEach( square => { result[square.col][square.row] = square });
        return result;
    }

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
        return this.LOOKUP[col] ? this.LOOKUP[col][row] : undefined;
    }

    static all() {
        return Square.allSquares;
    }
}

export const A1 = Square.A1;
export const B1 = Square.B1;
export const C1 = Square.C1;
export const D1 = Square.D1;
export const E1 = Square.E1;
export const F1 = Square.F1;
export const G1 = Square.G1;
export const H1 = Square.H1;
export const A2 = Square.A2;
export const B2 = Square.B2;
export const C2 = Square.C2;
export const D2 = Square.D2;
export const E2 = Square.E2;
export const F2 = Square.F2;
export const G2 = Square.G2;
export const H2 = Square.H2;
export const A3 = Square.A3;
export const B3 = Square.B3;
export const C3 = Square.C3;
export const D3 = Square.D3;
export const E3 = Square.E3;
export const F3 = Square.F3;
export const G3 = Square.G3;
export const H3 = Square.H3;
export const A4 = Square.A4;
export const B4 = Square.B4;
export const C4 = Square.C4;
export const D4 = Square.D4;
export const E4 = Square.E4;
export const F4 = Square.F4;
export const G4 = Square.G4;
export const H4 = Square.H4;
export const A5 = Square.A5;
export const B5 = Square.B5;
export const C5 = Square.C5;
export const D5 = Square.D5;
export const E5 = Square.E5;
export const F5 = Square.F5;
export const G5 = Square.G5;
export const H5 = Square.H5;
export const A6 = Square.A6;
export const B6 = Square.B6;
export const C6 = Square.C6;
export const D6 = Square.D6;
export const E6 = Square.E6;
export const F6 = Square.F6;
export const G6 = Square.G6;
export const H6 = Square.H6;
export const A7 = Square.A7;
export const B7 = Square.B7;
export const C7 = Square.C7;
export const D7 = Square.D7;
export const E7 = Square.E7;
export const F7 = Square.F7;
export const G7 = Square.G7;
export const H7 = Square.H7;
export const A8 = Square.A8;
export const B8 = Square.B8;
export const C8 = Square.C8;
export const D8 = Square.D8;
export const E8 = Square.E8;
export const F8 = Square.F8;
export const G8 = Square.G8;
export const H8 = Square.H8;

export default Square;