export const setEnemyState = num => {
  if (num === 0) {
    return [
      { left: 200, top: 150, row: 3 },
      { left: 300, top: 150, row: 3 },
      { left: 400, top: 150, row: 3 },
      { left: 500, top: 150, row: 3 },
      { left: 200, top: 75, row: 2 },
      { left: 300, top: 75, row: 2 },
      { left: 400, top: 75, row: 2 },
      { left: 500, top: 75, row: 2 },
      { left: 200, top: 0, row: 1 },
      { left: 300, top: 0, row: 1 },
      { left: 400, top: 0, row: 1 },
      { left: 500, top: 0, row: 1 }
    ];
  } else if (num === 1) {
    return [
      { left: 200, top: 225, row: 4 },
      { left: 300, top: 225, row: 4 },
      { left: 400, top: 225, row: 4 },
      { left: 500, top: 225, row: 4 },
      { left: 200, top: 150, row: 3 },
      { left: 300, top: 150, row: 3 },
      { left: 400, top: 150, row: 3 },
      { left: 500, top: 150, row: 3 },
      { left: 200, top: 75, row: 2 },
      { left: 300, top: 75, row: 2 },
      { left: 400, top: 75, row: 2 },
      { left: 500, top: 75, row: 2 },
      { left: 200, top: 0, row: 1 },
      { left: 300, top: 0, row: 1 },
      { left: 400, top: 0, row: 1 },
      { left: 500, top: 0, row: 1 }
    ];
  } else if (num === 2) {
    return [
      { left: 200, top: 300, row: 5 },
      { left: 300, top: 300, row: 5 },
      { left: 400, top: 300, row: 5 },
      { left: 500, top: 300, row: 5 },
      { left: 200, top: 225, row: 4 },
      { left: 300, top: 225, row: 4 },
      { left: 400, top: 225, row: 4 },
      { left: 500, top: 225, row: 4 },
      { left: 200, top: 150, row: 3 },
      { left: 300, top: 150, row: 3 },
      { left: 400, top: 150, row: 3 },
      { left: 500, top: 150, row: 3 },
      { left: 200, top: 75, row: 2 },
      { left: 300, top: 75, row: 2 },
      { left: 400, top: 75, row: 2 },
      { left: 500, top: 75, row: 2 },
      { left: 200, top: 0, row: 1 },
      { left: 300, top: 0, row: 1 },
      { left: 400, top: 0, row: 1 },
      { left: 500, top: 0, row: 1 }
    ];
  } else if (num === 3) {
    return [
      { left: 200, top: 375, row: 6 },
      { left: 300, top: 375, row: 6 },
      { left: 400, top: 375, row: 6 },
      { left: 500, top: 375, row: 6 },
      { left: 200, top: 300, row: 5 },
      { left: 300, top: 300, row: 5 },
      { left: 400, top: 300, row: 5 },
      { left: 500, top: 300, row: 5 },
      { left: 200, top: 225, row: 4 },
      { left: 300, top: 225, row: 4 },
      { left: 400, top: 225, row: 4 },
      { left: 500, top: 225, row: 4 },
      { left: 200, top: 150, row: 3 },
      { left: 300, top: 150, row: 3 },
      { left: 400, top: 150, row: 3 },
      { left: 500, top: 150, row: 3 },
      { left: 200, top: 75, row: 2 },
      { left: 300, top: 75, row: 2 },
      { left: 400, top: 75, row: 2 },
      { left: 500, top: 75, row: 2 },
      { left: 200, top: 0, row: 1 },
      { left: 300, top: 0, row: 1 },
      { left: 400, top: 0, row: 1 },
      { left: 500, top: 0, row: 1 }
    ];
  } else {
     return [
      { left: 200, top: 75, row: 2 },
      { left: 300, top: 75, row: 2 },
      { left: 400, top: 75, row: 2 },
      { left: 500, top: 75, row: 2 },
      { left: 200, top: 0, row: 1 },
      { left: 300, top: 0, row: 1 },
      { left: 400, top: 0, row: 1 },
      { left: 500, top: 0, row: 1 }
    ];
  }
};

export default setEnemyState;
