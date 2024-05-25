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

import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';

//parse

app.use(express.json());
app.use(cors());

// application routes
app.use('/api/students', StudentRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('This is PH Management server site');
});

export default app;
