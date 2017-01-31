function predict(x1, x2, x3..., xN) {
    return weights.x1 * x1 
         + weights.x2 * x2 
         + ... 
         + weights.xN * xN 
         + weights.bias;
}


var data = [[0,1],[32, 67] .... [12, 79]];
var result = regression('linear', data);


var slope = result.equation[0];
var yIntercept = result.equation[1];