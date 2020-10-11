import Event from "../../models/event";
import Firebase from "../../contexts";

const firebase = new Firebase();
const db = firebase.db;

export const getEventData = (event_id) => {
    return db.collection(Event.collection)
        .doc(event_id)
        .get()
}