self.onmessage = ({data})=>{
    console.log(data)
    self.postMessage("ok")
}