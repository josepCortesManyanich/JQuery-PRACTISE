$(function(){
    $('#Products').on('click','.add-to', function(){
        let productName = $(this).closest('.product-card').data('name');
        $('.cart-list').append('<li>'+ productName + '</li>')
    })
})