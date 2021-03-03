//选中需要发送的用户
id('emw').find().forEach(child=>{
    if(child){
        console.log("aaa======", child.child(0).getText().toString())
       
        if(child.child(0).getText().toString() ==='创建新聊天'){
            console.log("已找到" )
        }
    }
})