import {
  someProp1,
  someProp2,
  someProp3,
  someProp4,
  someProp5,
  someProp6,
} from './choppedDownExport';
import VeryLongJavascriptFileThatIsIntendedToBeImported from './VeryLongJavascriptFileThatIsIntendedToBeImported';

console.info(VeryLongJavascriptFileThatIsIntendedToBeImported);
console.info(someProp1, someProp2, someProp3, someProp4, someProp5, someProp6);
