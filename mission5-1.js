var result = " ";
var is_calc = false;
window.onload = function () {
 result = document.getElementById('result');
};

function c_click(){
  result.value ="0";
  is_calc = false;
}

function num_click(val){
  if(is_calc)  result.value ="0";
  is_calc = false;  

//AND演算

  if(result.value =="0" && val =="0"){
    result.value ="0";
  }else if(result.value == "0" && val =="."){
    result.value ="0.";
  }else if(result.value =="0"){
    result.value = val;
  }else{
    result.value += val;
  }
}

function ope_click(val){
  result.value += val;
  }

function equal_click(){
  var temp = new Function("return " + result.value.replaceAll("×", "*").replaceAll("÷", "/"))();
  if(temp == Infinity ){       
    result.value = "Error";
  }else{
    result.value = temp;
    is_calc = true;
  }
}
function is_ope_last(){
  return ["+","-","*","/"].includes(result.value.toString().slice(-1));
}