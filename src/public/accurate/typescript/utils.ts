
interface Note {
    _id: string
    done: boolean
    fail: boolean
    description: string
    key: string
}

async function createRequest(options: Note): Promise<void> {
    const response: Response = await fetch(document.URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify( options )
    })
}
