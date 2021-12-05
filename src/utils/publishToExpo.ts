#!/usr/bin/env node
const { execSync } = require('child_process');

const releaseChannel = `access-my-city`;

const username = 'ddteam3';
const password = 'DDTeam3!';

console.log(`Logging in: ${username}...\n`);
execSync(`yes Y | expo login -u ${username} -p ${password}`, {
  stdio: 'inherit',
});
execSync('node ./bin/bumpMinorVersion', { stdio: 'inherit' });

console.log('Running Expo Publish');
execSync(`yes Y | expo publish --release-channel ${releaseChannel}`, {
  stdio: 'inherit',
});

console.log(`Logging out: \n`);
execSync(`expo logout`, { stdio: 'inherit' });
