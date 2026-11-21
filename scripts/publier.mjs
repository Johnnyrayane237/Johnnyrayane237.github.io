// Publie le portfolio à ses deux adresses :
//  1. GitHub Pages  → https://johnnyrayane237.github.io/ (dist/ poussé sur la branche main)
//  2. Coolify (VPS) → https://johanne.vorchex.tech/ (redéploie depuis cette même branche main)
// Usage : npm run publier
import { execSync } from 'node:child_process';
import { writeFileSync, existsSync, readFileSync } from 'node:fs';

const REPO = 'https://github.com/Johnnyrayane237/Johnnyrayane237.github.io.git';
const COOLIFY_APP = 'nnspwixtolfz5yfvg3134h2d';
const ACCES = 'F:/Downloads/RJP/.acces-vps/acces.env';
const run = (cmd, cwd) => execSync(cmd, { cwd, stdio: 'inherit' });

// ---------- 1. GitHub Pages ----------
run('npx vite build');
writeFileSync('dist/.nojekyll', '');
writeFileSync('dist/README.md', '# Portfolio de Johanne Pamegne\n\n- https://johnnyrayane237.github.io/\n- https://johanne.vorchex.tech/\n\nLe code source est sur la branche `source`.\n');
if (!existsSync('dist/.git')) {
  run('git init -q -b main', 'dist');
  run(`git remote add origin ${REPO}`, 'dist');
}
run('git config user.name "Johanne Pamegne"', 'dist');
// Adresse anonyme de GitHub : l'adresse personnelle n'apparaît jamais dans l'historique public.
run('git config user.email "175623267+Johnnyrayane237@users.noreply.github.com"', 'dist');
run('git add -A', 'dist');
const date = new Date().toISOString().slice(0, 16).replace('T', ' ');
try {
  run(`git commit -q -m "Publication du portfolio (${date})" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"`, 'dist');
} catch { console.log('Aucun changement à publier.'); }
run('git push -u origin main --force', 'dist');
console.log('\nGitHub Pages : https://johnnyrayane237.github.io/ (à jour dans 1 à 2 minutes)');

// ---------- 2. Coolify ----------
// Le jeton est lu localement (variable d'environnement ou fichier d'accès), jamais écrit dans le dépôt.
let url = process.env.COOLIFY_URL, token = process.env.COOLIFY_TOKEN;
if ((!url || !token) && existsSync(ACCES)) {
  const env = readFileSync(ACCES, 'utf8');
  const get = (k) => (env.match(new RegExp(`^${k}=(.*)$`, 'm')) || [])[1]?.trim();
  url = url || get('COOLIFY_URL'); token = token || get('COOLIFY_TOKEN');
}
if (!url || !token) {
  console.log('Coolify : accès introuvable, johanne.vorchex.tech n\'a pas été mis à jour.');
} else {
  const r = await fetch(`${url}/api/v1/deploy?uuid=${COOLIFY_APP}`, { method: 'POST', headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' } });
  if (r.ok) console.log('Coolify : redéploiement lancé → https://johanne.vorchex.tech/ (à jour dans 1 minute environ)');
  else console.log(`Coolify : échec du redéploiement (code ${r.status}).`);
}
