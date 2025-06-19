import { LucideProps } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import { cn } from '@/lib/utils'

interface IconProps extends LucideProps {
  name: string
  className?: string
}

export function Icon({ name, className, ...props }: IconProps) {
  const Component = (LucideIcons as any)[name]
  if (!Component) return null
  return <Component className={cn('stroke-1', className)} {...props} />
} 