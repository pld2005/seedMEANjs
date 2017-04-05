(function () {
  'use strict';

  angular
    .module('<%= slugifiedPluralName %>')
    .controller('<%= classifiedPluralName %>ListController', <%= classifiedPluralName %>ListController);

  <%= classifiedPluralName %>ListController.$inject = ['<%= classifiedPluralName %>Service', 'DTOptionsBuilder', 'DTColumnBuilder', 'DTColumnDefBuilder', '$filter'];

  function <%= classifiedPluralName %>ListController(<%= classifiedPluralName %>Service, DTOptionsBuilder, DTColumnBuilder, DTColumnDefBuilder, $filter, <%= camelizedSingularName %>, SweetAlert) {
    var vm = this;
    vm.dtInstance = {};
    vm.remove = remove;
    vm.<%= camelizedSingularName %> = <%= camelizedSingularName %>;

    // Remove existing 
    function remove(<%= camelizedSingularName %>) {
      swal({
        title: "Confirmar",
        text: "Está seguro que desea eliminar el registro?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Si, eliminar!",
        cancelButtonText: "No, cancelar!",
        closeOnConfirm: true,
        closeOnCancel: true },
      function (isConfirm) {
          if (isConfirm) {
            if (<%= camelizedSingularName %>) {
                <%= camelizedSingularName %>.$remove();
                for (var i in vm.<%= slugifiedPluralName %>) {
                    if (vm.<%= slugifiedPluralName %>[i] === <%= camelizedSingularName %>) {
                        vm.<%= slugifiedPluralName %>.splice(i, 1);
                        break;
                    }
                }
            } else {
                vm.optrack.$remove(function() {
                    $location.path('<%= slugifiedPluralName %>');
                });
            }
            //SweetAlert.swal("Deleted!", "Your imaginary file has been deleted.", "success");
          } else {
            //SweetAlert.swal("Cancelled", "Your imaginary file is safe :)", "error");
          }
      });
    };

    <%= classifiedPluralName %>Service.query().$promise.then(function(results) {
      vm.<%= slugifiedPluralName %> = results;
    });
    
    vm.dtOptions = DTOptionsBuilder.newOptions()
        .withDOM('<"html5buttons"B>lTfgitp')
        .withPaginationType('full_numbers')
        .withOption("order", [[0, "asc"]])
        .withOption('stateSave', true)
        .withButtons([
            { extend: 'copy' },
            { extend: 'csv' },
            { extend: 'excel', title: '<%= camelizedPluralName %>' },
            { extend: 'pdf', title: '<%= camelizedPluralName %>' },

            { extend: 'print', text: 'Imprimir',  
               customize: function (win){
                  $(win.document.body).addClass('white-bg');
                  $(win.document.body).css('font-size', '10px');

                  $(win.document.body).find('table')
                          .addClass('compact')
                          .css('font-size', 'inherit');
              }
            }
        ]);

    vm.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(0), //.notVisible(), //.notSortable() // .withTitle('ID'),
        DTColumnDefBuilder.newColumnDef(1).withTitle('Fecha').renderWith(function(data, type) {
          return $filter('date')(data, 'dd/MM/yyyy'); //date filter 
        }),
        DTColumnDefBuilder.newColumnDef(2).notSortable()
    ];
  }
}());
