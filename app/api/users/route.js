import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function GET() {
    try {
        // Create a connection to MySQL
        const connection = await mysql.createConnection({
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
        });

        // Query the users table
        const [rows] = await connection.execute('SELECT * FROM collectors');

        // Close the connection
        await connection.end();

        // Return the data as JSON
        return NextResponse.json(rows);
    } catch (error) {
        console.error('Error connecting to MySQL:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}