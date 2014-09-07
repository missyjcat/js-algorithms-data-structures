/**
 * Brute force method: compare each letter of first array to each letter of
 * second array and if there is a match, store that segment
 */

var longestSub = function(arr1, arr2) {
    var i = 0,
        j = 0,
        m = 0,
        store = [],
        substring = '',
        max = '';

        for (i = 0; i < arr1.length; i++) {
            for (j = 0; j < arr2.length; j++) {
                if (arr1[i] === arr2[j]) {
                    substring = '';
                    m = i;
                    while (arr1[m] === arr2[j]) {
                        substring += arr1[m];
                        m++;
                        j++;
                    }
                    store.push(substring);
                }
            }
        }
    print(store.toString());
    for (i = 0; i < store.length; i++) {
        if (store[i].length > max.length) {
            max = store[i];
        }
    }

    return max;
};

var arr1 = ['j','e','s','s','i','c','a','c','h','a','n','n'];
var arr2 = ['d','e','c','h','a','n','n','g','j','e','s','s','c','m','d'];

print(longestSub(arr1, arr2));