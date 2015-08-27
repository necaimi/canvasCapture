

fis.config.set('modules.postpackager', 'simple');

fis.config.set('pack', {
    'libs.js': [
        'libs/vimchrome.js',
        "libs/main.js"
    ],
    'uroute.js': [
        'libs/canvas_capture.js',
    ]
});



/*fis.config.set('roadmap.path', [{

    reg:'libs/**.js',
    requires:['libs/utils/ptglobal.js', 'libs/utils/boxHelper.js', 'libs/framework/iview.js'],
    release:'/app.js'
    
}]);*/
//fis.config.set('project.exclude', /^(\/benlai_web\/)|(\/thirdpart\/)/i);