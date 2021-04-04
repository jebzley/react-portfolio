export const listeningTo = fetch(
  "https://lychee-cake-13619.herokuapp.com/spotify"
)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(response)
    return response;
  });
