var qinjieLin=[{"name": "user-name", "value": "qinjie"},
{"name": "user-email", "value": "qinjie@abc.com"},
{"name": "user-password", "value": "123"},
{"name": "title", "value": "qinjieLin-Party in 1717"},
{"name": "title", "value": "qinjieLin-tennis"}]
var qinjielinSwim=[
  {"name": "title", "value": "Party in 1717"},
  {"name": "content", "value": "party at 6.00 pm"}, 
  {"name": "emailInfo", "value": "qin@abc.com"},
  {"name": "PhoneInfo", "value": ""},
  {"name": "OtherInfo", "value": ""},
  {"name": "pay-method", "value": "Venmo/Paypal"},
  {"name": "schedule", "value": "Workdays"},
  {"name": "categories", "value": ["Daily"]},
  {"name": "postTime", "value": 1559773349617}
] 
var qinjieGym = [
 {"name": "title", "value": "tennis"},
 {"name": "content", "value": "henry crown gym at 8.00pm"},
 {"name": "emailInfo", "value": "qin@abc.com"},
 {"name": "PhoneInfo", "value": ""},
 {"name": "OtherInfo", "value": ""},
 {"name": "pay-method", "value": "Check"},
 {"name": "schedule", "value": "Weekends"},
 {"name": "categories", "value": ["Study"]},
 {"name": "postTime", "value": 1559779646800}
]
var jason=[
  {"name": "user-name", "value": "jasonWang"},
  {"name": "user-email", "value": "lsakndf@gmail.com"},
  {"name": "user-password", "value": "123"},
  {"name": "title", "value": "jasonWang-Music Tutor for Vocal/Piano/Violin"},
  {"name": "title", "value": "jasonWang-Good Math Tutor Every M/W/F!!!"}

]
var jasonGw = [
  {"name": "title", "value": "Music Tutor for Vocal/Piano/Violin"},
  {"name": "content", "value": "I am a minor music student in NU. I can teach you some instructments if your are insterested. Please contact me by following email"},
  {"name": "emailInfo", "value": "lsakndf@gmail.com"},
 {"name": "PhoneInfo", "value": ""},
 {"name": "OtherInfo", "value": ""},
 {"name": "pay-method", "value": "Cash"},
 {"name": "schedule", "value": "both"},
 {"name": "categories", "value": ["Study"]},
 {"name": "postTime", "value": 1559830413471}
]
var jasonMath = [
  {"name": "title", "value": "Good Math Tutor Every M/W/F!!!"},
  {"name": "content", "value": "I am a senior math major student and I can definitely help you with your math homework. I have taken the following courses....Feel free to contact me..."},
  {"name": "emailInfo", "value": "jasonGw@gmail.com"},
 {"name": "PhoneInfo", "value": ""},
 {"name": "OtherInfo", "value": ""},
 {"name": "pay-method", "value": "Cash"},
 {"name": "schedule", "value": "both"},
 {"name": "categories", "value": ["Study"]},
 {"name": "postTime", "value": 1559830413471}
]
var Sebastain=[
  {"name": "user-name", "value": "Sebastain"},
  {"name": "user-email", "value": "Sebastain@gmail.com"},
  {"name": "user-password", "value": "123"},
  {"name": "title", "value": "Sebastain-basketball event"},
  {"name": "title", "value": "Sebastain-330 final"}

]
var SebastainBB = [
  {"name": "title", "value": "basketball event"},
  {"name": "content", "value": "basketball game next friday. Any team?"},
  {"name": "emailInfo", "value": "Sebastain@gmail.com"},
 {"name": "PhoneInfo", "value": ""},
 {"name": "OtherInfo", "value": ""},
 {"name": "pay-method", "value": "Cash"},
 {"name": "schedule", "value": "both"},
 {"name": "categories", "value": ["Daily"]},
 {"name": "postTime", "value": 1559830410471}
]
var SebastainTest = [
  {"name": "title", "value": "330 final"},
  {"name": "content", "value": "help me! anyone familiar with html css. I need a teacher."},
  {"name": "emailInfo", "value": "Sebastain@gmail.com"},
 {"name": "PhoneInfo", "value": ""},
 {"name": "OtherInfo", "value": ""},
 {"name": "pay-method", "value": "Cash"},
 {"name": "schedule", "value": "both"},
 {"name": "categories", "value": ["Study"]},
 {"name": "postTime", "value": 1559830413471}
]
function storeData()
{
    localStorage.setItem("qinjieLin",JSON.stringify(qinjieLin) );
    localStorage.setItem("qinjieLin-Party in 1717",JSON.stringify(qinjielinSwim) );
    localStorage.setItem("qinjieLin-tennis",JSON.stringify(qinjieGym) );

    localStorage.setItem("jasonWang",JSON.stringify(jason) );
    localStorage.setItem("jasonWang-Music Tutor for Vocal/Piano/Violin",JSON.stringify(jasonGw) );
    localStorage.setItem("jasonWang-Good Math Tutor Every M/W/F!!!",JSON.stringify(jasonMath) );


    localStorage.setItem("Sebastain",JSON.stringify(Sebastain) );
    localStorage.setItem("Sebastain-basketball event",JSON.stringify(SebastainBB) );    
    localStorage.setItem("Sebastain-330 final",JSON.stringify(SebastainTest) );
}
