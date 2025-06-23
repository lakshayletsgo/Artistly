"use client"

import { useState } from 'react'
import { Star } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getDefaultImageForCategory } from '@/lib/constants'

interface ArtistCardProps {
  artist: {
    id: string
    name: string
    category: string
    categories: string[]
    image: string
    location: string
    priceRange: string
    rating: number
    reviews: number
    languages: string[]
    bio: string
  }
}

export function ArtistCard({ artist }: ArtistCardProps) {
  const [imageError, setImageError] = useState(false)
  
  // Get the default image based on the artist's primary category
  const defaultImage = getDefaultImageForCategory(artist.categories[0])
  
  // Use the artist's image if available and not errored, otherwise use the default
  const imageToShow = defaultImage

  return (
    <Card className="flex flex-col overflow-hidden group">
      <div className="relative h-48 w-full bg-muted">
        <Image
          src={imageToShow}
          alt={`${artist.name} - ${artist.categories.join(', ')}`}
          fill
          className="object-cover transition-all duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setImageError(true)}
        />
        {/* Category badge overlay */}
        <div className="absolute bottom-2 left-2">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
            {artist.categories[0].charAt(0).toUpperCase() + artist.categories[0].slice(1)}
          </Badge>
        </div>
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="line-clamp-1">{artist.name}</CardTitle>
            <CardDescription className="line-clamp-1">{artist.location}</CardDescription>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{artist.rating}</span>
            <span className="text-sm text-muted-foreground">
              ({artist.reviews})
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {artist.categories.map((category) => (
            <Badge key={category} variant="outline">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{artist.bio}</p>
      </CardContent>
      <CardFooter className="flex justify-between mt-auto">
        <div className="text-sm font-medium">{artist.priceRange}</div>
        <Button>Ask for Quote</Button>
      </CardFooter>
    </Card>
  )
} 