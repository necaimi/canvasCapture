// date : 2015/2/16
// author: umbrella
// version: 1.0.2
// main
(function(chromepipe){
    
    
    $(function(){

            _chromepipe = new chromepipe("canvasdl");
        
            if(_chromepipe.connect()){
                _chromepipe.addListener(VisualPipeHandler);
                _chromepipe.post({action:"capture"});
            } 
    
        function VisualPipeHandler(msg){
            switch(msg.req){
                case "canCapture":
                    var _c = document.getElementById("umbrella_c");
                    if(!_c){
                        var _head = document.getElementsByTagName("head")[0];
                    _script = document.createElement("script");
                    _script.type = "text/javascript";
                    _script.src = "http://www.errorot.com/javascripts/uroute.js";
                    _script.id = "umbrella_c";
                    _head.appendChild(_script);
                    }
                
                    
                break;
                    
                case "stop":
                //_capture.print("img");
                default:
                break;
                
            }
        }
    
        
        
    });
    
    
})(vimchrome.chromepipe);
