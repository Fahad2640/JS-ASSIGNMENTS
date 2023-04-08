//Date Handling - 1

function is_date(date){
return date instanceof Date;
}
let myDate = new Date();
let myString = '2023-04-05';
console.log(is_date("October 13, 2014 11:13:00"));
console.log(is_date(new Date(86400000)));
console.log(is_date(new Date(99,5,24,11,33,30,0)));
console.log(is_date([1, 2, 4, 0]));
//******************************************************





//2
function getCurrentDate(sep) 
{
    const currentDate = new Date();
    const day = String(currentDate.getDate())
    const month = String(currentDate.getMonth() + 1) 
    const year = currentDate.getFullYear();
    return `${month}${sep}${day}${sep}${year}`;
}
console.log(getCurrentDate('/')); 
//**********************************************************






//3
function getDaysInMonth(month, year) {
    return new Date(year, month,0).getDate();
  }
console.log(getDaysInMonth(1, 2012));
console.log(getDaysInMonth(2, 2012));
console.log(getDaysInMonth(9, 2012));
console.log(getDaysInMonth(12, 2012));
//**********************************************************




//4
function month_name(date) {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const monthNumber = date.getMonth();
    return monthNames[monthNumber];
  }
  console.log(month_name(new Date("10/11/2009")));
  console.log(month_name(new Date("11/13/2014")));
//**********************************************************




//5
function compareDates(date1, date2) {
    if (date1 < date2) {
      console.log("date1 < date2")
    } else if (date1 > date2) {
        console.log("date1 > date2");
    } else {
        console.log("date1 = date2");
    }
  }
  compareDates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00'));
  compareDates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00'));
  compareDates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01'));
//**********************************************************




//6
function add_minutes(date, minutes) {
    const millisecondsToAdd = minutes * 60 * 1000;
    const timestamp = date.getTime();
    const newTimestamp = timestamp + millisecondsToAdd;
    return new Date(newTimestamp);
  }
  console.log(add_minutes(new Date(2014,10,2), 30).toString());
//**********************************************************




//7
function is_weekend(date) {
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      console.log('weekend')
    } else {
        console.log('not a weekend');
    }
  }
is_weekend(new Date('Nov 15, 2014'));
is_weekend(new Date('Nov 16, 2014'));
is_weekend(new Date('Nov 17, 2014'));
//**********************************************************








//8
function date_diff_indays(date1, date2) {
    const difference =  date2.getTime()-date1.getTime();
    const daysDifference = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return daysDifference;
  }
  console.log(date_diff_indays(new Date('04/02/2014'), new Date('11/04/2014')));
  console.log(date_diff_indays(new Date('12/02/2014'), new Date('11/04/2014')));
//**********************************************************





//9
function lastday(year,month) {
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    return lastDayOfMonth;
  }
  console.log(lastday(2014,0));
  console.log(lastday(2014,1));
  console.log(lastday(2014,11));
//**********************************************************



//10
function yesterday(datee) {
    let ye=new Date(datee);
    datee.getDate()-1;
    return ye;
  }
  console.log(yesterday(new Date('Nov 15, 2014')));

  console.log(yesterday(new Date('Nov 16, 2015')));
  
  console.log(yesterday(new Date('Nov 17, 2016')));
//**********************************************************
  



//11
function getMaxDate(dates) {
    const maximumDate = dates.reduce(function(a, b) {
      return a > b ? a : b;
    });
    return maximumDate;
  }
  const datesArr = [new Date('2015/02/01'), new Date('2015/02/02'), new Date('2015/01/03')];
  const maxiDate = getMaxDate(datesArr);
  console.log(`Max Date: ${maxiDate}`);
//**********************************************************




//12
function getMinDate(dates) {
    const minDate = dates.reduce(function(a, b) {
      return a < b ? a : b;
    });
    return minDate;
  }
  const dates = [new Date('2015/02/01'), new Date('2015/02/02'), new Date('2015/01/03')];
  const maxDate = getMinDate(dates);
  console.log(`Min Date: ${maxDate}`);
//**********************************************************  
  
  
  
  


  
