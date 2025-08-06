import { LucideProps } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import { cn } from '@/lib/utils'

interface IconProps extends LucideProps {
  name: string
  className?: string
}

export function Icon({ name, className, ...props }: IconProps) {
  try {
    const Component = (LucideIcons as any)[name]
    if (!Component) {
      console.warn(`Icon "${name}" not found`)
      return <span className={cn('inline-block w-4 h-4', className)} />
    }
    return <Component className={cn('stroke-1', className)} {...props} />
  } catch (error) {
    console.error(`Error rendering icon "${name}":`, error)
    return <span className={cn('inline-block w-4 h-4', className)} />
  }
} 