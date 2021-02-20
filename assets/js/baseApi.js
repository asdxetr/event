// 配置ajax请求项
$.ajaxPrefilter(function(options){
    options.url='http://127.0.0.1:9090'+options.url
   
})