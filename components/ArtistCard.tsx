"use client"

import { Star } from 'lucide-react'
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
  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="relative h-48 w-full">
        {/* In a real app, we'd use next/image with proper image optimization */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${artist.image})`,
          }}
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{artist.name}</CardTitle>
            <CardDescription>{artist.location}</CardDescription>
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
            <Badge key={category} variant="secondary">
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