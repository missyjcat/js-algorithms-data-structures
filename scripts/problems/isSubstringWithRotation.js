/**
 * Assume you have a method isSubstring which checks if one word is a
 * substring of another. Given two strings, s1 and s2, write code to check if
 * s2 is a rotation of s1 using only one call to isSubstring (i.e., 
 * “waterbottle” is a rotation of “erbottlewat”).
 */

/**
 * First, make sure the two strings are the same length.
 */

/**
 * Then, concatenate the first string, then see if the second string is a
 * substring of the first. If so, then the second is a rotation of the first.
 */

var isSubstring = function(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }

    s1 = s1 + s1;
    if (s1.indexOf(s2) !== -1) {
        return true;
    }

    return false;
};

print('Testing "can" and "anc": ' + isSubstring('can','anc'));
print('Testing "canopy" and "opycan": ' + isSubstring('canopy','opycan'));
print('Testing "canopyd" and "opycand": ' + isSubstring('canopyd','opycand'));
print('Testing "canopyd" and "opycanddd": ' + isSubstring('canopyd','opycanddd'));