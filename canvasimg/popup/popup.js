

(function(){
    
    
    var _capturePort = null;
    var _editbt = null;
    
    window.onload = function(){
        
        var _capture = false;
        console.log(_capturePort);
       _editbt = document.getElementById("btcapture");
        _editbt.addEventListener("click", function(e){
            
            if(e.which == 1){
                /// message;
                var _pcs = this.getAttribute("process");
                if(_pcs === "capture")
                    {
                        
                    chrome.tabs.getSelected(function(t){
                    if(t.url.match(/http:/)){
                         RegScript(t.id); 
                        }
                         
                        });
                        
                        
                    }else if(_pcs === "stop"){
                        //stop;
                        _capturePort.postMessage({req:"stop"});
                    }
               
            }
            e.preventDefault();
            return false;
        });
    
        
    };
    
    function RegScript(id){
        chrome.tabs.insertCSS(id, {file:'stylesheets/c.css'}, function(){
            chrome.tabs.executeScript(id, {file:"thirdlibs/jquery-1.11.1.min.js"},function()            {
              chrome.tabs.executeScript(id, {file:"javascripts-release/libs.js"});
            });
        });

       }
    
    
    chrome.extension.onConnect.addListener(function(port){
        console.assert(port.name == "canvasdl");
        _capturePort = port;
        port.onMessage.addListener(function(msg){
            switch(msg.action){
                    case "capture":
                    onCaptureHandler.call(port);
                    break;
                    case "stop":
                    onCaptureStopHandler.call(port);
                    break;
            }
        });
    });
    
    
    function onCaptureHandler(){
        _editbt.setAttribute("process", "stop");
        _editbt.text = "stop";
         this.postMessage({req:"canCapture"});
    }
    
    function onCaptureStopHandler(){
        _editbt.setAttribute("process", "capture");
        _editbt.text = "capture";
        this.postMessage({req:"stop"});
    }
    
})();