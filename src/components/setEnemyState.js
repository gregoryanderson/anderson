export const setEnemyState = num => {
  if (num === 0) {
    return [
      { left: 10, top: 20, row: 3 },
      { left: 20, top: 20, row: 3 },
      { left: 30, top: 20, row: 3 },
      { left: 40, top: 20, row: 3 },
      { left: 10, top: 10, row: 2 },
      { left: 20, top: 10, row: 2 },
      { left: 30, top: 10, row: 2 },
      { left: 40, top: 10, row: 2 },
      { left: 10, top: 0, row: 1 },
      { left: 20, top: 0, row: 1 },
      { left: 30, top: 0, row: 1 },
      { left: 40, top: 0, row: 1 }
    ];
  } else if (num === 1) {
    return [
      { left: 10, top: 30, row: 4 },
      { left: 20, top: 30, row: 4 },
      { left: 30, top: 30, row: 4 },
      { left: 40, top: 30, row: 4 },
      { left: 10, top: 20, row: 3 },
      { left: 20, top: 20, row: 3 },
      { left: 30, top: 20, row: 3 },
      { left: 40, top: 20, row: 3 },
      { left: 10, top: 10, row: 2 },
      { left: 20, top: 10, row: 2 },
      { left: 30, top: 10, row: 2 },
      { left: 40, top: 10, row: 2 },
      { left: 10, top: 0, row: 1 },
      { left: 20, top: 0, row: 1 },
      { left: 30, top: 0, row: 1 },
      { left: 40, top: 0, row: 1 }
    ];
  } else if (num === 2) {
    return [
      { left: 10, top: 40, row: 5 },
      { left: 20, top: 40, row: 5 },
      { left: 30, top: 40, row: 5 },
      { left: 40, top: 40, row: 5 },
      { left: 10, top: 30, row: 4 },
      { left: 20, top: 30, row: 4 },
      { left: 30, top: 30, row: 4 },
      { left: 40, top: 30, row: 4 },
      { left: 10, top: 20, row: 3 },
      { left: 20, top: 20, row: 3 },
      { left: 30, top: 20, row: 3 },
      { left: 40, top: 20, row: 3 },
      { left: 10, top: 10, row: 2 },
      { left: 20, top: 10, row: 2 },
      { left: 30, top: 10, row: 2 },
      { left: 40, top: 10, row: 2 },
      { left: 10, top: 0, row: 1 },
      { left: 20, top: 0, row: 1 },
      { left: 30, top: 0, row: 1 },
      { left: 40, top: 0, row: 1 }
    ];
  } else if (num === 3) {
    return [
      { left: 10, top: 50, row: 6 },
      { left: 20, top: 50, row: 6 },
      { left: 30, top: 50, row: 6 },
      { left: 40, top: 50, row: 6 },
      { left: 10, top: 40, row: 5 },
      { left: 20, top: 40, row: 5 },
      { left: 30, top: 40, row: 5 },
      { left: 40, top: 40, row: 5 },
      { left: 10, top: 30, row: 4 },
      { left: 20, top: 30, row: 4 },
      { left: 30, top: 30, row: 4 },
      { left: 40, top: 30, row: 4 },
      { left: 10, top: 20, row: 3 },
      { left: 20, top: 20, row: 3 },
      { left: 30, top: 20, row: 3 },
      { left: 40, top: 20, row: 3 },
      { left: 10, top: 10, row: 2 },
      { left: 20, top: 10, row: 2 },
      { left: 30, top: 10, row: 2 },
      { left: 40, top: 10, row: 2 },
      { left: 10, top: 0, row: 1 },
      { left: 20, top: 0, row: 1 },
      { left: 30, top: 0, row: 1 },
      { left: 40, top: 0, row: 1 }
    ];
  } else {
    return [
      { left: 20, top: 75, row: 2 },
      { left: 30, top: 75, row: 2 },
      { left: 40, top: 75, row: 2 },
      { left: 50, top: 75, row: 2 },
      { left: 20, top: 0, row: 1 },
      { left: 30, top: 0, row: 1 },
      { left: 40, top: 0, row: 1 },
      { left: 50, top: 0, row: 1 }
    ];
  }
};

export default setEnemyState;
