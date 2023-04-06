process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('Quel âge a-tu?')

process.stdin.on('data', (text)=>{
    if (text >0 && text<100){
    console.log('Tu as ' + text + ' ans')
    //console.log('Tu es né en : ' +(2023 - text) )
    process.exit()}
    else{
        console.log('votre age doit etre compris entre 0 et 99 ans ')

    }
})
