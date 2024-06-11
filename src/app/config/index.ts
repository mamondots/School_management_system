import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_round: process.env.BCRYPT_SALT_ROUNEDE,
  defualt_password: process.env.DEFUALT_PASSWORD,
  jwt_access_token: process.env.JWT_ACCESS_SECRET,
};
