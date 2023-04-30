function addMilk(count){
   
    setTimeout(()=>{
    console.log(`addedc milk`);
     
    }, 2000)

}

function addSugar(count){
     setTimeout(()=>{
     
 console.log(`added  ${count} sugar`);
    },1000)
}

function addExtra(what, count){
     setTimeout(()=>{
     
     console.log(`added  ${what} ${count} extra`);
    }, 190)

}

function orderStatus(status){

     
      console.log(`your order is  ${status} `);


}

function newOrder ( milkCount, sugarCount, extraWhat= '', extraCount = 0){
 
 console.log( `your order is milk : ${milkCount}, sugar :${sugarCount}  ${extraWhat && extraCount ? `,${extraWhat} : ${extraCount}`: ""}` )


  addMilk(milkCount,);
  addSugar(sugarCount)
   if (extraWhat !== '' && extraCount !== 0) {
    addExtra(extraWhat, extraCount);
  }
    orderStatus("ready")

}


newOrder(2,2, )