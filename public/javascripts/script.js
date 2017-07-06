$(function () {
$('.editBtn').click(function (event) {
const locationInfo = JSON.parse(this.name);
$('#editId').val(locationInfo._id);
$('#editName').val(locationInfo.name);
$('#editCategory').val(locationInfo.category);
$('#editLongitude').val(locationInfo.longitude);
$('#editLatitude').val(locationInfo.latitude);
});
});