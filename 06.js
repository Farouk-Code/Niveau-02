// String dans String

if (process.argv.length < 4) {
    console.log("Error");
} else {
    let firstString = process.argv[2];
    let stringToCompar = process.argv[3];

    if (firstString.includes(stringToCompar)) {
        console.log("true");
    } else {
        console.log("false");
    }
}