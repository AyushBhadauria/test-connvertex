import * as fs  from 'fs';
import * as path from 'path';
export async function fetchData(req, res, next) {
  console.log('Function Called.....');
  try {
    // Reading Initial Values
  const readRes =  fs.readFileSync(path.join(__dirname, '../files/initialValues.json'));
  const initialValue = readRes.toString();
  console.log('initial Value :', initialValue);
  res.send(initialValue);

  } catch(e) {
   console.log('exception occurs :', e);
   const err = new Error();
   err.message = 'Error Occured while reading file';
   res.send(err);

  }

}
export async function saveData(req, res, next) {
  console.log('Function Called for saving data.....');

  try {
  let data = req.body;
   data =  JSON.stringify(data);
  fs.writeFileSync(path.join(__dirname, '../files/savedValues.json'), data)
  console.log('data recieved :', data);
  res.send({success: true, message: "Data Updated Successfully;"});
  } catch(e) {
   console.log('exception occurs :', e);
   const err = new Error();
   err.message = 'Error Occured while writing file';
   res.send(err);

  }

}