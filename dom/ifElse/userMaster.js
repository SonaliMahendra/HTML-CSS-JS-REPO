var role="user";
if(role=="master"){
    console.log("He/She can view/add/delete/create/update content");
}else if(role=="admin"){
    console.log("He/She can view/create");
}else{
    console.log("He/She can view/edit");
}