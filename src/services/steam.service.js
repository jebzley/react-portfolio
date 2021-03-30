export const currentlyPlaying = async () => {
  const apiResponse = await fetch(
    "https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=B44DB7B21D39F68472004DA0D1275760&steamid=76561197978195082&format=json"
  );
  const jsonResponse = await apiResponse.json();
  console.log(apiResponse)
  console.log(jsonResponse)
};
