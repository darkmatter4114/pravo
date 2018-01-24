(function() {
$(function() {
return $('.icon').on('click', function() {
if ($(this).hasClass('on')) {
return $(this).removeClass('on');
} else {
return $(this).addClass('on');
}
});
});
 
}).call(this);