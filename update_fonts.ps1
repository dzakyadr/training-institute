$files = Get-ChildItem -Path "d:\training-institute\training-institute\*.html"

$oldConfig = @"
                    fontFamily: {
                        sans: ['"DM Sans"', 'sans-serif'],
                        serif: ['"Cormorant Garamond"', 'serif'],
                        display: ['"Cormorant Garamond"', 'serif'],
                        body: ['"DM Sans"', 'sans-serif']
                    },
"@

$newConfig = @"
                    fontFamily: {
                        sans: ['"Inter"', 'sans-serif'],
                        serif: ['"Poppins"', 'sans-serif'],
                        display: ['"Poppins"', 'sans-serif'],
                        body: ['"Inter"', 'sans-serif']
                    },
"@

$oldFonts = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
$newFonts = "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"

foreach ($file in $files) {
    if ($file.Name -eq "index.html") {
        continue
    }

    $content = Get-Content -Path $file.FullName -Raw

    # 1. Update Tailwind config
    $content = $content -replace [regex]::Escape($oldConfig), $newConfig

    # 2. Update Google Fonts
    $content = $content -replace [regex]::Escape($oldFonts), $newFonts

    # 3. Update h1 font-medium to font-bold
    $content = $content -replace '<h1 class="(.*?)font-medium(.*?)">', '<h1 class="$1font-bold$2">'

    # 4. Update h2, h3, h4 font-medium to font-semibold
    $content = $content -replace '<h2 class="(.*?)font-medium(.*?)">', '<h2 class="$1font-bold$2">'
    $content = $content -replace '<h3 class="(.*?)font-medium(.*?)">', '<h3 class="$1font-semibold$2">'
    $content = $content -replace '<h4 class="(.*?)font-medium(.*?)">', '<h4 class="$1font-semibold$2">'
    $content = $content -replace '<h3 id="(.*?)" class="(.*?)font-medium(.*?)">', '<h3 id="$1" class="$2font-semibold$3">'

    Set-Content -Path $file.FullName -Value $content
}

Write-Output "Fonts updated successfully in HTML files."
