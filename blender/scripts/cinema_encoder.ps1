# Encode les images rendues par cinema_plans.py en vidéos pour le site (public/cinema/).
# Pour chaque plan : <plan>.mp4 (960 × 540), <plan>-m.mp4 (640 × 360, téléphone), <plan>.webp (image fixe).
# Les images forment déjà une boucle parfaite : aucun fondu n'est ajouté entre la fin et le début.
# Passage en noir et blanc (le site pose la couleur) et léger halo autour des lumières.
#
# Lancement :
#   powershell -File blender/scripts/cinema_encoder.ps1 -Images <dossier des images> [-Plans cartes,flux,horizon]
param(
  [Parameter(Mandatory = $true)][string]$Images,
  [string[]]$Plans = @('cartes', 'flux', 'horizon'),
  [string]$Ffmpeg = 'ffmpeg'
)
$ErrorActionPreference = 'Stop'
$sortie = Join-Path (Split-Path (Split-Path $PSScriptRoot)) 'public\cinema'
New-Item -ItemType Directory -Force $sortie | Out-Null

$gris = 'colorchannelmixer=.3:.59:.11:0:.3:.59:.11:0:.3:.59:.11'
$halo = "format=gbrp,$gris,split[a][b];[b]gblur=sigma=10[g];[a][g]blend=all_mode=screen:all_opacity=0.5"

foreach ($p in $Plans) {
  $entree = Join-Path $Images "${p}_%04d.png"
  & $Ffmpeg -v error -y -framerate 24 -start_number 1 -i $entree -filter_complex "$halo,format=yuv420p" `
    -c:v libx264 -preset slow -crf 24 -g 48 -an -movflags +faststart (Join-Path $sortie "$p.mp4")
  & $Ffmpeg -v error -y -framerate 24 -start_number 1 -i $entree -filter_complex "$halo,scale=640:360:flags=lanczos,format=yuv420p" `
    -c:v libx264 -preset slow -crf 27 -g 48 -an -movflags +faststart (Join-Path $sortie "$p-m.mp4")
  & $Ffmpeg -v error -y -start_number 1 -i $entree -frames:v 1 -filter_complex "$halo,format=rgb24" `
    -c:v libwebp -quality 72 (Join-Path $sortie "$p.webp")
  Get-ChildItem $sortie -Filter "$p*" | ForEach-Object { '{0,-16} {1,8:N0} Ko' -f $_.Name, ($_.Length / 1KB) }
}
