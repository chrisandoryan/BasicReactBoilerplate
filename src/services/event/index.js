import Event from "../../models/event";
import Firebase from "../../contexts";
import User from "../../models/user";

const firebase = new Firebase();
const db = firebase.db;

export const sendReaction = (emot_id, event_id) => {
    return db.collection(Event.collection)
        .doc(event_id)
        .collection("reactions")
        .add({
            emoticon: emot_id,
            react_time: new Date()
        });
}

export const checkReactionDone = (event_id, user_id) => {
    db.collection(Event.collection)
        .doc(event_id)
        .collection("reactions")
}

export const getEventData = (event_id) => {
    return db.collection(Event.collection)
        .doc(event_id)
        .get()
}

export const getAllEvents = () => {
    return db.collection(Event.collection)
        .get()
}

export const getMyEvents = (user_id) => {
    return db.collection(User.collection)
        .doc(user_id)
        .collection("tickets")
        .get()
}