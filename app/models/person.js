import Model, { attr } from '@ember-data/model';

export default class PersonModel extends Model {
  @attr('string') firstName;
  @attr('string') LastName;
  @attr('number') Age;
}
