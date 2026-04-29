'use client'

import { Search, Menu, PanelLeftClose, PanelRightClose, Globe, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAppStore } from '@/lib/store'
import { useTranslation } from '@/hooks/use-translation'
import { Language } from '@/lib/types'
import { cn } from '@/lib/utils'

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  const {
    searchQuery,
    setSearchQuery,
    language,
    setLanguage,
    complexity,
    setComplexity,
    audience,
    setAudience,
    leftSidebarOpen,
    rightSidebarOpen,
    toggleLeftSidebar,
    toggleRightSidebar
  } = useAppStore()
  const { t } = useTranslation()

  const languageLabels: Record<Language, string> = {
    en: 'English',
    hi: 'हिन्दी',
    sa: 'संस्कृतम्',
    bn: 'বাংলা'
  }

  return (
    <header
      className={cn(
        "h-14 border-b border-border bg-card/80 backdrop-blur-sm flex items-center px-4 gap-4 sticky top-0 z-50",
        className
      )}
    >
      {/* Left Section - Logo & Toggle */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleLeftSidebar}
          className="h-8 w-8 shrink-0"
          aria-label={leftSidebarOpen ? "Close navigation" : "Open navigation"}
        >
          {leftSidebarOpen ? (
            <PanelLeftClose className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </Button>
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="text-primary-foreground font-serif text-lg font-bold">ॐ</span>
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-semibold text-foreground leading-tight">{t('nikhil')}</h1>
              <Badge variant="secondary" className="text-[10px] h-4 px-1 uppercase tracking-tighter bg-primary/10 text-primary border-primary/20">
                v3.0 Early Access
              </Badge>
            </div>
            <p className="text-[10px] text-muted-foreground leading-tight uppercase tracking-widest font-medium">{t('knowledge_os')}</p>
          </div>
        </div>
      </div>

      {/* Center Section - Smart Search */}
      <div className="flex-1 max-w-xl mx-auto px-4">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            type="search"
            placeholder={t('search_placeholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 h-10 bg-secondary/30 border-border/40 focus-visible:bg-card focus-visible:ring-primary/20 rounded-full transition-all"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1">
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
        </div>
      </div>

      {/* Right Section - Controls */}
      <div className="flex items-center gap-2">
        {/* Complexity Selector */}
        <Select value={complexity} onValueChange={(v) => setComplexity(v as any)}>
          <SelectTrigger className="w-auto h-8 gap-1.5 bg-secondary/50 border-border/50 text-xs">
            <span className="font-medium">{t('depth')}:</span>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="simple">{t('simple')}</SelectItem>
            <SelectItem value="moderate">{t('moderate')}</SelectItem>
            <SelectItem value="advanced">{t('advanced')}</SelectItem>
            <SelectItem value="scholarly">{t('scholarly')}</SelectItem>
          </SelectContent>
        </Select>

        {/* Audience Selector */}
        <Select value={audience} onValueChange={(v) => setAudience(v as any)}>
          <SelectTrigger className="w-auto h-8 gap-1.5 bg-secondary/50 border-border/50 text-xs">
            <span className="font-medium">{t('for')}:</span>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">{t('general')}</SelectItem>
            <SelectItem value="devotee">{t('devotee')}</SelectItem>
            <SelectItem value="non-devotee">{t('non_devotee')}</SelectItem>
            <SelectItem value="brahmachari">{t('brahmachari')}</SelectItem>
            <SelectItem value="scholar">{t('scholar')}</SelectItem>
            <SelectItem value="researcher">{t('researcher')}</SelectItem>
          </SelectContent>
        </Select>

        {/* Language Selector */}
        <Select value={language} onValueChange={(v) => setLanguage(v as Language)}>
          <SelectTrigger className="w-auto h-8 gap-1.5 bg-secondary/50 border-border/50 text-xs">
            <Globe className="h-3.5 w-3.5" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {(Object.keys(languageLabels) as Language[]).map((lang) => (
              <SelectItem key={lang} value={lang}>
                {languageLabels[lang]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Right Panel Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleRightSidebar}
          className="h-8 w-8 shrink-0"
          aria-label={rightSidebarOpen ? "Close panel" : "Open panel"}
        >
          <PanelRightClose className={cn("h-4 w-4", !rightSidebarOpen && "rotate-180")} />
        </Button>
      </div>
    </header>
  )
}
