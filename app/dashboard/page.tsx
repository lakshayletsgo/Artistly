"use client"

import { useState } from 'react'
import { DataTable } from '@/components/ui/data-table'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'
import artists from '@/data/artists.json'

type Artist = typeof artists.artists[0]
type Status = 'pending' | 'approved' | 'rejected'

interface ArtistWithStatus extends Artist {
  status: Status
}

export default function DashboardPage() {
  // Add status to artists data
  const [artistsData, setArtistsData] = useState<ArtistWithStatus[]>(
    artists.artists.map(artist => ({ ...artist, status: 'pending' as Status }))
  )

  const handleAction = (artistId: string, action: 'approve' | 'reject') => {
    setArtistsData(prev => 
      prev.map(artist => 
        artist.id === artistId 
          ? { ...artist, status: action === 'approve' ? 'approved' : 'rejected' }
          : artist
      )
    )
    
    toast.success(`Artist ${action}d`, {
      description: `Artist ID: ${artistId}`,
    })
  }

  const columns = [
    {
      header: "Name",
      accessorKey: "name" as keyof ArtistWithStatus,
      cell: (artist: ArtistWithStatus) => (
        <div className="font-medium">{artist.name}</div>
      ),
    },
    {
      header: "Category",
      accessorKey: "categories" as keyof ArtistWithStatus,
      cell: (artist: ArtistWithStatus) => (
        <div className="flex gap-1 flex-wrap">
          {artist.categories.map((cat) => (
            <Badge key={cat} variant="secondary">
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Badge>
          ))}
        </div>
      ),
    },
    {
      header: "Location",
      accessorKey: "location" as keyof ArtistWithStatus,
    },
    {
      header: "Price Range",
      accessorKey: "priceRange" as keyof ArtistWithStatus,
    },
    {
      header: "Status",
      accessorKey: "status" as keyof ArtistWithStatus,
      cell: (artist: ArtistWithStatus) => (
        <Badge variant={
          artist.status === 'approved' 
            ? 'default' 
            : artist.status === 'rejected' 
              ? 'destructive' 
              : 'secondary'
        }>
          {artist.status.charAt(0).toUpperCase() + artist.status.slice(1)}
        </Badge>
      ),
    },
    {
      header: "Actions",
      accessorKey: (artist: ArtistWithStatus) => (
        <div className="flex gap-2">
          {artist.status === 'pending' && (
            <>
              <Button
                size="sm"
                onClick={() => handleAction(artist.id, 'approve')}
              >
                Approve
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => handleAction(artist.id, 'reject')}
              >
                Reject
              </Button>
            </>
          )}
          {artist.status !== 'pending' && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                setArtistsData(prev =>
                  prev.map(a =>
                    a.id === artist.id
                      ? { ...a, status: 'pending' }
                      : a
                  )
                )
              }}
            >
              Reset
            </Button>
          )}
        </div>
      ),
    },
  ]

  return (
    <div className="container py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Artist Submissions</h1>
        <div className="flex gap-2">
          {Object.entries({
            'All': artistsData.length,
            'Pending': artistsData.filter(a => a.status === 'pending').length,
            'Approved': artistsData.filter(a => a.status === 'approved').length,
            'Rejected': artistsData.filter(a => a.status === 'rejected').length,
          }).map(([label, count]) => (
            <Badge key={label} variant="outline" className="text-sm">
              {label}: {count}
            </Badge>
          ))}
        </div>
      </div>

      <DataTable
        data={artistsData}
        columns={columns}
        emptyMessage="No artist submissions found"
      />
    </div>
  )
} 