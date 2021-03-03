function calculate(){
    var numTrees = document.getElementById("initial").value;
    var result = '';
    var co2_amt = 0;

    if(numTrees <= 0){
        result = "Grow a tree! Save the Earth!";
    }
    else if(numTrees.value == ''){
        result = "Grow a tree! Save the Earth!";
    }
    else if(numTrees ==1){
        result = "Thank you for your efforts in tackling Climate Change! Every year, your tree will absorb 48 pounds of carbon dioxide.";
    }
    else{
        co2_amt = numTrees * 48;
        result = `Thank you for your efforts in tackling Climate Change! Every year, your trees will absorb ${co2_amt} pounds of carbon dioxide.`;

    }

    document.getElementById('final').innerHTML = result;
}

