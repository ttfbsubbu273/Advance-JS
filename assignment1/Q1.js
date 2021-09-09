let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let request = new XMLHttpRequest();

request.open('GET', "https://api.github.com/search/repositories?q=", true);

request.onload = function(){
    let data = JSON.parse(this.response);
    console.log(data);


    $.each(data, function(i, status){
        return {
            name: status.name,
            full_name: status.full_name,
            private: status.private,
            owner:{
                login: status.login,
                name: status.url
            },
            licenseName: {
                url: status.url
            },
            score: status.url,
            numberofBranches: status.branches_url
        }
    });
}

request.send();