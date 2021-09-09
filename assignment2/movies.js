async function loaddata(){
    const data = await fetch("https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json");
    const bigdata = await data.json();
    

    // let items = bigdata.prizes;
    // for(let i=0, len = items.length; i<len; i++){
    //     if(items[i].year > 2000 && items[i].year < 2019){
    //         if(items[i].category === "chemistry"){
    //             let result = items[i];
    //             console.log(result);
    //         }
    //     } 
    // }
    for(let i=0, len = bigdata.length; i<len; i++)
    return bigdata;
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