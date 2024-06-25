let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};

function multiply(obj, x) {
  let result = {}
for(key in obj){
  if(typeof obj[key] === `number`){
  result[key] = obj[key] * x
  }else{
    result[key] = obj[key]
  }  
}
  return result
}
