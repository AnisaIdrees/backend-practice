const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://haider:haider12345@practice.rdw3fgs.mongodb.net/e-com?retryWrites=true&w=majority&appName=practice`)
.then(() => console.log('db is connected')
).catch((err) => console.log('error in db connection', err));

