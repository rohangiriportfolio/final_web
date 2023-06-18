var _c = 0;
var _y = 0;
var click = new Audio();
click.src = "mouse_click.mp3";
function y_move1() {
    click.play();
    var x = Math.floor((Math.random() * 3) + 1);
    if (x == 1) {
        if (window.innerWidth > 700) {
            document.getElementById('c_move').innerHTML = "";
            document.getElementById('c_move').innerHTML = "<center><img src=\'st1.png\'></center>";
        }
        else {
            document.getElementById('c_move').innerHTML = "";
            document.getElementById('c_move').innerHTML = "<center><img src=\'_st1.png\'></center>";
        }
    }
    else if (x == 2) {
        if (window.innerWidth > 700) {
            document.getElementById('c_move').innerHTML = "";
            document.getElementById('c_move').innerHTML = "<center><img src=\'p1.png\'></center>";
            document.getElementById('c_score').innerHTML = "";
            _c++;
            document.getElementById('c_score').value = "Computer: " + _c;
        }
        else {
            document.getElementById('c_move').innerHTML = "";
            document.getElementById('c_move').innerHTML = "<center><img src=\'_p1.png\'></center>";
            document.getElementById('c_score').innerHTML = "";
            _c++;
            document.getElementById('c_score').value = "Computer: " + _c;
        }
    }
    else if (x == 3) {
        if (window.innerWidth > 700) {
            document.getElementById('c_move').innerHTML = "";
            document.getElementById('c_move').innerHTML = "<center><img src=\'sc1.png\'></center>";
            document.getElementById('y_score').innerHTML = "";
            _y++;
            document.getElementById('y_score').value = "You: " + _y;
        }
        else {
            document.getElementById('c_move').innerHTML = "";
            document.getElementById('c_move').innerHTML = "<center><img src=\'_sc1.png\'></center>";
            document.getElementById('y_score').innerHTML = "";
            _y++;
            document.getElementById('y_score').value = "You: " + _y;
        }
    }

}
function y_move2() {
    click.play();
    var x = Math.floor((Math.random() * 3) + 1);
    if (x == 1) {
        if (window.innerWidth > 700) {
            document.getElementById('c_move').innerHTML = "";
            document.getElementById('c_move').innerHTML = "<center><img src=\'st1.png\'></center>";
            document.getElementById('y_score').innerHTML = "";
            _y++;
            document.getElementById('y_score').value = "You: " + _y;
        }
        else {
            document.getElementById('c_move').innerHTML = "";
            document.getElementById('c_move').innerHTML = "<center><img src=\'_st1.png\'></center>";
            document.getElementById('y_score').innerHTML = "";
            _y++;
            document.getElementById('y_score').value = "You: " + _y;
        }
    }
    else if (x == 2) {
        if (window.innerWidth > 700) {
            document.getElementById('c_move').innerHTML = "";
            document.getElementById('c_move').innerHTML = "<center><img src=\'p1.png\'></center>";
        }
        else {
            document.getElementById('c_move').innerHTML = "";
            document.getElementById('c_move').innerHTML = "<center><img src=\'_p1.png\'></center>";
        }
    }
    else if (x == 3) {
        if (window.innerWidth > 700) {
            document.getElementById('c_move').innerHTML = "";
            document.getElementById('c_move').innerHTML = "<center><img src=\'sc1.png\'></center>";
            document.getElementById('c_score').innerHTML = "";
            _c++;
            document.getElementById('c_score').value = "Computer: " + _c;
        }
        else {
            document.getElementById('c_move').innerHTML = "";
            document.getElementById('c_move').innerHTML = "<center><img src=\'_sc1.png\'></center>";
            document.getElementById('c_score').innerHTML = "";
            _c++;
            document.getElementById('c_score').value = "Computer: " + _c;
        }
    }
}
function y_move3() {
    click.play();
    var x = Math.floor((Math.random() * 3) + 1);
    if (x == 1) {
        if (window.innerWidth > 700) {
            document.getElementById('c_move').innerHTML = "";
            document.getElementById('c_move').innerHTML = "<center><img src=\'st1.png\'></center>";
            document.getElementById('c_score').innerHTML = "";
            _c++;
            document.getElementById('c_score').value = "Computer: " + _c;
        }
        else {
            document.getElementById('c_move').innerHTML = "";
            document.getElementById('c_move').innerHTML = "<center><img src=\'_st1.png\'></center>";
            document.getElementById('c_score').innerHTML = "";
            _c++;
            document.getElementById('c_score').value = "Computer: " + _c;
        }
    }
    else if (x == 2) {
        if (window.innerWidth > 700) {
            document.getElementById('c_move').innerHTML = "";
            document.getElementById('c_move').innerHTML = "<center><img src=\'p1.png\'></center>";
            document.getElementById('y_score').innerHTML = "";
            _y++;
            document.getElementById('y_score').value = "You: " + _y;
        }
        else {
            document.getElementById('c_move').innerHTML = "";
            document.getElementById('c_move').innerHTML = "<center><img src=\'_p1.png\'></center>";
            document.getElementById('y_score').innerHTML = "";
            _y++;
            document.getElementById('y_score').value = "You: " + _y;
        }
    }
    else if (x == 3) {
        if (window.innerWidth > 700) {
            document.getElementById('c_move').innerHTML = "";
            document.getElementById('c_move').innerHTML = "<center><img src=\'sc1.png\'></center>";
        }
        else {
            document.getElementById('c_move').innerHTML = "";
            document.getElementById('c_move').innerHTML = "<center><img src=\'_sc1.png\'></center>";
        }
    }
}