const fs = require('fs')
const path = require('path')

// Create the defaults directory if it doesn't exist
const defaultsDir = path.join(process.cwd(), 'public', 'images', 'defaults')
if (!fs.existsSync(defaultsDir)) {
  fs.mkdirSync(defaultsDir, { recursive: true })
}

// Generate an SVG for each category
const categories = ['artist', 'singer', 'dancer', 'dj', 'speaker']

categories.forEach(category => {
  const svg = `
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#f3f4f6"/>
  <text x="400" y="300" font-family="Arial" font-size="24" fill="#6b7280" text-anchor="middle">
    ${category.charAt(0).toUpperCase() + category.slice(1)} Image
  </text>
  <text x="400" y="340" font-family="Arial" font-size="16" fill="#9ca3af" text-anchor="middle">
    800 x 600
  </text>
</svg>
`
  fs.writeFileSync(
    path.join(defaultsDir, `default-${category}.svg`),
    svg.trim()
  )
})

console.log('Default images generated in public/images/defaults/') 