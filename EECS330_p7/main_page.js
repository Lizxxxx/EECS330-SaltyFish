//document.body.onload = addElement;
   

function addPost (postText,Content) {  
  var newDiv = document.createElement("div");  
  newDiv.setAttribute('class', 'post');
  // add post's category
  var category = document.createElement("SPAN");
  category.textContent = 'Daily';
  newDiv.appendChild(category); 
  // add post's Title
  var title = document.createElement("LABEL");
  title.textContent = postText;
  title.setAttribute('class', 'post-title');
  newDiv.appendChild(title);  
  //add post's content
  var postContent = document.createElement("p");
  postContent.textContent = Content; 
  //postContent.setAttribute('class', 'post-content');
  newDiv.append(postContent);
  //add post's author name
  var postContent = document.createElement("p");
  postContent.textContent = 'Post by Guo'; 
  postContent.setAttribute('class', 'author');
  newDiv.append(postContent);

  //add one post div
  //document.getElementById("posts").appendChild(newDiv);
  defaultPosts = document.getElementById("userpost")
  document.body.insertBefore(newDiv, defaultPosts); 
}