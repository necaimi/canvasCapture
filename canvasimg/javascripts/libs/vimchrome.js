

(function(mod){
    if(mod){
        if(typeof exports == "object" && typeof module == "object"){
            module.exports = mod();
            
        }else if(typeof define == "function" && define.amd){
            define([], mod);
           
        }else{
            window.vimchrome = mod();
        }
        
        
    }
})(function(){
    
    var vimchrome = function(){
        this.version = "1.0.1";
    }
    return vimchrome;
});


(function(vimchrome){
    
    "use strict";
    function chromepipe(id){
        this.id = id;
        this.port = 0;
    }
    
    chromepipe.prototype = {
        connect:function(){
            this.port = chrome.extension.connect({name: this.id});
            if(this.port){
                return true;
            }else{
                return false;
            }
        },
        disconnect:function(){
            
        },
        post:function(msg){
            return this.port.postMessage(msg);
        },
        addListener:function(cfn){
            return this.port.onMessage.addListener(cfn);
        }
        
    };
    
    vimchrome.chromepipe = chromepipe;
    
})(vimchrome);

