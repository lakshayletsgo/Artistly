"use client"

import { useEffect, useState } from 'react'
import { getPageContent } from '@/lib/api'
import PageLayout from '@/components/PageLayout'
import ReactMarkdown from 'react-markdown'

export default function TermsPage() {
  const [content, setContent] = useState({ title: '', content: '', lastUpdated: '' })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchContent() {
      try {
        const response = await getPageContent('terms')
        setContent(response.data)
      } catch (err) {
        setError('Failed to load content')
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [])

  if (loading) {
    return (
      <div className="container py-10">
        <div className="max-w-3xl mx-auto">
          <div className="h-8 bg-muted animate-pulse rounded mb-4 w-1/3" />
          <div className="space-y-3">
            <div className="h-4 bg-muted animate-pulse rounded w-full" />
            <div className="h-4 bg-muted animate-pulse rounded w-5/6" />
            <div className="h-4 bg-muted animate-pulse rounded w-4/6" />
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container py-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <PageLayout title={content.title} lastUpdated={content.lastUpdated}>
      <ReactMarkdown>{content.content}</ReactMarkdown>
    </PageLayout>
  )
} 