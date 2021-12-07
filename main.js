var button = document.querySelector('.submit');
var day = [];
var apiDate = [];
var apiWeather = [];
var apiTempMax = [];
var apiTempMin = [];

for(var i = 0; i<7; i++){
    theClass = `.day${i}`;
    day[i] = document.querySelector(theClass)
}

button.addEventListener('click', function(){
    fetch('https://www.7timer.info/bin/civillight.php?lon=-79.132&lat=42.296320&ac=0&unit=metric&output=json&tzshift=0')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        for(var i = 0; i < 7; i++){
            //getters/setters
            apiWeather[i] = data['dataseries'][i]['weather'];
            apiTempMin[i] = data['dataseries'][i]['temp2m']['min'];
            apiTempMax[i] = data['dataseries'][i]['temp2m']['max'];
            apiDate[i] = data['dataseries'][i]['date'];
            //pretty up data
            if(apiWeather[i] == 'pcloudy'){
                apiWeather[i] = 'partially cloudy';
            }
            
            //appendData
            day[i].innerHTML = apiWeather[i];
        }

        console.log(apiWeather);
        console.log(apiTempMin);
        console.log(apiTempMax);
        console.log(apiDate);
    })
})

// async function fetchPosts() {
//     try{
//     const response = await fetch('https://www.7timer.info/bin/civillight.php?lon=-79.132&lat=42.296320&ac=0&unit=metric&output=json&tzshift=0');
//     console.log(response);
//     if(!response.ok) {
//         throw new Error(`Failed to fetch posts: ${response.status}`)
//     }
    
//     return await response.json();
// } catch(e) {
//     console.log(e);
// }
// }

// async function fetchPosts(){
//     let data = await fetch('https://www.7timer.info/bin/civillight.php?lon=-79.132&lat=42.296320&ac=0&unit=metric&output=json&tzshift=0');
//     let main = await data.json();
//     console.log(main);
// }


// function listsWeather(postContainerElementId) {
//     const postContainerElement = document.getElementById(postContainerElementId);

//     if (!postContainerElement) {
//         return;
//     }

//     fetchPosts()
//         .then(posts => {
//             if(!posts) { 
//                 postContainerElement.innerHTML = 'No Posts';
//                 return;
//             }

//             for(const posts of posts) {
//                 postContainerElement.appendChild(postElement(post));
//                 console.log(post);
//             }

//         })
//         .catch(e => {
//         console.log(e);
//     });
// }