
import mongodb from 'mongodb'


export interface Note {
    done: boolean
    fail: boolean
    description: string
}

export interface NoteList {
    _id?: mongodb.ObjectID,
    notes: Note[]
}