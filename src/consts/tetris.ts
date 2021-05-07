export const STAGE_HEIGHT = 18;
export const STAGE_WIDTH = 10;
export const PIXEL_SIZE = 30;
export const initialMap = [...new Array(STAGE_HEIGHT)].map(() =>
  [...new Array(STAGE_WIDTH)].map(() => ({ fill: 0, color: [] }))
);

export const colors = [
  "#e54b4b",
  "#9a031e",
  "#fcdc4d",
  "#005397",
  "#0bbcd6",
  "#20ad65",
  "#f8ebee",
];

export const I = {
  bloco: [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
};

export const O = {
  bloco: [
    [1, 1],
    [1, 1],
  ],
};

export const T = {
  bloco: [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0],
  ],
};

export const J = {
  bloco: [
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 0],
  ],
};

export const L = {
  bloco: [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 1],
  ],
};

export const S = {
  bloco: [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
};

export const Z = {
  bloco: [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
};
