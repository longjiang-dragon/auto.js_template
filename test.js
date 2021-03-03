//选中需要发送的用户
id('emw').find().forEach(child=>{
    if(child){
        console.log("aaa======",child.child(0).getText())
        console.log("aaaa===", child.child(0).getText() != '从通讯录选择');
        if(child.child(0).getText() !=='从通讯录选择'){
            let bounds=child.bounds();
            //click(bounds.centerX(),bounds.centerY());
             sleep(100);
        }
    }
})