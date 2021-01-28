// 4 = 4* 3* 2* 1 = 24
// 0 = 1

function somaDeFatoriais(M, N) {
    return calculoDeFatorial(M) + calculoDeFatorial(N)
};
function calculoDeFatorial(N){
    if(N == 0){
        return 1
    };

    let fatorialN = N
    
    for(; N > 1; N--){
        fatorialN = fatorialN * (N - 1)
    }; 
    return fatorialN
};

console.log(somaDeFatoriais(7, 5))