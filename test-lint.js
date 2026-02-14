import { spawn } from 'child_process';

const proc = spawn('npx', ['eslint', '.'], {
  stdio: 'inherit',
  shell: true,
  cwd: process.cwd()
});

proc.on('exit', (code) => {
  process.exit(code || 0);
});
