

async function getNames() {
     const name1 = await 26;
     const  name2 = await 65;

     return [name1,name2]
}
 getNames().then(function (data) {
     console.log(data)
 });
