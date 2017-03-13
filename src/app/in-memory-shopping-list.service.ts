import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryShoppingList implements InMemoryDbService {
    createDb() {
        let items = [
            {name: "Karotten"},
            {name: "Milch"},
            {name: "Bananen"}
        ];
        return {items};
    }
}