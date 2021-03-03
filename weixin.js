'auto'

auto.setWindowFilter(function (window) {
  //不管是如何窗口，都返回true，表示在该窗口中搜索
  return true
})

//滚动
//className ("ListView") .scrollForward()

console.log('-------------开始执行------------------')
id('en5').findOne().parent().parent().click()
sleep(1000)

let isEnd = false

while (!isEnd) {
  // 查找最后一条消息,并长按
  let children = id('euo').find()
  children[children.length - 1].longClick()

  // 点击发送给朋友
  sleep(1000)
  click('转发', 0)

  //切换为多选
  sleep(1000)
  click(936 + 20, 75 + 20)
  sleep(1000)

//选中需要发送的用户
  id('emw').find().forEach(child => {
    if (child && child.child(0).getText() != '从通讯录选择') {
      let bounds = child.bounds()
      click(bounds.centerX(), bounds.centerY())
      sleep(500)
    }
  })

  isEnd = true
}

console.log('-----------end------------')

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

