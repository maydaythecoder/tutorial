# NestJS Tutorial Application

A full-stack NestJS application with PostgreSQL database, featuring user authentication and bookmark management.

## 🚀 Quick Start with Docker

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) (v20.10+)
- [Docker Compose](https://docs.docker.com/compose/install/) (v2.0+)
- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 1. Clone and Setup

```bash
git clone https://github.com/maydaythecoder/tutorial.git
cd tutorial
```

### 2. Environment Configuration

Create a `.env` file in the root directory:

```bash
# Database Configuration
DATABASE_URL="postgresql://postgres:123@localhost:51213/nest"

# JWT Configuration (generate a secure secret)
JWT_SECRET="your-super-secret-jwt-key-here"
JWT_EXPIRES_IN="15m"

# Application Configuration
PORT=3000
NODE_ENV=development
```

**Security Note**: For production, use strong, randomly generated secrets and store them securely.

### 3. Start Database with Docker

```bash
# Start PostgreSQL database
docker-compose up -d

# Verify database is running
docker-compose ps

# Check database logs
docker-compose logs dev-db
```

### 4. Database Setup

```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# (Optional) Seed database with sample data
npx prisma db seed
```

### 5. Start Application

```bash
# Development mode with hot reload
npm run start:dev

# Or production mode
npm run start:prod
```

Your API will be available at `http://localhost:3000`

## 🐳 Docker Services

### Database Service

- **PostgreSQL 13** running on port `51213`
- **Database**: `nest`
- **Username**: `postgres`
- **Password**: `123`
- **Schema**: `public`

### Port Mappings

- **Application**: `3000` (NestJS)
- **Database**: `51213` (PostgreSQL)

## 📊 Database Management

### Prisma Commands

```bash
# View database in Prisma Studio
npx prisma studio

# Reset database (⚠️ Destructive)
npx prisma db push --force-reset

# Generate migrations
npx prisma migrate dev --name <migration-name>

# Deploy migrations
npx prisma migrate deploy
```

### Database Connection

```bash
# Connect directly to PostgreSQL
docker exec -it tutorial-dev-db-1 psql -U postgres -d nest

# View tables
\dt

# Exit
\q
```

## 🔧 Development Workflow

### 1. Code Changes

- Edit files in `src/` directory
- Application auto-reloads in development mode

### 2. Database Schema Changes

```bash
# Modify prisma/schema.prisma
# Then update database:
npx prisma db push
npx prisma generate
```

### 3. Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## 🚨 Troubleshooting

### Database Connection Issues

```bash
# Check if database is running
docker-compose ps

# Restart database
docker-compose restart dev-db

# View database logs
docker-compose logs dev-db
```

### Port Conflicts

If port `51213` is already in use:

```bash
# Find process using the port
lsof -i :51213

# Kill the process
kill -9 <PID>

# Or change port in docker-compose.yml
```

### Prisma Issues

```bash
# Clear Prisma cache
npx prisma generate --force

# Reset database
npx prisma db push --force-reset
```

## 🛡️ Security Considerations

### Development Environment

- Database credentials are hardcoded for simplicity
- JWT secret should be changed from default
- Consider using Docker secrets for production

### Production Deployment

- Use environment variables for all secrets
- Implement proper CORS policies
- Enable HTTPS/TLS
- Use strong database passwords
- Implement rate limiting

## 📄 License

Inshallah