# ============================================
# BACKEND DOCKERFILE — Enterprise Multi-Stage
# Project: TEKSEL Azure CI/CD Lab
# ============================================

# ── Stage 1: Builder ─────────────────────────
FROM node:18-alpine AS builder

# Set working directory inside container
WORKDIR /app

# Copy ONLY package files first (Docker cache optimization)
# If package.json doesn't change, npm install is CACHED
COPY package*.json ./

# Install production dependencies only
RUN npm ci --only=production

# Copy rest of source code
COPY . .

# ── Stage 2: Production Image ─────────────────
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy everything from builder stage
COPY --from=builder /app .

# Expose the backend port
EXPOSE 8080

# Start the application
# server.js is the entry point for bezkoder-api
CMD ["node", "server.js"]