let city = document.getElementById('input-city');
let isActive = false;
function Search(){
    if(city.value !== ''){
        if(isActive === false){
            SearchRequest(city.value)
            document.getElementById('search').classList.remove('search-not-active');
            setTimeout(() => {
                document.getElementById('search-result').classList.add('search-result-show')
            }, 400);
            isActive = true;
        }
        else{
            document.getElementById('search-result').classList.remove('search-result-show')
            setTimeout(() => {
                document.getElementById('search').classList.add('search-not-active');
                Search()
            }, 400);
            isActive = false
        }

    } 



    
}



function SearchRequest(value){
    theUrl = 'https://api.weatherapi.com/v1/current.json?key=b298341e3e764873a50210039230303&q='+value
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    let data = JSON.parse(xmlHttp.responseText) 


    let icon = data['current']['condition']['icon']

    let temp_c = data['current']['temp_c']
    let temp_f = data['current']['temp_f']

    let title = data['current']['condition']['text']


    let wind = data['current']['wind_kph']
    let chance = data['current']['precip_in']
    let wed = data['current']['humidity']

    
    document.getElementById('icon').src = icon

    document.getElementById('temp_c').innerHTML = Math.round(temp_c)+'°C'
    document.getElementById('temp_f').innerHTML = Math.round(temp_f)+'°F'

    document.getElementById('title').innerHTML = title

    document.getElementById('wind').innerHTML = Math.round(wind)+'k/h'
    document.getElementById('chance').innerHTML = Math.round(chance)+'%'
    document.getElementById('wed').innerHTML = Math.round(wed)+'%'
}



