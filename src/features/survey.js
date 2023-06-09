import { produce } from "immer";
import { selectSurvey } from "../utils/selectors";

// Le state initial de la feature survey

const initialState = {
    // le statut permet de suivre l'état de la requête
    status: 'void',
    // les données lorsque la requête a fonctionné
    data: null,
    // l'erreur lorsque la requête échoue
    error: null,
}

// Les noms des actions

const FETCHING = 'survey/fetching';
const RESOLVED = 'survey/resolved';
const REJECTED = 'survey/rejected';

// actions creators

// la requête est en cours
const surveyFetching = () => ({ type: FETCHING });
// la requête a fonctionné
const surveyResolved = (data) => ({ type: RESOLVED, payload: data });
// la requête a échoué
const surveyRejected = (error) => ({ type: REJECTED, payload: error });

// cette fonction est une action asynchrone
// elle attend le store redux en paramètre

export async function fetchOrUpdateSurvey(store) {

    // on peut lire le state actuel avec store.getState()
    const status = selectSurvey(store.getState()).status;
    // si la requête est déjà en cours
    if (status === 'pending' || status === 'updating') {
        // on stop la fonction pour éviter de récupérer plusieurs fois la même donnée
        return;
    }

    // On peut modifier le state en envoyant des actions avec store.dispatch()
    // ici on indique que la requête est en cours
    store.dispatch(surveyFetching());

    try {
        // on utilise fetch pour faire la requête
        const response = await fetch('http://localhost:8000/survey');
        const data = await response.json();
        // si la requête fonctionne, on envoie les données à redux avec l'action resolved
        store.dispatch(surveyResolved(data));
    } catch (error) {
        // en cas d'erreur on infirme le store avec l'action rejected
        store.dispatch(surveyRejected(error));
    }
}

export default function surveyReducer(state = initialState, action) {

    // on utilise immer pour changer le state
    return produce(state, (draft) => {

        // on fait un switch sur le type de l'action
        switch (action.type) {

            // si l'action est de type FETCHING  
            case FETCHING: {
                // si le statut est void
                if (draft.status === 'void') {
                    // on passe en pending
                    draft.status = 'pending';
                    return;
                }
                // si le statut est rejected
                if (draft.status === 'rejected') {
                    // on supprime l'erreur et on passe en pending 
                    draft.error = null;
                    draft.status = 'pending';
                    return;
                }
                // si le statut est resolved
                if (draft.status === 'resolved') {
                    // on passe en updating (requête en cours mais des données sont déjà présentent)
                    draft.status = 'updating';
                    return;
                }
                // sinon l'action est ignorée
                return;
            }
            // si l'action est de type RESOLVED
            case RESOLVED: {
                // si la requête est en cours
                if (draft.status === 'pending' || draft.status === 'updating') {
                    // on passe en resolved et on sauvegarde les données
                    draft.data = action.payload;
                    draft.status = 'resolved';
                    return;
                }
                // sinon l'action est ignorée
                return;
            }
            // si l'action est de type REJECTED
            case REJECTED: {
                // si la requête est en cours
                if (draft.status === 'pending' || draft.status === 'updating') {
                    // on passe en rejected, on sauvegarde l'erreur et on supprime les données
                    draft.status = 'rejected';
                    draft.error = action.payload;
                    draft.data = null;
                }
                // sinon l'action est ignorée
                return;
            }
            // Sinon (action invalide ou initialisation)
            default:
                // on ne fait rien (retourne le state sans modifications)
                return;
        }
    });
}

