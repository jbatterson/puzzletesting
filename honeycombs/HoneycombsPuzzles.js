// Honeycombs puzzle definitions shared by the game.
// Format: { size: 'small'|'medium'|'large', clues: [[row, col, value], ...] }
const PUZZLES = [
  // Small (3-4-3, 10 cells)
  { size: 'small', clues: [[2, 0, 1], [1, 2, 3], [1, 3, 6]] },
  { size: 'small', clues: [[2, 2, 1], [2, 0, 4], [1, 0, 6]] },
  { size: 'small', clues: [[1, 2, 2], [2, 1, 4], [2, 0, 6]] },
  { size: 'small', clues: [[2, 0, 1], [2, 1, 4], [1, 0, 10]] },
  { size: 'small', clues: [[0, 2, 2], [1, 3, 3], [0, 0, 6]] },
  { size: 'small', clues: [[0, 2, 1], [1, 3, 6], [2, 0, 9]] },
  { size: 'small', clues: [[2, 0, 2], [2, 2, 5], [1, 2, 6]] },

  // Medium (3-4-4-3, 14 cells)
  { size: 'medium', clues: [[0, 1, 4], [1, 2, 6], [2, 2, 7], [1, 3, 13]] },
  { size: 'medium', clues: [[1, 1, 1], [1, 0, 9], [3, 0, 12], [3, 1, 13]] },
  { size: 'medium', clues: [[2, 0, 2], [2, 1, 6], [0, 2, 11], [0, 0, 13]] },
  { size: 'medium', clues: [[0, 2, 2], [1, 1, 7], [0, 1, 8], [3, 0, 12]] },
  { size: 'medium', clues: [[1, 1, 2], [2, 0, 6], [3, 0, 7], [0, 1, 13]] },
  { size: 'medium', clues: [[0, 0, 3], [2, 1, 5], [1, 3, 9], [2, 2, 11]] },
  { size: 'medium', clues: [[1, 1, 3], [1, 2, 4], [2, 3, 8], [0, 1, 11]] },

  // Large (3-4-5-4-3, 19 cells)
  { size: 'large', clues: [[4, 0, 1], [2, 2, 6], [1, 3, 14], [4, 1, 18], [3, 1, 19]] },
  { size: 'large', clues: [[4, 1, 1], [1, 1, 8], [2, 2, 15], [2, 3, 16], [3, 3, 18]] },
  { size: 'large', clues: [[4, 2, 1], [2, 2, 4], [2, 1, 8], [4, 0, 11], [1, 3, 18]] },
  { size: 'large', clues: [[1, 1, 1], [2, 1, 2], [0, 0, 7], [0, 2, 10], [2, 2, 14]] },
  { size: 'large', clues: [[1, 0, 2], [2, 3, 5], [0, 2, 9], [4, 1, 14], [3, 2, 15]] },
  { size: 'large', clues: [[1, 3, 1], [3, 2, 7], [2, 3, 10], [3, 0, 16], [1, 0, 18]] },
  { size: 'large', clues: [[2, 1, 2], [2, 2, 6], [1, 1, 10], [3, 3, 16], [4, 2, 17]] },
]
