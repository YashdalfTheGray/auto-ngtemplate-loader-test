import routeConfig from './admin/admin.route';
import AdminController from './admin/admin.module';

angular
  .module('app', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider.when('/', routeConfig);
  })
  .controller('AdminController', AdminController);
