
const fs = require('fs')
const chalk = require('chalk')
const getnotes = function(){
    return "your notes..."
}

const readNote =(title)=>{
    const notes = loadnotes()
    const findnote = notes.find((note)=> note.title === title)
    if(findnote){
        console.log(chalk.inverse.green(findnote.title))
        console.log(findnote.body)
    }else{
        console.log(chalk.red('No note found'))
    }

}

const listnotes = function(){
    console.log(chalk.inverse.green('your notes'))
    const notes = loadnotes()
        notes.forEach((x)=>{
            console.log(x.title)
        })

}

const removeNote = (title)=>{
    const notes = loadnotes()
    
    const notestokeep =notes.filter(function(note){
        return note.title!==title
    })
    // console.log(title)
    if(notes.length > notestokeep.length){
        console.log(chalk.inverse.green('Note removed'))
        savenotes(notestokeep)
    }else{
        console.log(chalk.inverse.red('No Note removed'))
    }
   
   
}

const addnotes =(title,body)=>{
    const notes = loadnotes()
    const duplicatenote=notes.find((note)=> note.title===title )
    if(!duplicatenote){
        notes.push({
            title:title,
            body:body
        })
        savenotes(notes)
// console.log("new note added")
console.log(chalk.inverse.green('Note Added'))


    }else{
        // console.log('already title present')
        console.log(chalk.inverse.red('title already present'))

    }
   

    savenotes(notes)
    



}

const savenotes = (notes)=>{
    const jsondata =JSON.stringify(notes)
    fs.writeFileSync('notes.json',jsondata)
    
}
const loadnotes = ()=>{
    try{
        const databuffer = fs.readFileSync('notes.json')
        const value =databuffer.toString()
        return JSON.parse(value)


    }catch(e){
        return []
    }
}
module.exports = {
    getnotes:getnotes,
    addnotes:addnotes,
    removeNote:removeNote,
    listnotes:listnotes,
    readNote:readNote

}