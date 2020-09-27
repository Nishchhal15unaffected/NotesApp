const chalk=require('chalk');
const fs=require('fs');
const getNotes=function(){
	
	return 'hello..';
}
const addNote=(title,body)=>
{
		const notes= loadNotes();
		//const duplicateNotes=notes.filter((note)=>  note.title===title);
		const duplicateNotes=notes.find((note)=> note.title===title)
		if(!duplicateNotes)
		{
			notes.push(
		{
			title:title,
			body:body
		}

			);
		saveNotes(notes);		
		console.log(chalk.green.inverse("chal bc tu bhai hai apna add kr deta hu tera note khush"));

		}else{
			console.log(chalk.red.inverse("bhyyu tune is name ka phle bna diya title to jyada hosiyar mt bno"));
			}
		
}
//remove note function 
const removeNotes=(title)=>{
	notes=loadNotes();
	const chack=notes.filter((note)=>  note.title!==title);
	
	if(notes.length===chack.length)
	{
		console.log(chalk.red.inverse("not remove bc shi name to dal vo name hai hi ni list me apni"));
	}
	else{
	console.log(chalk.green.inverse("removing a note bc nya node bnana chahega"));
	saveNotes(chack);
}
}
// list note function
const listNotes=()=>{
	const notes=loadNotes();
	console.log(chalk.green("\t \t Your Notes:-\n"))
	console.log(chalk.red("le dek le yrr tere sare Notes kya yad rkega tu\n"));
	notes.forEach((note)=>{
		console.log(note.title);
	})
}
//read function 
const readNotes=(title)=>{
	const notes=loadNotes();
	const find=notes.find((note)=> note.title===title);
	if(find)
	{
		console.log(chalk.red.inverse("le bc tune jo note bole vo\n")+chalk.green.inverse(find.title)+chalk.red.inverse("\n mc dek le dek tera note lika huaa \n")+find.body);
	}
}
const saveNotes=(notes)=>
{
	const dataJSON=JSON.stringify(notes);
	fs.writeFileSync('notes.json',dataJSON);
}
const loadNotes=()=>
{
	try{
	const dataBuffer=fs.readFileSync('notes.json');
	const dataJSON = dataBuffer.toString();
	return JSON.parse(dataJSON);
}
catch(e)
{
	return[];
}
}

module.exports={
	getNotes:getNotes,
	addNote:addNote,
	removeNotes:removeNotes,
	listNotes:listNotes,
	readNotes:readNotes
}