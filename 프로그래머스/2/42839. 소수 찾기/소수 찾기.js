// 소수 판별 함수
const isPrime = (num) => {
  if (num < 2) return false; // 0과 1은 소수가 아님
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // 약수가 존재하면 소수가 아님
  }
  return true; // 소수일 경우 true 반환
};

// 모든 순열을 생성하는 함수
const getPermutations = (arr, length) => {
  if (length === 1) return arr.map((v) => [v]);
  const permutations = [];
  arr.forEach((fixed, idx, self) => {
    const rest = [...self.slice(0, idx), ...self.slice(idx + 1)]; // 고정된 요소 제외
    const smallerPermutations = getPermutations(rest, length - 1);
    smallerPermutations.forEach((perm) => {
      permutations.push([fixed, ...perm]); // 고정 요소와 나머지 순열 결합
    });
  });
  return permutations;
};

const solution = (numbers) => {
  const numArr = numbers.split(""); // 문자열을 배열로 변환
  const uniqueNumbers = new Set(); // 중복 제거를 위한 Set

  // 가능한 모든 숫자 조합 생성
  for (let i = 1; i <= numArr.length; i++) {
    const permutations = getPermutations(numArr, i);
    permutations.forEach((perm) => {
      uniqueNumbers.add(Number(perm.join(""))); // 숫자로 변환 후 Set에 추가
    });
  }

  // 소수 판별 및 개수 세기
  return [...uniqueNumbers].filter(isPrime).length;
};