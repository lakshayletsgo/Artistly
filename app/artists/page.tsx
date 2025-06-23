"use client"

import { Suspense } from 'react'
import ArtistListingContent from './ArtistListingContent'

export default function ArtistsPage() {
  return (
    <Suspense fallback={
      <div className="container py-10">
        <h1 className="text-4xl font-bold mb-8">Find Your Perfect Artist</h1>
        <div className="animate-pulse">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Category skeleton */}
            <div className="space-y-4">
              <div className="h-4 w-20 bg-muted rounded" />
              <div className="space-y-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="h-4 w-4 bg-muted rounded" />
                    <div className="h-4 w-24 bg-muted rounded" />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Location skeleton */}
            <div className="space-y-4">
              <div className="h-4 w-20 bg-muted rounded" />
              <div className="h-10 w-full bg-muted rounded" />
            </div>
            
            {/* Price range skeleton */}
            <div className="space-y-4">
              <div className="h-4 w-20 bg-muted rounded" />
              <div className="h-10 w-full bg-muted rounded" />
            </div>
          </div>
          
          {/* Artists grid skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-96 bg-muted rounded" />
            ))}
          </div>
        </div>
      </div>
    }>
      <ArtistListingContent />
    </Suspense>
  )
} 