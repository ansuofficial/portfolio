"""Generate Ansumana Badjie's CV to match the dark teal portfolio theme."""

from __future__ import annotations

from pathlib import Path

from PIL import Image
from reportlab.lib.colors import Color, HexColor
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

ROOT = Path(__file__).resolve().parent.parent
FONT_DIR = Path(__file__).resolve().parent / "fonts"
PREVIEW_DIR = Path(__file__).resolve().parent / "_preview"
PHOTO_SRC = ROOT / "public" / "ansu-dp-transparent.png"
HEADSHOT = PREVIEW_DIR / "headshot.png"
OUTPUT = ROOT / "ansu-resume.pdf"

PAGE_W, PAGE_H = A4
M = 28.0
GUTTER = 14.0

BG = HexColor("#0a0e14")
PRIMARY = HexColor("#10a882")
SECONDARY = HexColor("#22c55e")
WHITE = Color(1, 1, 1, alpha=1)
W90 = Color(1, 1, 1, alpha=0.90)
W80 = Color(1, 1, 1, alpha=0.80)
W60 = Color(1, 1, 1, alpha=0.60)
W50 = Color(1, 1, 1, alpha=0.50)
W40 = Color(1, 1, 1, alpha=0.40)
W15 = Color(1, 1, 1, alpha=0.15)
W10 = Color(1, 1, 1, alpha=0.10)
TEAL_DIM = Color(16 / 255, 168 / 255, 130 / 255, alpha=0.85)
TEAL_SOFT = Color(16 / 255, 168 / 255, 130 / 255, alpha=0.45)
TEAL_GLOW = Color(16 / 255, 168 / 255, 130 / 255, alpha=0.045)
TEAL_FILL = Color(16 / 255, 168 / 255, 130 / 255, alpha=0.12)
TEAL_STROKE = Color(16 / 255, 168 / 255, 130 / 255, alpha=0.28)

F_REG = "PJS"
F_MED = "PJS-Med"
F_SEMI = "PJS-Semi"
F_BOLD = "PJS-Bold"
F_XBOLD = "PJS-XBold"

JOBS = [
    {
        "title": "Lead Frontend Engineer",
        "company": "JassehCodeCamp",
        "period": "Present",
        "bullets": [
            "Led frontend delivery for production web apps — owned UI architecture, performance, and release quality across client projects.",
            "Shipped public-facing platforms for government and enterprise clients spanning civic services, food security, and live transactions.",
            "Set architecture standards and mentored junior developers through code reviews, raising the bar for production-ready delivery.",
        ],
    },
    {
        "title": "Instructor",
        "company": "JassehCodeCamp",
        "period": "2023 — Present",
        "bullets": [
            "Designed hands-on curricula and mentored 200+ engineers through practical, production-focused projects.",
            "Taught JavaScript, TypeScript, React, and full-stack development with real-world delivery as the standard.",
            "Built student projects collaboratively, covering Python and MySQL alongside frontend technologies.",
        ],
    },
    {
        "title": "Software Engineer Intern",
        "company": "Gomindz",
        "period": "2022",
        "bullets": [
            "Contributed to shipped features in a team environment — delivery workflows, code review, and production discipline.",
            "Worked with modern JavaScript frameworks on production-facing products.",
        ],
    },
]

PROJECTS = [
    {
        "title": "National Food Security Processing & Marketing Corp.",
        "type": "Enterprise",
        "url": "nfsc.gm",
        "href": "https://www.nfsc.gm/",
        "results": ["95% SEO", "90% accessibility", "Scalable architecture"],
    },
    {
        "title": "ADN Academy",
        "type": "Trading Academy",
        "url": "adnacademy.gm",
        "href": "https://www.adnacademy.gm/",
        "results": ["500+ students trained", "6 programs", "Built for enrollment"],
    },
    {
        "title": "Brikama Area Council",
        "type": "Government",
        "url": "brikama.gm",
        "href": "https://www.brikama.gm/",
        "results": ["95% SEO", "90% accessibility", "80% performance"],
    },
    {
        "title": "Wolurek",
        "type": "E-Commerce",
        "url": "wolurek.com",
        "href": "https://wolurek.com/",
        "results": ["Smooth transactions", "Lower payment friction", "Reliable under volume"],
    },
    {
        "title": "Bala Engineering & Construction LTD",
        "type": "Construction",
        "url": "becl.gm",
        "href": "https://www.becl.gm/",
        "results": ["30+ projects showcased", "50+ clients served", "Clear inquiry path"],
    },
]

SKILL_GROUPS = [
    ("Languages", ["TypeScript", "JavaScript", "Python"]),
    ("Frameworks", ["React", "Next.js", "Remix", "Angular"]),
    ("Styling & Design", ["Tailwind CSS", "Figma"]),
    ("Data & Tools", ["MySQL", "Git", "GitHub"]),
    ("Practices", ["API Integration", "SEO", "Accessibility", "Performance"]),
]

SERVICES = [
    ("Software Consultancy", "Architecture and stack guidance."),
    ("Development & Design", "Clean, production-ready web apps."),
    ("API Integration", "Reliable API and payment connections."),
    ("Mentorship & Review", "Code reviews and team mentorship."),
    ("Private Classes", "Personalized coding lessons."),
]


def register_fonts() -> None:
    mapping = {
        F_REG: "PlusJakartaSans-Regular.ttf",
        F_MED: "PlusJakartaSans-Medium.ttf",
        F_SEMI: "PlusJakartaSans-SemiBold.ttf",
        F_BOLD: "PlusJakartaSans-Bold.ttf",
        F_XBOLD: "PlusJakartaSans-ExtraBold.ttf",
    }
    for name, filename in mapping.items():
        pdfmetrics.registerFont(TTFont(name, str(FONT_DIR / filename)))


def prepare_headshot() -> None:
    PREVIEW_DIR.mkdir(parents=True, exist_ok=True)
    im = Image.open(PHOTO_SRC).convert("RGBA")
    crop = im.crop((70, 0, 370, 300)).resize((480, 480), Image.Resampling.LANCZOS)
    bg = Image.new("RGBA", crop.size, (10, 14, 20, 255))
    Image.alpha_composite(bg, crop).save(HEADSHOT)


def wrap(c: canvas.Canvas, text: str, font: str, size: float, max_width: float) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        trial = f"{current} {word}".strip()
        if c.stringWidth(trial, font, size) <= max_width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def tracked_width(c: canvas.Canvas, text: str, font: str, size: float, tracking: float) -> float:
    if not text:
        return 0
    return sum(c.stringWidth(ch, font, size) + tracking for ch in text) - tracking


def draw_tracked(
    c: canvas.Canvas,
    text: str,
    x: float,
    y: float,
    font: str,
    size: float,
    tracking: float,
    color: Color,
) -> float:
    c.setFont(font, size)
    c.setFillColor(color)
    cursor = x
    for ch in text:
        c.drawString(cursor, y, ch)
        cursor += c.stringWidth(ch, font, size) + tracking
    return cursor


def draw_tracked_centered(
    c: canvas.Canvas,
    text: str,
    cx: float,
    y: float,
    font: str,
    size: float,
    tracking: float,
    color: Color,
) -> None:
    total = tracked_width(c, text, font, size, tracking)
    draw_tracked(c, text, cx - total / 2, y, font, size, tracking, color)


def glass_rect(
    c: canvas.Canvas,
    x: float,
    y: float,
    w: float,
    h: float,
    radius: float = 10,
    fill_alpha: float = 0.05,
    stroke_alpha: float = 0.10,
) -> None:
    c.saveState()
    c.setFillColor(Color(1, 1, 1, alpha=fill_alpha))
    c.setStrokeColor(Color(1, 1, 1, alpha=stroke_alpha))
    c.setLineWidth(0.7)
    c.roundRect(x, y, w, h, radius, fill=1, stroke=1)
    c.restoreState()


def section_label(c: canvas.Canvas, text: str, x: float, baseline: float) -> float:
    draw_tracked(c, text.upper(), x, baseline, F_SEMI, 7.6, 0.55, PRIMARY)
    c.setFillColor(PRIMARY)
    c.roundRect(x, baseline - 7.5, 20, 1.8, 0.9, fill=1, stroke=0)
    return baseline - 16


def draw_background(c: canvas.Canvas) -> None:
    c.setFillColor(BG)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

    c.setFillColor(TEAL_GLOW)
    c.circle(PAGE_W * 0.84, PAGE_H * 0.12, 200, fill=1, stroke=0)
    c.setFillColor(Color(1, 1, 1, alpha=0.016))
    c.circle(PAGE_W * 0.16, PAGE_H * 0.90, 140, fill=1, stroke=0)

    c.setStrokeColor(Color(1, 1, 1, alpha=0.032))
    c.setLineWidth(0.35)
    step = 24
    x = 0.0
    while x <= PAGE_W:
        c.line(x, 0, x, PAGE_H)
        x += step
    y = 0.0
    while y <= PAGE_H:
        c.line(0, y, PAGE_W, y)
        y += step

    c.setFillColor(PRIMARY)
    c.rect(0, PAGE_H - 3.0, PAGE_W, 3.0, fill=1, stroke=0)


def draw_footer(c: canvas.Canvas) -> None:
    y = 12
    c.setFillColor(W40)
    c.setFont(F_MED, 7)
    c.drawString(M, y, "ansu-dev.vercel.app")
    c.linkURL("https://ansu-dev.vercel.app/", (M, y - 2, M + 90, y + 9), relative=0)

    label = "Available for projects"
    c.setFillColor(SECONDARY)
    c.circle(PAGE_W / 2 - 54, y + 2.8, 2.1, fill=1, stroke=0)
    c.setFillColor(W80)
    c.setFont(F_MED, 7.4)
    c.drawString(PAGE_W / 2 - 46, y, label)

    c.setFillColor(W40)
    c.setFont(F_MED, 7)
    c.drawRightString(PAGE_W - M, y, "Curriculum Vitae")


def draw_circle_photo(c: canvas.Canvas, cx: float, cy: float, r: float) -> None:
    c.saveState()
    path = c.beginPath()
    path.circle(cx, cy, r)
    c.clipPath(path, stroke=0, fill=0)
    c.drawImage(
        ImageReader(str(HEADSHOT)),
        cx - r,
        cy - r,
        width=r * 2,
        height=r * 2,
        mask="auto",
        preserveAspectRatio=True,
        anchor="c",
    )
    c.restoreState()

    c.setStrokeColor(Color(1, 1, 1, alpha=0.18))
    c.setLineWidth(1.3)
    c.circle(cx, cy, r, fill=0, stroke=1)

    dx = cx + r * 0.72
    dy = cy - r * 0.72
    c.setFillColor(BG)
    c.circle(dx, dy, 5.0, fill=1, stroke=0)
    c.setFillColor(SECONDARY)
    c.circle(dx, dy, 3.2, fill=1, stroke=0)


def pill(c: canvas.Canvas, text: str, x: float, y: float, size: float = 6.8) -> tuple[float, float]:
    font = F_MED
    pad_x, pad_y = 6.5, 3.6
    tw = c.stringWidth(text, font, size)
    w = tw + pad_x * 2
    h = size + pad_y * 2
    c.setFillColor(TEAL_FILL)
    c.setStrokeColor(TEAL_STROKE)
    c.setLineWidth(0.45)
    c.roundRect(x, y, w, h, h / 2, fill=1, stroke=1)
    c.setFillColor(W80)
    c.setFont(font, size)
    c.drawString(x + pad_x, y + pad_y - 0.15, text)
    return w, h


def draw_pills_from_top(
    c: canvas.Canvas,
    items: list[str],
    x: float,
    top: float,
    max_w: float,
    size: float = 6.8,
    row_gap: float = 5.0,
    col_gap: float = 4.5,
) -> float:
    cx = x
    row_top = top
    row_h = 0.0
    first = True
    bottom = top
    for text in items:
        tw = c.stringWidth(text, F_MED, size) + 13
        ph = size + 7.2
        if not first and cx + tw > x + max_w:
            cx = x
            row_top = bottom - row_gap
            first = True
        w, h = pill(c, text, cx, row_top - ph, size=size)
        row_h = h
        bottom = row_top - h
        cx += w + col_gap
        first = False
    return bottom


def draw_header(c: canvas.Canvas, top: float) -> float:
    card_h = 124
    x = M
    w = PAGE_W - 2 * M
    y = top - card_h
    glass_rect(c, x, y, w, card_h, radius=11, fill_alpha=0.05, stroke_alpha=0.11)

    pad = 14
    photo_r = 36
    photo_cx = x + pad + photo_r
    photo_cy = y + card_h / 2
    draw_circle_photo(c, photo_cx, photo_cy, photo_r)

    tx = photo_cx + photo_r + 14
    ty_name = y + card_h - 28
    c.setFillColor(WHITE)
    c.setFont(F_XBOLD, 21)
    c.drawString(tx, ty_name, "Ansumana Badjie")

    c.setFillColor(PRIMARY)
    c.roundRect(tx, ty_name - 6.5, 26, 2.0, 1.0, fill=1, stroke=0)

    draw_tracked(c, "SOFTWARE ENGINEER", tx, ty_name - 20, F_SEMI, 8.0, 1.4, PRIMARY)

    contacts_top = [
        ("ansucoder@gmail.com", "mailto:ansucoder@gmail.com"),
        ("The Gambia", None),
        ("+220 333 8111", "https://wa.me/2203338111"),
    ]
    contacts_bot = [
        ("ansu-dev.vercel.app", "https://ansu-dev.vercel.app/"),
        ("github.com/ansuofficial", "https://github.com/ansuofficial"),
        ("linkedin.com/in/ansu-badjie", "https://www.linkedin.com/in/ansu-badjie-3a979b280/"),
    ]

    def draw_contact_row(items: list[tuple[str, str | None]], baseline: float) -> None:
        cx = tx
        c.setFont(F_MED, 7.3)
        for i, (label, url) in enumerate(items):
            if i:
                c.setFillColor(PRIMARY)
                c.circle(cx + 3.6, baseline + 2.3, 1.0, fill=1, stroke=0)
                cx += 11
            c.setFillColor(W60)
            c.drawString(cx, baseline, label)
            tw = c.stringWidth(label, F_MED, 7.3)
            if url:
                c.linkURL(url, (cx, baseline - 1, cx + tw, baseline + 9), relative=0)
            cx += tw

    draw_contact_row(contacts_top, ty_name - 36)
    draw_contact_row(contacts_bot, ty_name - 50)

    line_y = y + 40
    x0, x1 = tx, x + w - pad
    steps = 48
    seg = (x1 - x0) / steps
    c.setLineWidth(0.6)
    for i in range(steps):
        alpha = 0.16 * (1 - i / steps)
        c.setStrokeColor(Color(1, 1, 1, alpha=alpha))
        c.line(x0 + i * seg, line_y, x0 + (i + 1) * seg, line_y)

    summary = (
        "I build software that solves real problems — from government platforms handling "
        "public-facing services to multi-service consumer apps processing real transactions. "
        "Architecture, performance, integrations, and delivery."
    )
    max_w = x + w - pad - tx
    lines = wrap(c, summary, F_REG, 7.8, max_w)
    c.setFillColor(W80)
    c.setFont(F_REG, 7.8)
    sy = y + 24
    for i, line in enumerate(lines[:2]):
        c.drawString(tx, sy - i * 10.6, line)

    return y


def draw_metrics(c: canvas.Canvas, top: float) -> float:
    items = [
        ("3+", "Years Building"),
        ("20+", "Projects Shipped"),
        ("200+", "Engineers Mentored"),
        ("10+", "Clients Served"),
    ]
    h = 44
    y = top - h
    w = PAGE_W - 2 * M
    n = len(items)
    gap = 8
    card_w = (w - gap * (n - 1)) / n
    for i, (value, label) in enumerate(items):
        cx = M + i * (card_w + gap)
        glass_rect(c, cx, y, card_w, h, radius=8, fill_alpha=0.07, stroke_alpha=0.12)
        c.setFillColor(WHITE)
        c.setFont(F_XBOLD, 15)
        c.drawCentredString(cx + card_w / 2, y + 22, value)
        draw_tracked_centered(
            c, label.upper(), cx + card_w / 2, y + 10, F_MED, 6.2, 0.6, W50
        )
    return y


def draw_experience_card(c: canvas.Canvas, x: float, top: float, w: float) -> float:
    pad = 13
    inner_x = x + pad + 16
    inner_w = w - pad * 2 - 16
    bullet_leading = 10.2
    title_size = 9.6

    # Measure
    height = pad + 18  # label
    for i, job in enumerate(JOBS):
        height += 12  # title
        height += 11  # company
        for bullet in job["bullets"]:
            height += len(wrap(c, bullet, F_REG, 7.5, inner_w - 10)) * bullet_leading + 2.4
        if i < len(JOBS) - 1:
            height += 7
    height += pad

    bottom = top - height
    glass_rect(c, x, bottom, w, height, radius=11)

    cursor = top - pad - 2
    cursor = section_label(c, "Experience", x + pad, cursor)

    rail_x = x + pad + 5
    job_title_ys: list[float] = []

    for i, job in enumerate(JOBS):
        job_title_ys.append(cursor + 3)
        c.setFillColor(WHITE)
        c.setFont(F_SEMI, title_size)
        c.drawString(inner_x, cursor, job["title"])
        c.setFillColor(W40)
        c.setFont(F_MED, 6.6)
        c.drawRightString(x + w - pad, cursor + 1.2, job["period"].upper())

        cursor -= 12
        c.setFillColor(TEAL_DIM)
        c.setFont(F_MED, 7.6)
        c.drawString(inner_x, cursor, job["company"])
        loc = "  ·  The Gambia"
        c.setFillColor(W40)
        c.setFont(F_REG, 7.6)
        c.drawString(inner_x + c.stringWidth(job["company"], F_MED, 7.6), cursor, loc)

        cursor -= 11
        for bullet in job["bullets"]:
            lines = wrap(c, bullet, F_REG, 7.5, inner_w - 10)
            c.setFillColor(PRIMARY)
            c.circle(inner_x + 2.0, cursor + 2.2, 1.2, fill=1, stroke=0)
            c.setFillColor(W60)
            c.setFont(F_REG, 7.5)
            for line in lines:
                c.drawString(inner_x + 9, cursor, line)
                cursor -= bullet_leading
            cursor -= 2.4

        if i < len(JOBS) - 1:
            cursor -= 7

    c.setStrokeColor(Color(16 / 255, 168 / 255, 130 / 255, alpha=0.30))
    c.setLineWidth(0.85)
    c.line(rail_x, job_title_ys[0], rail_x, job_title_ys[-1])
    for dy in job_title_ys:
        c.setFillColor(BG)
        c.setStrokeColor(TEAL_SOFT)
        c.setLineWidth(1.2)
        c.circle(rail_x, dy, 3.8, fill=1, stroke=1)
        c.setFillColor(PRIMARY)
        c.circle(rail_x, dy, 1.8, fill=1, stroke=0)

    return bottom


def draw_skills_card(c: canvas.Canvas, x: float, top: float, w: float) -> float:
    pad = 13
    inner_w = w - pad * 2

    height = pad + 2 + 16
    for _, items in SKILL_GROUPS:
        height += 8
        cx = 0.0
        rows = 1
        for text in items:
            tw = c.stringWidth(text, F_MED, 6.8) + 13
            if cx > 0 and cx + tw > inner_w:
                rows += 1
                cx = 0
            cx += tw + 4.5
        height += rows * (6.8 + 7.2) + (rows - 1) * 5
        height += 9
    height += pad - 9

    bottom = top - height
    glass_rect(c, x, bottom, w, height, radius=11)

    cursor = top - pad - 2
    cursor = section_label(c, "Skills", x + pad, cursor)
    for name, items in SKILL_GROUPS:
        draw_tracked(c, name.upper(), x + pad, cursor, F_SEMI, 6.2, 0.65, W40)
        cursor -= 3
        cursor = draw_pills_from_top(c, items, x + pad, cursor, inner_w, size=6.8)
        cursor -= 11
    return bottom


def draw_services_card(c: canvas.Canvas, x: float, top: float, w: float) -> float:
    pad = 13
    row_h = 24
    height = pad + 18 + len(SERVICES) * row_h + pad - 10
    bottom = top - height
    glass_rect(c, x, bottom, w, height, radius=11)

    cursor = top - pad - 2
    cursor = section_label(c, "Services", x + pad, cursor)

    for title, desc in SERVICES:
        box = 14
        by = cursor - 3
        c.setFillColor(TEAL_FILL)
        c.roundRect(x + pad, by, box, box, 3.2, fill=1, stroke=0)
        c.setFillColor(PRIMARY)
        c.circle(x + pad + box / 2, by + box / 2, 2.0, fill=1, stroke=0)

        c.setFillColor(W90)
        c.setFont(F_MED, 7.4)
        c.drawString(x + pad + box + 7, cursor + 3.2, title)
        c.setFillColor(W40)
        c.setFont(F_REG, 6.5)
        c.drawString(x + pad + box + 7, cursor - 6.2, desc)
        cursor -= row_h
    return bottom


def draw_languages_card(c: canvas.Canvas, x: float, top: float, w: float) -> float:
    langs = [("English", "Fluent"), ("Local Languages", "Native")]
    pad = 13
    height = 56
    bottom = top - height
    glass_rect(c, x, bottom, w, height, radius=11)
    cursor = top - pad - 2
    cursor = section_label(c, "Languages", x + pad, cursor)
    lx = x + pad
    for i, (name, level) in enumerate(langs):
        c.setFillColor(PRIMARY)
        c.setFont(F_SEMI, 8.0)
        c.drawString(lx, cursor + 1, name)
        c.setFillColor(W50)
        c.setFont(F_REG, 6.6)
        c.drawString(lx, cursor - 10, level)
        lx += 128
    return bottom


def draw_projects_card(c: canvas.Canvas, x: float, top: float, w: float, bottom_limit: float) -> float:
    pad = 12
    n = len(PROJECTS)
    label_block = 16
    available = top - bottom_limit
    row_h = (available - pad * 2 - label_block) / n
    row_h = max(28, min(32, row_h))
    height = pad + label_block + n * row_h + pad - 6
    if top - height < bottom_limit:
        height = top - bottom_limit
        row_h = (height - pad * 2 - label_block + 6) / n
    bottom = top - height
    glass_rect(c, x, bottom, w, height, radius=11)

    cursor = top - pad - 2
    cursor = section_label(c, "Selected Work", x + pad, cursor)

    for i, project in enumerate(PROJECTS):
        row_bottom = cursor - row_h + 6

        c.setFillColor(PRIMARY)
        bar_h = max(12, row_h - 14)
        c.roundRect(x + pad, row_bottom + 7, 2.2, bar_h, 1.1, fill=1, stroke=0)

        tx = x + pad + 10
        url = project["url"] + "  →"
        c.setFont(F_SEMI, 7.2)
        url_w = c.stringWidth(url, F_SEMI, 7.2)

        c.setFillColor(WHITE)
        c.setFont(F_SEMI, 8.2)
        c.drawString(tx, cursor, project["title"])
        title_w = c.stringWidth(project["title"], F_SEMI, 8.2)

        type_label = project["type"].upper()
        type_w = tracked_width(c, type_label, F_MED, 6.2, 0.5)
        type_x = tx + title_w + 8
        if type_x + type_w < x + w - pad - url_w - 16:
            draw_tracked(c, type_label, type_x, cursor + 0.4, F_MED, 6.2, 0.5, W40)

        c.setFillColor(PRIMARY)
        c.setFont(F_SEMI, 7.2)
        c.drawRightString(x + w - pad, cursor, url)
        c.linkURL(
            project["href"],
            (x + w - pad - url_w, cursor - 1, x + w - pad, cursor + 9),
            relative=0,
        )

        chip_top = cursor - 3.5
        draw_pills_from_top(
            c, project["results"], tx, chip_top, w - pad * 2 - 14, size=6.3, col_gap=4
        )

        if i < n - 1:
            c.setStrokeColor(W10)
            c.setLineWidth(0.45)
            c.line(x + pad, row_bottom, x + w - pad, row_bottom)

        cursor -= row_h

    return bottom


def draw_page(c: canvas.Canvas) -> None:
    draw_background(c)
    draw_footer(c)

    top = PAGE_H - 16
    header_bottom = draw_header(c, top)
    metrics_bottom = draw_metrics(c, header_bottom - 10)

    col_top = metrics_bottom - 12
    total_w = PAGE_W - 2 * M
    left_w = total_w * 0.60
    right_w = total_w - left_w - GUTTER
    left_x = M
    right_x = M + left_w + GUTTER

    left_bottom = draw_experience_card(c, left_x, col_top, left_w)
    left_bottom = draw_languages_card(c, left_x, left_bottom - 8, left_w)

    y = col_top
    y = draw_skills_card(c, right_x, y, right_w)
    right_bottom = draw_services_card(c, right_x, y - 8, right_w)

    footer_clearance = 26
    projects_top = min(left_bottom, right_bottom) - 10
    draw_projects_card(c, M, projects_top, total_w, footer_clearance)


def main() -> None:
    register_fonts()
    prepare_headshot()
    c = canvas.Canvas(str(OUTPUT), pagesize=A4)
    c.setTitle("Ansumana Badjie — Software Engineer")
    c.setAuthor("Ansumana Badjie")
    c.setSubject("Curriculum Vitae")
    c.setCreator("Ansumana Badjie")
    draw_page(c)
    c.save()
    print(f"Wrote {OUTPUT}")


if __name__ == "__main__":
    main()
