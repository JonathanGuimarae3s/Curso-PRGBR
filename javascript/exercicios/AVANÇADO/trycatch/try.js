let nome = "matos"
try {
 if(nome == "")   
 {
     throw "error error error error";
 }
 console.log(`boa noite, ${nome}`);
} catch (error) {
    console.log(error)
}
finally{
    console.log(`KKKK`);
}