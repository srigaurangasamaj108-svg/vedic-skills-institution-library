'use client'

import * as React from 'react'
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  BookOpen,
  Search,
  Zap,
  Globe,
  Layers,
  Users
} from 'lucide-react'

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import { useAppStore } from '@/lib/store'
import { Language, ComplexityLevel, AudienceType } from '@/lib/types'

export function CommandPalette() {
  const [open, setOpen] = React.useState(false)
  const { setLanguage, setComplexity, setAudience } = useAppStore()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Language">
          <CommandItem onSelect={() => { setLanguage('en'); setOpen(false); }}>
            <Globe className="mr-2 h-4 w-4" />
            <span>Switch to English</span>
          </CommandItem>
          <CommandItem onSelect={() => { setLanguage('hi'); setOpen(false); }}>
            <Globe className="mr-2 h-4 w-4" />
            <span>Switch to Hindi</span>
          </CommandItem>
          <CommandItem onSelect={() => { setLanguage('sa'); setOpen(false); }}>
            <Globe className="mr-2 h-4 w-4" />
            <span>Switch to Sanskrit</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Complexity Depth">
          <CommandItem onSelect={() => { setComplexity('simple'); setOpen(false); }}>
            <Layers className="mr-2 h-4 w-4" />
            <span>Simple View</span>
          </CommandItem>
          <CommandItem onSelect={() => { setComplexity('moderate'); setOpen(false); }}>
            <Layers className="mr-2 h-4 w-4" />
            <span>Moderate View</span>
          </CommandItem>
          <CommandItem onSelect={() => { setComplexity('scholarly'); setOpen(false); }}>
            <Zap className="mr-2 h-4 w-4 text-yellow-500" />
            <span>Scholarly Mode</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Audience Context">
          <CommandItem onSelect={() => { setAudience('general'); setOpen(false); }}>
            <Users className="mr-2 h-4 w-4" />
            <span>General Audience</span>
          </CommandItem>
          <CommandItem onSelect={() => { setAudience('devotee'); setOpen(false); }}>
            <Smile className="mr-2 h-4 w-4" />
            <span>Devotee Perspective</span>
          </CommandItem>
          <CommandItem onSelect={() => { setAudience('scholar'); setOpen(false); }}>
            <BookOpen className="mr-2 h-4 w-4" />
            <span>Scholar / Researcher</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
