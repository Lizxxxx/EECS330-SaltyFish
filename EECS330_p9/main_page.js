//document.body.onload = addElement;
 var CurrentPosts=[]
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
  this.otherContact = "";
  this.payment = "";
  this.schedule = "";
  this.categories = [];
  this.postTime = 0;
  }
  getUSer()
  {
    var infos = this.titleKey.split("-")
    var infoUser = infos[0]
    return infoUser
  }
  getContacts()
  {
    var targetList = []
    if(this.email!="")
    {
      targetList.push("email")
    }
    if(this.phone != "")
    {
      targetList.push("phone")
    }
    if(this.otherContact !="")
    {
      targetList.push("otherContact")
    }
    return targetList
  }
  getContactInfo()
  {
    if(this.email!="")
    {
      return this.email
    }
    if(this.phone != "")
    {
      return this.phone
    }
    if(this.otherContact !="")
    {
      return this.categories.otherContact
    } 
  }
  getPostDay()
  {
    var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var s = this.postTime
    var date = new Date(s)
    var res = weekday[date.getDay()]+" "+(date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear()
    return res
  }
  getSche()
  {
    if(this.schedule=="both"){
      return "workdays and weekends"
    }
    return this.schedule
  }
}

function addPost (postText,Content,Tags,userName,titleKey,myDay)  {  
  var newDiv = document.createElement("div");  
  newDiv.setAttribute('class', 'post');
  // newDiv.onclick = postClick;
  newDiv.setAttribute("onclick", "postClick(this)");
  newDiv.setAttribute("name", titleKey);

  // newDiv.addEventListener('click', postClick());
  // add post's category
  var i=0
  for(i;i<Tags.length;i++)
  {
    var category = document.createElement("SPAN");
    category.textContent = Tags[i];
    newDiv.appendChild(category); 
  }
  // add post's Title
  var title = document.createElement("LABEL");
  title.textContent = postText;
  title.setAttribute('class', 'post-title');
  newDiv.appendChild(title);  
  //add post's content
  var postDay = document.createElement("p");
  postDay.textContent = myDay; 
  postDay.setAttribute('class', 'post-day');
  newDiv.append(postDay);
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
  // defaultPosts = document.getElementById("userpost")
  // document.body.insertBefore(newDiv, defaultPosts); 
  defaultPosts = document.getElementById("postMenu")
  // defaultPosts.insertBefore(newDiv,defaultPosts.childNodes[0])
  defaultPosts.appendChild(newDiv)
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
if(confirm("Are you sure to delete the post?"))
{
  deletePost.call(this,titleKey);
  window.location.reload()
}
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
  // headrBar = document.getElementById("signup-a");
  // headrBar.style.display="block"
  // exampleTest()
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
  console.log("userProfile",userProfile)
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
  if(postData.length >8)
  {
    res.postTime = postData[8].value
  }  
  return res
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
/*
use allStorage function to get the all postInfo List by time
*/
function allStorage()
{
    keys = Object.keys(localStorage)
    console.log("allKeys",keys)
    var i=0
    var j=0
    allUserInfo = []
    allPostInfo = []
    timeInfos = []
    allPostInfoByTime = []
    for (i;i<keys.length;i++)
    {
        key = keys[i]
        var keyData = JSON.parse(localStorage.getItem(key))
        if(keyData[0].name == "user-name")
        {
            var temp = getProfile(key)
            allUserInfo.push(temp)
            // console.log("user info",keyData)
        }
        if(keyData[0].name=="title")
        {
          var temp = getPostClass(key)
          allPostInfo.push(temp)
          timeInfos.push(temp.postTime)
          // console.log("post info",keyData)                    
        }
    }
    sortWithIndeces(timeInfos);
    for(j;j<timeInfos.length;j++)
    {
      allPostInfoByTime.push(allPostInfo[timeInfos.sortIndices[j]])
    }
    // console.log(timeInfos)
    // console.log(timeInfos.sortIndices);
    // console.log("userList:",allUserInfo)
    // console.log("postList:",allPostInfo)
    console.log("postList by time:",allPostInfoByTime)
    return allPostInfoByTime
}
function filterByCategory(postList,filterInfo)
{
  var targetList = []
  var i=0
  for(i;i<postList.length;i++)
  {
    var j=0
    var temp = postList[i]
    if(temp.categories.includes(filterInfo)){
      targetList.push(temp)
    }
  }
  return targetList
}
function sortWithIndeces(toSort) {
  for (var i = 0; i < toSort.length; i++) {
    toSort[i] = [toSort[i], i];
  }
  toSort.sort(function(left, right) {
    return left[0] > right[0] ? -1 : 1;
  });
  toSort.sortIndices = [];
  for (var j = 0; j < toSort.length; j++) {
    toSort.sortIndices.push(toSort[j][1]);
    toSort[j] = toSort[j][0];
  }
  return toSort;
}
function filterByDay(postList,dayNum)
{
  var daySecond = 86400 * dayNum
  var targetList = []
  var i=0
  var nowTime = new Date().getTime()/1000
  for(i;i<postList.length;i++)
  {
    var post = postList[i]
    temp = postList[i].postTime/1000
    if((nowTime - temp)<=daySecond)
    {
      targetList.push(post)
    }
  }
  return targetList
}
function filterByContact(postList,method)
{
  var i =0
  var targetList = []
  for (i;i<postList.length;i++)
  {
    var temp = postList[i]
    var methods = temp.getContacts()
    if(methods.includes(method))
    {
      targetList.push(temp)
    }
  }
  return targetList
}
function filterByPayment(postList,targetMethod)
{
  var i =0
  var targetList = []
  for (i;i<postList.length;i++)
  {
    var temp = postList[i]
    var method = temp.payment
    if(method==targetMethod )
    {
      targetList.push(temp)
    }
  }
  return targetList
}
function filterBySchedule(postList,target)
{
  var i =0
  var targetList = []
  for (i;i<postList.length;i++)
  {
    var temp = postList[i]
    var method = temp.schedule
    if(method==target )
    {
      targetList.push(temp)
    }
  }
  return targetList
}
function exampleTest()
{
  // localStorage.clear() // for clearing the local storage
  CaInfo = "Daily"//Study,Casual,Daily,Other
  dayNum = 1
  ConInfo = "email"//email,phone,otherContact
  payInfo =  "Venmo/Paypal"//Cash,Check,Chase,Venmo/Paypal,Other
  schInfo = "Weekends" //Weekends,Workdays,both
  var posts1 = allStorage()//return the post list by time
  var posts2 = filterByCategory(posts1,CaInfo)
  console.log("filtered by ",CaInfo,": ",posts2)
  var posts3 = filterByDay(posts2,dayNum)
  console.log("filtered by day",dayNum,": ",posts3)
  var posts4 = filterByContact(posts3,ConInfo)
  console.log("filtered by contact",ConInfo,": ",posts4)
  var posts5 = filterByPayment(posts4,payInfo)
  console.log("filtered by payment",payInfo,": ",posts5)
  var posts6 = filterBySchedule(posts5,schInfo)
  console.log("filtered by Schedule",schInfo,": ",posts6)

}
function dispalyAllPosts()
{
  var postList =allStorage();
  displayPosts(postList)
  // var i=postList.length-1;
  // for(i;i>=0;i--)
  // {
  //   var tempPost = postList[i]
  //   // console.log(tempPost.title,tempPost.content,tempPost.getUSer())
  //   addPost (tempPost.title,tempPost.content,tempPost.getUSer())  
  // }

}
function displayPosts(postList)
{
  blockPosts();
  var i=0;
  for(i;i<postList.length;i++)
  {
    var tempPost = postList[i]
    // console.log(tempPost.title,tempPost.content,tempPost.getUSer())
    addPost (tempPost.title,tempPost.content,tempPost.categories,tempPost.getUSer(),tempPost.titleKey,tempPost.getPostDay())  
  }
  CurrentPosts = postList
  createPage(CurrentPosts.length)
}
function blockPosts()
{
  var myNode = document.getElementById("postMenu");
while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}
}
function displayFiltered()
{
  var DayState = document.getElementById("filterDay").checked
  var EmailState = document.getElementById("filterEmail").checked
  var CashState = document.getElementById("filterCash").checked
  var VenmoState = document.getElementById("filterVenmo").checked
  var wDayState = document.getElementById("filterWeekends").checked

  var filteredPosts = CurrentPosts
  if(DayState)
  {
    filteredPosts=filterByDay(filteredPosts,3)
  }
  if(EmailState)
  {
    filteredPosts = filterByContact(filteredPosts,"email")
  }
  if(CashState)
  {
    filteredPosts = filterByPayment(filteredPosts,"Cash")
  }
  if(VenmoState)
  {
    filteredPosts = filterByPayment(filteredPosts,"Venmo/Paypal")
  }
  if(wDayState)
  {
    filteredPosts = filterBySchedule(filteredPosts,"Weekends")
  }
  displayPosts(filteredPosts)
  // console.log("checkBox state",DayState,EmailState,CashState,VenmoState,wDayState)
}
function clearFilter()
{
  document.getElementById("filterDay").checked=false
  document.getElementById("filterEmail").checked=false
  document.getElementById("filterCash").checked=false
  document.getElementById("filterVenmo").checked=false
  document.getElementById("filterWeekends").checked=false
  applyFilter()
}
function dispalyCategoryPost()
{
  // toggleColor(btn)
  // var btnValue = btn.innerHTML
  // if(btnValue!="All")
  // {
  //   var filteredPosts = CurrentPosts
  //   filteredPosts = filterByCategory(filteredPosts,btnValue)
  //   displayPosts(filteredPosts)
  //   console.log("button value:",btnValue)
  // }
  // else
  // {
  //   dispalyAllPosts()
  // }
  var btns = document.getElementsByClassName("tagname")
  var i=0;
  // var filteredPosts = allStorage();
  var filteredPosts = CurrentPosts;
  var NoneTag=true
  for(i;i<btns.length;i++)
  {
    // console.log("btn value:" ,btns[i].innerHTML)
    var bgc = btns[i].style.backgroundColor;
    var btnValue = btns[i].innerHTML;
    if (bgc == "rgba(79, 59, 140, 0.9)" && btnValue!="All") { 
        filteredPosts = filterByCategory(filteredPosts,btnValue)
        displayPosts(filteredPosts)
        NoneTag = false
    }
  }
  if(NoneTag){
    // var alltag = document.getElementById("all-tag")
    // alltag.style.background = "rgba(79, 59, 140, 90%)";
    dispalyAllPosts();
  }
}
function toggleColor(id) {
  var bgc = id.style.backgroundColor;
  if (bgc == "rgba(79, 59, 140, 0.9)") { 
    // console.log(bgc,"toggle to 30")
      id.style.background = "rgba(79, 59, 140, 30%)";
  } else {
    // console.log(bgc,"toggleto 100")
      id.style.background = "rgba(79, 59, 140, 90%)";
  }
  console.log("toggle on",id.innerHTML)
}
function toggleOff(btn)
{
  var btns = document.getElementsByClassName("tagname")
  // console.log("toggle off length",btns.length)
  var i=0
  for(i;i<btns.length;i++)
  {
    if(btns[i].innerHTML != btn.innerHTML){
      btns[i].style.background = "rgba(79, 59, 140, 30%)";
    }
    // console.log("toggle off",btns[i].innerHTML)
  }
}
function tagBtnToggle(btn)
{
  toggleOff(btn)
  toggleColor(btn)
  CurrentPosts = allStorage()
  dispalyCategoryPost() 
  displayFiltered()
}
function applyFilter()
{
  CurrentPosts = allStorage()
  dispalyCategoryPost()
  displayFiltered()
}
function postClick(myDiv)
{
  console.log("postClick",myDiv.getAttribute('name'))
  var mykey = myDiv.getAttribute('name')
  var infos = mykey.split("-")
  var infoUser = infos[0]
  window.location.href = "post_info.html#Signed&"+userName+'&'+mykey;
}
function pageShow(pg)
{
  var num = Number(pg.innerHTML);
  var targtes = CurrentPosts.slice((num)*4,(num+1)*4)
  displaySubset(targtes)
  toggleoffPage()
  pg.setAttribute('class','page-tag active')
}
function createPage(num)
{
  var numP = num/4 ;
  var i=0
  menu = document.getElementById("page-menu")
  if(menu)
  {
    while (menu.firstChild) {
      menu.removeChild(menu.firstChild);}
    // console.log(numP)
    if(numP==0){
      numP=1
    }
    for(i;i<numP;i++)
    {
      var newDiv = document.createElement("a"); 
      newDiv.setAttribute('onclick','pageShow(this)')
      // newDiv.setAttribute('href','#')
      newDiv.setAttribute('class','page-tag')
      newDiv.innerHTML=i
      menu.appendChild(newDiv)
    }
    pageShow(menu.firstChild)
  }
}
function jumpMainpage()
{
  window.location.href = 'main_page.html' + '#' + 'Signed&' +userName;     
}
function displaySubset(postList)
{
  blockPosts();
  var i=0;
  // console.log("subset dispaly",postList.length)
  for(i;i<postList.length;i++)
  {
    var tempPost = postList[i]
    // console.log("display subset",tempPost.title,tempPost.content,tempPost.getUSer())
    addPost (tempPost.title,tempPost.content,tempPost.categories,tempPost.getUSer(),tempPost.titleKey,tempPost.getPostDay())  
  }

}
function toggleoffPage()
{
  var ps = document.getElementsByClassName("page-tag")
  var i =0;
  for(i;i<ps.length;i++)
  {
    ps[i].setAttribute("class","page-tag")
  }
}
function nextPage()
{
  var ps = document.getElementsByClassName("page-tag")
  var i =0;
  var pnum = ps.length
  for(i;i<ps.length;i++)
  {
    tempClass = ps[i].getAttribute("class")
    if(tempClass.includes("active"))
    {
      break
    }
  }
  var nextP = (i+1)%pnum
  console.log("next page:",nextP)
  pageShow(ps[nextP])
}
function lastPage()
{
  var ps = document.getElementsByClassName("page-tag")
  var i =0;
  var pnum = ps.length
  for(i;i<ps.length;i++)
  {
    tempClass = ps[i].getAttribute("class")
    if(tempClass.includes("active"))
    {
      break
    }
  }
  var lastP = (i-1+pnum)%pnum
  console.log("last page:",lastP)
  pageShow(ps[lastP])
}
function showEmail(myKey)
{
  var temp = getProfile(myKey);
  var eD = document.getElementById("email-input")
  eD.value = temp.email
  console.log(temp,eD.value)
}
function testDate()
{
  var tempList = allStorage()
  var i=0;
  console.log("test date:",tempList.length)

  for(i;i<tempList.length;i++)
  {
    console.log(tempList[i].getPostDay())
  }
}

