import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { Command } from 'cmdk';
import {
  ArrowUp,
  User,
  FolderGit2,
  Briefcase,
  BarChart3,
  Mail,
  Download,
  Languages,
  Copy,
  Linkedin,
  Github,
  BookOpen,
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useSmoothScroll } from '../../lib/motion/SmoothScroll';
import { CONTACT_INFO, RESUME_FILES } from '../../constants';

interface CommandPaletteContextValue {
  open: () => void;
}
const Ctx = createContext<CommandPaletteContextValue>({ open: () => {} });
export const useCommandPalette = () => useContext(Ctx);

export const CommandPaletteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { scrollTo } = useSmoothScroll();
  const zh = language === 'zh';

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((v) => !v);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const run = useCallback((fn: () => void) => {
    setIsOpen(false);
    // let the dialog close before scrolling/acting
    window.setTimeout(fn, 60);
  }, []);

  const goTop = () =>
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });

  const openLink = (url: string) => window.open(url, '_blank', 'noopener,noreferrer');

  const downloadResume = () => {
    const resume = RESUME_FILES[language];
    const a = document.createElement('a');
    a.href = `${import.meta.env.BASE_URL}${resume.file}`;
    a.download = resume.download;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const copyEmail = () => {
    navigator.clipboard?.writeText(CONTACT_INFO.email).catch(() => {});
  };

  const navItems = [
    { id: 'top', label: zh ? '回到顶部' : 'Back to top', Icon: ArrowUp, action: goTop },
    { id: 'about', label: t.nav.about, Icon: User, action: () => scrollTo('about', { focus: true }) },
    { id: 'projects', label: t.nav.projects, Icon: FolderGit2, action: () => scrollTo('projects', { focus: true }) },
    { id: 'experience', label: t.nav.experience, Icon: Briefcase, action: () => scrollTo('experience', { focus: true }) },
    { id: 'skills', label: t.nav.skills, Icon: BarChart3, action: () => scrollTo('skills', { focus: true }) },
    { id: 'contact', label: zh ? '联系' : 'Contact', Icon: Mail, action: () => scrollTo('contact', { focus: true }) },
  ];

  const actionItems = [
    { id: 'resume', label: zh ? '下载简历' : 'Download résumé', Icon: Download, action: downloadResume },
    { id: 'lang', label: zh ? '切换到 English' : '切换到中文', Icon: Languages, action: toggleLanguage, keep: true },
    { id: 'email', label: zh ? '复制邮箱地址' : 'Copy email address', Icon: Copy, action: copyEmail },
  ];

  const linkItems = [
    { id: 'linkedin', label: 'LinkedIn', Icon: Linkedin, action: () => openLink(`https://${CONTACT_INFO.linkedin}`) },
    { id: 'github', label: 'GitHub', Icon: Github, action: () => openLink(`https://${CONTACT_INFO.github}`) },
    { id: 'blog', label: zh ? '个人博客' : 'Personal blog', Icon: BookOpen, action: () => openLink(`https://${CONTACT_INFO.blog}`) },
  ];

  const ctxValue = { open: () => setIsOpen(true) };

  return (
    <Ctx.Provider value={ctxValue}>
      {children}
      <Command.Dialog
        open={isOpen}
        onOpenChange={setIsOpen}
        label={zh ? '命令面板' : 'Command menu'}
        overlayClassName="cmd-overlay"
        contentClassName="cmd-content"
      >
        <Command.Input placeholder={zh ? '输入命令或搜索…' : 'Type a command or search…'} />
        <Command.List>
          <Command.Empty>{zh ? '没有匹配结果。' : 'No results found.'}</Command.Empty>

          <Command.Group heading={zh ? '跳转' : 'Navigate'}>
            {navItems.map((item) => (
              <Command.Item key={item.id} value={`nav ${item.label}`} onSelect={() => run(item.action)}>
                <item.Icon size={15} strokeWidth={2} aria-hidden="true" />
                <span>{item.label}</span>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading={zh ? '操作' : 'Actions'}>
            {actionItems.map((item) => (
              <Command.Item
                key={item.id}
                value={`action ${item.label}`}
                onSelect={() => (item.keep ? item.action() : run(item.action))}
              >
                <item.Icon size={15} strokeWidth={2} aria-hidden="true" />
                <span>{item.label}</span>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading={zh ? '链接' : 'Links'}>
            {linkItems.map((item) => (
              <Command.Item key={item.id} value={`link ${item.label}`} onSelect={() => run(item.action)}>
                <item.Icon size={15} strokeWidth={2} aria-hidden="true" />
                <span>{item.label}</span>
                <span className="cmd-hint" aria-hidden="true">↗</span>
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </Ctx.Provider>
  );
};
