// Write a program to print all permutations of a given string

// process commandline arguments
var main = function(args){
    console.log("Got enough args!");
}

exports.processArguments = function(optional){
    var args = optional || process.argv;

    if (args.length > 1){
        console.log(args);
        main(args);
    } else {
        console.log("There isn't enough arguments: at least 1 is needed");
    }
}
