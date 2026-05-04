import re

file_path = r'C:\Users\Usuario\.gemini\antigravity\scratch\incorlaser\calidad.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Define the block that was repeated
repeated_block_pattern = re.compile(r'\s*\.zoom-trigger \{ cursor: zoom-in; transition: transform 0.3s ease; \}\s*\.zoom-trigger:hover \{ transform: scale\(1.02\); filter: brightness\(1.05\); \}\s*@keyframes fadeIn \{ from \{ opacity: 0; \} to \{ opacity: 1; \} \}\s*</style>\s*</head>\s*<body class="font-body-md text-on-surface">\s*<header class="fixed top-0 w-full z-50 bg-white border-b border-slate-200 transition-colors duration-300">\s*<div class="flex justify-between items-center h-32 px-12 max-w-screen-2xl mx-auto">.*?<main class="pt-32">\s*<!-- Hero Section -->\s*<section class="relative h-\[600px\] flex items-center overflow-hidden bg-primary">\s*<div class="absolute inset-0 z-0">\s*<img alt="Fondo Industrial" class="w-full h-full object-cover opacity-40" data-alt=".*?" src=".*?/>\s*<div class="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>\s*</div>', re.DOTALL)

# Find all occurrences
matches = list(repeated_block_pattern.finditer(content))
print(f"Found {len(matches)} occurrences of the repeated block.")

if matches:
    # We want to keep ONLY ONE occurrence at the top (after the head content)
    # And remove all others.
    # Actually, the first one might be in a wrong place.
    # Let's find where it SHOULD be. It should be after the CSS.
    
    # Let's just remove ALL of them and insert one correctly.
    clean_content = repeated_block_pattern.sub('', content)
    
    # Now find the end of the <style> block to insert it correctly
    style_end_marker = ".lightbox.active .lb-content { transform: scale(1); }"
    if style_end_marker in clean_content:
        correct_block = """
        .zoom-trigger { cursor: zoom-in; transition: transform 0.3s ease; }
        .zoom-trigger:hover { transform: scale(1.02); filter: brightness(1.05); }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    </style>
</head>
<body class="font-body-md text-on-surface">
<header class="fixed top-0 w-full z-50 bg-white border-b border-slate-200 transition-colors duration-300">
<div class="flex justify-between items-center h-32 px-12 max-w-screen-2xl mx-auto">
<div class="flex items-center">
<div class="relative h-32 flex items-center">
<img alt="INCORLASER Logo" class="h-44 w-auto object-contain drop-shadow-md" src="img/logo.svg"/>
</div>
</div>
<div class="hidden md:flex items-center gap-12">
<a class="text-lg font-medium text-slate-600 hover:text-primary transition-all font-headline tracking-tight" href="index.html">Inicio</a>
<a class="text-lg font-medium text-slate-600 hover:text-primary transition-all font-headline tracking-tight" href="servicios.html">Servicios</a>
<a class="text-lg font-medium text-slate-600 hover:text-primary transition-all font-headline tracking-tight" href="nosotros.html">Nosotros</a>
<a class="text-lg font-bold text-primary border-b-2 border-accent-orange font-headline tracking-tight pb-1" href="calidad.html">Calidad</a>
<a class="text-lg font-medium text-slate-600 hover:text-primary transition-all font-headline tracking-tight" href="contacto.html">Contacto</a>
</div>
<div class="flex items-center">
<a href="contacto.html" class="bg-accent-orange text-white px-8 py-4 text-sm font-bold tracking-tight uppercase hover:bg-orange-700 transition-colors shadow-lg shadow-accent-orange/20">SOLICITAR COTIZACIÓN</a>
</div>
</div>
</header>
<main class="pt-32">
<!-- Hero Section -->
<section class="relative h-[600px] flex items-center overflow-hidden bg-primary">
<div class="absolute inset-0 z-0">
<img alt="Fondo Industrial" class="w-full h-full object-cover opacity-40" data-alt="ultra-modern 30kW fiber laser cutting machine in operation, sparks and blue light, high precision industrial setting" src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"/>
<div class="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
</div>"""
        clean_content = clean_content.replace(style_end_marker, style_end_marker + correct_block)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(clean_content)
        print("File cleaned successfully.")
    else:
        print("Style end marker not found.")
else:
    print("No blocks found to clean.")
