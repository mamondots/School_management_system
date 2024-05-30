//-----FIRST MODUL START ---

// import express, { Application, Request, Response } from 'express';
// const app: Application = express();
// import cors from 'cors';
// import { StudentRoutes } from './app/modules/student/student.route';

// //parse

// app.use(express.json());
// app.use(cors());

// // application routes
// app.use('/api/students', StudentRoutes);

// app.get('/', (req: Request, res: Response) => {
//   res.send('This is PH Management server site');
// });

// export default app;

//----FIRST MODUL END ----

//---second modul start

// import express, { Application, Request, Response } from 'express';
// const app: Application = express();
// import cors from 'cors';
// import { StudentRoutes } from './app/modules/student/student.route';

// //parse

// app.use(express.json());
// app.use(cors());

// // application routes
// app.use('/api/students', StudentRoutes);

// app.get('/', (req: Request, res: Response) => {
//   res.send('This is PH Management server site');
// });

// export default app;

//---second modul end----

//--third modul start ---

// import express, { Application, NextFunction, Request, Response } from 'express';
// const app: Application = express();
// import cors from 'cors';
// import globalErrHandler from './app/middlewear/golballErrorHandler';
// import notFoundRoute from './app/middlewear/notFoundRoute';
// import rounter from './app/routes';

// //parse

// app.use(express.json());
// app.use(cors());

// // application routes
// // app.use('/api/students', StudentRoutes);
// // app.use('/api/users', userRoutes);

// app.use('/api', rounter);

// app.get('/', (req: Request, res: Response) => {
//   res.send('This is PH Management server site');
// });

// app.use(globalErrHandler);

// //not found route

// app.use(notFoundRoute);

// export default app;

//---third modul end ---

//---- foruth modul start ---

// import express, { Application, NextFunction, Request, Response } from 'express';
// const app: Application = express();
// import cors from 'cors';
// import globalErrHandler from './app/middlewear/golballErrorHandler';
// import notFoundRoute from './app/middlewear/notFoundRoute';
// import router from './app/routes';

// //parse

// app.use(express.json());
// app.use(cors());

// // application routes
// // app.use('/api/students', StudentRoutes);
// // app.use('/api/users', userRoutes);

// app.use('/api/v1', router);

// app.get('/', (req: Request, res: Response) => {
//   res.send('This is PH Management server site');
// });

// app.use(globalErrHandler);

// //not found route

// app.use(notFoundRoute);

// export default app;

//---fourth modul end ---

//--five modul start ---

import express, { Application, NextFunction, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import globalErrHandler from './app/middlewear/golballErrorHandler';
import notFoundRoute from './app/middlewear/notFoundRoute';
import router from './app/routes';

//parse

app.use(express.json());
app.use(cors());

// application routes
// app.use('/api/students', StudentRoutes);
// app.use('/api/users', userRoutes);

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('This is PH Management server site');
});

app.use(globalErrHandler);

//not found route

app.use(notFoundRoute);

export default app;
