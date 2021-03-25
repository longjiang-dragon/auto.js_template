console.show()
'auto'
//添加无障碍权限
auto.waitFor()

let currentDate = new Date()
console.warn(
  '抢购时间：' + currentDate.getFullYear() + '年' + currentDate.getMonth() + '月' +
  currentDate.getDate() + '日10点')
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
  text('立即抢购').findOne(100000).click()
}

/**
 * 酒仙网：上午十点开始
 */
function getStartTime () {
  let current = new Date()
  return new Date(current.getFullYear(), current.getMonth(), current.getDate(),9, 59, 59, 100).getTime()
}

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


function startTask(){
  text('立即购买').findOne(100000).click()
  text('我已阅读并同意以上内容').findOne(100000).click()
  text('确认').findOne(100000).click()
  text('提交订单').findOne(100000).click()
}

