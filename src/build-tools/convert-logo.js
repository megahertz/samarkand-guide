#!/usr/bin/env node

'use strict';

const iconGen = require('icon-gen');
const fs = require('fs');
const path = require('path');

const imgPath = path.join(__dirname, '../../static/img');

iconGen(path.join(imgPath, 'logo.svg'), imgPath, {
  report: true,
  ico: {
    name: '../favicon',
    sizes: [32],
  },
  favicon: {
    name: 'logo-',
    pngSizes: [180, 192, 512],
    icoSizes: [32],
  },
})
  .then((filePaths) => {
    const duplicatePath = path.join(imgPath, 'favicon.ico');
    const withoutDuplicate = filePaths.filter((f) => f !== duplicatePath);

    console.info('\nGenerated assets:', `\n  ${withoutDuplicate.join('\n  ')}`);

    return fs.promises.rm(duplicatePath);
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
