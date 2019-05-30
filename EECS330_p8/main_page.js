//document.body.onload = addElement;
 
class UserProfile {
  constructor(name) {
      this.name = name;
      this.email = "";
      this.password = "";
      this.titleKeys = [];
      this.postList = [];
  }
  // Adding a method to the constructor
  greet() {
      return `${this.name} says hello.`;
  }
}
class PostInfo
{
  constructor(name) {
  this.titleKey = name;
  this.title = "";
  this.content = "";
  this.email = "";
  this.phone = "";
  this.otherContect = "";
  this.payment = "";
  this.schedule = "";
  this.categories = [];
  }
}

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

//this function is for user_profile page to show user's posts
function showPost (postText,userName,titleKey)  { 
var newli = document.createElement("li"); 
newli.textContent = postText;
//View
var newLabelView=document.createElement("label"); 
//newLabelView.textContent = "View";
var viewA=document.createElement("a"); 
viewA.textContent="View"
viewA.href = "post_view.html#Signed&"+userName+'&'+titleKey;
newLabelView.appendChild(viewA)
//newLabelView.href = "post_view.html#Signed&"+userName+'&'+titleKey;

newli.appendChild(newLabelView);
//Delete
var newSpanDelete=document.createElement("span"); 
//newSpanDelete.textContent = "Delete";
newSpanDelete.onclick=function(){
//delete a post in local storage and refresh
deletePost.call(this,titleKey);
window.location.reload()
}
var deleteA=document.createElement("a"); 
deleteA.textContent="Delete"
// deleteA.href = "user_profile.html#Signed&"+userName+'&'+titleKey;
deleteA.href = "user_profile.html#Signed&"+userName;
newSpanDelete.appendChild(deleteA)

newli.appendChild(newSpanDelete);

var posts_ul = document.getElementById("user_posts");
posts_ul.appendChild(newli)
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
    var logIcon = '<a href="#" onclick="window.location.href =\'login_in.html\' "><i class="fa fa-fw fa-sign-in"></i>Login/Signup</a>'
    iconDiv.innerHTML=logIcon
    myBar.appendChild(iconDiv);
  }
  else{
    console.log(myUSerName)
    var myBar = document.getElementById("my-bar");
    var iconDiv = document.createElement('div');
    var hrefProt = '#' +'Signed&' +myUSerName;
    var multilines = `<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-fw fa-user"></i>${myUSerName} <i class="fa fa-caret-down"></i></a> 
        <ul class="dropdown-menu"><li><a  onclick="jumpProfile()" href="${hrefProt}">profile</a></li></ul>
        <a href="#" onclick="window.location.href =\'main_page.html\' "><i class="fa fa-fw fa-sign-out"></i>Logout</a> `;
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
function getProfile(keyName)
{
  var userdata = JSON.parse(localStorage.getItem(keyName));
  var userProfile = new UserProfile(keyName);
  userProfile.email = userdata[1].value;
  userProfile.password = userdata[2].value;
  for (i = 3; i < userdata.length; i++) { 
    tempTitle = userdata[i].value
    userProfile.titleKeys.push(tempTitle)
    var postInfo = getPostClass(tempTitle)
    userProfile.postList.push(postInfo);
  }
  // console.log("userProfile",userProfile)
  return userProfile
}
function getPostClass(titleKey)
{
  var postData = JSON.parse(localStorage.getItem(titleKey));
  var res = new PostInfo(titleKey);
  res.title = postData[0].value
  res.content = postData[1].value
  res.email = postData[2].value
  res.phone = postData[3].value
  res.otherContact = postData[4].value
  res.payment = postData[5].value
  res.schedule = postData[6].value
  res.categories = postData[7].value
  return res
}
function exampleTest()
{
  var profile = getProfile(userName);
  console.log("example",profile)
}

function deletePost(postKey)
{
var infos = postKey.split("-")
var infoUser = infos[0]
deleteUserPost(infoUser,postKey)
localStorage.removeItem(postKey);
}
function deleteUserPost(infoUser,postKey)
{
var userdata = JSON.parse(localStorage.getItem(infoUser));
var targetIndex = -1;
for(i=0;i<userdata.length;i++)
{
if((userdata[i].name == "title") && (userdata[i].value==postKey)){
targetIndex=i
}
}
if(targetIndex != -1)
{
userdata.splice(targetIndex,1)
}
var newUserData = JSON.stringify(userdata);
localStorage.setItem(infoUser,newUserData); 
}