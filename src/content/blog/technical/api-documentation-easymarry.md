---
title: "API Documentation for EasyMarry"
excerpt: "Detailed documentation for the EasyMarry API, including endpoints, request parameters, and response formats, to help developers integrate with our platform."
date: "2023-10-18"
author:
  name: "David Kumar"
  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
category: "technical"
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop"
readTime: "10 min read"
featured: false
tags: ["API", "Documentation", "EasyMarry", "Integration"]
---

Welcome to the EasyMarry API documentation. This guide provides comprehensive information for developers integrating with our matrimonial platform.

## Getting Started

### Base URL
```
https://api.easymarry.com/v1
```

### Authentication

All API requests require authentication using API keys:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.easymarry.com/v1/profiles
```

### Rate Limiting

- Free tier: 1,000 requests/day
- Pro tier: 10,000 requests/day
- Enterprise: Custom limits

## Core Endpoints

### User Profiles

#### GET /profiles
Retrieve user profiles with optional filters.

**Query Parameters:**
- `age_min` (integer): Minimum age
- `age_max` (integer): Maximum age
- `religion` (string): Filter by religion
- `location` (string): Filter by location
- `page` (integer): Page number
- `limit` (integer): Results per page (max 100)

**Response:**
```json
{
  "data": [
    {
      "id": "123",
      "name": "John Doe",
      "age": 28,
      "religion": "Hindu",
      "location": "Mumbai",
      "verified": true
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150
  }
}
```

#### POST /profiles
Create a new user profile.

**Request Body:**
```json
{
  "name": "Jane Smith",
  "age": 26,
  "religion": "Christian",
  "location": "Delhi",
  "bio": "Software engineer...",
  "preferences": {
    "age_range": [25, 32],
    "religion": ["Christian", "Catholic"]
  }
}
```

### Matching Algorithm

#### POST /matches
Get compatible matches for a user.

**Request Body:**
```json
{
  "user_id": "123",
  "filters": {
    "compatibility_score_min": 70,
    "max_results": 20
  }
}
```

### Messaging

#### POST /messages
Send a message to another user.

**Request Body:**
```json
{
  "sender_id": "123",
  "recipient_id": "456",
  "message": "Hello, I'd like to connect..."
}
```

## Webhooks

Configure webhooks to receive real-time updates:

**Events:**
- `profile.created`
- `match.found`
- `message.received`
- `profile.verified`

**Webhook Payload:**
```json
{
  "event": "match.found",
  "timestamp": "2023-10-18T10:30:00Z",
  "data": {
    "user_id": "123",
    "match_id": "456",
    "compatibility_score": 85
  }
}
```

## Error Handling

Standard HTTP status codes:
- `200` - Success
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `429` - Rate Limit Exceeded
- `500` - Server Error

## SDKs

Official SDKs available for:
- JavaScript/Node.js
- Python
- Java
- PHP
- Ruby

## Support

For technical support, contact: api-support@easymarry.com
