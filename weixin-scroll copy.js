sleep(2000)

const SELECT_COUNT = 9
//当前第几页
let pageNum = 3
//是否是最后一页
let isLastPage = false
//滚动到已经点击过的
for (let i = 0; i < pageNum * SELECT_COUNT; i++) {
//第次滚动1个item
  console.log("result====",swipe(200, 2000, 200, 2000 - 170, 500) );
}

sleep(2000)

function isFistPage () {
  return pageNum === 0
}

//while (!isLastPage) {
console.log('aaa===', id('fa4').find().length)
let childCount = Math.min(id('fa4').find().length, SELECT_COUNT)
for (let i = 0; i < childCount; i++) {
  console.log("i====",i );
  let bounds = id('fa4').find()[isFistPage() ? i : i+3].bounds()
  click(bounds.centerX(), bounds.centerY())
}
pageNum++
// sleep(1000)
// back()
//}




//单个item 高是 170
//swipe(200,500,200,330,1000)
