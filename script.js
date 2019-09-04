//Skapa en loop för att skapa "li"s från en array i en "ul" i index.html.

//Skapa array + ul 
var funTimes = ["Resa", "Åka snowboard", "Spela Counterstrike", "Kolla på sport", "Hänga med vänner"];

var list = document.createElement("ul");
    document.body.appendChild(list);
    list.id = "fun-list";

//Kalla writeList funktionen och skicka med arrayen.    
writeList(funTimes);

//Loopen går igenom arrayen, skapar "li"s av varje string och lägger in som child till "ul".
function writeList(array){
    for(i = 0; i < array.length; i++){
        let item1 = document.createElement("li");
        let t = document.createTextNode(array[i])
        item1.appendChild(t);
        document.getElementById("fun-list").appendChild(item1);
    }
    return array;
}