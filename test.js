'auto';
'ui';

auto.setWindowFilter(function (window) {
  //不管是如何窗口，都返回true，表示在该窗口中搜索
  return true
})


let confirmStart=confirm('确认开始批量任务?')
if(!confirm){
  //不执行任务
  return;
}


// textStartsWith('确定').findOne().click();
// sleep(1000);
// id('bpc').findOne().click();



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
