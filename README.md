#
npx prisma db push 
# watch database
npx prisma studio
# seed data
npx prisma db seed --preview-feature

npx prisma generate
npx prisma generate --schema=src/@app/prisma/schema.prisma