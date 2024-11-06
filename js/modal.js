$(function(){
    var myModal = $('#myModal')
         $('.pageSelectBtn').on('click', function (e) {
            e.preventDefault();
            $('#myModal').modal("show");
        })
        $('.modal-backdrop.show').on('click', function(e) {
        e.preventDefault();
        $('#myModal').modal("hide");
        })
      
})
