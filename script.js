async function getMatchdata() {
    
    return await fetch(("https://api.cricapi.com/v1/countries?aikey=2bb060bf-de56-42b6-955f-31a23ff95026"))
        .then(data => data.json())
        .then(data => {
            if(data.status != "success"){
                return;
            }

            const matchesList = data.data;

            if(!matchesList){
                return [];
            }

            const relevantData = matchesList.map(match => `${match.name},${match.status}`);
            console.log({relevantData});

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match}</li>`).join('');
            return relevantData;


        })
        .catch(e => console.log(e));
}

getMatchdata();