//练习1.3 请声明一个函数，它以三个数为参数，返回其中较大的两个数的平方和。
function square_of_max1(x,y,z){
    function square(k){
        return k*k;
    }
    return square(x) + square(y) + square(z)-
       square(x > y ? (y > z ? z : y) : ( x  > z ? z : x));
}




