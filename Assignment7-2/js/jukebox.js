/*eslint-env browser*/

//The Jukebox Application v2 (30 points)


//GET ELEMENT BY ID FUNCTION (SHORTCUT)
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};


//JUKEBOX CONTAINS ALBUMS AND COUNTS TIMES EACH PLAYED

var Jukebox = function () {
    "use strict";
    var albums = [], self;
    
    self = {
        addAlbum: function (album) {
            albums.push(album);
        },
        favoriteAlbum: function () {
            var max = -1, fav, i;

            for (i = 0; i < albums.length; i += 1) {
                if (albums[i].played > max) {
                    max = albums[i].played;
                    fav = albums[i];
                }
            }
            return fav.display();
        }
    };
    return self;
};

//ALBUM FUNCTION CONTAINS INFO OF THE ALBUM, THE PLAY FUNCTIONALITY/METHOD AND DISPLAY HOW MANY TIMES IT HAS BEEN PLAYED.

var Album = function (artist, title) {
    "use strict";
    var self = {
        played: 0,
        play: function () {
            self.played += 1;
        },
        display: function () {
            return artist + " : " + title + ". The album has been played " + this.played + " times.";
        }
        /*toList: function () {
            return '"' + title + '"' + " by " + artist;
        }*/
    };
    return self;
};


//NEW JUKEBOX INSTANTIATION AND NEW ALBUMS 
var jbox = new Jukebox();
var album1 = new Album("Britney Spears'", "Stronger");
var album2 = new Album("Blink 182", "Dude Ranch");
var album3 = new Album("New Found Glory", "Sticks and Stones");

//ADD ALBUMS TO THE JBOX ARRAY
jbox.addAlbum(album1);
jbox.addAlbum(album2);
jbox.addAlbum(album3);


/*var chose = window.document.getElementById("AlbumSelection"), i;

for (i = 0; i < albumCollection.length; i += 1) {
    var albselect = window.document.createElement("option");
        txt = document.createTextNode(albumCollection[i].toList);
    albselect.appendChild(txt);
    chose.options.add(new Option(albumCollection[i].toList));
}*/

//GETTING VALUES FROM THE DROPDOWN MENU===================
function catchPlay() {
    "use strict";
    var getSelectedValue = window.document.getElementsByName("albslect"),
        i;
    for (i = 0; i < getSelectedValue.length; i += 1) {
        if (getSelectedValue[i].value === "Stronger") {
            album1.play();
        } else if (getSelectedValue[i].value === "Dude Ranch") {
            album2.play();
        } else if (getSelectedValue[i].value === "Sticks and Stones") {
            album3.play();
        }
    }
}





window.addEventListener("load", function () {
    "use strict";
    $("playButton").addEventListener("click", catchPlay);
    $("ShowFavAlbum").addEventListener("click", function () {
        $("favoriteAlbum").innerHTML = jbox.favoriteAlbum();
    });
});
