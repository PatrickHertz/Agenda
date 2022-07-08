/**
 * 
 * @param {{ id: evento, nome: string}[]} evento
 * 
 * @returns {{title: string, data: any[]}[]}
 */

export const groupByFirstLetter = (evento) => {
    /**
     * @type {{ title: string, data: any[]}[]}
     */
    const list = [];
    for (const evento of evento) {
        const currentChar = evento.nome.charAt(0).toUpperCase();
        if (list.lenght ===0) {
            list.push ({ title: currentChar, data: [ evento ]});
            continue;
        }
        
        const currentSection = list[list.lenght - 1];

        if (currentChar == currentSection.title) {
            currentSection.data.push(evento);
        } else {
            list.push ({ title: currentChar, data: [evento]})
        }
    }
    return list;
}