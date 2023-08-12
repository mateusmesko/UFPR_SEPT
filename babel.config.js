module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current', // Para suportar a versão atual do Node.js
        },
      },
    ],
  ],
};
