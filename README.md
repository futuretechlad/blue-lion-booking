# 🦁 Blue Lion Booking Engine

A complete, production-ready booking platform for restaurants, salons, and appointment-based businesses. Built with Next.js 14, TypeScript, and modern web technologies.

## ✨ Features

### 🎯 Core Functionality
- **Complete Booking System** - Create, manage, and track appointments
- **Customer Management** - Store customer information and booking history
- **Service Management** - Define services with pricing, duration, and requirements
- **Staff Management** - Manage team members and their schedules
- **Multi-tenant Architecture** - Support multiple organizations
- **Real-time Notifications** - Email confirmations and reminders

### 🔐 Security & Authentication
- **JWT-based Authentication** - Secure session management
- **Role-based Access Control** - Admin, Manager, and Staff roles
- **Rate Limiting** - Protection against abuse
- **Input Validation** - Comprehensive data validation
- **Password Hashing** - Secure password storage

### 📊 Business Intelligence
- **Dashboard Analytics** - Key performance metrics
- **Booking Statistics** - Revenue, customer, and booking insights
- **Customer Insights** - Booking history and preferences
- **Staff Performance** - Individual staff metrics

### 🎨 User Experience
- **Modern UI/UX** - Beautiful, responsive design
- **Mobile-first** - Optimized for all devices
- **Real-time Updates** - Live booking status updates
- **Toast Notifications** - User-friendly feedback
- **Loading States** - Smooth user interactions

### 🚀 Technical Excellence
- **TypeScript** - Full type safety
- **Server-side Rendering** - Fast page loads
- **Database Optimization** - Efficient queries and indexes
- **Caching Strategy** - Redis-powered performance
- **Email Integration** - Automated notifications
- **Image Management** - Cloudinary integration

## 🛠 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Headless UI** - Accessible components
- **Heroicons** - Beautiful icons
- **React Hook Form** - Form management
- **React Hot Toast** - Notifications

### Backend
- **Next.js API Routes** - Serverless functions
- **Drizzle ORM** - Type-safe database operations
- **PostgreSQL** - Robust relational database
- **Redis (Upstash)** - Caching and sessions
- **JWT** - Authentication tokens

### Services
- **Supabase** - Database hosting
- **Upstash Redis** - Managed Redis
- **Cloudinary** - Image management
- **Postmark** - Email delivery
- **Vercel** - Deployment platform

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL database (Supabase recommended)
- Redis instance (Upstash recommended)

### 1. Clone and Install
```bash
git clone <repository-url>
cd blue-lion-booking-engine
npm install
```

### 2. Environment Setup
Copy `.env.example` to `.env.local` and fill in your credentials:

```env
# Database
DATABASE_URL=postgresql://postgres:mEPTrn56%34!tY?@db.xslgglnqznotgcmfxvpb.supabase.co:5432/postgres

# Supabase
SUPABASE_URL=https://xslgglnqznotgcmfxvpb.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzbGdnbG5xem5vdGdjbWZ4dnBiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwODcxMjcsImV4cCI6MjA3NDY2MzEyN30.r3GFeXsnYzeBZBkt4JOPWv_Ga28xXLanrL4V8gus-i4

# Redis (Upstash)
UPSTASH_REDIS_REST_URL=https://cunning-rabbit-14151.upstash.io
UPSTASH_REDIS_REST_TOKEN=ATdHAAIncDI3NTNmMDRhYWYzMjI0ZDE3ODBkOTM0YjQ1M2UwNTI4MnAyMTQxNTE

# Cloudinary
CLOUDINARY_CLOUD_NAME=diljrzaun
CLOUDINARY_API_KEY=667362489458165
CLOUDINARY_API_SECRET=fEuQMd2Ki7D1ZyPLv-lx1L0HXFQ

# Email (Postmark)
POSTMARK_API_KEY=60db154e-853c-4426-8101-4a93a1192a0b

# NextAuth
NEXTAUTH_SECRET=your-super-secret-key-here-change-this-in-production
NEXTAUTH_URL=http://localhost:3000
```

### 3. Database Setup
```bash
# Run the database schema
# Execute the SQL in blue_lion_schema.sql in your PostgreSQL database

# Or use Drizzle migrations
npm run db:generate
npm run db:push
```

### 4. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` and login with:
- **Email**: admin@bluelion.com
- **Password**: password
- **Organization**: blue-lion-demo

## 📁 Project Structure

```
blue-lion-booking-engine/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   ├── auth/                 # Authentication endpoints
│   │   ├── bookings/             # Booking management
│   │   ├── services/             # Service management
│   │   ├── staff/                # Staff management
│   │   └── customers/            # Customer management
│   ├── dashboard/                # Dashboard pages
│   │   ├── bookings/             # Booking management UI
│   │   ├── services/             # Service management UI
│   │   ├── staff/                # Staff management UI
│   │   └── customers/            # Customer management UI
│   ├── login/                    # Authentication pages
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/                   # Reusable components
│   ├── layout/                   # Layout components
│   │   ├── Sidebar.tsx           # Navigation sidebar
│   │   └── Header.tsx            # Top header
│   ├── ui/                       # UI components
│   │   └── StatsCard.tsx         # Statistics card
│   └── bookings/                 # Booking components
│       └── NewBookingForm.tsx    # New booking form
├── lib/                          # Utility libraries
│   ├── db/                       # Database configuration
│   │   ├── schema.ts             # Drizzle schema
│   │   └── index.ts              # Database connection
│   ├── auth/                     # Authentication utilities
│   ├── redis/                    # Redis utilities
│   ├── email/                    # Email utilities
│   ├── cloudinary/               # Image utilities
│   └── api/                      # API utilities
├── drizzle/                      # Database migrations
├── public/                       # Static assets
├── blue_lion_schema.sql          # Database schema
├── package.json                  # Dependencies
├── tailwind.config.js            # Tailwind configuration
├── next.config.js                # Next.js configuration
└── README.md                     # This file
```

## 🎯 Key Features Explained

### Authentication System
- JWT-based authentication with secure session management
- Role-based access control (Admin, Manager, Staff)
- Rate limiting to prevent brute force attacks
- Secure password hashing with bcrypt

### Booking Management
- Complete CRUD operations for bookings
- Real-time availability checking
- Automatic conflict detection
- Email confirmations and reminders
- Status tracking (Confirmed, Pending, Completed, Cancelled)

### Service Management
- Flexible service configuration
- Pricing and duration settings
- Deposit requirements
- Advance booking limits
- Buffer time between appointments
- Color coding for visual organization

### Staff Management
- Staff profiles with specialties
- Working hours configuration
- Hourly rates and commission tracking
- Service assignments
- Performance metrics

### Customer Management
- Customer profiles and contact information
- Booking history tracking
- Preferences and notes
- Automatic customer creation from bookings

## 🔧 Configuration

### Database Schema
The application uses a comprehensive PostgreSQL schema with:
- Multi-tenant organization structure
- Optimized indexes for performance
- Referential integrity constraints
- Audit trails for booking changes

### Caching Strategy
Redis is used for:
- Session management
- Rate limiting
- API response caching
- Real-time data synchronization

### Email Templates
Customizable email templates for:
- Booking confirmations
- Appointment reminders
- Cancellation notifications
- Custom organizational branding

## 🚀 Deployment

### Vercel Deployment (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
npm start
```

### Environment Variables for Production
Ensure all environment variables are set in your production environment:
- Database connection strings
- API keys for external services
- JWT secrets (use strong, unique values)
- CORS settings for your domain

## 🧪 Testing

### Running Tests
```bash
npm test
```

### API Testing
Use the included API endpoints:
- `GET /api/bookings` - List bookings
- `POST /api/bookings` - Create booking
- `GET /api/services` - List services
- `POST /api/services` - Create service
- `GET /api/staff` - List staff
- `POST /api/staff` - Create staff member

## 📈 Performance Optimization

### Database Optimization
- Proper indexing on frequently queried columns
- Connection pooling for efficient database usage
- Query optimization with Drizzle ORM

### Caching Strategy
- Redis caching for frequently accessed data
- Browser caching for static assets
- API response caching for improved performance

### Frontend Optimization
- Code splitting with Next.js
- Image optimization with Cloudinary
- Lazy loading for better user experience

## 🔒 Security Best Practices

### Authentication & Authorization
- JWT tokens with proper expiration
- Role-based access control
- Secure password hashing
- Session management with Redis

### Data Protection
- Input validation and sanitization
- SQL injection prevention with ORM
- XSS protection with proper escaping
- CSRF protection with SameSite cookies

### API Security
- Rate limiting to prevent abuse
- Request validation with Zod
- Error handling without information leakage
- HTTPS enforcement in production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Check the documentation in the `/docs` folder
- Review the API documentation

## 🎉 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Drizzle team for the excellent ORM
- All the open-source contributors who made this possible

---

**Built with ❤️ for the Blue Lion Booking Engine**

*A complete booking solution for modern businesses*
