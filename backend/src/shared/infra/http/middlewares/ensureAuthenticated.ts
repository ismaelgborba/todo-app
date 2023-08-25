import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const auth_header = request.headers.authorization;

  if (!auth_header) {
    throw new Error ("Token missing.");
  }

  const [_, token] = auth_header.split(" ");

  try {
    const { sub: user_id } = verify(token, "welcome-jungle") as IPayload;

    request.user = {
      id: user_id
    }

    next();
  } catch {
    throw new Error("Invalid token.");
  }
}