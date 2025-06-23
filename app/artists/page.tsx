"use client"

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Check, ChevronsUpDown } from 'lucide-react'
import { ArtistCard } from '@/components/ArtistCard'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { cn } from '@/lib/utils'
import artists from '@/data/artists.json'
import categories from '@/data/categories.json'

const locations = [...new Set(artists.artists.map((artist) => artist.location))]
const priceRanges = ['$0-500', '$500-1000', '$1000-2000', '$2000+']

export default function ArtistsPage() {
  const searchParams = useSearchParams()
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [location, setLocation] = useState<string>('')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const category = searchParams.get('category')
    if (category) {
      setSelectedCategories([category])
    }
  }, [searchParams])

  const filteredArtists = artists.artists.filter((artist) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      artist.categories.some((cat) => selectedCategories.includes(cat))
    const matchesLocation = !location || artist.location === location
    const artistPrice = parseInt(
      artist.priceRange.replace(/[^0-9-]/g, '').split('-')[0]
    )
    const matchesPrice =
      artistPrice >= priceRange[0] && artistPrice <= priceRange[1]
    return matchesCategory && matchesLocation && matchesPrice
  })

  const handlePriceRangeChange = (value: number[]) => {
    setPriceRange([value[0], value[1]])
  }

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">Find Your Perfect Artist</h1>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Categories */}
        <div className="space-y-4">
          <Label>Categories</Label>
          <div className="space-y-2">
            {categories.categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox
                  id={category.id}
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={(checked: boolean) => {
                    setSelectedCategories(
                      checked
                        ? [...selectedCategories, category.id]
                        : selectedCategories.filter((id) => id !== category.id)
                    )
                  }}
                />
                <label
                  htmlFor={category.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {category.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="space-y-4">
          <Label>Location</Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between"
              >
                {location
                  ? locations.find((loc) => loc === location)
                  : 'Select location...'}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput placeholder="Search location..." />
                <CommandEmpty>No location found.</CommandEmpty>
                <CommandGroup>
                  {locations.map((loc) => (
                    <CommandItem
                      key={loc}
                      onSelect={(currentValue: string) => {
                        setLocation(currentValue === location ? '' : currentValue)
                        setOpen(false)
                      }}
                    >
                      <Check
                        className={cn(
                          'mr-2 h-4 w-4',
                          location === loc ? 'opacity-100' : 'opacity-0'
                        )}
                      />
                      {loc}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        {/* Price Range */}
        <div className="space-y-4">
          <Label>Price Range</Label>
          <div className="px-2">
            <Slider
              defaultValue={[0, 2000]}
              max={2000}
              step={100}
              value={[priceRange[0], priceRange[1]]}
              onValueChange={handlePriceRangeChange}
              className="w-full"
            />
            <div className="flex justify-between mt-2 text-sm text-muted-foreground">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Artists Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArtists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>

      {filteredArtists.length === 0 && (
        <div className="text-center py-10">
          <p className="text-muted-foreground">
            No artists found matching your criteria.
          </p>
        </div>
      )}
    </div>
  )
} 