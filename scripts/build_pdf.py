"""
Build: The First-Time Homebuyer Playbook (14-page PDF lead magnet)
Author: Derek Huit | NMLS #203980
Powered by: Cardinal Financial Company, Limited Partnership | NMLS #66247
"""
from reportlab.lib.pagesizes import LETTER
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer, PageBreak,
    Table, TableStyle, KeepTogether
)
from reportlab.lib.enums import TA_LEFT

NAVY = colors.HexColor("#0A2540")
GOLD = colors.HexColor("#C9A962")
INK = colors.HexColor("#1A1A1A")
MUTED = colors.HexColor("#6B7280")
RULE = colors.HexColor("#E5E7EB")
BG_LIGHT = colors.HexColor("#F8FAFC")
PAGE_W, PAGE_H = LETTER


def draw_header_footer(c, doc, is_cover=False):
    c.saveState()
    if not is_cover:
        c.setStrokeColor(RULE); c.setLineWidth(0.5)
        c.line(0.75*inch, PAGE_H - 0.55*inch, PAGE_W - 0.75*inch, PAGE_H - 0.55*inch)
        c.setFont("Helvetica", 8); c.setFillColor(MUTED)
        c.drawString(0.75*inch, PAGE_H - 0.42*inch, "THE FIRST-TIME HOMEBUYER PLAYBOOK")
        c.drawRightString(PAGE_W - 0.75*inch, PAGE_H - 0.42*inch, f"Page {doc.page - 1}")

    c.setStrokeColor(RULE); c.setLineWidth(0.5)
    c.line(0.75*inch, 0.75*inch, PAGE_W - 0.75*inch, 0.75*inch)
    c.setFont("Helvetica-Bold", 7.5); c.setFillColor(INK)
    c.drawString(0.75*inch, 0.6*inch, "Derek Huit | NMLS #203980")
    c.drawRightString(PAGE_W - 0.75*inch, 0.6*inch, "USA.loan")
    c.setFont("Helvetica", 6.5); c.setFillColor(MUTED)
    c.drawString(0.75*inch, 0.47*inch,
        "Powered by Cardinal Financial Company, Limited Partnership | NMLS #66247 | 3701 Arco Corporate Dr, Suite 200, Charlotte, NC 28273")
    c.drawString(0.75*inch, 0.36*inch,
        "NMLS Consumer Access: nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/66247  \u2022  Equal Housing Opportunity")
    c.drawString(0.75*inch, 0.25*inch,
        "Not authorized by the New York State Department of Financial Services. No NY applications accepted via this material. Not a commitment to lend.")
    c.restoreState()


def cover_page(c, doc):
    c.saveState()
    c.setFillColor(NAVY)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.setFillColor(GOLD)
    c.rect(0.75*inch, PAGE_H - 2.2*inch, 1.5*inch, 0.08*inch, fill=1, stroke=0)
    c.setFillColor(GOLD); c.setFont("Helvetica-Bold", 10)
    c.drawString(0.75*inch, PAGE_H - 2.55*inch, "A FREE GUIDE FROM DEREK HUIT")
    c.setFillColor(colors.white); c.setFont("Helvetica-Bold", 44)
    c.drawString(0.75*inch, PAGE_H - 3.6*inch, "The First-Time")
    c.drawString(0.75*inch, PAGE_H - 4.15*inch, "Homebuyer")
    c.setFillColor(GOLD)
    c.drawString(0.75*inch, PAGE_H - 4.7*inch, "Playbook")
    c.setFillColor(colors.white); c.setFont("Helvetica", 13)
    c.drawString(0.75*inch, PAGE_H - 5.25*inch,
        "Everything you need to go from curious to closed \u2014 in 30 days or less.")
    c.setFont("Helvetica-Bold", 10); c.setFillColor(GOLD)
    c.drawString(0.75*inch, PAGE_H - 6.2*inch, "18 YEARS")
    c.drawString(2.9*inch, PAGE_H - 6.2*inch, "$1 BILLION+")
    c.drawString(5.3*inch, PAGE_H - 6.2*inch, "NMLS #203980")
    c.setFont("Helvetica", 8.5); c.setFillColor(colors.HexColor("#CBD5E1"))
    c.drawString(0.75*inch, PAGE_H - 6.4*inch, "in mortgage lending")
    c.drawString(2.9*inch, PAGE_H - 6.4*inch, "in loans originated")
    c.drawString(5.3*inch, PAGE_H - 6.4*inch, "licensed & verified")
    c.setFont("Helvetica-Bold", 11); c.setFillColor(colors.white)
    c.drawString(0.75*inch, 1.25*inch, "USA.loan")
    c.setFont("Helvetica", 8); c.setFillColor(colors.HexColor("#94A3B8"))
    c.drawString(0.75*inch, 1.05*inch, "Powered by Cardinal Financial Company, Limited Partnership | NMLS #66247")
    c.drawString(0.75*inch, 0.9*inch, "Equal Housing Opportunity")
    c.restoreState()


def interior_page(c, doc):
    draw_header_footer(c, doc, is_cover=False)


styles = {
    "h1": ParagraphStyle("h1", fontName="Helvetica-Bold", fontSize=22, leading=26, textColor=NAVY, spaceAfter=6),
    "h1_eyebrow": ParagraphStyle("eyebrow", fontName="Helvetica-Bold", fontSize=9, leading=11, textColor=GOLD, spaceAfter=8),
    "h2": ParagraphStyle("h2", fontName="Helvetica-Bold", fontSize=13, leading=16, textColor=NAVY, spaceBefore=12, spaceAfter=4),
    "h3": ParagraphStyle("h3", fontName="Helvetica-Bold", fontSize=10.5, leading=13, textColor=INK, spaceBefore=8, spaceAfter=2),
    "body": ParagraphStyle("body", fontName="Helvetica", fontSize=10, leading=14.5, textColor=INK, alignment=TA_LEFT, spaceAfter=6),
    "bullet": ParagraphStyle("bullet", fontName="Helvetica", fontSize=10, leading=14, textColor=INK, leftIndent=16, bulletIndent=4, spaceAfter=3),
    "caption": ParagraphStyle("caption", fontName="Helvetica", fontSize=8.5, leading=11, textColor=MUTED, spaceAfter=6),
}


def P(text, style="body"): return Paragraph(text, styles[style])
def bullet(text): return Paragraph(f"\u2022 {text}", styles["bullet"])


def divider(color=RULE, thickness=0.5, space_before=6, space_after=10):
    t = Table([[""]], colWidths=[6.5*inch], rowHeights=[0.02*inch])
    t.setStyle(TableStyle([("LINEBELOW", (0,0), (-1,-1), thickness, color)]))
    return KeepTogether([Spacer(1, space_before), t, Spacer(1, space_after)])


def callout_box(title, body_html, color=GOLD):
    data = [[Paragraph(f"<b>{title}</b>", styles["h3"])],
            [Paragraph(body_html, styles["body"])]]
    t = Table(data, colWidths=[6.3*inch])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), BG_LIGHT),
        ("LEFTPADDING", (0,0), (-1,-1), 12),
        ("RIGHTPADDING", (0,0), (-1,-1), 12),
        ("TOPPADDING", (0,0), (0,0), 10),
        ("BOTTOMPADDING", (0,-1), (-1,-1), 10),
        ("LINEABOVE", (0,0), (-1,0), 3, color),
    ]))
    return KeepTogether([Spacer(1, 6), t, Spacer(1, 8)])


def build_story():
    s = []
    s.append(PageBreak())  # cover

    # Page 2
    s.append(P("A NOTE FROM DEREK", "h1_eyebrow"))
    s.append(P("Welcome. Let's make this simple.", "h1"))
    s.append(divider(color=GOLD, thickness=2))
    s.append(P("I've spent 18 years in this industry and originated over a billion dollars in home loans. And in that time, I've watched first-time buyers lose sleep, lose deals, and sometimes lose the house they wanted \u2014 not because they weren't ready, but because nobody walked them through the process in plain English."))
    s.append(P("This guide is that walkthrough. Ten minutes of reading will save you weeks of confusion and, honestly, thousands of dollars. You'll know what to prepare before you apply, what programs you qualify for, the real costs to expect, and the exact 30-day sequence that gets you from pre-approved to keys-in-hand."))
    s.append(P("No fluff, no sales pitch hiding in every paragraph. Just the playbook I give my own friends and family when they're ready to buy their first home."))
    s.append(Spacer(1, 14))
    s.append(P("When you're ready to start, my application link is on the last page. Or don't \u2014 just use the guide. Either way, I'm glad you're here.", "body"))
    s.append(Spacer(1, 22))
    s.append(P("\u2014 <b>Derek Huit</b><br/>Loan Originator | NMLS #203980<br/>Anchorage, Alaska", "body"))
    s.append(PageBreak())

    # Page 3
    s.append(P("STEP 1 OF 5", "h1_eyebrow"))
    s.append(P("Know what you can actually afford.", "h1"))
    s.append(divider(color=GOLD, thickness=2))
    s.append(P("Before you fall in love with a house, fall in love with a number \u2014 the monthly payment you can comfortably handle. Lenders use a metric called <b>Debt-to-Income Ratio (DTI)</b> to figure this out, and you should too."))
    s.append(P("The 28/36 Rule (the one lenders actually use)", "h2"))
    s.append(bullet("<b>Front-end DTI</b> \u2014 your housing payment shouldn't exceed <b>28%</b> of gross monthly income."))
    s.append(bullet("<b>Back-end DTI</b> \u2014 all debts combined (housing + car + student loans + credit cards) shouldn't exceed <b>36\u201345%</b>, depending on loan type."))
    s.append(P("Quick math example", "h2"))
    s.append(P("If you earn <b>$6,000/month gross</b>: your target housing payment is roughly <b>$1,680</b> (28% of 6,000). That covers principal, interest, property taxes, homeowners insurance, and mortgage insurance if applicable \u2014 what we call <b>PITI + MI</b>."))
    s.append(callout_box("Don't confuse pre-approval with affordability.",
        "A lender may pre-approve you for <b>$400,000</b>, but that doesn't mean you should borrow $400,000. Your pre-approval is the ceiling. Your budget is the comfortable middle. Aim 10\u201315% below the ceiling so life has room to breathe."))
    s.append(P("The three numbers you need before applying:", "h2"))
    s.append(bullet("<b>Gross monthly income</b> (before taxes, all sources)."))
    s.append(bullet("<b>Total monthly debt payments</b> (minimums on every credit line)."))
    s.append(bullet("<b>Credit score</b> \u2014 check all three bureaus. The middle score is what most lenders use."))
    s.append(PageBreak())

    # Page 4
    s.append(P("STEP 2 OF 5", "h1_eyebrow"))
    s.append(P("Get pre-approved \u2014 it's not optional.", "h1"))
    s.append(divider(color=GOLD, thickness=2))
    s.append(P("In most competitive markets, sellers won't even consider an offer without a pre-approval letter. A pre-approval tells the seller you're a real buyer \u2014 not a tire-kicker \u2014 and a lender has verified you can actually close."))
    s.append(P("Pre-qualification vs. Pre-approval \u2014 know the difference", "h2"))
    pre_table = Table([
        ["", "Pre-Qualification", "Pre-Approval"],
        ["Credit pulled?", "Soft (or none)", "Hard pull"],
        ["Documents reviewed?", "No \u2014 self-reported", "Yes \u2014 W-2s, paystubs, bank statements"],
        ["Sellers take it seriously?", "Not really", "Yes"],
        ["Time to complete", "5 minutes", "24\u201348 hours"],
        ["What you get", "Rough estimate", "Actual letter with loan amount"],
    ], colWidths=[1.9*inch, 2.2*inch, 2.2*inch])
    pre_table.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,0), NAVY),
        ("TEXTCOLOR", (0,0), (-1,0), colors.white),
        ("FONTNAME", (0,0), (-1,0), "Helvetica-Bold"),
        ("FONTSIZE", (0,0), (-1,-1), 9),
        ("LEADING", (0,0), (-1,-1), 12),
        ("LINEBELOW", (0,0), (-1,-1), 0.4, RULE),
        ("ROWBACKGROUNDS", (0,1), (-1,-1), [colors.white, BG_LIGHT]),
        ("TOPPADDING", (0,0), (-1,-1), 7),
        ("BOTTOMPADDING", (0,0), (-1,-1), 7),
        ("LEFTPADDING", (0,0), (-1,-1), 10),
        ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
    ]))
    s.append(pre_table)
    s.append(Spacer(1, 10))
    s.append(P("What to have ready when you apply", "h2"))
    s.append(bullet("Two years of W-2s (or 1099s/tax returns if self-employed)."))
    s.append(bullet("Most recent 30 days of pay stubs."))
    s.append(bullet("Two months of bank statements \u2014 <i>all pages, even blank ones</i>."))
    s.append(bullet("Photo ID and Social Security number."))
    s.append(bullet("Explanation letters for any large deposits, gaps in employment, or recent credit inquiries."))
    s.append(callout_box("Pro tip from 18 years of closings:",
        "Do <b>not</b> make large deposits, open new credit, or change jobs between pre-approval and closing. Every one of those moves can blow up your loan. When in doubt, call me first."))
    s.append(PageBreak())

    # Page 5
    s.append(P("STEP 3 OF 5", "h1_eyebrow"))
    s.append(P("Shop smart \u2014 agent first, house second.", "h1"))
    s.append(divider(color=GOLD, thickness=2))
    s.append(P("Most first-time buyers start on Zillow. That's backwards. The right move is to line up your team <i>first</i> \u2014 lender, agent, inspector \u2014 then start shopping. When you find the right house, you'll need to move in hours, not days."))
    s.append(P("Your 3-person team", "h2"))
    s.append(bullet("<b>Loan Officer</b> (that's me). Gets you pre-approved, locks your rate, shepherds the file to closing."))
    s.append(bullet("<b>Buyer's Agent.</b> Works for <i>you</i>, not the seller. Negotiates on your behalf. Paid from seller's side of the transaction in most cases."))
    s.append(bullet("<b>Home Inspector.</b> You hire them after your offer is accepted. $350\u2013$600 well spent."))
    s.append(P("Must-haves vs. nice-to-haves", "h2"))
    s.append(P("Make two lists before you tour anything. <b>Must-haves</b> are non-negotiable \u2014 school district, commute time, number of bedrooms. <b>Nice-to-haves</b> are preferences \u2014 updated kitchen, finished basement, big backyard. The mistake first-timers make is treating nice-to-haves as must-haves, which eliminates 80% of affordable inventory."))
    s.append(P("The neighborhood checklist", "h2"))
    s.append(bullet("Drive the commute at rush hour. Not at 2pm."))
    s.append(bullet("Walk the street at night. Is it quiet? Well-lit?"))
    s.append(bullet("Check crime data on <i>NeighborhoodScout</i> or your local police department's portal."))
    s.append(bullet("Pull the <b>school attendance zone map</b> \u2014 don't trust listing-site data. It's often wrong."))
    s.append(bullet("Look at property tax trends over the last five years. Rising fast? Budget for it."))
    s.append(PageBreak())

    # Page 6
    s.append(P("STEP 4 OF 5", "h1_eyebrow"))
    s.append(P("Make the offer \u2014 without giving away the farm.", "h1"))
    s.append(divider(color=GOLD, thickness=2))
    s.append(P("An offer isn't just a price. It's a package \u2014 price, earnest money, contingencies, closing timeline, and concessions. The best offer isn't always the highest dollar amount; it's the cleanest package that makes a seller feel confident you'll actually close."))
    s.append(P("The five levers you can pull", "h2"))
    s.append(bullet("<b>Purchase price.</b> Obvious, but not the whole story."))
    s.append(bullet("<b>Earnest money deposit.</b> Typically 1\u20133% of purchase price. More = more serious."))
    s.append(bullet("<b>Financing contingency.</b> Protects your deposit if your loan falls through. Don't waive this as a first-timer."))
    s.append(bullet("<b>Inspection contingency.</b> Gives you the right to walk away (or renegotiate) based on inspection findings. Do not waive."))
    s.append(bullet("<b>Seller concessions.</b> Ask the seller to cover part of your closing costs. Legal and common \u2014 up to 3\u20136% depending on loan type."))
    s.append(P("What to avoid", "h2"))
    s.append(bullet("Escalation clauses on your first offer unless your agent strongly recommends it."))
    s.append(bullet("Waiving inspection. You'd be amazed what <i>move-in ready</i> homes hide."))
    s.append(bullet("Writing love letters to sellers. They expose you to fair-housing issues and rarely move the needle."))
    s.append(callout_box("Earnest money isn't a fee \u2014 it's a deposit.",
        "Your earnest money (typically 1\u20133% of the price) gets applied to your down payment at closing. You only lose it if you back out for a reason not protected by a contingency. Write the check to the <i>title company or broker escrow account</i> \u2014 never directly to the seller."))
    s.append(PageBreak())

    # Page 7
    s.append(P("STEP 5 OF 5", "h1_eyebrow"))
    s.append(P("Underwriting, appraisal, and closing.", "h1"))
    s.append(divider(color=GOLD, thickness=2))
    s.append(P("Once your offer is accepted, you enter the 30-day sprint to closing. Here's what happens, roughly in order:"))
    s.append(P("Week 1 \u2014 Inspection + Appraisal ordered", "h2"))
    s.append(P("You'll schedule the inspection within the first few days. Your lender (me) orders the appraisal, which is a separate professional who determines if the house is worth what you're paying. Appraisal typically comes back in 7\u201314 days."))
    s.append(P("Week 2\u20133 \u2014 Underwriting", "h2"))
    s.append(P("An underwriter reviews every document you submitted, the appraisal, and the title report. They may request additional items \u2014 don't panic, that's normal. Respond within 24 hours. Every day you delay is a day longer to close."))
    s.append(P("Week 3\u20134 \u2014 Clear to Close", "h2"))
    s.append(P("When the underwriter signs off, you get a <b>Clear to Close (CTC)</b>. Three business days before closing, you receive a <b>Closing Disclosure</b> showing exact numbers. Review it carefully \u2014 compare to your original Loan Estimate. Discrepancies should be flagged to your LO."))
    s.append(P("Closing Day", "h2"))
    s.append(P("You'll sign around 60 pages (bring a good pen). You'll wire your down payment and closing costs <b>before</b> closing \u2014 never same-day cash. And then you get keys. It's real."))
    s.append(PageBreak())

    # Page 8 - Loan Programs
    s.append(P("LOAN PROGRAMS", "h1_eyebrow"))
    s.append(P("Which program is right for you?", "h1"))
    s.append(divider(color=GOLD, thickness=2))
    s.append(P("You don't have to put 20% down. That's an outdated myth. Here are the real first-time buyer programs, side by side."))
    loan_table = Table([
        ["Program", "Min Down", "Min Credit", "Best For"],
        ["Conventional 97", "3%", "620", "Strong credit, want to avoid FHA fees long-term"],
        ["FHA", "3.5%", "580", "Lower credit, first-time buyers, higher DTI tolerance"],
        ["VA", "0%", "580*", "Active military, veterans, qualifying spouses"],
        ["USDA", "0%", "640", "Rural/suburban areas, income-limited"],
    ], colWidths=[1.6*inch, 1.0*inch, 1.0*inch, 2.7*inch])
    loan_table.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,0), NAVY),
        ("TEXTCOLOR", (0,0), (-1,0), colors.white),
        ("FONTNAME", (0,0), (-1,0), "Helvetica-Bold"),
        ("FONTSIZE", (0,0), (-1,-1), 9),
        ("LEADING", (0,0), (-1,-1), 12),
        ("LINEBELOW", (0,0), (-1,-1), 0.4, RULE),
        ("ROWBACKGROUNDS", (0,1), (-1,-1), [colors.white, BG_LIGHT]),
        ("TOPPADDING", (0,0), (-1,-1), 7),
        ("BOTTOMPADDING", (0,0), (-1,-1), 7),
        ("LEFTPADDING", (0,0), (-1,-1), 9),
        ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
    ]))
    s.append(loan_table)
    s.append(Spacer(1, 6))
    s.append(P("*VA loans don't have a set minimum by statute, but most lenders require 580\u2013620.", "caption"))
    s.append(P("What about PMI?", "h2"))
    s.append(P("If you put less than 20% down on a conventional loan, you'll pay <b>Private Mortgage Insurance (PMI)</b> \u2014 typically 0.3\u20131.5% of the loan annually. The good news: on conventional loans, PMI drops off automatically at 78% loan-to-value. FHA works differently \u2014 its MIP stays for the life of the loan in most cases, which is why many buyers refinance out of FHA once they hit 20% equity."))
    s.append(callout_box("Don't overlook state and local first-time buyer programs.",
        "Most states offer below-market rates, down payment assistance, and tax credit programs for eligible first-time buyers \u2014 on top of the federal programs above. Eligibility, limits, and benefits vary by state. Ask me what's available in yours; I'll run your scenario and tell you whether stacking a state program makes sense for your situation."))
    s.append(PageBreak())

    # Page 9 - Costs
    s.append(P("THE MONEY", "h1_eyebrow"))
    s.append(P("What it actually costs \u2014 every line item.", "h1"))
    s.append(divider(color=GOLD, thickness=2))
    s.append(P("\"How much do I need saved?\" \u2014 the #1 question I get. Here's the real answer for a $350,000 purchase with 3.5% down (FHA) as an example."))
    cost_table = Table([
        ["Cost Line Item", "Typical Range", "Example ($350k home)"],
        ["Down Payment", "3\u201320%", "$12,250 (3.5%)"],
        ["Loan Origination / Lender Fees", "0.5\u20131%", "$1,500\u2013$3,500"],
        ["Appraisal", "Fixed", "$500\u2013$750"],
        ["Home Inspection", "Fixed", "$350\u2013$600"],
        ["Title Insurance + Settlement", "0.5\u20131% of price", "$1,750\u2013$3,500"],
        ["Prepaid Taxes + Insurance (escrow)", "Varies by state", "$2,500\u2013$5,000"],
        ["Recording + Transfer Fees", "Varies by state", "$200\u2013$2,000"],
        ["TOTAL CASH NEEDED", "", "\u2248 $19,000\u2013$27,000"],
    ], colWidths=[2.6*inch, 1.7*inch, 2.0*inch])
    cost_table.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,0), NAVY),
        ("TEXTCOLOR", (0,0), (-1,0), colors.white),
        ("FONTNAME", (0,0), (-1,0), "Helvetica-Bold"),
        ("FONTSIZE", (0,0), (-1,-1), 9),
        ("LEADING", (0,0), (-1,-1), 12),
        ("LINEBELOW", (0,0), (-1,-1), 0.4, RULE),
        ("ROWBACKGROUNDS", (0,1), (-2,-1), [colors.white, BG_LIGHT]),
        ("BACKGROUND", (0,-1), (-1,-1), GOLD),
        ("FONTNAME", (0,-1), (-1,-1), "Helvetica-Bold"),
        ("TOPPADDING", (0,0), (-1,-1), 7),
        ("BOTTOMPADDING", (0,0), (-1,-1), 7),
        ("LEFTPADDING", (0,0), (-1,-1), 9),
        ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
    ]))
    s.append(cost_table)
    s.append(Spacer(1, 10))
    s.append(P("Ways to reduce out-of-pocket cash", "h2"))
    s.append(bullet("<b>Seller concessions.</b> Ask the seller to cover 3\u20136% of closing costs in your offer."))
    s.append(bullet("<b>Lender credits.</b> Accept a slightly higher rate in exchange for the lender paying some closing costs."))
    s.append(bullet("<b>Down payment assistance (DPA).</b> Grants and forgivable loans exist in every state. I'll tell you what's available in yours."))
    s.append(bullet("<b>Gift funds.</b> Parents, siblings, or grandparents can gift down payment money. Needs a gift letter."))
    s.append(PageBreak())

    # Page 10 - Mistakes
    s.append(P("AVOID", "h1_eyebrow"))
    s.append(P("The 5 mistakes that kill first-time buyer deals.", "h1"))
    s.append(divider(color=GOLD, thickness=2))
    s.append(P("#1 \u2014 Shopping before you're pre-approved.", "h2"))
    s.append(P("You'll fall in love with houses you can't afford and lose to buyers who moved first. Get pre-approved before you attend an open house."))
    s.append(P("#2 \u2014 Making a big purchase during escrow.", "h2"))
    s.append(P("New car? New credit card? Buying furniture on a financing plan? Every one of these can re-trigger underwriting and blow up your closing. Wait until after you get the keys."))
    s.append(P("#3 \u2014 Changing jobs mid-process.", "h2"))
    s.append(P("Even a lateral move in the same field can force a re-verification cycle that delays closing 2\u20133 weeks. If a change is coming, tell your LO <i>before</i> it happens."))
    s.append(P("#4 \u2014 Waiving the inspection.", "h2"))
    s.append(P("In hot markets, agents pressure buyers to waive inspections to win offers. For first-timers, I strongly advise against this. The $500 inspection fee has saved my clients tens of thousands of dollars more times than I can count."))
    s.append(P("#5 \u2014 Ignoring the Loan Estimate.", "h2"))
    s.append(P("Three days after you apply, you'll receive a <b>Loan Estimate</b>. Read it. Understand it. Ask questions. When your Closing Disclosure arrives later, line-item compare it to the original Loan Estimate. Fees that drifted up by more than allowed tolerance need to be credited back."))
    s.append(PageBreak())

    # Page 11 - Checklist
    s.append(P("CHECKLIST", "h1_eyebrow"))
    s.append(P("Your 30-day pre-approval checklist.", "h1"))
    s.append(divider(color=GOLD, thickness=2))
    s.append(P("Print this. Work it top-to-bottom. When every box is checked, you're ready to apply.", "body"))

    checklist_items = [
        ("Check all 3 credit scores at annualcreditreport.com (free)", "Week 1"),
        ("Pull 2 years of W-2s (or tax returns if self-employed)", "Week 1"),
        ("Save 2 most-recent pay stubs (or 2 months of P&L if 1099)", "Week 1"),
        ("Download 2 months of statements from every bank/retirement account", "Week 1"),
        ("List every monthly debt payment (minimums only)", "Week 1"),
        ("Calculate your gross monthly income from all sources", "Week 1"),
        ("Identify down payment source \u2014 savings, gift, DPA program", "Week 2"),
        ("Pay down revolving balances to <30% utilization if possible", "Week 2"),
        ("Freeze new credit applications (no car loans, new cards)", "Week 2"),
        ("Pick a target price range based on 28% DTI rule", "Week 2"),
        ("Identify 3 target neighborhoods (must-haves only)", "Week 3"),
        ("Interview 1\u20132 buyer's agents (ask for references)", "Week 3"),
        ("Gather explanation letters for any deposits, gaps, inquiries", "Week 3"),
        ("Apply for pre-approval \u2014 derekhuit at USA.loan", "Week 4"),
        ("Receive pre-approval letter; start touring homes", "Week 4"),
    ]
    chk_data = [["", "Task", "Target"]]
    for item, when in checklist_items:
        chk_data.append(["\u2610", item, when])
    chk_table = Table(chk_data, colWidths=[0.35*inch, 4.75*inch, 1.1*inch])
    chk_table.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,0), NAVY),
        ("TEXTCOLOR", (0,0), (-1,0), colors.white),
        ("FONTNAME", (0,0), (-1,0), "Helvetica-Bold"),
        ("FONTSIZE", (0,0), (-1,-1), 9),
        ("LEADING", (0,0), (-1,-1), 12),
        ("LINEBELOW", (0,0), (-1,-1), 0.4, RULE),
        ("ROWBACKGROUNDS", (0,1), (-1,-1), [colors.white, BG_LIGHT]),
        ("TOPPADDING", (0,0), (-1,-1), 6),
        ("BOTTOMPADDING", (0,0), (-1,-1), 6),
        ("LEFTPADDING", (0,0), (-1,-1), 9),
        ("ALIGN", (0,0), (0,-1), "CENTER"),
        ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
    ]))
    s.append(chk_table)
    s.append(PageBreak())

    # Page 12 - Glossary
    s.append(P("QUICK REFERENCE", "h1_eyebrow"))
    s.append(P("The 15 terms every first-time buyer should know.", "h1"))
    s.append(divider(color=GOLD, thickness=2))
    glossary = [
        ("APR", "Annual Percentage Rate \u2014 your interest rate <i>plus</i> loan fees, expressed annually. Compare APRs, not rates."),
        ("Amortization", "The schedule showing how each monthly payment splits between principal and interest over the life of the loan."),
        ("Appraisal", "An independent professional's opinion of what the home is worth. Protects the lender (and you) from overpaying."),
        ("Contingency", "A condition in your offer that lets you back out without losing earnest money \u2014 typically financing, inspection, appraisal."),
        ("DTI", "Debt-to-Income ratio. Your total monthly debt payments divided by your gross monthly income."),
        ("Earnest Money", "Your good-faith deposit when you make an offer. Applied to down payment at closing."),
        ("Escrow", "An account held by your lender to pay property taxes and insurance monthly, rather than in a lump sum."),
        ("LTV", "Loan-to-Value ratio. Loan amount \u00f7 home value. Below 80% = no PMI required on conventional."),
        ("PITI", "Principal, Interest, Taxes, Insurance \u2014 the full monthly payment."),
        ("PMI", "Private Mortgage Insurance, required on most conventional loans with <20% down. Drops off at 78% LTV."),
        ("Points", "Fees paid upfront to lower your interest rate. 1 point = 1% of loan. Worth it only if you plan to stay 5+ years."),
        ("Pre-approval", "A lender's conditional commitment to loan you a specific amount, based on verified income and credit."),
        ("Rate Lock", "Your interest rate guaranteed for a set window (typically 30\u201360 days) while you close."),
        ("Title Insurance", "One-time premium that protects you (and your lender) from ownership disputes after closing."),
        ("Underwriting", "The lender's final review of every document before approving the loan. This is where most delays happen."),
    ]
    for term, defn in glossary:
        s.append(P(f"<b>{term}.</b> {defn}", "body"))
    s.append(PageBreak())

    # Page 13 - Why me
    s.append(P("WHY ME", "h1_eyebrow"))
    s.append(P("Who you're actually working with.", "h1"))
    s.append(divider(color=GOLD, thickness=2))
    s.append(P("You could go to any lender on the internet. I don't take that for granted, and here's the honest pitch for why it's worth working with me."))
    s.append(P("18 years, $1B+ originated", "h2"))
    s.append(P("I've closed loans in every condition \u2014 bad credit, self-employed, divorcing buyers, last-minute job changes, rural properties, luxury purchases, military relocations. There are very few situations I haven't seen before."))
    s.append(P("Powered by Cardinal Financial", "h2"))
    s.append(P("Cardinal Financial Company, Limited Partnership (NMLS #66247) is a direct lender \u2014 which means decisions happen in-house, not across three layers of middlemen. Faster closings. Cleaner approvals. Better communication. Plus Cardinal's proprietary <b>Octane</b> platform keeps you looped in at every step."))
    s.append(P("Built from Alaska, licensed to serve you", "h2"))
    s.append(P("I'm based in Anchorage and I know the Alaska market inside-out. But Cardinal Financial lends nationally, and I take applications across most U.S. states (except New York). Wherever you are, I'm reachable \u2014 text, email, or call."))
    s.append(Spacer(1, 12))
    s.append(callout_box("What you can expect from me, in writing:",
        "\u2022 I answer texts within 1 business hour, 7am\u20137pm AKT.<br/>"
        "\u2022 You'll get a real-time status update every Friday during your loan.<br/>"
        "\u2022 If I tell you something, I'll put it in an email so there's no he-said-she-said.<br/>"
        "\u2022 If I can't help, I'll tell you that too \u2014 and point you to someone who can."))
    s.append(PageBreak())

    # Page 14 - CTA
    s.append(Spacer(1, 28))
    s.append(P("READY?", "h1_eyebrow"))
    s.append(P("When you're ready, here's what to do.", "h1"))
    s.append(divider(color=GOLD, thickness=2))
    s.append(Spacer(1, 6))
    s.append(P("If you got this far, you're more prepared than 90% of first-time buyers walking into their first open house. Now let's put it to work."))
    s.append(Spacer(1, 14))

    cta_data = [
        [Paragraph("<b>Apply online in 10 minutes</b>", ParagraphStyle("cta_h", fontName="Helvetica-Bold", fontSize=15, textColor=colors.white, leading=18))],
        [Paragraph('<font color="#FFFFFF">No pressure, no obligation. Get a real pre-approval letter within 24 business hours.</font>', styles["body"])],
        [Paragraph('<font color="#C9A962"><b>\u2192 USA.loan</b></font>', ParagraphStyle("cta_link", fontName="Helvetica-Bold", fontSize=14, textColor=GOLD, leading=18))],
    ]
    cta_table = Table(cta_data, colWidths=[6.3*inch])
    cta_table.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), NAVY),
        ("TEXTCOLOR", (0,0), (-1,-1), colors.white),
        ("LEFTPADDING", (0,0), (-1,-1), 20),
        ("RIGHTPADDING", (0,0), (-1,-1), 20),
        ("TOPPADDING", (0,0), (0,0), 18),
        ("TOPPADDING", (0,1), (0,1), 6),
        ("TOPPADDING", (0,2), (0,2), 12),
        ("BOTTOMPADDING", (0,-1), (-1,-1), 20),
    ]))
    s.append(cta_table)
    s.append(Spacer(1, 18))
    s.append(P("Or reach me directly:", "h2"))
    s.append(bullet("<b>Website:</b> USA.loan"))
    s.append(bullet("<b>NMLS Lookup:</b> nmlsconsumeraccess.org \u2014 search #203980"))
    s.append(bullet("<b>Licensing info:</b> cardinalfinancial.com/nmls-licensing"))
    s.append(Spacer(1, 16))
    s.append(P("<b>One last thing.</b> Whatever happens \u2014 whether you work with me or not \u2014 I hope this guide saves you time, money, and a few gray hairs. That's what it was written for.", "body"))
    s.append(Spacer(1, 6))
    s.append(P("\u2014 Derek", "body"))
    return s


def build(outfile="guide.pdf"):
    doc = BaseDocTemplate(
        outfile, pagesize=LETTER,
        leftMargin=0.75*inch, rightMargin=0.75*inch,
        topMargin=0.9*inch, bottomMargin=0.95*inch,
        title="The First-Time Homebuyer Playbook",
        author="Derek Huit | NMLS #203980",
        subject="A 14-page guide for first-time homebuyers",
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="normal")
    cover = PageTemplate(id="Cover", frames=[frame], onPage=cover_page)
    interior = PageTemplate(id="Interior", frames=[frame], onPage=interior_page)
    doc.addPageTemplates([cover, interior])
    doc.build(build_story())
    print(f"Built: {outfile}")


if __name__ == "__main__":
    import sys, os
    out = sys.argv[1] if len(sys.argv) > 1 else "guide.pdf"
    os.makedirs(os.path.dirname(out) or ".", exist_ok=True)
    build(out)
