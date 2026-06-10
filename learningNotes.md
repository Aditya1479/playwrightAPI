request fixture is used for API Testing it needs to passed in arguments
test("Get APi Test", async({request})=>{})

GET Request:=
//it will visit the URL
await request.get("https://dotesthere.com/api/users/1");

//it will give you the response status code
response.status()

//it will return you the status code text
response.statusText()

//will return the response in JSON format
response.json();

//All different type of assertions to verify the response
    expect(responseInJson).toHaveProperty("data.id", 1)
    expect(responseInJson).toHaveProperty("data.email", "ankur.automation@dotesthere.com")
    expect(responseInJson.data.id).toBe(1);
    expect(responseInJson.data.email).toBe(
        "ankur.automation@dotesthere.com"
    );
    expect(responseInJson.data.first_name).toBe("Ankur");

//Returning the Headers
response.headers()
response.headersArray() //returning the headers in Array Format.