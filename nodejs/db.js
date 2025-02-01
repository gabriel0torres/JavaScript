import postgres from 'postgres'
import 'dotenv/config'

const { PGUSER, PGHOST, PGPASSWORD, PGDATABASE } = process.env
const url = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`
export const sql = postgres(url)