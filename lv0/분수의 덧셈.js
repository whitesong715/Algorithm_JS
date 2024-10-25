function solution(numer1, denom1, numer2, denom2) {
    const rst = denom1 > denom2 ? gcb(denom1, denom2) : gcb(denom2, denom1);
    const rst2 = denom1*denom2 / gcb(denom1, denom2);
    console.log("rst", rst);
    console.log("rst2", rst2);
    return [];
}

// 최소 공약수를 구하는 함수
const gcb = (a, b) => {
    const test = a % b === 0 ? a / b : gcb(b, a % b);
    return test
}

// 두 자연수가 서로소인 경우에는 최대공배수, 최대공약수를 어떻게 처리할 것인가????