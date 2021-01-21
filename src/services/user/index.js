import Firebase from "../../contexts";

const firebase = new Firebase();
const db = firebase.db;

export const getUserDocument = async (user_id) => {
  let user = null;
  user = await db.collection("users").doc(user_id).get();
  if (user.exists) return user.data();

  return null;
};

export const updateUserDocument = async (user_id, payload) => {
  const user = await db.collection("users").doc(user_id).get();

  return user;
};
