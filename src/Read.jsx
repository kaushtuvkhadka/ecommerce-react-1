import React, {useState} from 'react';
import app from "../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import { useNavigate } from 'react-router-dom';

function Read() {
  const navigate = useNavigate();

  let [fruitArray, setFruitArray] = useState([]);

  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "nature/fruits");
    const snapshot = await get(dbRef);
    if(snapshot.exists()) {
      setFruitArray(Object.values(snapshot.val()));
    } else {
      alert("error");
    }
  }

 
}

export default Read