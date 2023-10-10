// Створи функцію offerRoom, яка буде приймати 3 callback функції:
// getClientStatus
// offerStandardRoom
// offerLuxuriousRoom
// Якщо getClientStatus повертає рядок vip - повернути виклик offerLuxuriousRoom,
// інакше порекомендувати простий номер (виклик offerStandardRoom).
const getClientStatus = () => "vip";
const offerStandardRoom = () => "Standard room";
const offerLuxuriousRoom = () => "Luxury room";

function offerRoom(getClientStatus, offerStandardRoom, offerLuxuriousRoom) {
  // write code here
  // console.log(getClientStatus());
  // console.log(offerLuxuriousRoom())
  if (getClientStatus() === 'vip') {
    return offerLuxuriousRoom();
  } else {
    return offerStandardRoom();
  }
}

offerRoom(getClientStatus, offerStandardRoom, offerLuxuriousRoom);