// ===============================
//         PUERTO
// ===============================

process.env.PORT = process.env.PORT || 3000;

// ===============================
//         Ambiente
// ===============================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ===============================
//         Base de datos
// ===============================

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://useradmin01:utHeSiws9uGT2XOj@cluster0-zzzrb.mongodb.net/cafe';
}

process.env.urlDB = urlDB;