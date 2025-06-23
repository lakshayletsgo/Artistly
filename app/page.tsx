import Link from 'next/link'
import { Mic2, Music, Headphones, Speaker } from 'lucide-react'
import { Button } from '@/components/ui/button'
import categories from '@/data/categories.json'
import './globals.css'
const iconMap = {
  microphone: Mic2,
  music: Music,
  headphones: Headphones,
  'mic-2': Speaker,
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Book Amazing Artists for Your Events
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Find and book the perfect performer for your special occasion. From singers to dancers, DJs to speakers.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/artists">
                  Explore Artists
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/onboard">
                  Join as Artist
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Browse by Category
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Discover talented artists across different categories
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {categories.categories.map((category) => {
              const Icon = iconMap[category.icon as keyof typeof iconMap]
              return (
                <Link
                  key={category.id}
                  href={`/artists?category=${category.id}`}
                  className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-primary transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <Icon className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">{category.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {category.count}+ Artists
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    {category.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
