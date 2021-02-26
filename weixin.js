
auto.setWindowFilter(function(window){
    //不管是如何窗口，都返回true，表示在该窗口中搜索
    return true;
});

//滚动
//className ("ListView") .scrollForward()


console.log("-------------开始执行------------------" )
id('b4r').click();
sleep(1000)

// 查找最后一条消息,并长按
let children=id("an3").findOne().children();
children[children.length-2]
.findOne(className("android.widget.LinearLayout").depth(13)).findOne(className('android.view.View')).longClick();



// 点击发送给朋友
sleep(1000)
click('发送给朋友',0);
sleep(1000)
click("多选",0)
sleep(1000)



//选中需要发送的用户
id('fa4').find().forEach(child=>{
    if(child){
        let bounds=child.bounds();
        click(bounds.centerX(),bounds.centerY());
         sleep(500);
    }
})

console.log("-----------end------------" )


//console.log("bbb===",text('霜').findOne().click());



//console.log("test", Object.keys (classNameContains('RecyclerView') ))
//console.log("aaa===",id('b4r').find().length);
//id('b4r').find().forEach(child=>{
//     console.log("aaaa===",   child.findOne(id('e3x').findOne.parent()));
//})

//classNameContains ('RecyclerView') .scrollForward();

// 获取微信item
//id('b4r').click();
//console.log("aaa",id('b4r').parent)

