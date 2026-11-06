from PIL import Image, ImageDraw, ImageFont


OUT = r"apps/web/public/auto-repair-modern-template-preview.png"
W, H = 1530, 1980
RED = "#cf2027"
INK = "#171717"
MUTED = "#616161"
LIGHT = "#e7e7e7"


def font(size, bold=False, italic=False):
    family = "arial"
    suffix = "bi" if bold and italic else "bd" if bold else "i" if italic else ""
    path = rf"C:\Windows\Fonts\{family}{suffix}.ttf"
    return ImageFont.truetype(path, size)


im = Image.new("RGB", (W, H), "white")
d = ImageDraw.Draw(im)

# Excel template's red page bars.
d.rectangle((0, 0, W, 34), fill=RED)
d.rectangle((0, H - 34, W, H), fill=RED)

left, right = 78, W - 78

# Header and logo placeholder.
d.text((left, 92), "INVOICE", fill=INK, font=font(55, bold=True))
d.rounded_rectangle((right - 220, 76, right, 196), radius=10, fill="#f1f1f1", outline="#c8c8c8", width=2)
d.text((right - 160, 118), "YOUR LOGO", fill=MUTED, font=font(24, bold=True), anchor="mm")

company = ["<Your Company Name>", "<123 Street Address>", "<City, State, Zip/Post Code>", "<Phone Number>", "<Email Address>"]
for i, value in enumerate(company):
    d.text((left, 226 + i * 39), value, fill=INK, font=font(20))

d.text((right - 260, 236), "DATE", fill=INK, font=font(20, bold=True))
d.line((right - 160, 270, right, 270), fill=LIGHT, width=2)
d.text((right - 260, 300), "INVOICE NO.", fill=INK, font=font(20, bold=True))
d.line((right - 160, 334, right, 334), fill=LIGHT, width=2)
d.text((right, 382), "Payment terms (due on receipt, due in X days)", fill=MUTED, font=font(18, italic=True), anchor="ra")

# Client and project information.
d.text((left, 478), "BILL TO", fill=INK, font=font(22, bold=True))
d.text((680, 478), "PROJECT DETAILS", fill=INK, font=font(22, bold=True))
for i, value in enumerate(["<Contact Name>", "<Client Company Name>", "<Address>", "<Phone>", "<Email>"]):
    d.text((left, 546 + i * 38), value, fill=INK, font=font(19))
d.text((680, 546), "<Project Name / Dept>", fill=INK, font=font(19))
d.text((680, 586), "<Project Description>", fill=INK, font=font(19))

# Excel line-item grid.
table_top = 765
date_x, desc_x, hours_x = left, 300, 1190
d.rectangle((left, table_top, right, table_top + 52), fill=RED)
d.text(((date_x + desc_x) / 2, table_top + 27), "DATE", fill="white", font=font(19, bold=True), anchor="mm")
d.text(((desc_x + hours_x) / 2, table_top + 27), "DESCRIPTION", fill="white", font=font(19, bold=True), anchor="mm")
d.text(((hours_x + right) / 2, table_top + 27), "HOURS", fill="white", font=font(19, bold=True), anchor="mm")
for x in (desc_x, hours_x):
    d.line((x, table_top, x, table_top + 52), fill="#e85b60", width=2)

row_h = 43
for i in range(11):
    y = table_top + 52 + i * row_h
    d.line((left, y + row_h, right, y + row_h), fill="#eeeeee", width=1)
    d.text((right - 6, y + 20), "0:00", fill=INK, font=font(18), anchor="ra")

# Totals block mirrors the spreadsheet formulas and number formats.
totals_y = table_top + 52 + 11 * row_h + 30
labels = ["TOTAL HOURS", "HOURLY RATE", "DISCOUNT", "TOTAL PRE-TAX", "TAX RATE", "TOTAL TAX"]
values = ["0:00", "$0.00", "$0.00", "$0.00", "0.00%", "$0.00"]
for i, (label, value) in enumerate(zip(labels, values)):
    y = totals_y + i * 43
    d.text((right - 330, y), label, fill=INK, font=font(18, bold=True), anchor="ra")
    d.text((right, y), value, fill=INK, font=font(18), anchor="ra")

balance_y = totals_y + 6 * 43 + 12
d.line((right - 390, balance_y - 14, right, balance_y - 14), fill=RED, width=3)
d.text((right - 330, balance_y), "BALANCE DUE", fill=INK, font=font(28, bold=True), anchor="ra")
d.text((right, balance_y), "$0.00", fill=RED, font=font(28, bold=True), anchor="ra")

# Workbook terms section.
terms_y = 1710
d.text((left, terms_y), "Terms & Instructions", fill=INK, font=font(20, bold=True))
d.text((left, terms_y + 52), "<Add payment instructions here, e.g. bank, PayPal...>", fill=MUTED, font=font(18))
d.text((left, terms_y + 94), "<Add terms here, e.g. warranty, returns policy...>", fill=MUTED, font=font(18))

im.save(OUT, quality=95)
print(f"Saved {OUT} ({W}x{H})")
