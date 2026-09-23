# Auth Testing Notes (Piece of Mind)

Auth: single admin (founder), JWT Bearer tokens.
- POST /api/auth/login {email, password} -> {token, email, name}
- GET /api/auth/me (Authorization: Bearer <token>)
- POST /api/events, PUT /api/events/{id}, DELETE /api/events/{id} (admin only, Bearer token)
- GET /api/events (public)

Admin credentials are stored in backend/.env (ADMIN_EMAIL, ADMIN_PASSWORD) and mirrored in /app/memory/test_credentials.md.
Frontend admin UI: /admin (token stored in sessionStorage key "pom_admin").

Quick API test:
```
TOKEN=$(curl -s -X POST $API/api/auth/login -H "Content-Type: application/json" -d '{"email":"'$ADMIN_EMAIL'","password":"'$ADMIN_PASSWORD'"}' | python3 -c "import sys,json;print(json.load(sys.stdin)['token'])")
curl -s $API/api/auth/me -H "Authorization: Bearer $TOKEN"
curl -s -X POST $API/api/events -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" -d '{"title":"Test","date":"2026-10-01"}'
```
