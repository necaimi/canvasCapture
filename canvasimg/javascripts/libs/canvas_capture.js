
(function(){
    
    
    var canvasCapture = function(){
        this.res = {
            "img":[],
            "media":[]
            
        };
    }
    
    var _mapple = {};

    canvasCapture.prototype.markAllCanvas = function(type){
        var _canvas = document.getElementsByTagName("canvas"),
            _contexts = [];
        
        if(_canvas.length > 0){
            
            for(var itr = 0, _len = _canvas.length; itr < _len; itr++){
                _contexts[itr] =  _canvas[itr].getContext(type);
            }
           
          
        }
        
        return _contexts;
    }
    
    
    canvasCapture.prototype.hookImg = function(target, funcName){
        
        var _this = this,
            _itr = 0;
        
        
        var _srcDrawImage = target[funcName];
        
        var myDrawImage = function(src, px, py, width, height){
            
            var _src = src.src;
            if(_src){
            var _imgsrc = "<img src='{src}'/>".replace("{src}", _src);
            if(_mapple[_imgsrc] != 1){
                _mapple[_imgsrc] = 1;
                _this.res.img[_itr] = _imgsrc;
                _itr++;
            } 
            }else{
                //canvas;
            }
            
            
            _srcDrawImage.apply(target, arguments);
        }
        
        if(target[funcName] != myDrawImage){
        target[funcName] = myDrawImage;
        }
        
        
    }
    
   canvasCapture.prototype.print = function(type){
       document.getElementsByTagName("body")[0].innerHTML = this.res[type].join("\n");
   }
    
    window.canvasCapture = canvasCapture;
    
    
})();

(function(){
    
    
    var _recordbt = document.createElement("div");
        _recordbt.setAttribute("class", "bt-record stop");
        _recordbt.addEventListener("click", function(e){
              memeda.print("img");
            
        });
    
        document.body.appendChild(_recordbt);
    
     window.memeda  = new canvasCapture();
     var _allcanvas = memeda.markAllCanvas("2d");
    
    if(_allcanvas.length > 0){
        
        for(var itr = 0, _len = _allcanvas.length; itr < _len; itr++){
            memeda.hookImg(_allcanvas[itr], "drawImage");
        }
        
        
        }
    
    
})();