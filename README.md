# 🚀 Pokémon

A modern, responsive Pokémon application built with React 19, TypeScript, and TanStack React Query. Explore the complete Pokédex with two different list views: pagination and infinite scroll.

## 🌐 Live Demo

**[🔗 View Live Application](https://pokemon-peach-tau.vercel.app)**

Experience the app with different views:

- [📄 Pagination View](https://pokemon-peach-tau.vercel.app/pagination)
- [🔄 Load More View](https://pokemon-peach-tau.vercel.app/load-more)
- [🔍 Pokemon Detail Example](https://pokemon-peach-tau.vercel.app/pokemon/1)

## ✨ Features

- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🔄 **Two List Views**:
  - **Pagination** - Traditional page-based navigation
  - **Load More** - Infinite scroll with load more button
- 🎯 **Detailed Pokémon Pages** - Complete stats, abilities, and descriptions
- ⚡ **Performance Optimized** - Efficient caching with TanStack React Query
- 🎨 **Modern UI** - Built with Tailwind CSS and shadcn/ui components
- 🛡️ **Error Handling** - Graceful error boundaries and retry mechanisms
- 🔧 **Type Safe** - Full TypeScript implementation

## 🧪 Tech Stack

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tooling and dev server
- **TanStack React Query v5** - Server state management and caching
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **Axios** - HTTP client for API requests
- **react-error-boundary** - Error boundary components
- **Lucide React** - Beautiful icons

## 🏗️ Project Structure

```
src/
├── features/                    # Feature-based organization
│   ├── pokemonList/
│   │   ├── components/         # PokemonCard, PaginationControls, LoadMoreButton
│   │   ├── hooks/              # usePokemonList, usePokemonInfinite
│   │   ├── pages/              # PaginationList, LoadMoreList
│   │   └── types.ts           # Pokemon list related types
│   └── pokemonDetail/
│       ├── components/         # PokemonStats
│       ├── hooks/              # usePokemon, usePokemonWithSpecies
│       ├── pages/              # PokemonDetail
│       └── types.ts           # Pokemon detail related types
├── shared/
│   ├── components/             # ErrorState, LoadingSkeleton, EmptyState
│   ├── ui/                     # shadcn/ui components (Button, Card, Badge)
│   ├── api/                    # Axios client configuration
│   ├── config/                 # React Query client setup
│   └── lib/                    # Utility functions (cn)
├── routes/                     # Router configuration
└── styles/                     # Global CSS with Tailwind
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AhmedMohsen600/Pokemon.git
   cd Pokemon
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 API Integration

The application uses the [PokéAPI](https://pokeapi.co/) - a RESTful API for Pokémon data:

- **List Endpoint**: `GET /pokemon?limit={limit}&offset={offset}`
- **Detail Endpoint**: `GET /pokemon/{id}`
- **Species Endpoint**: `GET /pokemon-species/{id}`

### Query Keys

- `['pokemon', 'list', { page, limit }]` - Paginated list
- `['pokemon', 'infinite', { limit }]` - Infinite scroll list
- `['pokemon', 'detail', id]` - Pokemon details
- `['pokemon', 'species', id]` - Pokemon species info

## 🎨 Design System

### Color Scheme

The app uses a modern, accessible color palette with CSS custom properties for theming:

- Primary: Blue (`#1d4ed8`)
- Secondary: Gray (`#6b7280`)
- Success: Green (`#10b981`)
- Warning: Yellow (`#f59e0b`)
- Error: Red (`#ef4444`)

### Pokemon Type Colors

Each Pokémon type has its own distinct color:

- Fire: Red (`#ef4444`)
- Water: Blue (`#3b82f6`)
- Grass: Green (`#10b981`)
- Electric: Yellow (`#fbbf24`)
- And more...

## 📱 Routes

- `/` - Redirects to pagination view
- `/pagination` - Paginated Pokémon list
- `/load-more` - Infinite scroll Pokémon list
- `/pokemon/:id` - Detailed Pokémon view

## 🛠️ Key Features Implementation

### Caching Strategy

- **Stale Time**: 5 minutes for lists, 10 minutes for details
- **Cache Time**: 10 minutes with garbage collection
- **Retry Logic**: Smart retry with exponential backoff
- **Error Handling**: 404 detection and appropriate fallbacks

### Performance Optimizations

- Lazy loading of Pokemon images
- Skeleton loading states
- Optimized re-renders with React Query
- Responsive image sizing
- Efficient pagination and infinite scroll

### Error Handling

- Application-level error boundaries
- Network error recovery
- 404 Pokemon detection
- Graceful fallbacks with retry options

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**

   ```bash
   npm install -g vercel
   vercel
   ```

2. **Or deploy via Git**
   - Push to GitHub
   - Import project in Vercel dashboard
   - Deploy automatically

### Other Platforms

The app can be deployed to any static hosting service:

- **Netlify**: `npm run build` → deploy `dist/` folder
- **GitHub Pages**: Use GitHub Actions with build step
- **AWS S3**: Upload `dist/` folder to S3 bucket

## 🎯 Future Enhancements

- [ ] Search functionality
- [ ] Favorite Pokémon
- [ ] Dark mode toggle
- [ ] Pokemon comparison tool
- [ ] Offline support with service workers
- [ ] Pokemon move details
- [ ] Team builder feature

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [PokéAPI](https://pokeapi.co/) for the comprehensive Pokémon data
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [TanStack Query](https://tanstack.com/query) for excellent server state management

---

Built with ❤️ by Ahmed using modern React patterns and best practices.
