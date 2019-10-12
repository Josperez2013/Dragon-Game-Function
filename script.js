var dragonhp=10;
var characters = [
  {
    name:"Bob",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Jerry",
    damage:1,
    health:12,
    warrior:true
  },
  {
    name:"Mavis",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Morty",
    damage:4,
    health:10,
    warrior:true
  },
  {
    name:"Shorty",
    damage:10,
    health:3,
    warrior:false
  },
  {
    name:"Porty",
    damage:1,
    health:14,
    warrior:true
  },{
    name:"Perry",
    damage:2,
    health:9,
    warrior:true
  },
  {
    name:"Larry",
    damage:2,
    health:17,
    warrior:false
  }
]
function wr(useratk,userhp){
  console.log(dragonhp);
  var dragonHit=Math.round(Math.random()  ) + 1;
  dragonhp=dragonhp-useratk;
  userhp=userhp-dragonHit;
  document.body.querySelector(".wrapper").innerHTML=("The dragon has ") + dragonhp;
}


function createElement(fight){
  var button = document.createElement("button");
  button.innerHTML="Attack";
  var attackValue=fight.damage;
  var healthValue=fight.health;
  button.addEventListener("click", function(){
    wr(fight.damage,fight.health);
  })
  
 document.body.appendChild(button);
}

for (var i = 0; i < characters.length; i++) {
 
  if((characters[i].damage >=2) && (characters[i].health >=10) && (characters[i].warrior == true)){
  
     var ele = document.createElement("div");
  var nameEle = document.createElement("h2");
  var damageEle = document.createElement("h3");
  var healthEle = document.createElement("h3");
  var warriorEle = document.createElement("h3");

  nameEle.innerHTML = "Name: " + characters[i].name;
  damageEle.innerHTML = "Damage: " + characters[i].damage;
  healthEle.innerHTML = "Health: " + characters[i].health;
  warriorEle.innerHTML = "Warrior: " + characters[i].warrior;
 


  ele.appendChild(nameEle);
  ele.appendChild(damageEle);
  ele.appendChild(healthEle);
  ele.appendChild(warriorEle);


  document.body.appendChild(ele);
   createElement(characters[i]);
 
}

 
}