
import mongodb from 'mongodb'


export interface Note {
    _id?: mongodb.ObjectID
    done: boolean
    fail: boolean
    description: string
}
