param(
    [Parameter(Mandatory = $true)][string]$InputPath,
    [Parameter(Mandatory = $true)][string]$OutputPath
)

Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

$word = $null
$document = $null

try {
    $word = New-Object -ComObject Word.Application
    $word.Visible = $false
    $word.DisplayAlerts = 0
    $document = $word.Documents.Open($InputPath, $false, $true)
    $document.Activate()
    $selection = $word.Selection
    $selection.WholeStory()
    $selection.CopyAsPicture()
    Start-Sleep -Milliseconds 1200
    $image = [System.Windows.Forms.Clipboard]::GetImage()
    if ($null -eq $image) {
        throw 'Word did not place a rendered image on the clipboard.'
    }
    $image.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $image.Dispose()
}
finally {
    if ($null -ne $document) { $document.Close($false) }
    if ($null -ne $word) { $word.Quit() }
    [System.Runtime.InteropServices.Marshal]::ReleaseComObject($document) | Out-Null
    [System.Runtime.InteropServices.Marshal]::ReleaseComObject($word) | Out-Null
}
