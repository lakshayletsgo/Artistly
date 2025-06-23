import { ReactNode } from 'react'

interface PageLayoutProps {
  title: string
  children: ReactNode
  lastUpdated?: string
}

export default function PageLayout({ title, children, lastUpdated }: PageLayoutProps) {
  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <div className="prose dark:prose-invert max-w-none">
          {children}
        </div>
        {lastUpdated && (
          <p className="text-sm text-muted-foreground mt-8">
            Last updated: {lastUpdated}
          </p>
        )}
      </div>
    </div>
  )
} 