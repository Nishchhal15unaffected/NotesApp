//const validator=require("validator");
//console.log(validator.isEmail('nish@gmail.com'));
const chalk=require("chalk");
//console.log(chalk.black('hello word!'));
//console.log(process.argv[2]);
//const command  =process.argv[2];
//if(command=="add")
//{
//	console.log("haw bhyyu add kr ra");
//}
//else{
//	console.log("sale add command dal bc");

//}*/
const Notes=require('./Notes.js');
const yargs=require("yargs");
// change yargs version 
yargs.version("1.2.3");
//adding a own command
yargs.command({
	command:"add",
	describe:"Add new note",
	builder:{
			title:{
				discribe:" add title ",
				demandOption:true,
				type:"string"
			},
		body:{
			describe:"write your content",
			demandOption:true,
			type:"string"
		}
	},

	handler(argv)
	{
		Notes.addNote(argv.title,argv.body);
	}

	
})
//adding a remove command
yargs.command({
	command:"remove",
	describe:"remove a note",
	builder:{
		title:
		{
			discribe:"write title node to be remove ",
			demandOption:true,
			type:"string"
		}
	},

	handler(argv)
	{
		Notes.removeNotes(argv.title);		
	}
})
//adding a list command 
yargs.command({
	command:"list",
	describe:"adding in list",
	handler()
	{
		Notes.listNotes();
	}
})
//adding a read command 
yargs.command({
	command:"read",
	describe:"read your notes",
	builder:
{	title:
	{
		discribe:"read your notes",
		demandOption:true,
		type:"string"
	}
},
	handler(argv)	
	{
		Notes.readNotes(argv.title);
	}
})
// its note ideal thats why we use yargs.parse
//console.log(yargs.argv);
yargs.parse();