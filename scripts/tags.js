'use strict';

hexo.extend.tag.register('content', function(args, content){
    var className = args.shift();
    var result = '';

    result += '<div class="'+className+'">';
    result += hexo.render.renderSync({text: content, engine: 'markdown'});
    result += '</div>';

    return result;
}, true);