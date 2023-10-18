function getUuid() {
    $.ajax({
        url: "http://127.0.0.1/api/get-uuid",
        type: 'GET',
        success: function (res) {
            console.log(res);
            $('#result').html(res)
        },
        error: function (xhr, ajaxOptions, thrownError) {
            $('#result').html(`Error: ${xhr.status} ${thrownError}`)
        }
    });
}