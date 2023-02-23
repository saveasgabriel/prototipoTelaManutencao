function category(id, input){
    var item = document.getElementById(id).innerHTML;
    document.getElementsByName(input)[0].value = item;
}

var name;

function dropdown(p, i){
    var e = document.getElementsByClassName('dropDown')[i];
    var d = ['block', 'none'];
    e.style.display = d[p];
    var t = ['0px', '0px, -10px'];
    setTimeout(function(){
        e.style.transform = 'translate('+t[p]+')';
    }, 0);
}
