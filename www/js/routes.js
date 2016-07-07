angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  
  .state('menu.dashboard', {
    url: '/dashboard',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dashboard.html',
        controller: 'dashCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.compras', {
    url: '/compras',
    views: {
      'side-menu21': {
        templateUrl: 'templates/compras.html',
        controller: 'comprasCtrl'
      }
    }
  })

  .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.facturas', {
    url: '/facturas',
    views: {
      'side-menu21': {
        templateUrl: 'templates/facturas.html',
        controller: 'facturasCtrl'
      }
    }
  })

  .state('menu.tareas', {
    url: '/tareas',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tareas.html',
        controller: 'tareasCtrl'
      }
    }
  })

  .state('menu.recordatorios', {
    url: '/recordatorios',
    views: {
      'side-menu21': {
        templateUrl: 'templates/recordatorios.html',
        controller: 'recordatoriosCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/home')

  

});