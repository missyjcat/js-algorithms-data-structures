/**
 * Exercises from Data Structures and Algorithms in Javascript
 * Chapter 2: Arrays
 */

/**
 * ASSIGNMENT 1
 * Create a grades object that stores a set of student grades in an object.
 * Provide a function for adding a grade and a function for displaying the 
 * student’s grade average.
 */

var Grades = function() {
    this.dataStore = [];
    this.addGrade = addGrade;
    this.displayAvg = displayAvg;
};

var addGrade = function(value) {
    this.dataStore.push(value);
};

var displayAvg = function() {
    if (this.dataStore.length == 0) {
        return 0;
    }

    /**
     * To get the sum, I am using the reduce() method to apply a function that
     * recursively sums the result of the last call with the next element,
     * creating an accumulated result.
     */
    var i = 0,
        sum = this.dataStore.reduce( function(res, el) {
            return res + el;
        });

    /** Now dividing this by the length of the dataStore to get the average **/
    return sum/this.dataStore.length;
};

var johnGrades = new Grades();

print('Adding some grades');
johnGrades.addGrade(98);
johnGrades.addGrade(99);
johnGrades.addGrade(68);
print(johnGrades.dataStore.toString());

print('Getting the average');
print(johnGrades.displayAvg());

/**
 * ASSIGNMENT 2
 * Store a set of words in an array and display the contents both forward and
 * backward.
 */

var words = ["You", "drive", "me", "crazy"];
print(words.toString());
print(words.reverse().toString());

/**
 * ASSIGNMENT 3
 * Modify the weeklyTemps object in the chapter so that it stores a month’s 
 * worth of data using a two-dimensional array. Create functions to display the
 * monthly average, a specific week’s average, and all the weeks’ averages.
 */

function WeekTemps() {
   this.dataStore = [];
   this.addWeekTemps = addWeekTemps;
   this.monthlyAverage = monthlyAverage;
   this.weeklyAverage = weeklyAverage;
   this.getWeekAverage = getWeekAverage;
}

/**
 * Adds a week's worth of temperature readings by taking an array and pushing
 * it into the dataStore.
 * @param {Array} weekTempArray - array with temperatures
 */

function addWeekTemps(weekTempArray) {
    var i = 0;

    this.dataStore.push(weekTempArray);

}

function monthlyAverage() {
    var row = 0,
        col = 0,
        sum = 0,
        cellCount = 0;

   /** 
    * Iterate through all the values, doesn't matter row or col first, and
    * get the sum
    */

    for (row = 0; row < this.dataStore.length; row++) {
        for (col = 0; col < this.dataStore[row].length; col++) {
            sum += this.dataStore[row][col];
        }

        /** Keep count of the number of cells in each row in case we have a
         * jagged array
         */
        cellCount += this.dataStore[row].length;
    }

    if (cellCount == 0) {
        return 0;
    } else {
        return sum/cellCount;    
    }
    
}

function getWeekAverage(weekNumber) {
    var week = this.dataStore[weekNumber];
    
    /**
     * If the week is empty, just return zero
     */

    if (!week.length) {
        return 0;
    }

    var col = 0,
        sum = 0;

    /** For each column (day) in the selected week, add it to the sum. **/
    for (col = 0; col < week.length; col++) {
        sum += week[col];
    }

    /** Return the sum divided by the length of the week **/
    return sum/week.length;
}

function weeklyAverage() {
    var weekSum = 0,
        row = 0,
        col = 0,
        weekAvg = 0;

    /** 
     * For each week (row), reset the weekSum and proceed to add up each col
     * (day) value.
     */
    for (row = 0; row < this.dataStore.length; row++) {
        weekSum = 0;
        for (col = 0; col < this.dataStore[row].length; col++) {
            weekSum += this.dataStore[row][col];
        }

        /** 
         * Keep a running total of the average of each week
         */
        weekAvg += weekSum/this.dataStore[row].length;
    }

    /** Divide the sum of the averages by the number of weeks **/
    return weekAvg/this.dataStore.length;
}

var August = new WeekTemps();

August.addWeekTemps([70,70,75,53,60]);
August.addWeekTemps([66,70,73,80]);
August.addWeekTemps([66,70,73,80,66,70,73]);

print('Weekly average: ' + August.weeklyAverage());
print('Week 2 average: ' + August.getWeekAverage(2));
print('Monthly average: ' + August.monthlyAverage());

/**
 * ASSIGNMENT 4
 * Create an object that stores individual letters in an array and has a
 * function for displaying the letters as a single word.
 */

var MyLetters = function() {
    this.dataStore = [];
    this.addLetters = addLetters;
    this.spitOutWord = spitOutWord;
};

function addLetters(array) {
    this.dataStore = this.dataStore.concat(array);
}

function spitOutWord() {
    return this.dataStore.join('');
}

var maggie = new MyLetters();
maggie.addLetters(['m','a','g','g','i','e']);
print(maggie.spitOutWord());