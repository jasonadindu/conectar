
const paragraph = "our deepest fear is not that we are inadequate, our deepest fear is that we are powerful beyond measure, werjjlksjgajgjlksr";
generateUsersAndPopulateData(5);
const feeds = document.querySelector("#user-feeds");

 
async function generateUsersAndPopulateData(size)  {

    const userList = [];
    for(let index = 0; index < size; index++) {

        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        userList.push(data.results[0]);
    } 

    populateData(userList);
}

function populateData(data) {
    for(let user of data) {
        console.log(user)
        const { name, picture} = user;
        const { first, last } = name;
        const { thumbnail} = picture;
        const htmlStructure =  `<div class="post-user">
            <div class="top">
                <img src="${thumbnail}" alt="${first} ${last}" />
                <b>${first} ${last} </b>
            </div>
            <p class="post">${paragraph}</p>
        </div>`

        feeds.innerHTML += htmlStructure;
    }
}