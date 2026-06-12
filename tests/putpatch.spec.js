import {test,expect} from "@playwright/test"
import { log } from "node:console";
const authdata={
"username" : "admin",
    "password" : "password123"
}

const payload= 
{
    "firstname" : "James",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}
test("Put example ", async({request}) => {
const response = await request.post("https://restful-booker.herokuapp.com/auth", {
        headers: { "Content-Type": "application/json" },
        data: authdata,
    });
    const responseInJson = await response.json();
    const authToken = responseInJson.token;
    console.log(authToken);

   const putResponse = await request.put("https://restful-booker.herokuapp.com/booking/1",
        {headers:{"Content-Type": "application/json", "Accept": "application/json", "Cookie":`token=${authToken}`},data:payload}
    )
   
const responseText = await putResponse.text();
console.log(responseText);
console.log(putResponse.status())
console.log(response.status())

const createBookingPayload= {
    "firstname" : "Aditya",
    "lastname" : "Kunjir",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}
const createBookingResponse= await request.post("https://restful-booker.herokuapp.com/booking",
{headers:{'Content-Type':'application/json'},data:createBookingPayload})

const responseInJsonBooking= await createBookingResponse.json()
console.log(responseInJsonBooking)
const bookingId= responseInJsonBooking.bookingid

console.log(bookingId)
const updateBookingPayload= {
    "firstname" : "Adi",
    "lastname" : "Kunjir",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "dinner"
}

const updateBookingResponse= await request.put("https://restful-booker.herokuapp.com/booking/"+bookingId,
    { headers: {"Content-Type": "application/json", "Accept": "application/json", "Cookie": "token=" +authToken }, data:updateBookingPayload})
 const updateJsonReposne= await  updateBookingResponse.json();
 console.log(updateJsonReposne)
})