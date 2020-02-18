// Load up Libraries
const AWS = require('aws-sdk');
const dotenv = require('dotenv')
var fs = require('fs');

const result = dotenv.config()

AWS.config.update({
    region: result.parsed.aws_region
});

// Initate DynamoDB instance
var docClient = new AWS.DynamoDB.DocumentClient();

// Tasks:
// 1. Create an upload function (DONE)
// 2. Create a get function (TBD)
// 3. Create an update function (TBD)
// 4. Create a delete function (TBD)

function upload(fname){
    /*
    upload: Upload new JSON file to Database.

    parameters:
    fname: Location for JSON file
    */
    let listingsData = JSON.parse(fs.readFileSync(fname, 'utf8'));
    listingsData.forEach((listing) => {
        let params = {
            TableName: result.parsed.aws_table_name,
            Item: {
                "address": listing.address,
                "city": listing.city,
                "state": listing.state,
                "price": listing.price,
                "floorSpace": listing.floorSpace,
                "extras": 
                {
                    "elevator": listing.extras.elevator,
                    "gym": listing.extras.gym,
                    "finished_basement": listing.extras.finished_basement,
                    "pool": listing.extras.pool
                },
                "homeType": listing.homeType,
                "image": listing.image
            }
        };

        docClient.put(params, (err, data) => {
            if (err) {
                console.log("Unable to add listing", listing.address, ". Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log("Item succeeded:", data);
            }
        });
    });
}