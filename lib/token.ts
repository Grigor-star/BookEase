import { getVerificationTokenByEmail } from "@/data/verification-token";
import { v4 as uuid4 } from "uuid";
import { db } from "@/lib/db";

export const generateVerificationToken = async (email: string) => {
  const token = uuid4();
  const expires = new Date(new Date().getTime() + 3600 * 1000); // Means 1 hour

  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const verificationToken = await db.verificationToken.create({
    data: { email, expires, token },
  });

  return verificationToken;
};
