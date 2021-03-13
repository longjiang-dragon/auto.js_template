// titleView=className("android.widget.Image").text("c122c992-5e90-46eb-aa8c-e7c82dcf870a").findOne()
// log(titleView);
// let  priceView=text("1499.00").findOne();

console.show()
let currentDate = new Date()
console.warn(
  '抢购时间：' + currentDate.getFullYear() + '年' + currentDate.getMonth() + '月' +
  currentDate.getDate() + '日9点')
const CLICK_DELAY_TIME = 100

let lastTime = new Date().getTime()
let startTime = getStartTime()
judgeIsStart()

function judgeIsStart () {
  setTimeout(() => {
    if (new Date().getTime() > startTime) {
      startTask()
    } else {
      judgeIsStart()
    }
  }, CLICK_DELAY_TIME)
}

function startTask () {
  click('立即抢购', 2)
  text('预约抢购').findOne(100000).click()
  text('确认下单').findOne(100000).click()
}

function getStartTime () {
  let current = new Date()
  return new Date(current.getFullYear(), current.getMonth(), current.getDate(),9, 59, 59, 900).getTime()
}

// while(!priceView){
//      sleep(1000);
//     priceView=text("立即抢购").find()[1]
//     log("查找入口中....")
//
// }
//
// console.error("已找到入口,等待抢购!!!!")
//
// let endTime =new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 9).getTime();
//
//
//
// let interval=setInterval(() => {
//     if(new Date().getTime()+700 > endTime){
//         priceView.click();
//         clearInterval(interval)
//     }
// }, 50);
//
//
// //自动点击抢购
// setTimeout(() => {
//     let  goBuy=text("立即抢购").untilFind();
//     if(goBuy){
//         goBuy.click();
//     }  else{
//         log("未找到入口....")
//     }
// }, 100);

