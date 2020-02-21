// Load up Libraries
const AWS = require('aws-sdk');
const dotenv = require('dotenv')
var fs = require('fs');


AWS.config.update({
    region: 'ca-central-1'
});

// Initate DynamoDB instance
var docClient = new AWS.DynamoDB.DocumentClient();

const grabData = () => {
    /*
        grabData: Grab all data from Database
    */
   var item = []

    let params = {
        TableName: 'Listings'
    }
    docClient.scan(params, (err, data) => {
        if (err) {
            console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
        } else {        
            console.log("Scan succeeded.");
            data.Items.forEach((itemdata) => {
                item.push(itemdata)
                console.log("Item :", ++count,JSON.stringify(itemdata));
            });
    
            // continue scanning if we have more items
            if (typeof data.LastEvaluatedKey != "undefined") {
                console.log("Scanning for more...");
                params.ExclusiveStartKey = data.LastEvaluatedKey;
                docClient.scan(params, onScan);
            }
        }
    });
    var count = 0;    
}

const upload = (fname) => {
    /*
    upload: Upload new JSON file to Database.

    parameters:
    fname: Location for JSON file
    */
    let listingsData = JSON.parse(fs.readFileSync(fname, 'utf8'));
    listingsData.forEach((listing) => {
        let params = {
            TableName: 'Listings',
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


// Define our exports
exports.upload = upload;
exports.grabData = grabData