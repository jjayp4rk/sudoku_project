export function sudoku([data]) {
  return data.
    replace(/\s+/g, '').
    split('').
    map(
      function(character) {
        if (character === '-') {
          return null
        } else {
          return parseInt(character, 10)
        }
      }
    )
}

const problems = [
  // From http://elmo.sbs.arizona.edu/sandiway/sudoku/examples.html

  // vegardHanssen
  {
    problemData: sudoku`
      --- 6-- 4--
      7-- --3 6--
      --- -91 -8-

      --- --- ---
      -5- 18- --3
      --- 3-6 -45

      -4- 2-- -6-
      9-3 --- ---
      -2- --- 1--`,
    solutions: [
      // Complete solution
      sudoku`
        581 672 439
        792 843 651
        364 591 782

        438 957 216
        256 184 973
        179 326 845

        845 219 367
        913 768 524
        627 435 198`,

      // Incomplete solution
      sudoku`
        5-- 6-2 4-9
        7-- 843 651
        364 591 -8-

        438 --- 216
        25- 184 973
        -7- 326 -45

        845 2-- -6-
        913 768 524
        627 435 198`,

      // Complete Invalid solution
      // box 3, swap top middle and center middle
      // box 4, swap top left and top right
      // box 7, swap middle center and bottom left

      // Invalid Indexes should be: [
      //   0, 7, 16, 64, 67, 72, 45, 27, 54, 19, 20, 29
      // ]

      sudoku`
        581 672 459
        792 843 631
        364 591 782

        834 957 216
        256 184 973
        179 326 845

        845 219 367
        963 768 524
        127 435 198`,

      // Incomplete Invalid solution
      // Box 1, swap top right and top middle
      // Box 4, swap top right and middle right
      //
      // Invalid indexes should be: [
      //  29, 35, 38, 1, 64, 2
      // ]
      sudoku`
        518 6-- 4--
        7-- --3 6--
        364 -91 -8-

        --6 957 216
        -58 184 973
        1-9 326 845

        -45 219 36-
        913 --- --4
        -27 435 1--`,
    ],
  },

  // Arizona Daily Wildcat: Wednesday, Jan 18th 2006
  {
    problemData: sudoku`
      1-- 489 --6
      73- --- -4-
      --- --1 295

      --7 12- 6--
      5-- 7-3 --8
      --6 -95 7--

      914 6-- ---
      -2- --- -37
      8-- 512 --4`,

    solutions: [
      // Complete solution
      sudoku`
        152 489 376
        739 256 841
        468 371 295

        387 124 659
        591 763 428
        246 895 713

        914 637 582
        625 948 137
        873 512 964`,

      // Incomplete Solution
      sudoku`
        1-- 489 3-6
        739 --6 -41
        468 --1 295

        --7 12- 6-9
        5-1 7-3 --8
        --6 -95 7-3

        914 6-- ---
        -2- --8 -37
        87- 512 --4`,

      // Complete Invalid solution
      // Box 1, bottom left from 4 -> 8
      // Box 1, bottom right from 8 -> 6
      // Box 2, bottom left from 3 -> 7
      // Box 5, swap middle center and bottom left
      // Box 8, swap middle left and middle right
      // Box 9, swap top left and middle left
      // Box 9, swap top middle and top right

      // Invalid Indexes should be: [
      //  19, 20, 21, 22, 40, 48, 60, 65, 69, 18, 68, 43, 61, 62
      // ]
      sudoku`
        152 489 376
        739 256 841
        866 771 295

        387 124 659
        591 783 428
        246 695 713

        914 637 128
        625 849 537
        873 512 964`,

      // Incomplete Invalid Solution
      // Box 6, middle top 5 -> 8
      //
      // Invalid Indexes should be: [
      //    34
      // ]
      sudoku`
        1-- 489 3-6
        739 --6 -41
        468 --1 295

        --7 12- 68-
        5-1 7-3 --8
        --6 -95 7--

        914 6-- ---
        -2- --8 -37
        87- 512 --4`,
    ],
  }
]

export default problems
