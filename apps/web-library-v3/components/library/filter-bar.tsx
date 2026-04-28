'use client'

import { useAppStore } from '@/lib/store'
import { AgeGroup, Category } from '@/lib/types'
import { cn } from '@/lib/utils'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { Baby, GraduationCap, Briefcase, Heart } from 'lucide-react'
import { useTranslation } from '@/hooks/use-translation'
import { TranslationKey } from '@/lib/translations'

interface FilterBarProps {
  className?: string
}

export function FilterBar({ className }: FilterBarProps) {
  const { filters, setFilters } = useAppStore()
  const { t } = useTranslation()

  const ageGroups: { value: AgeGroup; labelKey: TranslationKey; icon: React.ComponentType<{ className?: string }> }[] = [
    { value: 'kids', labelKey: 'kids', icon: Baby },
    { value: 'students', labelKey: 'students', icon: GraduationCap },
    { value: 'professionals', labelKey: 'professionals', icon: Briefcase },
    { value: 'elders', labelKey: 'elders', icon: Heart },
  ]

  const categories: { value: Category; labelKey: TranslationKey }[] = [
    { value: 'dharma', labelKey: 'dharma' },
    { value: 'vedanta', labelKey: 'vedanta' },
    { value: 'yoga', labelKey: 'yoga' },
    { value: 'ayurveda', labelKey: 'ayurveda' },
    { value: 'jyotish', labelKey: 'jyotish' },
    { value: 'nyaya', labelKey: 'nyaya' },
  ]

  const handleAgeGroupClick = (value: AgeGroup) => {
    setFilters({
      ageGroup: filters.ageGroup === value ? undefined : value
    })
  }

  const handleCategoryClick = (value: Category) => {
    setFilters({
      category: filters.category === value ? undefined : value
    })
  }

  return (
    <div className={cn("border-b border-border bg-secondary/30 py-2", className)}>
      <ScrollArea className="w-full">
        <div className="flex items-center gap-6 px-4">
          {/* Age Group Filters */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-muted-foreground font-medium mr-1">{t('for')}:</span>
            {ageGroups.map(({ value, labelKey, icon: Icon }) => (
              <Button
                key={value}
                variant="ghost"
                size="sm"
                onClick={() => handleAgeGroupClick(value)}
                className={cn(
                  "h-7 px-2.5 text-xs gap-1.5 rounded-full",
                  filters.ageGroup === value
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-card hover:bg-accent/50"
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                {t(labelKey)}
              </Button>
            ))}
          </div>

          {/* Divider */}
          <div className="h-5 w-px bg-border shrink-0" />

          {/* Category Filters */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-muted-foreground font-medium mr-1">{t('topic')}:</span>
            {categories.map(({ value, labelKey }) => (
              <Button
                key={value}
                variant="ghost"
                size="sm"
                onClick={() => handleCategoryClick(value)}
                className={cn(
                  "h-7 px-3 text-xs rounded-full",
                  filters.category === value
                    ? "text-white hover:opacity-90"
                    : "bg-card hover:bg-[var(--saffron-light)]/50"
                )}
                style={filters.category === value ? { backgroundColor: 'var(--knowledge-blue)' } : undefined}
              >
                {t(labelKey)}
              </Button>
            ))}
          </div>

          {/* Clear Filters */}
          {(filters.ageGroup || filters.category) && (
            <>
              <div className="h-5 w-px bg-border shrink-0" />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setFilters({ ageGroup: undefined, category: undefined })}
                className="h-7 px-3 text-xs text-muted-foreground hover:text-foreground"
              >
                {t('clear_all')}
              </Button>
            </>
          )}
        </div>
        <ScrollBar orientation="horizontal" className="h-1.5" />
      </ScrollArea>
    </div>
  )
}
