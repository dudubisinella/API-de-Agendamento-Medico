import express from 'express';
import routes from './routes/routes';

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log(`Server running on port ${3333}`));

export default app;
import serverless from 'serverless-http';

const expressApp = app;
export const handler = serverless(expressApp);



