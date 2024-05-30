$("#Icons,#Google,#Profile,#Table,#Register,#Logout,#Products,#Docs").hide();

$(".logo>button").on("click",function(){
    $("#Dashboard,#Icons,#Google,#Profile,#Table,#Register,#Logout,#Products,#Docs").hide();
    $($(this).attr("for")).show();
})




