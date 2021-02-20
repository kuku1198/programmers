/**
 * @see {@link https://programmers.co.kr/learn/courses/30/lessons/42895}
 * @param N
 * @param number
 * @returns {number}
 */
function solution (N, number) {
  const calculates = []
  // 사용횟수
  let useCnt = 0

  for (let i = 0; i < 8; i++) {
    // 사칙연산에 사용된 횟수
    const calculateUsedCnts = []

    useCnt = i + 1;

    // ex) 5, 55, 555
    calculates.push(
      new Set([
        Number(N.toString().repeat(useCnt))
      ])
    )
    for (let j = 0; j < i; j++) {
      let key = i - j - 1

      // 중복 연산 break
      if (key > 0) calculateUsedCnts.push(key)
      if (calculateUsedCnts.includes(j)) break

      // 사칙연산
      for (const a of calculates[j]) {
        for (const b of calculates[key]) {
          calculates[i].add(a + b)
          if (a - b > 0) calculates[i].add(a - b)
          calculates[i].add(a * b)
          if (a / b > 0) calculates[i].add(a / b)
          if (b / a > 0) calculates[i].add(b / a)
        }
      }
    }

    if (calculates[i].has(number)) {
      return useCnt
    }
  }

  return -1
}
