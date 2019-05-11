var app = angular.module("myApp", ['ui.router']);

app.config(function($stateProvider){
    var homeState={
        name:'home',
        url:'/home',
        tenplateUrl:'./home.html',
        controller:'homeCtrlTest'
    };
    var contactState={
        name:'contact',
        url:'/contact',
        tenplateUrl:'./contact.html',
        controller:'contactCtrlTest'
    };
    var emailState={
        name:'email',
        url:'/email',
        tenplateUrl:'./email.html',
        controller:'emailCtrlTest'
    };
    var serviceState={
        name:'service',
        url:'/service',
        tenplateUrl:'./service.html',
        controller:'serviceCtrlTest'
    };
    $stateProvider.state(homeState);
    $stateProvider.state(contactState);
    $stateProvider.state(emailState);
    $stateProvider.state(serviceState);
});
