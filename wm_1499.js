// titleView=className("android.widget.Image").text("c122c992-5e90-46eb-aa8c-e7c82dcf870a").findOne()
// log(titleView);
// let  priceView=text("1499.00").findOne();



console.show();
let currentDate=new Date();
console.warn("抢购时间："+currentDate.getFullYear()+"年"+currentDate.getMonth()+"月"+ currentDate.getDate()+"日9点")

let  priceView=text("立即抢购").find()[1];


while(!priceView){
     sleep(1000);
    priceView=text("立即抢购").find()[1]
    log("查找入口中....")
   
}

console.error("已找到入口,待待抢购!!!!")

let endTime =new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 9).getTime();



let interval=setInterval(() => {
    if(new Date().getTime()+200 > endTime){
        priceView.click();
        clearInterval(interval)
    }

}, 100);
