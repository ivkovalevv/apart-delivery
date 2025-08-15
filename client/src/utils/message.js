import axios from "axios";

export const sendMessageTG = (userOrders, name, phone, comment, orderList, fullPrice) => {
    const TOKEN = process.env.REACT_APP_TELEGRAM_TOKEN;
    const CHAT_ID = process.env.REACT_APP_CHAT_ID;
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    let message = `<b>Новый заказ с Apart Delivery!</b>\n`;
    message += `\n`;
    message += `<b>Дата: </b> ${new Date().toLocaleDateString("ru-RU", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        })}\n`;
    message += `<b>Номер заказа: </b> ${userOrders[userOrders.length -1].id}\n`;
    message += `\n`;
    message += `<b>Имя клиента: </b> ${name}\n`;
    message += `<b>Телефон клиента: </b> ${phone}\n`;
    if(comment != ""){
        message += `<b>Примечание: </b> ${comment}\n`
    };
    message += `<b>Адрес доставки: </b> улица Счастья, д. 23, кв. 2000\n`;
    message += `\n`;
    message += `<b>Состав заказа: </b>\n`;
    {
        orderList.map(item => {
            message += `${item.name}: ${item.quantity} x ${item.price} ₽\n`;
        })
    }
    message += `\n`;
    message += `<b>Сумма к оплате: </b> ${fullPrice} ₽\n`;

     axios.post(URI_API, {
          chat_id: CHAT_ID,
          parse_mode: "html",
          text: message,
        })
        .then((res) => {
          console.log("MessageTG sent");
        })
        .catch((err) => {
          console.warn(err);
        })
        .finally(() => {
          console.log("The message has been delivered");
        });
}