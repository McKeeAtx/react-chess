/*
 * action types
 */
export const SQUARE_CLICKED = 'SQUARE_CLICKED'
export const CPU_MOVE_REQUESTED = 'CPU_MOVE_REQUESTED'

/*
 * action creators
 */
export function squareClicked(square) {
    return { type: SQUARE_CLICKED, square }
}

export function cpuMoveRequested() {
    return { type: CPU_MOVE_REQUESTED }
}