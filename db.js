let mongosse=require('mongoose')

const mongouril='mongodb+srv://jaskirattt2:(123456789)@cluster0.bn5i0.mongodb.net/hintxxbitesfooddatabase?retryWrites=true&w=majority&appName=Cluster0'
 async function dbconnection(){

    await mongosse.connect(mongouril).then(()=>{
        console.log('database connected')
    }).catch((err)=>{
        console.log('data base not cconnect due to this error',err)
    })

}

module.exports=dbconnection
