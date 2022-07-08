import * as SQLite from 'expo-sqlite';

export const DB = SQLite.openDatabase('db.contactsDB');

DB.transaction((tx) => {
    tx.executeSql(
        'CREATE TABLE IF NOT EXISTS eventos (id integer primary key not null, nome_evento text, data text, hora text, descricao text'
    );
});

export default DB;