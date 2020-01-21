export const getPlayers = async () => {
    const url = 'https://anderson-be.herokuapp.com/api/v1/players/';
    let res = await fetch(url);
    if (!res.ok) {
      throw new Error("There was an error retrieving your players!");
    } else {
      let data = await res.json();
      return data;
    }
  };
  
  export const getScores = async () => {
    const url = 'https://anderson-be.herokuapp.com/api/v1/scores/';
    let res = await fetch(url);
    if (!res.ok) {
      throw new Error("There was an error retrieving your Scores!");
    } else {
      let data = await res.json();
      return data;
    }
  };

export const postPlayer = async playerName => {
    const url = 'https://anderson-be.herokuapp.com/api/v1/players/';
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
    const url = 'https://anderson-be.herokuapp.com/api/v1/scores/';
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
        throw new Error("There was an error posting this score!");
      }
      const newPalette = await res.json();
      return newPalette;
    } catch (error) {
      throw new Error(error);
    }
  };

  export const deleteScore = async id => {
    const url = `https://anderson-be.herokuapp.com/api/v1/scores/${id}`;
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    };
    try {
      const res = await fetch(url, options);
      if (!res.ok) {
        throw new Error("Cannot delete Score!");
      }
      const deletedScore = await res.json();
      return deletedScore;
    } catch (error) {
      throw new Error(error);
    }
  };

  export const deletePlayer = async id => {
    const url = `https://anderson-be.herokuapp.com/api/v1/scores/${id}`;
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    };
    try {
      const res = await fetch(url, options);
      if (!res.ok) {
        throw new Error("Cannot delete player!");
      }
      const deletedPlayer = await res.json();
      return deletedPlayer;
    } catch (error) {
      throw new Error(error);
    }
  };
  