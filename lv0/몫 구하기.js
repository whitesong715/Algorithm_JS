function solution(num1, num2) {
    var answer = 0;
    if(0 <= num1,num2 <= 100) {
        // answer = parseInt(num1 / num2);
        answer = Math.floor(num1 / num2);
    }
    return answer;
}