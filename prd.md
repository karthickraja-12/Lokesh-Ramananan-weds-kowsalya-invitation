Product Requirement Document (PRD)
AI Wedding Invitation Website — Minimal Luxury Experience
1. Project Overview
Product Name

Eterna Invite (placeholder name)

Product Vision

Build a premium-looking AI-powered wedding invitation website for couples with a minimalist luxury aesthetic, cinematic scrolling experience, smooth animations, and zero backend dependency.

The website should feel:

Elegant
Emotional
Modern
Premium
Smooth and interactive
Mobile-first

The goal is not just displaying invitation details.
The goal is creating an experience.

Most wedding invite websites look cheap because:

Too many colors
Heavy UI
Bad typography
Generic templates
Cluttered layouts
Slow animations

Avoid all of that.

This should feel like:

Apple-level smoothness
Luxury fashion landing page
Cinematic storytelling
Minimal UI with emotional visuals
2. Core Objectives
Primary Goals
Create a visually premium wedding invitation website
Fully frontend-only (NO backend)
Mobile responsive
Smooth aesthetic scroll animations
Elegant typography
Couple-focused storytelling
Fast loading
Deployable for free
3. Tech Stack (Frontend Only)
Purpose	Technology
Framework	Next.js
Styling	Tailwind CSS
Animation	Framer Motion
Scroll Animation	GSAP + ScrollTrigger
Smooth Scroll	Lenis
Fonts	Google Fonts
Hosting	Vercel
Maps	Google Maps Embed
Icons	Lucide React
Music (Optional)	HTML5 Audio
4. No Backend Architecture
IMPORTANT

There should be:

No server
No database
No authentication
No APIs required
No admin panel

Everything must be static.

The invitation data can be stored in:

/data/invitation.json

Example:

{
  "groom": "Lokesh Ramanan K",
  "bride": "Kowsalya J",
  "date": "2026-05-28",
  "venue": "Velu Mahal",
  "address": "Ramalakshmi Nagar, Thadikombu Road...",
  "mapsLink": "https://maps.google.com/..."
}

This reduces:

Cost
Complexity
Security issues
Maintenance

Frankly, using a backend for this type of website is unnecessary unless:

You want RSVP management
Guest analytics
Dynamic invite generation
Payment systems

You currently need none of that.

5. Design System
UI Theme
Minimal Luxury + Romantic Editorial

Visual inspiration:

Luxury perfume brands
Wedding magazines
Pinterest premium wedding cards
Apple product pages
6. Color Palette
Primary Palette
Usage	Color
Background	#F6F1EB
Primary Text	#4A3428
Accent Gold	#C58B5B
Soft Peach	#E8C7B0
Rose Beige	#D9B8A7
Warm White	#FFFDFB
Gradient Suggestions
Hero Gradient
background: linear-gradient(
135deg,
#F6F1EB,
#FFF7F0,
#E8C7B0
);
Elegant Gold Gradient
background: linear-gradient(
90deg,
#C58B5B,
#E5B88A,
#C58B5B
);
7. Typography
Fonts
Heading Font

Use:

Cormorant Garamond
OR
Playfair Display

Elegant serif fonts create premium emotional appeal.

Script Font

Use:

Great Vibes
OR
Allura

Only for:

Couple names
Decorative headings

Do NOT overuse script fonts.
That instantly makes the design look cheap.

Body Font

Use:

Poppins
OR
Inter
8. Website Structure
Page Flow
Loading Screen
↓
Landing Hero Section
↓
Couple Invitation Section
↓
Story/Quote Section
↓
Countdown Section
↓
Venue & Map Section
↓
Gallery Section (Optional)
↓
Thank You / Greeting Section
9. Section Requirements
9.1 Loading Screen
Purpose

Create cinematic anticipation.

Features
Soft fade animation
Couple initials animation
Elegant loading spinner
Background blur transition
Duration

2–3 seconds max.

Do NOT make long loaders.
People hate waiting.

9.2 Landing Hero Section
Features
Fullscreen section
Romantic background image/video
Floating particles/light effects
Smooth parallax scrolling
Elegant fade-in animations
Content
SAVE THE DATE
You are invited to our wedding
Lokesh Ramanan K & Kowsalya J
28 May, 2026
CTA Button
Open Invitation
Animation
Text reveal
Slow zoom background
Scroll indicator animation
9.3 Invitation Section
Layout

Minimal centered layout.

Content
Couple names
Wedding date
Venue
Family invitation message
Animation
Fade-up animation
Stagger text reveal
Glassmorphism card effect
9.4 Countdown Section
Features

Live countdown timer:

Days
Hours
Minutes
Seconds
Design

Luxury card UI with:

Soft shadows
Gradient borders
Blur background
Animation
Number flip animation
Glow pulse effect
9.5 Venue & Map Section
Features
Embedded Google Map
Copy address button
Open in Maps button
Buttons
Copy Address

Copies full address to clipboard.

Open Google Maps

Redirects to location.

Example Address Card
VELU MAHAL
Ramalakshmi Nagar,
Thadikombu Road,
Trichy Bypass,
Dindigul,
Tamil Nadu – 624004
9.6 Scroll Animation System
Mandatory Animations
Use:
GSAP ScrollTrigger
Framer Motion
Animation Types
Animation	Usage
Fade Up	Text reveal
Parallax	Background images
Scale In	Photos
Blur Reveal	Headings
Smooth Pin Scroll	Hero section
Floating Motion	Floral assets
Gradient Shift	Background
Scrolling Experience

Use:

Lenis Smooth Scroll

The website must feel fluid.

Not laggy.

Not overloaded.

Minimal but cinematic.

9.7 Ending Greeting Section
Purpose

Leave emotional impact.

Content Example
Thank you for being part of our special day.

With love,
Lokesh & Kowsalya
Features
Floating hearts/petals
Soft music fade
Final fade-out animation
10. AI Features (Frontend Only)
AI-Generated Invitation Content

Optional feature:

Generate invitation wording using OpenAI API later.

But currently:
DO NOT integrate AI backend.

Instead:

Use static AI-generated content.

Calling it “AI Invitation” mainly refers to:

AI-designed aesthetic
AI-assisted content
AI-enhanced visuals

Not an actual ML product.

Don’t overengineer this.

11. Mobile Responsiveness
Priority

80%+ users will open from mobile.

If mobile UX fails:
The project fails.

Mobile Requirements
One-thumb navigation
Optimized typography
Lightweight animations
Fast image loading
Responsive spacing
No horizontal scrolling
12. Performance Requirements
Target
Metric	Goal
Lighthouse Score	90+
First Load	<2 sec
Mobile Performance	High
Accessibility	AA
Optimization
Use WebP images
Lazy loading
Compress assets
Avoid huge videos
13. Folder Structure
/src
  /components
  /sections
  /data
  /assets
  /animations
  /styles
14. Recommended Components
Components
HeroSection
InvitationCard
CountdownTimer
VenueCard
CopyButton
FloatingFlowers
SmoothScrollProvider
MusicToggle
FooterGreeting
15. Suggested UI Enhancements
Optional Premium Features
Ambient Music

Soft instrumental autoplay toggle.

Floating Floral Elements

Low opacity decorative flowers.

Cinematic Photo Transitions

Slow zoom + blur transitions.

Glassmorphism Cards

Very subtle only.

Heavy glassmorphism ruins elegance.

16. Accessibility
Requirements
Readable contrast
Large touch targets
Keyboard navigation
Reduced motion support
17. Deployment
Recommended Hosting
Best Choice

Vercel

Reasons:

Free
Fast CDN
Easy deployment
Perfect for Next.js
18. Development Timeline
Phase	Duration
UI Design	2 Days
Frontend Setup	1 Day
Animation System	2 Days
Responsive Optimization	1 Day
Testing & Polish	1 Day

Total:

~7 Days
19. Future Scalability (Optional)

You can later add:

RSVP form
Guest analytics
Dynamic invite links
Personalized invites
Admin dashboard
AI-generated themes

But right now:
Keep it static.

A polished static website beats a half-broken full-stack app.

20. Final Product Expectations

The final website should feel:

Premium
Romantic
Smooth
Emotional
Clean
Minimal
Cinematic

Not:

Overanimated
Flashy
Cluttered
Template-looking
Cheap wedding-card style

Minimalism requires restraint.
Most people destroy luxury UI by adding too much.

Your biggest advantage here is:

Clean typography
Strong spacing
Smooth motion
Limited colors
Emotional pacing

That’s what makes premium design work.