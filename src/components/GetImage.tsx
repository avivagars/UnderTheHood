import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/storage";
import { getStorage, ref, uploadBytes, uploadString } from "firebase/storage";

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

// Create a storage reference from our storage service
const storageRef = ref(storage, "images");
const file = "this is a file"
uploadString(storageRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });