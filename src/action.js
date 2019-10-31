export function selectBook(book){
    return{
        type:'BOOK_SELECTED',
        payload:book
    };
}
export function addTodo(text1,text2,text3,text4){
    
    return{
        type:'Add_Book',
        text1,
        text2,
        text3,
        text4
    };
}
