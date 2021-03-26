'auto';
'ui';

auto.waitFor()

auto.setWindowFilter(function (window) {
  //不管是如何窗口，都返回true，表示在该窗口中搜索
  return true
})


console.log("aaa====",new Date().getTime() )


click('立即抢购', 2)
 
// textStartsWith('确定').findOne().click();
// sleep(1000);
// id('bpc').findOne().click();


// 从网络获取当前时间
// function nettime(){
//   var url = "http://api.k780.com:88/?app=life.time&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json"
//   st = http.get(url).body.json();
//   return util.format(st.result.datetime_2)
//   }



// //选中需要发送的用户
// id('emw').find().forEach(child=>{
//     if(child){
//         console.log("aaa======",typeof child.child(0).getText().toString())
//
//         if(child.child(0).getText().toString() ==='创建新聊天'){
//             console.log("已找到" )
//         }
//     }
// })
