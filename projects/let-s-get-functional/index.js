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
    return _.reduce(array, function(count, customer) {
        return customer.gender === 'male' ? count + 1 : count;
    }, 0);
};

module.exports.maleCount = maleCount;

var femaleCount = function(array) {
    return _.reduce(array, function(count, customer) {
        return customer.gender === 'female' ? count + 1 : count;
    }, 0);
};

var oldestCustomer = function(array) {
    return _.reduce(array, function(oldest, customer) {
        return customer.age > oldest.age ? customer : oldest;
    }).name;
};

var youngestCustomer = function(array) {
    return _.reduce(array, function(youngest, customer) {
        return customer.age < youngest.age ? customer : youngest;
    }).name;
};
var averageBalance = function(array) {
    let totalBalance = _.reduce(array, function(sum, customer) {
        return sum + parseFloat(customer.balance.replace(/[$,]/g, ''));
    }, 0);
    return totalBalance / array.length;
};
var firstLetterCount = function(array, letter) {
    return _.reduce(array, function(count, customer) {
        return customer.name[0].toLowerCase() === letter.toLowerCase() ? count + 1 : count;
    }, 0);
};
var friendFirstLetterCount = function(array, customerName, letter) {
    let customer = _.find(array, function(cust) {
        return cust.name === customerName;
    });
    return _.reduce(customer.friends, function(count, friend) {
        return friend.name[0].toLowerCase() === letter.toLowerCase() ? count + 1 : count;
    }, 0);
};
var friendsCount = function(array, name) {
    return _.reduce(array, function(friendsList, customer) {
        // Check if the customer has a friend with the matching name
        if (_.some(customer.friends, function(friend) {
            return friend.name === name;
        })) {
            friendsList.push(customer.name); // Add customer name to the list
        }
        return friendsList;
    }, []); // Start with an empty array
};



var topThreeTags = function(array) {
    let tagCounts = _.reduce(array, function(counts, customer) {
        _.each(customer.tags, function(tag) {
            counts[tag] = (counts[tag] || 0) + 1;
        });
        return counts;
    }, {});
    return Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a]).slice(0, 3);
};
var genderCount = function(array) {
    return _.reduce(array, function(counts, customer) {
        counts[customer.gender] = (counts[customer.gender] || 0) + 1;
        return counts;
    }, {});
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
