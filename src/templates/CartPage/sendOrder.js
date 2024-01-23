export const sendOrder =async (cart,customer)=>{
    try{
        const token = "5957286153:AAFgUC6wRQVWQGJxfdDVHulL4e0nFIkyKTQ";
        const chat_id = "-882810063"; 
    
        let message = `
Нове замовлення
ПІБ: ${customer.pib}
Телефон: ${customer.telephone}
Пошта: ${customer.email}
`;
let cartString = '';
cart.forEach(element => {
    cartString += `
    Назва: ${element.name}${element.option ? ` (${element.option})` : ''}
    Ціна: ${element.price}
    Кількість: ${element.count}
    `;
});

message += 'Кошик:' + cartString;

       
        message+= 'Кошик:  '+cartString;
       
        const MAX_LENGTH = 1000;
        for (let i = 0; i < message.length; i += MAX_LENGTH) {
            const messagePart = message.substring(i, Math.min(message.length, i + MAX_LENGTH));
            console.log(messagePart)
            const encodedMessage = encodeURIComponent(messagePart);
            await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${encodedMessage}`);
        }
      
        return {ok:true};
    }catch(e){
        console.log(e);
        throw e;
    }
}