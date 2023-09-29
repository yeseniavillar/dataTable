
$(document).ready(function () {
    var table = $('#example').DataTable({
        responsive: true,
        //dom: 'Btrtip',
       "lengthChange":false, 
       "autoWidth": false,
        columnDefs: [
         { responsivePriority: 5, targets: 0 },
         { responsivePriority: 1, targets: 2 },
         { responsivePriority: 0, targets: 5 },
        
       ],
       language: {
       "info": "Mostrando _START_ a _END_ de _TOTAL_ registros de empleados",
       "search": "Buscar:",
           "paginate": {
             "first": "Primero",
             "last": "Último",
             "next": "Siguiente",
             "previous": "Anterior"
             }
         },
        buttons: [
              {
                 extend:    'copy',
                 text:      '<h4><i class="fa-solid fa-copy"></i></h4>',
                 titleAttr: 'Tirar una copia',
                 className: 'btn btn-primary m-1 px-3',
              },
              {
                 extend:    'excelHtml5',
                 text:      '<h4><i class="fa-solid fa-file-excel"></i></h4>',
                 titleAttr: 'Exportar a Excel',
                 className: 'btn btn-success m-1 '
              },
              {
                 extend:    'pdfHtml5',
                 text:      '<h4><i class="fa-solid fa-file-pdf"></i></h4>',
                 titleAttr: 'Exportar a PDF',
                 className: 'btn btn-danger m-1'
              },
              {
                 extend:    'print',
                 text:      '<h4><i class="fa-solid fa-print"></i></h4>',
                 titleAttr: 'Imprimir datos',
                 className: 'btn btn-info m-1 px-3'
                 
              }
           ],
           
         
        
    }); // Mover los botones al encabezado
      table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');

 
 });


 $(document).ready(function() {
   var table = $('#example2').DataTable( {
       lengthChange: false,
       responsive: true,
       buttons: [
         {     extend:'print',
               text: '<h4><i class="fa-solid fa-print"></i></h4>',
               split: [ 
                  {
                     extend:    'excelHtml5',
                     titleAttr: 'Exportar a Excel',
                     text:      'Exportar a <i class="fa-solid fa-file-excel"></i>',
                     className: 'text-white bg-success',
                  },
                  {
                     extend:    'pdfHtml5',
                     text:      'Exportar a <i class="fa-solid fa-file-pdf"></i>',
                     titleAttr: 'Exportar a PDF',
                     className: 'text-white bg-danger',
                     
                  },
                  {
                     extend:    'copy',
                     text:      'Hacer una <i class="fa-solid fa-copy"></i>',
                     titleAttr: 'Hacer una copia',
                     className: 'text-white bg-primary'
                     
                  }
               ],
         }
       ]
   } );

   table.buttons().container()
       .appendTo( '#example2_wrapper .col-md-6:eq(0)' );
} );
