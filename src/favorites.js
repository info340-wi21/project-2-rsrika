import React, {useState, useEffect} from 'react';
import firebase from 'firebase';
import CANDY_DATA from './data/candy-data.json'; 


export function FavoritesPage(props) {
   
    let candiesArray;
    let favCandies = [];
    useEffect(() => {
      let favsRef = firebase.database().ref('users/'+ props.currentUser.uid + '/favorites')
  
      favsRef.on('value', (snapshot) => {
        const candiesObjs = snapshot.val();
        console.log(candiesObjs);
        let objectKeyArray = Object.keys(candiesObjs);
        candiesArray = objectKeyArray.map((key) => {
          console.log(key)
          let singleCandyObj = candiesObjs[key];
          return singleCandyObj;
        })
        console.log("candiesArray", candiesArray);
        for (let i = 0; i < candiesArray.length; i++) {
          let index = candiesArray[i];
          let candy = CANDY_DATA[index];
          favCandies.push(candy);
        }
        
        console.log(favCandies);
        props.setCandydata(favCandies);  
      });
    }, []);
    return null;
    
    
  }