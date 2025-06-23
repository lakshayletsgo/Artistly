# Artistly - Artist Booking Platform

Artistly is a modern web platform that connects event organizers with talented performers across various categories. Built with Next.js 13+ and featuring a sleek UI powered by Tailwind CSS and ShadcnUI.

## 🌟 Features

- **Artist Discovery**
  - Browse artists by category
  - Advanced filtering system
  - Location-based search
  - Price range filtering

- **Artist Profiles**
  - Professional portfolios
  - Category-specific information
  - Pricing transparency
  - Rating and review system

- **Admin Dashboard**
  - Artist submission management
  - Approval workflow
  - Performance analytics
  - Content moderation

## 🔧 Tech Stack

- **Frontend Framework**: Next.js 13+ (App Router)
- **Styling**: Tailwind CSS + ShadcnUI
- **State Management**: React Hooks
- **Form Handling**: React Hook Form + Zod
- **Data Storage**: Static JSON (ready for API integration)

## 📋 Project Structure

```plaintext
artistly/
│
├── app/
│   ├── artists/          # Artist listing page
│   ├── dashboard/        # Admin dashboard
│   ├── onboard/          # Artist onboarding
│   └── layout.tsx        # Root layout
│
├── components/
│   ├── ui/              # UI components (buttons, cards, etc.)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── ArtistCard.tsx   # Artist card component
│   ├── Header.tsx       # Site header
│   └── Footer.tsx       # Site footer
│
├── data/
│   ├── artists.json     # Artist information
│   └── categories.json  # Category data
│
├── lib/
│   ├── utils.ts         # Utility functions
│   └── constants.ts     # Constants and defaults
│
├── public/
│   └── images/
│       └── defaults/    # Default images
│
└── styles/
    └── globals.css      # Global styles
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/artistly.git
   cd artistly
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)**

## 📱 Key Pages

### Home Page
- Hero section with search
- Featured artists
- Category browsing
- Quick navigation

### Artist Listing (/artists)
- Advanced filtering
- Category selection
- Location search
- Price range filter
- Responsive grid layout

### Artist Onboarding (/onboard)
- Multi-step form
- Image upload
- Category selection
- Pricing setup
- Bio and details

### Admin Dashboard (/dashboard)
- Artist submission overview
- Approval/Rejection workflow
- Status tracking
- Performance metrics

## 🔄 Workflow

1. **Artist Submission**
   - Artist fills onboarding form
   - Uploads required documents
   - Sets pricing and availability

2. **Admin Review**
   - Dashboard shows new submissions
   - Admins review details
   - Approve or reject with feedback

3. **Public Listing**
   - Approved artists appear in search
   - Users can filter and browse
   - Contact for bookings

## 💻 Admin Dashboard Features

The admin dashboard provides a comprehensive interface for managing artist submissions:

- **Submission Management**
  - View all submissions
  - Filter by status
  - Bulk actions
  - Quick review process

- **Data Display**
  - Artist name and category
  - Location information
  - Pricing details
  - Action buttons

- **Status Tracking**
  - Pending submissions
  - Approved artists
  - Rejected submissions
  - Analytics overview

## 🎨 Customization

### Theme Configuration
Modify `tailwind.config.js` for:
- Color schemes
- Typography
- Spacing
- Breakpoints

### Component Styling
Update components in `components/ui/` for:
- Button styles
- Card layouts
- Form elements
- Modal designs

## 🔒 Environment Setup

Create a `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Add other environment variables as needed
```

## 📦 Dependencies

- **Core**
  - next: 13.x
  - react: 18.x
  - tailwindcss: 3.x

- **UI Components**
  - @radix-ui/react-*
  - @shadcn/ui
  - lucide-react

- **Forms & Validation**
  - react-hook-form
  - zod


## 🙏 Acknowledgments

- UI Components by [shadcn/ui](https://ui.shadcn.com)
- Icons by [Lucide](https://lucide.dev)
- Built with [Next.js](https://nextjs.org)