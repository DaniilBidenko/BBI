# Скопируйте изображения вручную:
# 1. Откройте папку Cursor: %USERPROFILE%\.cursor\projects\c-Users-Hello-User-Desktop-BBI\assets
# 2. Найдите файлы: *669cb617* (операционка) и *efcd3510* (диагностика)
# 3. Скопируйте их сюда с именами: operations-autonomous.png и diagnostics-analysis.png
#
# Или в проводнике: ПКМ на файле -> Копировать -> Вставить в web\public\blog\

$assets = "$env:USERPROFILE\.cursor\projects\c-Users-Hello-User-Desktop-BBI\assets"
$dest = $PSScriptRoot

$ops = Get-ChildItem $assets -Recurse -Filter "*669cb617*" -ErrorAction SilentlyContinue | Select-Object -First 1
$diag = Get-ChildItem $assets -Recurse -Filter "*efcd3510*" -ErrorAction SilentlyContinue | Select-Object -First 1

if ($ops) { Copy-Item $ops.FullName "$dest\operations-autonomous.png" -Force; Write-Host "OK: operations-autonomous.png" }
if ($diag) { Copy-Item $diag.FullName "$dest\diagnostics-analysis.png" -Force; Write-Host "OK: diagnostics-analysis.png" }
