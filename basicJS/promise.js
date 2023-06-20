async function printabc(){
    try{
        console.log('a');

        console.log('b');

        const c = new Promise((resolve,reject)=>{
            setTimeout(()=>resolve('c'),3000)
        })

        let res=await c;
        console.log(res)

        const d = new Promise((resolve,reject)=>{
            setTimeout(() => resolve('d'), 0);
        })
        let res2=await d;
        console.log(res2)

        console.log('e');

    }catch(err){
        console.log(err)
    }
}
printabc()