/**
 * This function will only return true if the value of the argument is a prime
 * number. The logic is if `num` is divisible by 2, it's automatically not a
 * prime number. If it is not, then we test dividing it by i = 3, 5, 7, odd numbers
 * up until the square root of `num`. If num % i never returns 0, it is prime.
 */

function isPrime(num) {
    if (num % 2 == 0 || num == 0 || num == 1) {
        return false;
    }

    var sqrt = Math.sqrt(num),
        i = 3;

    while (i < sqrt) {
        if (num % i == 0) {
            return false;
        }
        i += 2;
    }

    return true;
}

/**
 * The `filter()` method takes each element of the array and performs the given
 * function passed to it on each element, then returns a new array with only
 * the elements that have returned true from the processing function
 */

var nums = [0,1,2,3,5,7,10,100,1009,847,7919,9320384209348];
var primeNums = nums.filter(isPrime);
print(primeNums);