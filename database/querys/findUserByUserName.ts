import { Connection, ResultSetHeader, RowDataPacket } from 'mysql2/promise';

async function findUserByUsername(username: string, connection: Connection): Promise<User | null> {
  try {
    const [rows] = await connection.query<RowDataPacket[]>(
      'SELECT id_jug, passwordhash_jug FROM MJugadores WHERE user_jug = ?',
      [username]
    );

    if (rows.length === 0) {
      return null; // No se encontró el usuario
    }

    const user: User = {
        id: rows[0].id,
        passwordHash: rows[0].passwordhash_jug,
        username: ''
    };

    return user;
  } catch (error) {
    console.error('Error al buscar usuario por nombre de usuario:', error);
    throw error;
  }
}

export default findUserByUsername;
