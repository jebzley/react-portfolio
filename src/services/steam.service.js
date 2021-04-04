export const currentlyPlaying = fetch(
  "https://lychee-cake-13619.herokuapp.com/steam"
)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    return res.games[res.games.length-1].name;
  });
