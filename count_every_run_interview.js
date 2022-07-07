//create a method that will return the count of how many times is called
const count =(function(n){
    return function(){
        return n++
    }
})(1)
//count()
//1
//count()
//2


//create a method with currying to return count
function fn1(){
    fn1.count++;
    return fn1;
}
fn1.count =0;
fn1()().count;