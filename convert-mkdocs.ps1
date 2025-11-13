# Convert MkDocs files to Docusaurus format
$files = Get-ChildItem "c:\Users\Lenovo\OneDrive - Leeds Trinity University\Documents\Git Clone Area\csref.dev-1\docs\level-3" -Filter "*.md" -Recurse

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $modified = $false
    
    # Convert admonitions: !!! info "Title" -> :::info Title
    if ($content -match "^!!! (\w+) `"([^`"]+)`"") {
        $content = $content -replace "^!!! (\w+) `"([^`"]+)`"", ":::$1 $2"
        $content = $content -replace "^(\t| {4})", ""  # Remove indentation
        $modified = $true
    }
    
    # Remove hide: toc from frontmatter
    if ($content -match "hide:\s*\n\s*-\s*toc\s*\n") {
        $content = $content -replace "hide:\s*\n\s*-\s*toc\s*\n", ""
        $modified = $true
    }
    
    # Remove Material icons (just the icon syntax, keep the text)
    if ($content -match ":material-[^:]+:") {
        $content = $content -replace ":material-[^:]+:\s*", ""
        $modified = $true
    }
    
    # Convert grid cards to simple lists (basic conversion)
    if ($content -match "<div class=`"grid cards`"") {
        $content = $content -replace "<div class=`"grid cards`" markdown>", ""
        $content = $content -replace "</div>", ""
        $modified = $true
    }
    
    if ($modified) {
        Set-Content $file.FullName -Value $content -NoNewline
        Write-Host "Converted: $($file.Name)"
    }
}
