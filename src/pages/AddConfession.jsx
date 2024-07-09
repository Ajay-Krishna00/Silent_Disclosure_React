import React, { useState } from "react";
import "./AddConfession.css";
import { app } from "../firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const AddConfession = () => {
  const [confessions, setConfessions] = useState("");
  const db = getFirestore(app);
  const addConfession = async (e) => {
    e.preventDefault();
    const confession = e.target.confession.value;
    try {
      const docRef = await addDoc(collection(db, "confessions"), {
        confession,
        date: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      setConfessions("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className="inputDiv">
      <form onSubmit={addConfession}>
        <input
          className="inputBar"
          type="text"
          name="confession"
          id="confession"
          value={confessions}
          onChange={(e) => setConfessions(e.target.value)}
          placeholder="Write your Disclosure here"
        />
        <div className="ref">
          <input className="submit" type="submit" value="Submit" />
          <div className="submitted">Submitted&#9989;</div>
        </div>
      </form>
    </div>
  ); 
};

export default AddConfession;
