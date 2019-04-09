import XLSX from 'xlsx';
import { check } from 'meteor/check';

Meteor.methods({

  dataIsBinaryString: (bstr, fileName) => {
    check(bstr, String);
    check(fileName, String);
    const workBook = XLSX.read(bstr, { type: 'binary' });
    const workSheet = workBook.Sheets[workBook.SheetNames[0]];
    console.log('select first WS',!!workSheet);
    const usersJson = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
    console.log('content', usersJson)
    Meteor.call('createUsersBatch', usersJson, function(err, response) {
      if(err) return err;
      if(response == 'success') {
        console.log('created users');
      };
    })
    return workBook
  },

  dataIsArrayBuffer: (ab, fileName) => {
    check(ab, Uint8Array);
    check(fileName, String);
    return XLSX.read(ab, { type: 'array' });
  }

});