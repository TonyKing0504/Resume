/*
 * Cover letters in the same Cambria house style as the resumes, so a resume and
 * letter submitted together read as one set.
 *
 * Body text is 10pt here rather than the resume's 9pt — a letter is read, not
 * scanned, and it has a page to breathe in.
 *
 *   npm install docx && node build_cover_letter.cjs
 */
const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, BorderStyle,
} = require('docx');

const FONT = 'Cambria';
const NAME_SZ = 40;   // 20pt
const BODY_SZ = 20;   // 10pt
const SMALL_SZ = 18;  // 9pt  contact line
const LINE = 240;     // single spacing; a letter should not be cramped

const runs = (text, size = BODY_SZ) =>
  text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((seg) => {
    const bold = seg.startsWith('**');
    return new TextRun({ text: bold ? seg.slice(2, -2) : seg, bold, font: FONT, size });
  });

const para = (text, opts = {}) => new Paragraph({
  spacing: { after: opts.after ?? 160, line: LINE },
  alignment: opts.align,
  children: runs(text, opts.size),
});

const LETTERS = [{
  file: 'Cover_Letter_Edgecom_EnergyMarketAssociate.docx',
  contact: ['Ithaca, NY — open to Toronto, ON (hybrid) | 551-405-1324 | jtonyking@hotmail.com',
    'linkedin.com/in/tao-tony-jin-ab771426a'],
  date: 'August 6, 2026',
  recipient: ['Edgecom Energy', '5775 Yonge Street, Suite 1902', 'Toronto, ON M4T 1W1'],
  subject: 'Re: Energy Market Associate',
  salutation: 'Dear Edgecom Energy Hiring Team,',
  body: [
    "I’m applying for the Energy Market Associate role, and I’ll be direct about where I fit and "
      + "where I don’t.",
    'What I bring is the loop this job runs on: take operational data, find the trend and the root '
      + 'cause, turn it into a change in how the work actually gets done, then report the result to the '
      + 'people who depend on it. At Aifuku I analyzed data across five linked operational systems, '
      + 'root-caused the failures that were corrupting reporting, and built the fix — an automated '
      + 'pipeline that parsed source documents into structured records and verified them against the '
      + 'ledger, removing manual entry. At Sinolink Securities I standardized and documented the team’s '
      + 'data collection and reporting workflows, cutting duplicate entry and improving team efficiency '
      + 'by 8%. At Grow Investment Group I owned the analysis and the client-facing materials for an '
      + 'institutional program that ended with 9% fewer client redemptions, 4% more inquiries, and 12% '
      + 'higher conversion. In each case the analysis was only the first half; the deliverable was a '
      + 'changed process and a number that moved.',
    "Where I don’t fit yet is the obvious one. I have not worked in the electricity sector and I have "
      + 'not run a Capacity Auction obligation. I won’t pretend that’s minor — availability, test events, '
      + 'dispatch notifications, and settlement verification each have failure modes you only learn by '
      + 'doing them. What I have done is work through the IESO’s Capacity Auction rules and DR '
      + 'participation materials so that I start in the market’s own vocabulary rather than from first '
      + 'principles. That is reading, not operating experience. But I’ve entered three domains cold — '
      + 'investment banking, asset management, and operations data — and in each the domain knowledge '
      + 'took weeks while the analytical work started immediately.',
    'Two things also line up directly. The 5CP forecasting backup duty is time-series work; my '
      + 'forecasting project used seasonal ARIMA and Holt-Winters with explicit 95% prediction intervals, '
      + 'because a peak forecast without an uncertainty band isn’t actionable. And the preferred '
      + 'qualification you list — SQL, Python, or BI tools for reporting automation — is where I’m '
      + 'strongest, not where I’d be learning.',
    'A small team where the analysis I do reaches customers and changes how the business runs is the '
      + 'environment I’m looking for. I’d welcome the chance to talk.',
  ],
  signOff: 'Sincerely,',
}];

function build(L) {
  const kids = [];

  kids.push(new Paragraph({
    alignment: AlignmentType.CENTER, spacing: { after: 30, line: LINE },
    children: [new TextRun({ text: 'TAO (TONY) JIN', bold: true, size: NAME_SZ, font: FONT })],
  }));
  L.contact.forEach((line, i) => kids.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: i === L.contact.length - 1 ? 0 : 20, line: LINE },
    border: i === L.contact.length - 1
      ? { bottom: { style: BorderStyle.SINGLE, size: 4, color: '000000', space: 6 } } : undefined,
    children: [new TextRun({ text: line, size: SMALL_SZ, font: FONT })],
  })));

  kids.push(para(L.date, { after: 200 }));
  L.recipient.forEach((r, i) => kids.push(para(r, { after: i === L.recipient.length - 1 ? 200 : 0 })));
  kids.push(para(`**${L.subject}**`, { after: 200 }));
  kids.push(para(L.salutation));
  L.body.forEach((b) => kids.push(para(b)));
  kids.push(para(L.signOff, { after: 260 }));
  kids.push(para('**Tao (Tony) Jin**', { after: 0 }));

  return new Document({
    creator: 'Tao (Tony) Jin',
    title: 'Tao (Tony) Jin — Cover Letter',
    styles: {
      default: {
        document: { run: { font: FONT, size: BODY_SZ }, paragraph: { spacing: { line: LINE } } },
      },
    },
    sections: [{
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 900, right: 1080, bottom: 900, left: 1080 },
        },
      },
      children: kids,
    }],
  });
}

(async () => {
  for (const L of LETTERS) {
    fs.writeFileSync(`${__dirname}/${L.file}`, await Packer.toBuffer(build(L)));
    console.log('wrote', L.file);
  }
})();
