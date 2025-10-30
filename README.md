# Brian Kariu's Personal Site

A modern blog and portfolio website built with Astro, featuring a clean design, dark mode support, and content management through TinaCMS.

## Features

- **Dual Interface**: Blog section for articles and a portfolio showcase for projects
- **Content Management**: TinaCMS integration for easy content editing
- **Search Functionality**: Full-text search powered by Pagefind
- **Dark Mode**: Theme switching with system preference detection
- **Performance**: Optimized with Vercel Analytics and Speed Insights
- **Responsive Design**: TailwindCSS-based styling with mobile-first approach
- **Type-Safe**: Strict TypeScript with Zod schema validation for content
- **SEO Optimized**: Sitemap generation, RSS feed, and proper meta tags

## Tech Stack

- **Framework**: [Astro](https://astro.build) with React integration
- **Styling**: TailwindCSS with custom theme
- **Content**: MDX with content collections
- **CMS**: TinaCMS
- **Search**: Pagefind
- **UI Components**: Radix UI, Framer Motion
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (see `.nvmrc` for version)
- pnpm package manager

### Installation

Clone the repository:

```bash
git clone git@github.com:Brian-Kariu/blog.git
cd blog
```

Install dependencies:

```bash
pnpm install
```

### Development

Start the development server with TinaCMS:

```bash
pnpm dev
```

Or start without TinaCMS:

```bash
pnpm start
```

The site will be available at `http://localhost:4321`

### Building

Build for production:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## Project Structure

```
├── src/
│   ├── components/       # Astro and React components
│   │   ├── blog/        # Blog-specific components
│   │   └── portfolio/   # Portfolio-specific components
│   ├── content/         # Content collections
│   │   ├── blog/        # Blog posts (MDX)
│   │   └── projects/    # Portfolio projects
│   ├── data/            # Configuration files
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   ├── styles/          # Global styles
│   └── utils/           # Utility functions
├── public/              # Static assets
└── astro.config.mjs     # Astro configuration
```

## Content Management

### Blog Posts

Create new blog posts in `src/content/blog/` as `.md` or `.mdx` files with the following frontmatter:

```yaml
---
title: 'Post Title'
description: 'Post description'
pubDate: '2024-01-01'
heroImage: ./path/to/image.jpg
category: 'Category Name'
tags: ['tag1', 'tag2']
draft: false
---
```

### Projects

Add projects in `src/data/data.json` with:

```yaml
---
title: 'Project Name'
category: 'Category'
description: 'Project description'
tags: ['tag1', 'tag2']
experience: [{ 'company': 'company name', 'role': 'engineer' }]
link: 'https://project-url.com'
repo: 'https://github.com/user/repo'
inProgress: false
---
```

## Configuration

Site settings can be modified in `src/data/site.config.ts`:

- Site metadata (title, description, author)
- Language and locale settings
- Pagination size
- Social sharing messages

## Code Quality

Lint code:

```bash
pnpm lint
```

Format code:

```bash
pnpm format
```

Check formatting:

```bash
pnpm format:check
```

## Recommended VS Code Extensions

- Astro
- Tailwind CSS IntelliSense
- Prettier
- ESLint

## License

GPL-3.0-only

## Author

**Brian Kariu**

- GitHub: [@Brian-Kariu](https://github.com/Brian-Kariu)
- Website: [brian-kariu.github.io](https://Brian-Kariu.github.io)
