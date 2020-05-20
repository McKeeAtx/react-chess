/*
 * action types
 */
export const SQUARE_CLICKED = 'SQUARE_CLICKED'

/*
 * action creators
 */
export function squareClicked(square) {
    return { type: SQUARE_CLICKED, square }
}