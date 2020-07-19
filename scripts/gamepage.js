function update(json){
    var updatedata=JSON.parse(json);

    var cardnumber_old = [];
    var cardnumber_new = [];

    for (i=2; i<7; i++){

        var playercards = document.getElementsByClassName("player"+String(i))[0].getElementsByClassName('cardbox')[0];
        cardnumber_old[cardnumber_old.length] = playercards.getElementsByClassName("cardWrapper").length;
        eval("cardnumber_new[cardnumber_new.length] = updatedata.player"+i+";");

        var diff = cardnumber_new[i-2] - cardnumber_old[i-2];
        if (diff > 0){
            for (j=0; j<diff; j++){
                var newdiv = document.createElement("div");
                newdiv.setAttribute("class", "CardWrapper")
                playercards.appendChild(newdiv);
                var imgdiv = document.createElement("img");
                imgdiv.setAttribute("src", "../images/gray_back.png");
                imgdiv.setAttribute("alt", " ");
                imgdiv.setAttribute("class", "card");
                playercards.getElementsByClassName("cardWrapper")[playercards.getElementsByClassName("cardWrapper").length-1].appendChild(imgdiv);
                console.log("add");
            }
        } else if (diff < 0){
            for (j=0; j < Math.abs(diff); j++){
                playercards.getElementsByClassName("cardWrapper")[0].remove();
                console.log("remove");
            }
        }
        playercards.getElementsByClassName("cardWrapper")[0].classList.add("firstcard");
        playercards.getElementsByClassName("cardWrapper")[playercards.getElementsByClassName("cardWrapper").length - 1].classList.add("lastcard");
        console.log("next");

    }


    return [cardnumber_new, cardnumber_old];

}
