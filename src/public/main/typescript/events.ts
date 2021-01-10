
const addingNote: HTMLElement | null = document.getElementById('adding-note')
if (addingNote !== null) addingNote.onclick = (): void => {
    const mainDiv: HTMLElement | null = document.getElementById('creating-list')
    if (mainDiv !== null) {
        for (let i: number = mainDiv.children.length - 1; i >= 0; i--) {
            if ( mainDiv.children[i - 1].getAttribute('type') === 'text' ) {
                const newBlock: HTMLElement = document.createElement('input')
                const newId: number = JSON.parse(mainDiv.children[i - 1].getAttribute('name') ?? `{"note": 1}`).note
                console.log(newId)
                newBlock.setAttribute('type', 'text')
                newBlock.className = 'note'
                newBlock.setAttribute('form', 'creating-list-form')
                newBlock.setAttribute('name', JSON.stringify({
                    note: newId + 1
                }))
                mainDiv.insertBefore( newBlock, mainDiv.children[i] )
                break
            }
        }
    }
}
