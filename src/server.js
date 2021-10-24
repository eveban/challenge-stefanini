import express from 'express';

import './database';

const use = express();

use.listen(3333, () => {
  console.log("Server started in port 3333");
})