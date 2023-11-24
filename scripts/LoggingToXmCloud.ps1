$url = "https://xmc-xcentium-xmbetaplaygc922-testing.sitecorecloud.io/"

Write-Host "Logging into Sitecore..." -ForegroundColor Green

dotnet sitecore cloud login

dotnet sitecore connect --ref xmcloud --cm $url --allow-write true -n default

if ($LASTEXITCODE -ne 0) {
  Write-Error "Unable to log into Sitecore, did the Sitecore environment start correctly? See logs above."
}
