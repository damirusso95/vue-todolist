// Creare una mini applicazione Vue che ci permetta di visualizzare una semplice ToDo List.

// :roccia: MILESTONE 1
// Aggiungete un <input> il cui value sia collegato ad un data (ricordate come si fa?).
// Aggiungete un pulsante che al click stampi quel data in console, poi lo aggiunga all'array precedente.
// Come risultato dovreste aver guadagnato la possibilità di aggiungere elementi alla lista visualizzata in pagina.
// Ora riuscite a svuotare l'input? :faccia_pensosa:
// :roccia: MILESTONE 2
// Accanto al testo del ToDo aggiungete una "X", ad esempio con FontAwesome.
// Al click su questo elemento il ToDo corrispondente viene rimosso dalla lista.


const { createApp } = Vue

createApp({
    data() {
        return {
             // Array di cose da fare
      todos: [
        'Fare la spesa',
        'Pulire la casa',
        'Studiare Vue.js',
        'Andare in palestra',
        'Preparare la cena'
      ]
            
            

            
        }
    },
    

    },
    


).mount('#app')