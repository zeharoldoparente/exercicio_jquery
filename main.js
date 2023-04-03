$(document).ready(function () {
    $('form').submit(function (e) {
        e.preventDefault();

        const task = $('#task').val();
        const newTask = $('<li>'+ task +'</li>');
        $('#task-list').append(newTask);
        $('#task').val('');

    });

    $(document).on('click', '#task-list li', function() {
        $(this).toggleClass('completed');
    });

});
