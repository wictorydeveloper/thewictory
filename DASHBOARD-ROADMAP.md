# The Wictory Client App / Team Dashboard Roadmap

## MVP Included In This Repo

- `/dashboard` internal team/admin dashboard prototype
- `/client-app` client mobile app prototype
- Client status table: Active, Hold, Payment Due
- Billing health cards
- Excel upload interface
- SEO ranking comparison graph
- Client app payment alert
- Client app posts, blogs, ranking and offers sections
- WhatsApp and hotline CTAs

## Recommended Production Architecture

Authentication:

- JWT access tokens
- Refresh token rotation
- Role-based access control: Admin, Team, Client

Data:

- PostgreSQL for clients, invoices, reports, users and audit logs
- S3 or Google Cloud Storage for Excel files and report exports
- AES-256 encryption for sensitive files and client details

Billing Flow:

1. Billing software sends `Payment_Due`, `Paid`, or `Plan_Expiring` event.
2. Backend validates event signature.
3. Client project status updates automatically.
4. Client app displays payment banner.
5. Firebase Cloud Messaging sends push notification.

Team Flow:

1. Team uploads Excel report.
2. Backend parses previous and current month ranking data.
3. System generates improved/declined keyword insights.
4. Client sees simplified graph and summary.

Security:

- Signed API tunnel between billing software and app backend
- Audit logs for project hold, payment status changes and file access
- Admin-only project hold control
- Encrypted backups
- Least-privilege cloud IAM policies

Next Build Phase:

- Add backend API routes
- Add database schema
- Add login screens
- Add Excel parser
- Add real charts with Recharts
- Add mobile app in Expo when dashboard logic is approved
