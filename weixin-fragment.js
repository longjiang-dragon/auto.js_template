// titleView=className("android.widget.Image").text("c122c992-5e90-46eb-aa8c-e7c82dcf870a").findOne()
// log(titleView);
// let  priceView=text("1499.00").findOne();


//滚动
//className ("ListView") .scrollForward()
//console.log("aaaaaa====",className('RelativeLayout').children[5].click())
let  u=id('fa4').find().forEach(child=>{
    if(child){
        let bounds=child.bounds();
        click(bounds.centerX(),bounds.centerY());
         sleep(100);
    }
})

console.log("aaa", u.length)
 



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

