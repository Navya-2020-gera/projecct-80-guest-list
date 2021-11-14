var guest_array=[];

function submit(){
    var display_array=[];

  

    var i=0;
    for(i=1;i<=5;i++){
        var guest=document.getElementById("guest"+i).value;
   
        guest_array.push(guest);
    }
    console.log(guest_array)

    for(var k=0;k<4;k++){
        display_array.push("<h4>NAME- "+guest_array[k]+"</h4>")
    }

    document.getElementById("display_with_commas").innerHTML=display_array;

    var remove_commas=display_array.join(" ");
    document.getElementById("display_without_commas").innerHTML=remove_commas;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline";
}
function sorting(){
    guest_array.sort();
    var display_sort=[];
    for(var k=0;k<4;k++){
        display_sort.push("<h4>NAME- "+guest_array[k]+"</h4>")
    }

document.getElementById("display_with_commas").innerHTML=display_sort;
}