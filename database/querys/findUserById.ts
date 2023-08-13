import { Connection, RowDataPacket } from 'mysql2/promise';

async function findUserById(id: number, connection: Connection): Promise<User | null> {
  try {
    const [rows] = await connection.query<RowDataPacket[]>(
      'SELECT user_jug, passwordhash_jug FROM MJugadores WHERE id = ?',
      [id]
    );

    if (rows.length === 0) {
      return null; // No se encontró el usuario
    }

    const user: User = {
      id: id,
      username: rows[0].user_jug,
      passwordHash: rows[0].passwordhash_jug,
    };

    return user;
  } catch (error) {
    console.error('Error al buscar usuario por ID:', error);
    throw error;
  }
}

export default findUserById;
