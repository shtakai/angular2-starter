import {Pipe, PipeTransform} from '@angular/core';
import {Todo} from './todo.model';
import * as _ from 'lodash';

@Pipe({
    name: 'asCompletedFilter'
})
export class CompletedFilterPipe implements PipeTransform {
    transform(todos: Todo[], done): Todo[] {
        if (done) {
            return todos;
        }

        return _.filter(todos, {done});
    }
}
