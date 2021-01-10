var addingNote = document.getElementById('adding-note');
if (addingNote !== null)
    addingNote.onclick = function () {
        var _a;
        var mainDiv = document.getElementById('creating-list');
        if (mainDiv !== null) {
            for (var i = mainDiv.children.length - 1; i >= 0; i--) {
                if (mainDiv.children[i - 1].getAttribute('type') === 'text') {
                    var newBlock = document.createElement('input');
                    var newId = JSON.parse((_a = mainDiv.children[i - 1].getAttribute('name')) !== null && _a !== void 0 ? _a : "{\"note\": 1}").note;
                    console.log(newId);
                    newBlock.setAttribute('type', 'text');
                    newBlock.className = 'note';
                    newBlock.setAttribute('form', 'creating-list-form');
                    newBlock.setAttribute('name', JSON.stringify({
                        note: newId + 1
                    }));
                    mainDiv.insertBefore(newBlock, mainDiv.children[i]);
                    break;
                }
            }
        }
    };
