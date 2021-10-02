import { getDatabase, ref, set, remove, onValue, off } from "firebase/database";

class CardRepository {
    constructor(){
        this.db = getDatabase();
    }

    syncCards(userId, onUpdate) {
        const preRef = ref(this.db, `${userId}/cards`);
        onValue(preRef, snapshot => {
            const value = snapshot.val();
            value && onUpdate(value);
        });
        return () => off(preRef);
    }

    saveCard(userId, card) {
        set(ref(this.db, `${userId}/cards/${card.id}`), card);
    }

    removeCard(userId, card) {
        remove(ref(this.db, `${userId}/cards/${card.id}`));
    }
}

export default CardRepository;