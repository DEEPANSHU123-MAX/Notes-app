






// console.log(getnotes());

const chalk = require('chalk')
const yargs = require('yargs')
const notes =require('./notes')

// console.log(chalk.inverse.red('Error!'))
// console.log(chalk.inverse.green('Succes!'))
// const command =process.argv[2]
//  if (command === 'add'){
//      console.log("added successfully")
//  }else if(command === 'remove'){
//      console.log("remove successfully")
//  }
// console.log(process.argv)


yargs.command({
    command:"add",
    describe:"add a note",
    handler(){
        console.log("Adding new note successfull")
    }
})

yargs.command({
    command:"remove",
    describe:"remove a note",
    handler(){
        console.log("Remove a note successfull")
    }
})


yargs.command({
    command:"Add",
    describe:"Add a list",
    builder:{
        title:{
            describe:"note title",
            demandOption:true,
            type: 'string'

        },
        body:{
            describe:"Body of note",
            demandOption:true,
            type: 'string'

        }
    },
    handler(argv){
       notes.addnotes(argv.title , argv.body)
    }
})

yargs.command({
    command:"Remove",
    describe:"Remove a title",
    builder:{
        title:{
            describe:"note title",
            demandOption:true,
            type: 'string'

        }
      
    },
    handler(){
       notes.removeNote( )
    }
})

yargs.command({
    command:"listnotes",
    describe:"List the title of every note",
   
    handler(){
       notes.listnotes()
    }
})

yargs.command({
    command:"Read",
    describe:"Read a title",
    builder:{
        title:{
            describe:"note title",
            demandOption:true,
            type: 'string'

        }
      
    },
    handler(argv){
       notes.readNote(argv.title )
    }
})

yargs.parse()
