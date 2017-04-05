(function () {
  'use strict';

  angular
    .module('<%= slugifiedPluralName %>')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: '<%= humanizedPluralName %>',
      state: '<%= slugifiedPluralName %>.list',
      //type: 'dropdown',
      roles: ['*']
    });

/*    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', '<%= slugifiedPluralName %>', {
      title: 'List <%= humanizedSingularName %>',
      state: '<%= slugifiedPluralName %>.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', '<%= slugifiedPluralName %>', {
      title: 'Create <%= humanizedSingularName %>',
      state: '<%= slugifiedPluralName %>.create',
      roles: ['user']
    });
*/
  }
}());