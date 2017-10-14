app.factory("myfactory",function(){
    return {
        initCap:function(strValue){
               return strValue.charAt(0).toUpperCase()+ strValue.substring(1).toLowerCase(); 
        }
    }
})