const express = require('express');
const path = require('path');

const { PORT } = require('./serverUtils/serverEnv');
const { NODE_ENV } = require('./serverUtils/serverEnv');
const { DISTRIBUTIVE_DIR } = require('./serverUtils/serverConstants');

const distributiveDirPath = path.join(__dirname, '../', DISTRIBUTIVE_DIR);

const app = express();

app.use(express.static(distributiveDirPath));

app.listen(PORT, () => console.log(`Server http://localhost:${PORT}`+` Path:${distributiveDirPath}`+` node_env:${NODE_ENV}`));
