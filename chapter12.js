function funcA() {
    console.log("funcA");
}

let varA = funcA;
console.log(varA);

// 1. 함수 표현식
// 함수 표현식으로 정의된 함수들은 호이스팅 발생 X
let varB = function () { // 익명 함수
    console.log("funcB");
};

varB();

// 2. 화살표 함수
let varC = (value) => { 
    console.log(value);
    return value + 1;
};
console.log(varC(10));
