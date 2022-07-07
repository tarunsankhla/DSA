function fib(n){
    let arr = [0,1];
    if(n==0){
        return n;
    }
    for(let i=2;i<n;i++){
        arr[i]=arr[i-1]+arr[i-2]
    }
    return arr;
}