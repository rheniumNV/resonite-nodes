const { PORT } = process.env;

export const config = {
  PORT: PORT ? Number(PORT) : 3000,
};
