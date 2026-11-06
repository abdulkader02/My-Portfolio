# Resume & Curriculum Vitae (CV) Specifications

## 1. Resume Overview

- **Subject:** Abdul Kader Khan
- **Target Profession:** Full-Stack Web Developer
- **Internal Page Route:** `/resume`
- **Static Asset Path:** `/Abdul-Kader-CV.pdf` (serves from `public/Abdul-Kader-CV.pdf`)

## 2. File Status & Handling

- **Current Status:** *Pending User Upload / File Not Yet Present*
- **Policy on Missing File:** **Do NOT generate a fake CV or upload an invented PDF.** Future agents must check for the file's presence or display an informative "Resume will be updated shortly" notice if the user has not yet placed their genuine `Abdul-Kader-CV.pdf` into `public/`.

## 3. Planned Functionality for `/resume` (Phase 2+)

1. **Embedded Viewer / Summary View:**
   - Provide a clean, minimal preview of the verified background: education, technical skills, verified projects, and contact channels.
2. **Direct Download CTA:**
   - An anchor/button linking to `/Abdul-Kader-CV.pdf` with the `download="Abdul-Kader-CV.pdf"` attribute.
3. **Open in New Tab Option:**
   - Link targeting `target="_blank"` with `rel="noopener noreferrer"` for viewing in the browser's native PDF reader.
4. **Graceful Fallback:**
   - If the file is not yet available in `public/`, disable the download button or notify the user cleanly without 404 broken links.
