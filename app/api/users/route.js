// app/api/users/route.js
import pool from '../../../lib/db';

export async function GET() {
  try {
    const [rows] = await pool.execute('SELECT * FROM collectors');
    return new Response(JSON.stringify(rows), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}