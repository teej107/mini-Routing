/**
 * Created by tanner on 2/21/17.
 */
var app = angular.module('miniRouting', ['ui.router']).config(function ($stateProvider, $urlRouterProvider)
{
    $stateProvider.state('home', new Route('/', 'js/home/homeTmpl.html'))
        .state('settings', new Route('/settings', 'js/settings/settingsTmpl.html'))
        .state('products', new Route('/products/:id', 'js/product/productTmpl.html', 'productsCtrl'));

    $urlRouterProvider.otherwise('/');
});

function Route(url, templateUrl, controller)
{
    this.url = url;
    this.templateUrl = templateUrl;
    if(controller)
    {
        this.controller = controller;
    }
}