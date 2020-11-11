import "./slider";
import modals from './modules/modals';
import tabs from './modules/tabs';
/*
Есть определенный триггер, дальше идет показ модального окна, используем определенный селектор. 


*/

window.addEventListener('DOMContentLoaded', () => {
    modals();
    tabs('.glazing_slider' ,'.glazing_block', '.glazing_content', 'active');

});


console.log(1);