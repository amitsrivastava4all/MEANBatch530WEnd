app.directive("animation",function(){
    return {
    link:function(scope,element,attrs){
        element.bind("click",function(){
            console.log("Inside CLICKED>>>>");
            element.hide(2000);
        });
            //$("h1").click(function(){
               console.log("H1 Clicked....");
              //  $(this).hide(2000);
            //})
    },
    restrict:'A'
    }
});

app.controller("myctrl",function($scope){
    $scope.data = ["Apple","Orange"];
});

app.controller("myctrl2",function($scope){
    $scope.firstNo = 10;
    $scope.secondNo = 20;
})

app.directive("fruit",function(){
    return {
        template:'Fruits are {{data[0]}} and {{data[1]}}',
        restrict:'E'
    }
})

app.directive("ctrlDir",function(){
    return{
        controller:'myctrl2',
        link:function(scope,element,attrs){
            console.log("Attrs ",attrs);
              element[0].innerHTML = "First "+scope.firstNo +" Second "+scope.secondNo+" Third "+attrs.thirdno;  
        },
        restrict:'E'
    };
});


app.directive("tcsHeader",function(){
            return {
                template:'<h1>This is Header</h1>',
                restrict :'E'
            }
    });
    app.directive("calendar",function(){
        return{
            link:function(scope,element,args){
                element[0].innerHTML = "<input type='text' autocomplete='on' id='dob'>";
                //alert("Txt box created...");
                //console.log("E")
                
    $( "#dob" ).datepicker();
   
                    //alert("DOB DP Call");
                    //console.log("Call JS ",args.id);
                   // $( "#dob" ).datepicker();
              
            },
            restrict :'E'
        };
    });
    app.directive("loader",function(){
        return{
            template:`
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
             `,
            restrict:'E'            
        
    };
    });

    app.directive("tcsButton",function(){
        return {
            link:function(scope,element,args){
                if(args.style=="blue"){
                element[0].innerHTML = "<button class='btn btn-primary'>"+args.value+"</button>";
                }
                if(args.style=="red"){
                element[0].innerHTML = "<button class='btn btn-danger'>"+args.value+"</button>";
                }
                //console.log("Scope is ",scope);
                //console.log("Element is ",element[0]);
                //console.log("Args is ",args);
            }
        }
    });