import {dasherize} from '@ember/string';
import EmberObject,{computed} from '@ember/object';
export default EmberObject.extend({
  name:'',

  init(){
    this._super(...arguments);
    if(!this.songs){
      this.set('songs',[])
    }
  },
  slug: computed('name', function(){
    return dasherize(this.name);
  })
});