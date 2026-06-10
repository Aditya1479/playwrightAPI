const { test, expect } = require("@playwright/test");

test("Get APi Test", async ({ request }) => {
    const response = await request.get("https://dotesthere.com/api/users/1");

    const responseStatusCode = response.status()
    console.log("Status Code " + responseStatusCode);
    expect(responseStatusCode).toBe(200)
    expect(response.ok()).toBeTruthy()

    const resposneStatusText = response.statusText();
    console.log("Response status Text " + resposneStatusText);
    expect(resposneStatusText).toEqual("OK")

    const responseInJson = await response.json();
    console.log(responseInJson);
    expect(responseInJson).toHaveProperty("data.id", 1)
    expect(responseInJson).toHaveProperty("data.email", "ankur.automation@dotesthere.com")
    expect(responseInJson.data.id).toBe(1);
    expect(responseInJson.data.email).toBe(
        "ankur.automation@dotesthere.com"
    );
    expect(responseInJson.data.first_name).toBe("Ankur");


    console.log("==========================================================");

    const responeHeaders = response.headers()
    console.log(responeHeaders);
    console.log("==========================================================");

    const headedResponseInArray = response.headersArray()
    console.log(headedResponseInArray);



});


