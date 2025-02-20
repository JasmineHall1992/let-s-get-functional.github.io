// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    // Step 1: Filter only the males
    const filteredArray = array.filter(function(customer) {
        return customer.gender === 'male';
    });

    // Step 2: Count the filtered items
    return filteredArray.length;
};


var femaleCount = function(array){
    var filteredWomen = array.filter(function(customer){ 
        return customer.gender === 'female';
    });

    return filteredWomen.length;
}


var oldestCustomer = function(array){

};

var youngestCustomer;

var averageBalance = function(array){
    //get total balance
    var total = array.reduce(function(acc, current){
            ///acc = 0// current = {Adele Mullin}
            var balance = current.balance;
            var replaced = balance.replace(/[$,]/g, "");

            acc += Number(replaced);
            return acc;

    }, 0);

    //return total balance/customers
    return total/array.length;
}

var firstLetterCount = function(array, letter){
    //use reduce to COUNT matching names
    return array.reduce(function(acc, currentValue) {
        if (customer.name[0].toLowerCase() === letter.toLowerCase()){
            acc++
        }
        return acc;
    }, 0);
};
//I: array, customers name(string), given letter(string/character?)
//O: a number of names that start with that given letter
var friendFirstLetterCount = function(array, customer, letter) {
    // Step 1: Find the customer object in the array
    let customersName = array.find(c => c.name === customer);

    // Step 2: If the customer is not found, return 0
    if (!customersName) return 0;

    // Step 3: Access the customer's friends array
    let friendsArray = customersName.friends;

    // Step 4: Count the friends whose names start with the given letter
    let count = friendsArray.filter(friend => friend.name[0].toLowerCase() === letter.toLowerCase()).length;

    // Step 5: Return the count
    return count;
};

var friendsCount = function(array, name) {
    //use filter to get new array of customers who are friends with 'name'
    const filtered = array.filter(function(customer){
        //return true if name is friendfs with Olga
        for (let i = 0; i < customer.friends.length; i ++){
            if (customer.friends[i].name === name){
                return true;
            }
        }
        return false;

    });
    //return the result of mapping through the filtered
    return filtered.map(function(customer){
        return customer.name; 
    });
};


var topThreeTags;

var genderCount = function(array){
    const genders = array.reduce(function(acc, current){
        //determine if the current customer's genfer ALREADY ecusts as a key in an acc
        if (acc.hasOwnProperty(current.gender)){
            acc[current.gender] += 1
        } else { // else it foesnt and we need to create it and give it a value of 1
            acc[current.gender] = 1;
        }
        return acc;

    }, {});

    return genders;
};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
