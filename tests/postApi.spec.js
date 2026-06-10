const { test, expect } = require("@playwright/test");

const authdata={
"username" : "admin",
    "password" : "password123"
}
test("Post Method execution", async({ request }) => { 
    const response = await request.post("https://restful-booker.herokuapp.com/auth", {
        headers: { "Content-Type": "application/json" },
        data: authdata,
    });
    const responseInJson = await response.json();
    console.log(responseInJson);
    console.log("Response code Is : ", response.status());
    console.log("token is " + responseInJson.token);
    expect(responseInJson.token).not.toBeNull();
});


const payload= {
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}
test("Post Method with Heavy Payload", async ({request}) => {
    const response= await request.post("https://restful-booker.herokuapp.com/booking",
        {headers:{"Content-type":"application/json"},
        data:payload})
    const responseInJson = await response.json();
    console.log(responseInJson)
    console.log(" printing booking id = "+responseInJson.bookingid)
    console.log("checkin date is = " +responseInJson.booking.bookingdates.checkin)
   expect(responseInJson.booking.bookingdates.checkin).toBe(payload.bookingdates.checkin)
})