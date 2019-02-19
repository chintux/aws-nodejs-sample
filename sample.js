/*
 * Copyright 2013. Amazon Web Services, Inc. All Rights Reserved.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
**/

// Load the SDK and UUID
var AWS = require('aws-sdk');
var uuid = require('node-uuid');

var marketplacemetering = new AWS.MarketplaceMetering({region: 'us-east-1'});


// Create a bucket and upload something into it
var bucketName = 'node-sdk-sample-' + uuid.v4();
var keyName = 'hello_world.txt';


var params = {
  DryRun: false, /* required */
  ProductCode: '72m8mmj6t2dgb8dfru8o3ancp', /* required */
  Timestamp: new Date, /* required */
  UsageDimension: 'AdminUser', /* required */
  UsageQuantity: 1000005 /* required */
};
marketplacemetering.meterUsage(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
