//---FIRST MODUL END---

// import mongoose from 'mongoose';
// import app from './app';
// import config from './app/config';

// async function main() {
//   try {
//     await mongoose.connect(config.database_url as string);

//     app.listen(config.port, () => {
//       console.log(`Example app listening on port ${config.port}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
// main();

//---FIRST MODUL END---

//second modul start---

// import mongoose from 'mongoose';
// import app from './app';
// import config from './app/config';

// async function main() {
//   try {
//     await mongoose.connect(config.database_url as string);

//     app.listen(config.port, () => {
//       console.log(`Example app listening on port ${config.port}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
// main();

//---second modul end---

//--third modul start---

// import mongoose from 'mongoose';
// import app from './app';
// import config from './app/config';

// async function main() {
//   try {
//     await mongoose.connect(config.database_url as string);

//     app.listen(config.port, () => {
//       console.log(`Example app listening on port ${config.port}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
// main();

//--third modul end--

//--fouth modul start--

// import mongoose from 'mongoose';
// import app from './app';
// import config from './app/config';

// async function main() {
//   try {
//     await mongoose.connect(config.database_url as string);

//     app.listen(config.port, () => {
//       console.log(`Example app listening on port ${config.port}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
// main();

///---fourth modul end ---

//--five modul start---

import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
