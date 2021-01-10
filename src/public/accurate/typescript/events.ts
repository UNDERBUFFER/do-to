
function updateNote(act: 'fail' | 'done'): void {
    const blocks: HTMLCollection = document.getElementsByClassName(`note-${act}`)
    for (let input of blocks) {
        input.addEventListener('click', (): void => {
            let _id: string = input.id
            _id = _id.slice(_id.indexOf('-') + 1)
            const descriptionObject: HTMLElement | null = document.getElementById( `text-${_id}`)
            if (descriptionObject !== null) createRequest({
                _id: _id,
                done: act === 'done' ? true : false,
                fail: act === 'fail' ? true : false,
                description: descriptionObject.innerText,
                key: new URL( document.URL ).pathname.slice(1)
            })
            console.log(`[update] sending with ${act}`)
        })
    }
}

updateNote('fail')
updateNote('done')