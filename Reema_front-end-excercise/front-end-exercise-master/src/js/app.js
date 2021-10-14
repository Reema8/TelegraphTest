const Utils = require('./utils');

new Utils();

var userComments;

// Fetching Data from json file
fetch('./static/db.json', {
        mode: 'no-cors'
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        userComments = data.comments;
        //sorted array 
        //userComments.sort( compare );
        appendData(userComments);
    })
    .catch(function(err) {
        console.log('error: ' + err);
    });

// Appending data in main div
function appendData(userComments) {
    var mainContainer = document.getElementById("myData");
    var commentsContainer = document.getElementById("commentsNumber");
    var commentsNumberDiv = document.createElement("span");
    commentsNumberDiv.innerHTML = +userComments.length;
    commentsContainer.appendChild(commentsNumberDiv);
    for (var i = 0; i < userComments.length; i++) {
        var div = document.createElement("div");
        div.className += "mainCommentSection";
        var userLikesDiv = document.createElement("div");
        div.innerHTML = '<div class="mainSection"><div class="userName"><span> ' + userComments[i].name + '</span></div><div class="userCommentSection">' + userComments[i].body + '</div></div><div class="column_mobile">' + userComments[i].likes + 'Likes</div>';
        mainContainer.appendChild(div);
    }
}

// Like button functionality
document.querySelectorAll('.likesSection').forEach(item => {
    item.addEventListener('click', event => {
        userComments.sort(compare);
        console.log(userComments);
        document.getElementById("myData").innerHTML = "";
        document.getElementById("commentsNumber").innerHTML = "";
        appendData(userComments);
    })
})

// compare function
function compare(a, b) {
    if (a.likes > b.likes) {
        return -1;
    }
    if (a.likes < b.likes) {
        return 1;
    }
    return 0;
}