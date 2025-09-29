# 🚀 Blue Lion Booking Engine - Setup Instructions

## Complete Setup Guide

### Step 1: Project Setup
```bash
# Clone the repository
git clone <your-repo-url>
cd blue-lion-booking-engine

# Install dependencies
npm install
```

### Step 2: Environment Configuration
1. Copy `.env.example` to `.env.local`
2. Fill in all the environment variables with your actual credentials

### Step 3: Database Setup
1. **Using Supabase (Recommended)**:
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Go to SQL Editor
   - Copy and paste the contents of `blue_lion_schema.sql`
   - Execute the SQL to create all tables and sample data

2. **Using Local PostgreSQL**:
   ```bash
   # Connect to your PostgreSQL database
   psql -U postgres -d your_database_name

   # Execute the schema file
   \i blue_lion_schema.sql
   ```

### Step 4: Service Configuration

#### Supabase Setup
- ✅ Already configured with your credentials
- Database URL: `postgresql://postgres:mEPTrn56%34!tY?@db.xslgglnqznotgcmfxvpb.supabase.co:5432/postgres`
- Anon Key: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

#### Upstash Redis Setup
- ✅ Already configured with your credentials
- URL: `https://cunning-rabbit-14151.upstash.io`
- Token: `ATdHAAIncDI3NTNmMDRhYWYzMjI0ZDE3ODBkOTM0YjQ1M2UwNTI4MnAyMTQxNTE`

#### Cloudinary Setup
- ✅ Already configured with your credentials
- Cloud Name: `diljrzaun`
- API Key: `667362489458165`

#### Postmark Setup
- ✅ Already configured with your credentials
- API Key: `60db154e-853c-4426-8101-4a93a1192a0b`

### Step 5: Start Development
```bash
# Start the development server
npm run dev
```

### Step 6: Access the Application
1. Open `http://localhost:3000`
2. You'll be redirected to the login page
3. Use these demo credentials:
   - **Email**: `admin@bluelion.com`
   - **Password**: `password`
   - **Organization**: `blue-lion-demo`

### Step 7: Explore Features
After logging in, you can:
- View the dashboard with sample data
- Manage bookings, services, and staff
- Create new bookings
- Customize services and pricing
- Add team members

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Generate database migrations
npm run db:generate

# Push database changes
npm run db:push

# Open Drizzle Studio (database GUI)
npm run db:studio
```

## 📊 Sample Data Included

The schema includes sample data for:
- **Organization**: Blue Lion Demo Restaurant
- **Services**: Dinner Reservation, Private Dining, Wine Tasting, Chef Table
- **Staff**: Sarah Johnson, Michael Chen, Emma Rodriguez
- **Working Hours**: Monday-Sunday 5:00 PM - 11:00 PM
- **Email Templates**: Confirmation and reminder templates

## 🎯 Next Steps

1. **Customize Your Organization**:
   - Update organization details in the database
   - Add your logo and branding
   - Configure your services and pricing

2. **Add Your Team**:
   - Create staff profiles
   - Set working hours
   - Assign services to staff members

3. **Configure Email Templates**:
   - Customize email content
   - Add your branding
   - Test email delivery

4. **Set Up Production**:
   - Deploy to Vercel or your preferred platform
   - Configure production environment variables
   - Set up domain and SSL

## 🚨 Important Notes

- **Security**: Change the `NEXTAUTH_SECRET` in production
- **Database**: The sample data is for demonstration only
- **Email**: Test email functionality with real addresses
- **Payments**: Stripe integration is prepared but needs configuration

## 🆘 Troubleshooting

### Common Issues

1. **Database Connection Error**:
   - Verify your `DATABASE_URL` is correct
   - Check if your database is accessible
   - Ensure the schema has been executed

2. **Redis Connection Error**:
   - Verify Upstash Redis credentials
   - Check if the Redis instance is active

3. **Email Not Sending**:
   - Verify Postmark API key
   - Check if sender email is verified

4. **Build Errors**:
   - Clear `.next` folder and rebuild
   - Check for TypeScript errors
   - Verify all dependencies are installed

### Getting Help

If you encounter issues:
1. Check the browser console for errors
2. Review the server logs
3. Verify all environment variables are set
4. Test API endpoints individually

## 🎉 Success!

If everything is working correctly, you should see:
- ✅ Login page loads without errors
- ✅ Successful authentication with demo credentials
- ✅ Dashboard displays with sample data
- ✅ All navigation links work
- ✅ Forms submit successfully
- ✅ Email notifications are sent

**You're now ready to customize the Blue Lion Booking Engine for your business!**
