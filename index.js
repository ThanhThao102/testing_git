
const overNight = 200
const checkIn = new Date().getHours();
const checkOut = new Date().getHours();

function additionalPriceHour(checkIn, checkOut) {
  if (
    (checkIn+checkOut) <= 24){ 
      return additionalPriceHour = 0; 
   } else {
      return additionalPriceHour = ((checkIn+checkOut)-24)*30;
  }
}
function hotelPrice(checkIn, checkOut) {
  return hotelPrice = overNight + additionalPriceHour(checkIn, checkOut);
 }

console.log(hotelPrice(checkIn, checkOut));


// Test case 1
// TC1: total = 200k
//const checkIn = new Date('2022-04-06 13:00:00').getHours();
//const checkOut = new Date('2022-04-07 11:00:00').getHours();
 
// Test case 2
// TC1: total = 230k
//const checkIn = new Date('2022-04-06 13:00:00').getHours();
//const checkOut = new Date('2022-04-07 13:00:00').getHours();
 
// Test case 3
// TC1: total = 290k
// const checkIn = new Date('2022-04-06 13:00:00').getHours();
// const checkOut = new Date('2022-04-07 14:00:00').getHours();
 
// Test case 4
// TC1: total = 480k
// const checkIn = new Date('2022-04-06 13:00:00').getHours();
// const checkOut = new Date('2022-04-07 20:00:00').getHours();
 
// Test case 5
// TC1: total = 230k
// const checkIn = new Date('2022-04-06 10:00:00').getHours();
// const checkOut = new Date('2022-04-07 11:00:00').getHours();
 