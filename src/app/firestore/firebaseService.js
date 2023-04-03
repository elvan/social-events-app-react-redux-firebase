import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  updateProfile,
} from 'firebase/auth';
import {
  ref as fbRef,
  getDatabase,
  limitToLast,
  orderByKey,
  push,
  query,
} from 'firebase/database';
import {
  deleteObject,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { toast } from 'react-toastify';
import { app } from '../config/firebase';
import { setUserProfileData } from './firestoreService';

const auth = getAuth(app);
const db = getDatabase(app);

export function firebaseObjectToArray(snapshot) {
  if (snapshot) {
    return Object.entries(snapshot).map((e) =>
      Object.assign({}, e[1], { id: e[0] })
    );
  }
}

export function signInWithEmail(creds) {
  return signInWithEmailAndPassword(auth, creds.email, creds.password);
}

export function signOutFirebase() {
  return signOut(auth);
}

export async function registerInFirebase(creds) {
  try {
    const result = await createUserWithEmailAndPassword(
      auth,
      creds.email,
      creds.password
    );
    await updateProfile(result.user, {
      displayName: creds.displayName,
    });
    return await setUserProfileData(result.user);
  } catch (error) {
    throw error;
  }
}

export async function socialLogin(selectedProvider) {
  let provider;
  if (selectedProvider === 'facebook') {
    provider = new FacebookAuthProvider();
  }
  if (selectedProvider === 'google') {
    provider = new GoogleAuthProvider();
  }
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    if (result._tokenResponse.isNewUser) {
      await setUserProfileData(result.user);
    }
  } catch (error) {
    toast.error(error.message);
  }
}

export function updateUserPassword(creds) {
  const user = auth.currentUser;
  return updatePassword(user, creds.newPassword1);
}

export function uploadToFirebaseStorage(file, filename) {
  const user = auth.currentUser;
  const storage = getStorage(app);
  const storageRef = ref(storage, `${user.uid}/user_images/${filename}`);
  return uploadBytesResumable(storageRef, file);
}

export function deleteFromFirebaseStorage(filename) {
  const userUid = auth.currentUser.uid;
  const storage = getStorage(app);
  const storageRef = ref(storage, `${userUid}/user_images/${filename}`);
  return deleteObject(storageRef);
}

export function addEventChatComment(eventId, values) {
  const user = auth.currentUser;
  const newComment = {
    displayName: user.displayName,
    photoURL: user.photoURL,
    uid: user.uid,
    text: values.comment,
    date: Date.now(),
    parentId: values.parentId,
  };
  return push(fbRef(db, `chat/${eventId}`), newComment);
}

export function getEventChatRef(eventId) {
  return query(fbRef(db, `chat/${eventId}`), orderByKey());
}

export function getUserFeedRef() {
  const user = auth.currentUser;
  if (!user) return;
  return query(fbRef(db, `posts/${user.uid}`), orderByKey(), limitToLast(5));
}
