// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by data-import-module.js.
import { name as packageName } from "meteor/igoandsee:data-import-module";

// Write your tests here!
// Here is an example.
Tinytest.add('data-import-module - example', function (test) {
  test.equal(packageName, "data-import-module");
});
