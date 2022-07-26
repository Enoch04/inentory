import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBLVVvlBRkhGQXvVRm-jZ0SsXesxfqsQUA",
  authDomain: "crwn-clothing-41649.firebaseapp.com",
  projectId: "crwn-clothing-41649",
  storageBucket: "crwn-clothing-41649.appspot.com",
  messagingSenderId: "944069216150",
  appId: "1:944069216150:web:feec99df2ce72f2d91ffb7",
  measurementId: "G-0W2J53E49F"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();


export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const addOrderToUserHistory = async (objectsToAdd, totalAmount,userAuth,paymentID) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  
  const createdAt = new Date();
  const ran = Math.floor(Math.random() * 1000000);
  const order = { 
    orderNumber : ran + 'U'+ createdAt.getDay(),
    createdAt,
    paymentID: paymentID,
    total: totalAmount,
    details: objectsToAdd
  }
  try{
    await updateDoc(userDocRef,{
    history: arrayUnion(order)
    });
  } catch(error){
    console.log('error adding cart items to user history', error.message);
  } 
};

export const addOrderToGuestHistory = async (objectsToAdd, totalAmount,paymentID) =>{
  const userAuth = 'mLqJYWRCE3QQnbU0YYmKtVH47b33';
  const userDocRef = doc(db,'users', userAuth);

  const createdAt = new Date();
  const ran = Math.floor(Math.random() * 1000000);
  const order = {
    orderNumber : ran + 'G'+ createdAt.getDay(), 
    createdAt,
    paymentID: paymentID,
    total: totalAmount,
    details: objectsToAdd
  }
  try{
    await updateDoc(userDocRef,{
    history: arrayUnion(order)
    });
  } catch(error){
    console.log('error adding cart items to guest history', error.message);
  } 
};

export const getOrdersHistory = async () => {
  const collectionRef = collection(db, 'users');
  const q = query(collectionRef);
  
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => doc.data());
};


export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => doc.data());
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        history:[],
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};



export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
