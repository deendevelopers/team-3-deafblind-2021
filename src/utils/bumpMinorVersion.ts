#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const appPath = path.resolve(__dirname, '..', 'app.json');
const appJSON = fs.readFileSync(appPath, 'utf8');
const currentVersion = /"version": "([^"]*)/gm.exec(appJSON)[1] || '0.0.0';
const versionParts = currentVersion.split('.');
versionParts[versionParts.length - 1]++;
const newVersion = versionParts.join('.');
const updatedJSON = appJSON.replace(
  /"version": "[^"]*/gm,
  `"version": "${newVersion}`
);
fs.writeFileSync(appPath, updatedJSON, 'utf8');

console.log(`Updated version from ${currentVersion} to ${newVersion}`);
