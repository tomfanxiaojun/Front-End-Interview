setImmediate(()=>{
  console.log('setImmediate1')
  setTimeout(()=>{
    console.log('setTimeout1')    
  },0)
})
setTimeout(()=>{
  console.log('setTimeout2') 
  process.nextTick(()=>{console.log('nextTick1')})
  setImmediate(()=>{
    console.log('setImmediate2')
  })   
},10)

 