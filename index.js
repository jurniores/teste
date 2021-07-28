const app = require("express")();



app.get("/",(req,res)=>res.send("Funcionando"));


app.listen(3000,()=>console.log("servidor rodando na porta 3000"))