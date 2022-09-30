switch(role){
    case "master":
         console.log("He/She can view/add/delete/create/update content");
         break;
    case "admin":
         console.log("He/She can view/create");
         break;
    case "user":
         console.log("He/She can view/edit");
         break;
    default:
         console.log("Invalid role");
         break;
}