export const list = [];
export function hozzaad(a){
    if (a>=0){
        list.add(a);
    }else{
        console.log("HIBA!");
    }
}
export function atlag(){
    var atlag = 0;
    for (var i = 0; i <list.length; i++) {
        atlag += list[i];
    }
    return atlag = atlag / list.length;
}