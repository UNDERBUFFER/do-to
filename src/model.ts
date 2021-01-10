
import { ObjectID } from 'mongodb'


export interface Note {
    _id?: ObjectID
    done: boolean
    fail: boolean
    description: string
    key: string
}
