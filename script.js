  // Array methods

  let data = ["olma","kivi","uzum","banan"]

  alert(data)

  let b = confirm(`array qoshasizmi`)

  if(b==true){
    data.push(`banan`)
    console.log(data);
    
  }else{
    data.pop()
    console.log(data);
    
  }