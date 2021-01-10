function updateNote(act) {
    var blocks = document.getElementsByClassName("note-" + act);
    var _loop_1 = function (input) {
        input.addEventListener('click', function () {
            var _id = input.id;
            _id = _id.slice(_id.indexOf('-') + 1);
            var descriptionObject = document.getElementById("text-" + _id);
            if (descriptionObject !== null)
                createRequest({
                    _id: _id,
                    done: act === 'done' ? true : false,
                    fail: act === 'fail' ? true : false,
                    description: descriptionObject.innerText,
                    key: new URL(document.URL).pathname.slice(1)
                });
            console.log("[update] sending with " + act);
        });
    };
    for (var _i = 0, blocks_1 = blocks; _i < blocks_1.length; _i++) {
        var input = blocks_1[_i];
        _loop_1(input);
    }
}
updateNote('fail');
updateNote('done');
