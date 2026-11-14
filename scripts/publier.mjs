// Publie le portfolio sur GitHub Pages : compile, puis envoie dist/ sur la branche main
// du dépôt Johnnyrayane237.github.io. Usage : npm run publier
import { execSync } from 'node:child_process';
import { writeFileSync, existsSync } from 'node:fs';

const REPO = 'https://github.com/Johnnyrayane237/Johnnyrayane237.github.io.git';
const run = (cmd, cwd) => execSync(cmd, { cwd, stdio: 'inherit' });

run('npx vite build');
writeFileSync('dist/.nojekyll', '');
writeFileSync('dist/README.md', '# Portfolio de Johanne Pamegne\n\nSite publié automatiquement : https://johnnyrayane237.github.io/\n\nLe code source est sur la branche `source`.\n');
if (!existsSync('dist/.git')) {
  run('git init -q -b main', 'dist');
  run(`git remote add origin ${REPO}`, 'dist');
}
run('git config user.name "Johanne Pamegne"', 'dist');
run('git add -A', 'dist');
const date = new Date().toISOString().slice(0, 16).replace('T', ' ');
try {
  run(`git commit -q -m "Publication du portfolio (${date})" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"`, 'dist');
} catch { console.log('Aucun changement à publier.'); }
run('git push -u origin main --force', 'dist');
console.log('\nPublié : https://johnnyrayane237.github.io/ (en ligne dans 1 à 2 minutes)');
