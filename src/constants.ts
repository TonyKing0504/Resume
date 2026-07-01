export const CONTACT_INFO = {
  name: "Tao (Tony) Jin",
  phone: "551-405-1324",
  email: "jtonyking@hotmail.com",
  location: "Ithaca, NY",
  linkedin: "www.linkedin.com/in/tao-tony-jin-ab771426a",
  github: "github.com/TonyKing0504",
  blog: "dundun0504.com",
};

// Language-specific résumé downloads (files live in /public).
export const RESUME_FILES: Record<'en' | 'zh', { file: string; download: string }> = {
  en: { file: "Tao_Jin_Resume_EN.pdf", download: "Tao_Jin_Resume.pdf" },
  zh: { file: "Tao_Jin_Resume_ZH.pdf", download: "金韬-简历.pdf" },
};
