let post = document.getElementById("post1"); 
let postsBox = document.getElementById("allposts") 
 
let imgurls = [ 
    "post1", 
    "post2", 
    "post3", 
    "post4",
    "post5"
] 
for(let i = 0; i < 100; i++){ 
    newpost = post.cloneNode(true); 
    imgpost = newpost.getElementsByClassName("postImg")[0] 
    imgpost.setAttribute("src", imgurls[i%5]) 
 
    postsBox.appendChild(newpost); 
}
