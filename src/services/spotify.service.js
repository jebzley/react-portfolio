import { firestore } from "../firebase";

export const listeningTo = fetch(
  "https://lychee-cake-13619.herokuapp.com/spotify"
)
  .then((response) => response.json())
  .then(
    (response) =>
      response.nowListening.isPlaying === true &&
      firestore.collection("spotifyData").doc("currentSong").set(response)
  )
  .then(() =>
    firestore
      .collection("spotifyData")
      .doc("currentSong")
      .get()
      .then((response) => response.data().nowListening)
  );
