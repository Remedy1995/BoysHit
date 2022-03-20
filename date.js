const currentDate=function(){
const date=new Date();
const today_date=date.getDate();
const month=date.getMonth()+1;
const year=date.getUTCFullYear()

const full_date=year+'0'+month+''+today_date;

return full_date;

}

module.exports=currentDate;