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

//当前第几页
let pageNum = 0

//每一页数量
const SELECT_COUNT = 8
const IS_END_TAG='IS_END_TAG'

//下一次选中的item
let nextBatchItemText = null

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



  for (let i = 0; i < pageNum * SELECT_COUNT; i++) {
    //每次滚动1个item
    swipe(200, 2000, 200, 2000 - (i===0?450:195), 100)
  }

//选中需要发送的用户
  let forwardChildren = id('emw').find()

  //判断是否已到最后一个item
  isEnd=judgeEndItem(forwardChildren,nextBatchItemText);
  if (isEnd) continue ;

  let reverseArr=generateReverseArr(forwardChildren,nextBatchItemText);
  for (let i = 0; i < reverseArr.length; i++) {
    let child = reverseArr[i]
    let itemText = child.child(0).getText().toString()
    let bounds = child.bounds()
    click(bounds.centerX(), bounds.centerY())
    sleep(500)
  }
  //更新下一次开始的item
  nextBatchItemText = getNextBatchItemText(forwardChildren)
  console.log("下一次批量时开始的文本=====", nextBatchItemText)


  //发送群发消息
  textStartsWith('确定').findOne().click();
  sleep(1000);
  id('bpc').findOne().click();



  pageNum++;
  back()
  sleep(1000)
}

/**
 * 获取下一次批量发送时，需要找的第一个元素
 */
function getNextBatchItemText (children, lastSelectItemText) {
  let resultArr=[];

  let currentSelectedItemCount=0;

  for (let i = findStartIndex(children, nextBatchItemText); i < children.length; i++) {
    if (currentSelectedItemCount >= SELECT_COUNT+1) continue
    let child = children[i]
    let itemText = child.child(0).getText().toString()
    if (child && itemText !== '从通讯录选择') {
      ++currentSelectedItemCount
      resultArr.push(child);
    }
  }

  if (resultArr.length>SELECT_COUNT){
    return resultArr[SELECT_COUNT].child(0).getText().toString();
  }
  return IS_END_TAG;
}

function generateReverseArr (children, nextBatchItemText) {
  let resultArr=[];
  let currentSelectedItemCount=0;

  for (let i = findStartIndex(children, nextBatchItemText); i < children.length; i++) {
    if (currentSelectedItemCount >= SELECT_COUNT) continue
    let child = children[i]
    let itemText = child.child(0).getText().toString()
    if (child && itemText !== '从通讯录选择') {
      ++currentSelectedItemCount
      resultArr.push(child);
    }
  }
  return resultArr.reverse();
}

function judgeEndItem(children,nextBatchItemText){
  if (!nextBatchItemText) return false;
  // 没有子节点或者子节点===1 （默认有一个通讯录选择）
  if (!children || children.length === 1) return true;
  if (nextBatchItemText === IS_END_TAG)return true;
  return false;
}

function findStartIndex (children, startBatchItemText) {
  if (!startBatchItemText) return 0
  let result = children.findIndex(child => {
    return child.child(0).getText().toString() === startBatchItemText
  })
  console.log('result======', result, startBatchItemText)
  return result === -1 ? 0 : result;
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

