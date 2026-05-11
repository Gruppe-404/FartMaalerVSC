const apiUrl =
    "https://fartmaalerapi20260511134506-fnarawbzewapckck.switzerlandnorth-01.azurewebsites.net/api";

async function testApi()
{
    try {

        const response =
            await fetch(
                `${apiUrl}/Groups`
            );

        const data =
            await response.json();

        console.log(data);

        alert("API virker 🎉");
    }

    catch(error) {

        console.log(error);

        alert("API virker IKKE ❌");
    }
}

testApi();