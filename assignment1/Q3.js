async function loaddata(){
    const data = await fetch("http://api.nobelprize.org/v1/prize.json");
    const bigdata = await data.json();
    

    let items = bigdata.prizes;
    for(let i=0, len = items.length; i<len; i++){
        if(items[i].year > 2000 && items[i].year < 2019){
            if(items[i].category === "chemistry"){
                let result = items[i];
                console.log(result);
            }
        } 
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    let users = [];

    try{
        users = await loaddata();
    }catch(e){
        console.log("error!");
        console.log(e);
    }

    console.log(users);
})