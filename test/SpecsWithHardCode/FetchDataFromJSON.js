/*   Fetch the Data From JSON file
*/

import { assert } from 'chai';
import data from '../users.json' assert {type:"json"}

console.log(data[0].name);