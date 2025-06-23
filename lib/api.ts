// Simulated GraphQL API responses
interface GraphQLResponse<T> {
  data: T
  errors?: Array<{ message: string }>
}

// Types for our content
interface PageContent {
  title: string
  content: string
  lastUpdated: string
}

const SIMULATED_DELAY = 500 // ms

// Simulated database
const pageData = {
  about: {
    title: "About Artistly",
    content: `
# About Artistly

Artistly is a premier platform connecting talented performers with event organizers and venues. Our mission is to make live entertainment booking seamless and accessible.

## Our Vision

We believe in creating opportunities for artists while helping event organizers find the perfect talent for their events. Our platform serves as a bridge between creativity and opportunity.

## What We Offer

- **For Artists**: A platform to showcase talents and connect with potential clients
- **For Organizers**: Easy access to a curated list of professional performers
- **For Venues**: Tools to manage bookings and discover new talent

## Our Team

Founded by industry professionals with years of experience in event management and artist representation, Artistly combines technical innovation with deep industry knowledge.
    `,
    lastUpdated: "2025-06-23"
  },
  privacy: {
    title: "Privacy Policy",
    content: `
# Privacy Policy

Last updated: June 23, 2025

## 1. Information We Collect

We collect information that you provide directly to us, including:
- Personal information (name, email, phone number)
- Professional information (artist profiles, portfolio)
- Payment information (processed securely through our payment providers)

## 2. How We Use Your Information

We use the information we collect to:
- Provide and maintain our services
- Process your transactions
- Send you important updates
- Improve our platform

## 3. Information Sharing

We do not sell your personal information. We share your information only:
- With your consent
- With service providers
- To comply with legal obligations

## 4. Data Security

We implement appropriate technical and organizational measures to protect your data.

## 5. Your Rights

You have the right to:
- Access your data
- Correct your data
- Delete your data
- Object to processing
    `,
    lastUpdated: "2025-06-23"
  },
  terms: {
    title: "Terms of Service",
    content: `
# Terms of Service

Last updated: June 23, 2025

## 1. Acceptance of Terms

By accessing and using Artistly, you agree to be bound by these Terms of Service.

## 2. User Accounts

- You must provide accurate information when creating an account
- You are responsible for maintaining account security
- You must be at least 18 years old to use our services

## 3. Artist Services

Artists agree to:
- Provide accurate information about their services
- Maintain professional conduct
- Honor bookings and commitments
- Comply with our platform policies

## 4. Booking Terms

- All bookings are subject to artist availability
- Cancellation policies apply as specified
- Payment terms must be followed

## 5. Platform Fees

- We charge platform fees for successful bookings
- Payment processing fees may apply
- All fees are clearly disclosed before booking

## 6. Dispute Resolution

We provide a process for resolving disputes between artists and clients.
    `,
    lastUpdated: "2025-06-23"
  }
}

// Simulated GraphQL queries
export async function getPageContent(page: 'about' | 'privacy' | 'terms'): Promise<GraphQLResponse<PageContent>> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, SIMULATED_DELAY))

  // Simulate GraphQL response
  return {
    data: pageData[page]
  }
}

// Error simulation for testing
export async function simulateError(): Promise<GraphQLResponse<never>> {
  await new Promise(resolve => setTimeout(resolve, SIMULATED_DELAY))
  return {
    data: null as never,
    errors: [{ message: "Simulated error response" }]
  }
} 