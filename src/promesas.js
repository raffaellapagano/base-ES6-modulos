//para Ajax Codigo espera que esperas algo y mientras hace otra cosa

const promesa = new Promise((resolve, reject) =>{
    //accion que se ejecutará
    // resolve();
    // reject();
    setTimeout(() =>{
        const exito = true;
        if(exito){
            resolve("La operacio está ok");
        }else{
            reject("La operacio NO está ok");
        }
    }, 4000)
});

promesa.then((mensaje) =>{
    alert(mensaje);
})

promesa.catch((mensaje) =>{
    alert(mensaje);
});