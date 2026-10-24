# -*- coding: utf-8 -*-
import os
import math
from PIL import Image, ImageDraw, ImageFont

os.makedirs("icons", exist_ok=True)

# 1. Create crisp SVG icon
svg_content = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="50%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#090d16"/>
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06b6d4"/>
      <stop offset="50%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
    <linearGradient id="glowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#818cf8"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#06b6d4" flood-opacity="0.35"/>
    </filter>
  </defs>

  <!-- Background Squircle -->
  <rect x="16" y="16" width="480" height="480" rx="108" fill="url(#bgGrad)"/>
  <rect x="16" y="16" width="480" height="480" rx="108" fill="none" stroke="url(#accentGrad)" stroke-width="6" opacity="0.8"/>

  <!-- Subtle Grid Pattern / Tech Circuit -->
  <g opacity="0.12" stroke="#38bdf8" stroke-width="2">
    <line x1="80" y1="160" x2="432" y2="160"/>
    <line x1="80" y1="256" x2="432" y2="256"/>
    <line x1="80" y1="352" x2="432" y2="352"/>
    <line x1="160" y1="80" x2="160" y2="432"/>
    <line x1="256" y1="80" x2="256" y2="432"/>
    <line x1="352" y1="80" x2="352" y2="432"/>
  </g>

  <!-- Glowing Emblem Center (Lightning Bolt + Code Brackets + Cap) -->
  <g filter="url(#shadow)" transform="translate(0, -10)">
    <!-- Terminal Code Brackets < / > -->
    <path d="M 140 210 L 90 260 L 140 310" fill="none" stroke="#38bdf8" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M 372 210 L 422 260 L 372 310" fill="none" stroke="#38bdf8" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"/>
    
    <!-- Central Lightning Bolt ⚡ in High Tech Gradient -->
    <path d="M 276 130 L 196 270 L 252 270 L 236 390 L 324 246 L 268 246 Z" 
          fill="url(#accentGrad)" stroke="#ffffff" stroke-width="8" stroke-linejoin="round"/>
  </g>

  <!-- Badge at bottom: PRO -->
  <g transform="translate(256, 424)">
    <rect x="-64" y="-18" width="128" height="36" rx="12" fill="url(#accentGrad)"/>
    <text x="0" y="7" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="20" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="3">PRO</text>
  </g>
</svg>
"""

with open("icons/icon.svg", "w", encoding="utf-8") as f:
    f.write(svg_content)
print("Created icons/icon.svg")

# 2. Function to draw high-res icon in PIL
def create_icon(size, is_maskable=False):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    scale = size / 512.0
    
    # Background
    if is_maskable:
        # Full bleed background for adaptive icons
        # Draw gradient manually
        for y in range(size):
            t = y / float(size)
            r = int(15 * (1 - t) + 10 * t)
            g = int(23 * (1 - t) + 15 * t)
            b = int(42 * (1 - t) + 75 * t)
            draw.line([(0, y), (size, y)], fill=(r, g, b, 255))
        content_scale = scale * 0.75  # 25% safe zone padding for maskable
        offset_x = (size - 512 * content_scale) / 2.0
        offset_y = (size - 512 * content_scale) / 2.0
    else:
        # Rounded squircle
        corner_radius = int(108 * scale)
        # Create gradient image for rounded rect
        grad = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        grad_draw = ImageDraw.Draw(grad)
        for y in range(size):
            t = y / float(size)
            r = int(15 * (1 - t) + 14 * t)
            g = int(23 * (1 - t) + 20 * t)
            b = int(42 * (1 - t) + 75 * t)
            grad_draw.line([(0, y), (size, y)], fill=(r, g, b, 255))

        # Mask with rounded rectangle
        mask = Image.new("L", (size, size), 0)
        mask_draw = ImageDraw.Draw(mask)
        margin = int(16 * scale)
        mask_draw.rounded_rectangle(
            [(margin, margin), (size - margin, size - margin)],
            radius=corner_radius,
            fill=255
        )
        img.paste(grad, (0, 0), mask)

        # Draw accent border
        draw.rounded_rectangle(
            [(margin, margin), (size - margin, size - margin)],
            radius=corner_radius,
            outline=(6, 182, 212, 200),
            width=max(2, int(6 * scale))
        )
        content_scale = scale
        offset_x = 0
        offset_y = 0

    def transform_pt(x, y):
        return (x * content_scale + offset_x, y * content_scale + offset_y)

    # Brackets < / >
    b_stroke = max(3, int(22 * content_scale))
    # Left bracket <
    pts_left = [transform_pt(140, 210), transform_pt(90, 260), transform_pt(140, 310)]
    draw.line([pts_left[0], pts_left[1]], fill=(56, 189, 248, 240), width=b_stroke)
    draw.line([pts_left[1], pts_left[2]], fill=(56, 189, 248, 240), width=b_stroke)

    # Right bracket >
    pts_right = [transform_pt(372, 210), transform_pt(422, 260), transform_pt(372, 310)]
    draw.line([pts_right[0], pts_right[1]], fill=(56, 189, 248, 240), width=b_stroke)
    draw.line([pts_right[1], pts_right[2]], fill=(56, 189, 248, 240), width=b_stroke)

    # Lightning bolt polygon
    bolt_pts = [
        transform_pt(276, 120),
        transform_pt(196, 265),
        transform_pt(252, 265),
        transform_pt(236, 395),
        transform_pt(326, 240),
        transform_pt(268, 240)
    ]
    # Draw shadow
    shadow_pts = [(x, y + 6 * content_scale) for x, y in bolt_pts]
    draw.polygon(shadow_pts, fill=(6, 182, 212, 80))
    # Draw bolt body
    draw.polygon(bolt_pts, fill=(99, 102, 241, 255), outline=(255, 255, 255, 255))

    # Inner bright core
    inner_pts = [
        transform_pt(270, 140),
        transform_pt(210, 260),
        transform_pt(254, 260),
        transform_pt(242, 360),
        transform_pt(310, 248),
        transform_pt(266, 248)
    ]
    draw.polygon(inner_pts, fill=(6, 182, 212, 255))

    # Bottom badge
    badge_x1, badge_y1 = transform_pt(192, 406)
    badge_x2, badge_y2 = transform_pt(320, 442)
    draw.rounded_rectangle(
        [(badge_x1, badge_y1), (badge_x2, badge_y2)],
        radius=max(2, int(10 * content_scale)),
        fill=(99, 102, 241, 255)
    )

    # Draw "PRO" text in badge
    try:
        font_size = max(10, int(22 * content_scale))
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", font_size)
    except:
        font = ImageFont.load_default()

    text = "PRO"
    bbox = draw.textbbox((0, 0), text, font=font)
    t_w = bbox[2] - bbox[0]
    t_h = bbox[3] - bbox[1]
    badge_cx = (badge_x1 + badge_x2) / 2.0
    badge_cy = (badge_y1 + badge_y2) / 2.0
    draw.text((badge_cx - t_w / 2.0, badge_cy - t_h / 2.0 - 1), text, fill=(255, 255, 255, 255), font=font)

    return img

# Generate all required PNG icons
sizes_to_make = [
    ("icons/icon-512.png", 512, False),
    ("icons/icon-192.png", 192, False),
    ("icons/icon-180.png", 180, False),  # Apple touch icon
    ("icons/icon-maskable-512.png", 512, True),
    ("icons/icon-maskable-192.png", 192, True),
    ("icons/icon-32.png", 32, False),
    ("icons/icon-16.png", 16, False),
]

for filename, size, maskable in sizes_to_make:
    icon_img = create_icon(size, maskable)
    icon_img.save(filename, "PNG", optimize=True)
    print(f"Generated {filename} ({size}x{size}, maskable={maskable})")

# Generate favicon.ico
ico_img = create_icon(64, False)
ico_img.save("icons/favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
print("Generated icons/favicon.ico")
