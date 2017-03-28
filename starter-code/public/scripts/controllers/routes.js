'use strict';

console.log('Hello World!');
page('/', articleController.init);
page('/about', aboutController.init);

// TODO: Configure routes for this app with page.js, by registering each URL your app can handle,
// linked to a a single controller function to handle it:
page();
// TODO: What function do you call to activate page.js? Fire it off now, to execute
