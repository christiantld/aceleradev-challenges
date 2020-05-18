module.exports = {
  bail: 1,
  reporters: [
    [
      "jest-junit",
      {
        outputName: "output.xml",
      },
    ],
  ],
};
