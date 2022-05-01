var numbers = [2,4,6,3,2,-123,34,0,8];
var maxValue = numbers[0];

var firstMode = function(){
    for(var i=1; i<numbers.length-1; i++){    
        if(numbers[i]>maxValue){
            maxValue=numbers[i];            
        }  
    }
    console.log(maxValue);
    alert('FirstMode MaxValue is ' + maxValue); 
}

var secondMode = function(){
    for(var i=1; i<numbers.length-1; i++){    
        if(numbers[i]<maxValue){
            continue;        
        }  
        maxValue=numbers[i];        
    }
    console.log(maxValue);
    alert('SecondMode MaxValue is ' + maxValue); 
}

firstMode();
secondMode();
