import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let dishes = [
            {id:11, name: 'Dish11', ingredients: ['1', '2', '3'], add: false},
            {id:12, name: 'Dish112', ingredients: ['1', '2', '3'], add: false},
            {id:13, name: 'Dish13', ingredients: ['1', '2', '3'], add: false},
            {id:14, name: 'Dish14', ingredients: ['1', '2', '3'], add: false}
        ];
        return {dishes};
    }
}