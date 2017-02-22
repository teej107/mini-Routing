/**
 * Created by tanner on 2/21/17.
 */
app.controller('productsCtrl', function ($scope, $stateParams, productService)
{
    if($stateParams.id === 'socks')
    {
        $scope.productData = productService.sockData;
    }
    else if ($stateParams.id === 'shoes')
    {
        $scope.productData = productService.shoeData;
    }
});