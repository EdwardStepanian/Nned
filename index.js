var brain = require('brain.js');
var net = new brain.NeuralNetwork();
var fs = require('fs');
var mnist = require('mnist');
var set = mnist.set(1000, 0);
var  trainingSet = set.training;

net.train([
		{ 
			input : [0, 0], 
			output: [0]
		},
		{
			input : [0, 1],
			output : [1]
		},
		{ 
			input : [1, 0], 
			output: [1]
		},
		{
			input : [1, 1],
			output : [0]
		},
	]);
var output = net.run([1, 1 ]);


console.log(output);



net.train(trainingSet,
    {
        errorThresh: 0.005,  // error threshold to reach
        iterations: 20000,   // maximum training iterations
        log: true,           // console.log() progress periodically
        logPeriod: 1,       // number of iterations between logging
        learningRate: 0.3    // learning rate
    }
);