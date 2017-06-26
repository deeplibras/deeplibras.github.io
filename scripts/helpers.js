hexo.extend.helper.register('header_nav', function(className){
  return "<li class='nav-item'><a href='aa'>Sobre</a></li>";
});

hexo.extend.helper.register('change_language', function(lang){
  url = this.page.path.split('/')
  url.shift()
  url.unshift(lang);
  
  return this.config.root + url.join('/');
});
