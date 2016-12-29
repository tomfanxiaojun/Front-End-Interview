import {firstName, lastName, year} from './export';

function setName(ele) {
	console.log(`firstName:${firstName},lastName:${lastName},old:${year}`);
	ele.text=`firstName:${firstName},lastName:${lastName},old:${year};
}