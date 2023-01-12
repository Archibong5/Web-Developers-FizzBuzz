var output = [];
var output2 = [];
var output3 = [];
var output4 = [];
var output5 = [];

document.querySelector(".btn").addEventListener("click", function(){
  document.querySelector(".tech").innerHTML = tech();
  document.querySelector(".tech2").innerHTML = tech2();
  document.querySelector(".tech3").innerHTML = tech3();
  document.querySelector(".tech4").innerHTML = tech4();
  document.querySelector(".tech5").innerHTML = tech5();

})


function tech(){
  for (var count = 1; count <= 20; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FullStack");
    } else if (count % 3 === 0){
      output.push("Frontend");
    } else if (count % 5 === 0){
      output.push("Backend")
    } else{
      output.push(count);
    }
  }
  return output;
}


function tech2(){
  for (var count = 21; count <= 40; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      output2.push("FullStack");
    } else if (count % 3 === 0){
      output2.push("Frontend");
    } else if (count % 5 === 0){
      output2.push("Backend")
    } else{
      output2.push(count);
    }
  }
  return output2;
}


function tech3(){
  for (var count = 41; count <= 60; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      output3.push("FullStack");
    } else if (count % 3 === 0){
      output3.push("Frontend");
    } else if (count % 5 === 0){
      output3.push("Backend")
    } else{
      output3.push(count);
    }
  }
  return output3;
}


function tech4(){
  for (var count = 61; count <= 80; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      output4.push("FullStack");
    } else if (count % 3 === 0){
      output4.push("Frontend");
    } else if (count % 5 === 0){
      output4.push("Backend")
    } else{
      output4.push(count);
    }
  }
  return output4;
}


function tech5(){
  for (var count = 81 ; count <= 100; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      output5.push("FullStack");
    } else if (count % 3 === 0){
      output5.push("Frontend");
    } else if (count % 5 === 0){
      output5.push("Backend")
    } else{
      output5.push(count);
    }
  }
  return output5;
}
