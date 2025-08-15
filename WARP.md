# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a NestJS tutorial application demonstrating user authentication and bookmark management with PostgreSQL. The application follows a modular architecture with separate modules for authentication, user management, and bookmarks.

## Architecture & Structure

### Core Architecture

- **Framework**: NestJS (Node.js framework with TypeScript)
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT-based (configuration in progress)
- **Structure**: Module-based architecture with controllers, services, and DTOs

### Module Organization

- `src/Auth/` - Authentication module (signup/signin functionality)
- `src/user/` - User management module
- `src/bookmark/` - Bookmark CRUD operations
- `prisma/` - Database schema and migrations
- `test/` - E2E and unit test files

### Database Schema

The Prisma schema defines two main entities:

- **User**: Core user model with email, hash, and optional profile fields
- **Bookmark**: User-owned bookmarks with title, description, and link
- Relationships: One-to-many (User → Bookmarks)

## Essential Development Commands

### Initial Setup

```bash
# Install dependencies
npm install

# Setup environment (create .env file first)
cp .env.example .env  # Edit with your configuration

# Start database
docker-compose up -d

# Setup database schema
npx prisma generate
npx prisma db push
```

### Development Workflow

```bash
# Development with hot reload
npm run start:dev

# Build for production
npm run build

# Production start
npm run start:prod

# Debug mode
npm run start:debug
```

### Database Operations

```bash
# Prisma Studio (database GUI)
npx prisma studio

# Generate Prisma client after schema changes
npx prisma generate

# Push schema changes to database
npx prisma db push

# Create and apply migrations
npx prisma migrate dev --name <migration-name>

# Reset database (destructive)
npx prisma db push --force-reset
```

### Testing

```bash
# Run unit tests
npm run test

# Watch mode for tests
npm run test:watch

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov

# Debug tests
npm run test:debug
```

### Code Quality

```bash
# Lint and auto-fix
npm run lint

# Format code with Prettier
npm run format
```

### Docker Operations

```bash
# Start PostgreSQL database
docker-compose up -d

# Check service status
docker-compose ps

# View database logs
docker-compose logs dev-db

# Connect to PostgreSQL directly
docker exec -it tutorial-dev-db-1 psql -U postgres -d nest

# Restart database service
docker-compose restart dev-db
```

## Environment Configuration

Required `.env` variables:

- `DATABASE_URL` - PostgreSQL connection string (uses port 51213)
- `JWT_SECRET` - JWT signing secret
- `JWT_EXPIRES_IN` - JWT expiration time
- `PORT` - Application port (default: 3000)
- `NODE_ENV` - Environment (development/production)

## Development Notes

### Database Connection

- PostgreSQL runs on port **51213** (not standard 5432)
- Database name: `nest`
- Default credentials: postgres/123 (development only)

### Code Style

- Uses Prettier with single quotes and trailing commas
- ESLint configured with TypeScript rules
- Some TypeScript strict checks disabled for tutorial purposes

### Module Pattern

When creating new features:

1. Generate module: `nest generate module <name>`
2. Generate controller: `nest generate controller <name>`
3. Generate service: `nest generate service <name>`
4. Register module in `app.module.ts`

### Testing Strategy

- Unit tests: `*.spec.ts` files alongside source
- E2E tests: `test/` directory with `*.e2e-spec.ts`
- Jest configuration optimized for NestJS

## Common Troubleshooting

### Port Conflicts

If port 51213 is in use:

```bash
# Find process using port
lsof -i :51213
# Kill process or change port in docker-compose.yml
```

### Prisma Issues

```bash
# Clear Prisma cache
npx prisma generate --force
# Reset database if needed
npx prisma db push --force-reset
```

### Database Connection Problems

```bash
# Verify database is running
docker-compose ps
# Check logs
docker-compose logs dev-db
```
