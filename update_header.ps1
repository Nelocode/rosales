$body = @{
    content = @"
<!-- Header -->
    <header class="header">
        <div class="container header-inner">
            <div class="logo">
                <a href="#">
                    <img src="https://segurosrosales.com/wp-content/uploads/2025/12/de465e_d84549609851480ba9e86d4bd6500d84mv2.gif" alt="Rosales Insurance Agency">
                </a>
            </div>
            
            <nav class="nav-menu">
                <a href="#inicio" class="nav-link">Inicio</a>
                <a href="#seguros" class="nav-link">Seguros</a>
                <a href="#reclamos" class="nav-link">Reclamos</a>
                <a href="#nosotros" class="nav-link">Nosotros</a>
                <a href="#contacto" class="nav-link">Contacto</a>
            </nav>

            <div class="header-cta">
                <div class="phone-link">
                    <span>¿Necesita ayuda?</span>
                    <strong>(678) 860-2265</strong>
                </div>
                <a href="#contacto" class="btn btn-primary">
                    Cotizar Ahora <i class="ph ph-arrow-right"></i>
                </a>
            </div>
        </div>
    </header>
"@
} | ConvertTo-Json

$pair = "hermes:ISdZvSb8HTOxgWn2nr6kSnwN"
$encodedCredentials = [System.Convert]::ToBase64String([System.Text.Encoding]::ASCII.GetBytes($pair))
$headers = @{
    Authorization = "Basic $encodedCredentials"
    "Content-Type" = "application/json"
}

$response = Invoke-RestMethod -Uri "https://segurosrosales.com/wp-json/wp/v2/template-parts/seguros-rosales//header" -Method Post -Headers $headers -Body $body
Write-Output "Header update status: $($response.status)"
