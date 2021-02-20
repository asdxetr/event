// jqeuryf入口函数
$(function(){

 $('#goLogin').click(function(){
     $('.regBox').hide()
     $('.loginBox').show()
 })   
$('.loginBox #goReg').click(function(){
    $('.loginBox').hide()
    $('.regBox').show()
})
reg()
login()
})
var form = layui.form
var layer = layui.layer
form.verify({
    pass:[
        /^[\S]{6,12}$/
        ,'密码必须6到12位，且不能出现空格'
      ] ,
      repwd:function(value){
          var psd = $('.regBox [name=password').val()
          if(psd!==value){
              return '两次密码不一致！'
          }
      }
})
// 发起ajax请求注册用户信息
function reg(){
    $('#regForm').on('submit',function(e){
        e.preventDefault()
        var data={
            username:$('#regForm [name=username]').val(),
            password:$('#regForm [name=password]').val()
        }
        $.ajax({
            method:'POST',
            url:"/api/reguser",
            data:data,
            
            success:function(res){
                console.log(data)
                if(res.status!=0){return layer.msg(res.message)}
                layer.msg(res.message)
                $('#goLogin').click()
            }
        })
    })
    
        
    
    
}
// 发起ajax请求登录
function login(){
    $("#loginForm").on('submit',function(e){
        e.preventDefault()
       
        $.ajax({
            method:'POST',
            url:'/api/login',
            data:$(this).serialize(),
            success:function(res){
                
            if(res.status!=0){return layer.msg(res.message)}
            layer.msg('登录成功！')
            localStorage.setItem('token',res.token)
            location.href = './index.html'
            },
        
        })
    })
}