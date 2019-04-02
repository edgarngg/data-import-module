// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by methods-import.js.
import { name as packageName } from "meteor/igoandsee:methods-import";

// Write your tests here!
// Here is an example.
Tinytest.add('methods-import - example', function (test) {
  test.equal(packageName, "methods-import");
});
