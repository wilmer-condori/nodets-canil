type menus = ''|'todos'|'dog'|'cat'|'fish';

export const createMenuObject = (menuAtivado:menus)=>{
    let menu = {
        todos:false,
        dog:false,
        cat:false,
        fish:false
    }

    if(menuAtivado !== ''){
        menu[menuAtivado]= true;
    }
    return menu;
}