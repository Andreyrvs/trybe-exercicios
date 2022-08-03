/* eslint-disable no-console */
import app from './app';

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
