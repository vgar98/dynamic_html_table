 const mostrar = () =>{
        let Objeto = {};
        let construir = {
            'id': 'id',
            'name': 'name'
        };
        Objeto[`id`] = construir;
        generateTable({ object: Objeto, Array: [ 'name', 'id' ], TableName: 'tablaprueba' });
    }
    /**
     * @function Función que recibe un objeto con índice para dibujar una tabla
     * @param {Object} object - recibe un objeto con index { x:{'z':z},...}
     * @param {Array} arraycito - recibe un arreglo con nombre de las propiedades del objeto ['propiedad1','propiedad2',...]
     * @param {String} tableName - recibe el id de la tabla del html
     * @returns {Html} retorna una tabla construida por un objeto
     * */
        const generateTable = ({ object: object, Array: arraycito, TableName: tableName }) =>{
        let body = "";
        body += `<tr>`;
        arraycito.forEach(function (item, index) {
            Object.keys(object).map( e => {
                let ob = object[`${e}`];
                Object.keys(ob).map( p =>{
                    if( ob[`${p}`] == item ){
                        body += `<td>${item}</td>`;
                    }
                } );
            } );
        });
        body += `</tr>`;
        $(`#${tableName}`).html(body);
    }
