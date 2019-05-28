//document.body.onload = addElement;
   

function addPost (postText,Content,userName)  {  
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
  postContent.textContent = 'Post by ' + userName; 
  postContent.setAttribute('class', 'author');
  newDiv.append(postContent);

  //add one post div
  //document.getElementById("posts").appendChild(newDiv);
  defaultPosts = document.getElementById("userpost")
  document.body.insertBefore(newDiv, defaultPosts); 
}
function editNav(myUSerName)
{
  console.log("here I am");
  // headrBar = document.getElementById("signup-a");
  // headrBar.style.display="block"
  if(myUSerName=="")
  {
    console.log("only login")
    var myBar = document.getElementById("my-bar");
    var iconDiv = document.createElement('div');
    var logIcon = '<a onclick="window.location.href =\'login_in.html\' "><i class="fa fa-fw fa-sign-in"></i>Login/Signup</a>'
    iconDiv.innerHTML=logIcon
    myBar.appendChild(iconDiv);
  }
  else{
    console.log(myUSerName)
    var myBar = document.getElementById("my-bar");
    var iconDiv = document.createElement('div');
    var multilines = `<a class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-fw fa-user"></i>${myUSerName} <i class="fa fa-caret-down"></i></a> 
        <ul class="dropdown-menu"><li><a  onclick="jumpProfile()">profile</a></li></ul>
        <a  onclick="window.location.href =\'main_page.html\' "><i class="fa fa-fw fa-sign-out"></i>Logout</a> `;
    iconDiv.innerHTML=multilines
    // myBar.removeChild(icon);
    myBar.appendChild(iconDiv);
  }

}
function jumpProfile()
{
  console.log("jump",userName)
  var path = window.location.pathname;
  var page = path.split("/").pop();
  if(page != 'user_profile.html')
  {
    console.log("not profile",page)
    window.location.href = 'user_profile.html' + '#' +'Signed&' +userName;
  }
  else
  {
    // window.location.href = 'user_profile.html' + '#' +'Signed&' +userName;
    console.log("here is profile")
  }
}