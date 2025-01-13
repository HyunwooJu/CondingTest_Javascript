function solution(p) {
  // 1단계: 입력이 빈 문자열인 경우 빈 문자열 반환
  if (p === "") return "";

  // 2단계: 문자열을 u, v로 분리
  const [u, v] = splitToBalancedStrings(p);

  // 3단계: u가 올바른 괄호 문자열인지 확인
  if (isValid(u)) {
    // 3-1: 올바른 경우 v에 대해 재귀적으로 수행한 결과를 u에 붙여 반환
    return u + solution(v);
  }

  // 4단계: 올바르지 않은 경우 새로운 문자열 생성
  return `(${solution(v)})${reverseAndFlip(u)}`;
}

// 문자열을 균형잡힌 두 문자열 u와 v로 분리하는 함수
function splitToBalancedStrings(s) {
  let balance = 0;
  let index = 0;

  // '('는 +1, ')'는 -1로 balance 계산
  for (let i = 0; i < s.length; i++) {
    balance += s[i] === "(" ? 1 : -1;
    if (balance === 0) {
      index = i + 1;
      break;
    }
  }
  return [s.slice(0, index), s.slice(index)];
}

// 문자열이 올바른 괄호 문자열인지 확인하는 함수
function isValid(s) {
  let stack = 0;

  for (const char of s) {
    if (char === "(") {
      stack++;
    } else {
      stack--;
    }
    // 스택이 음수가 되면 올바르지 않음
    if (stack < 0) return false;
  }

  // 스택이 0이면 올바른 괄호 문자열
  return stack === 0;
}

// 문자열 u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자를 뒤집는 함수
function reverseAndFlip(u) {
  // u의 첫 번째와 마지막 문자 제거
  const trimmed = u.slice(1, -1);

  // 괄호 방향을 반전
  return [...trimmed].map(char => (char === "(" ? ")" : "(")).join("");
}
