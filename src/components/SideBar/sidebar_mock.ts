
interface MenuItem {
    idmenu: number,
    nomemenu: string,
    ordem: number,
    ativo: string
}

const menu_list = {
    "content": [
        {
            "idmenu": 1,
            "nomemenu": "Configuração da aplicação",
            "ordem": 1,
            "ativo": "s"
        },
        {
            "idmenu": 2,
            "nomemenu": "Painel de controle",
            "ordem": 2,
            "ativo": "s"
        },
        {
            "idmenu": 3,
            "nomemenu": "Entradas",
            "ordem": 3,
            "ativo": "s"
        },
        {
            "idmenu": 4,
            "nomemenu": "Movimentações",
            "ordem": 4,
            "ativo": "s"
        },
        {
            "idmenu": 5,
            "nomemenu": "Expedição",
            "ordem": 5,
            "ativo": "s"
        },
        {
            "idmenu": 7,
            "nomemenu": "Gestão",
            "ordem": 7,
            "ativo": "s"
        },
        {
            "idmenu": 6,
            "nomemenu": "Auditoria",
            "ordem": 6,
            "ativo": "s"
        },
        {
            "idmenu": 8,
            "nomemenu": "Cadastro",
            "ordem": 8,
            "ativo": "s"
        },
        {
            "idmenu": 9,
            "nomemenu": "Consulta",
            "ordem": 9,
            "ativo": "s"
        },
        {
            "idmenu": 10,
            "nomemenu": "Recepção",
            "ordem": 10,
            "ativo": "s"
        }
    ],
    "totalElements": 10,
    "totalPages": 1,
    "pageSize": 50,
    "pageNumber": 1
}


export default function getMenuList(){
    return menu_list.content
}