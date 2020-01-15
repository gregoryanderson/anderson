export const getPlayers = async () => {
    const url = 'http://localhost:3003/api/v1/players/';
    let res = await fetch(url);
    if (!res.ok) {
      throw new Error("There was an error retrieving your players!");
    } else {
      let data = await res.json();
      return data;
    }
  };
  
  export const getScores = async () => {
    const url = 'http://localhost:3003/api/v1/scores/';
    let res = await fetch(url);
    if (!res.ok) {
      throw new Error("There was an error retrieving your Scores!");
    } else {
      let data = await res.json();
      return data;
    }
  };

export const postPlayer = async playerName => {
    const url = 'http://localhost:3003/api/v1/players/';
    const body = {
      name: playerName
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    };
  
    try {
      const res = await fetch(url, options);
      if (!res.ok) {
        throw new Error("There was an error posting this player!");
      }
      const newplayer = await res.json();
      return newplayer;
    } catch (error) {
      throw new Error(error);
    }
  };

  export const postScore = async (
    playerScore,
    playerId
  ) => {
    const url = 'http://localhost:3003/api/v1/scores/';
    const body = {
      player_id: playerId,
      score: playerScore
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    };
  
    try {
      const res = await fetch(url, options);
      if (!res.ok) {
        throw new Error("There was an error posting this palette!");
      }
      const newPalette = await res.json();
      return newPalette;
    } catch (error) {
      throw new Error(error);
    }
  };