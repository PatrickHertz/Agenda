import DB from '../database';

export class ContactRepository {
/** 
    @constant
    @type {Set<() => void>}
*/


static onStoreListeners = new Set;

/**
 * 
 * @private
 * @param {'store'} type
 */

static runListeners(type) {
    if (type !== 'store') return;

    for(const handler of this.onStoreListeners) {
        try {
            handler();
        } catch(ex) {
            console.error(ex);
        }
    }
}

/**
 * 
 * @param {object} param0
 * @param {object} param0.nome_evento
 * @param {object} param0.data
 * @param {object} param0.hora
 * @param {object} param0.descricao
 *
 * @returns {Promise<boolean>}
 */

static async store ({nome_evento, data, hora, descricao}) {
    try {
        const tx = await new Promise((resolve, reject) => {
            DB.transaction(resolve,reject);
        });
        await new Promise((resolve, reject) => {
            tx.executeSql(
                'INSERT INTO evento (nome_evento, data, hora, descricao) VALUES (?,?,?,?)',
                [ nome_evento, data, hora, descricao],
                () => resolve(true),
                reject,
            );
        });

        this.runListeners('store');

        return true;
    } catch (error) {
        console.log('asdasd');
        return false;
    }
}

/**
 * 
 * @returns {Promise<object[]>}
 */

static async getALL () {
    const tx = await new Promise((resolve, reject) => {
        DB.transaction(resolve, reject);
    });
    
    return await new Promise((resolve, reject) => {
        tx.executeSql('SELECT * FROM evento ORDER BY nome_evento ASC', [], (_, {rows}) => resolve(rows.array), reject); 
    });
}
};

export default ContactRepository