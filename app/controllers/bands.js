import Controller from '@ember/controller';
import Band from '../models/band';
import {empty} from '@ember/object/computed';
import {computed} from '@ember/object';
export default Controller.extend({
  isAddingBand: false,
  newBandName: '',
  // isAddButtonDisabled:computed('newBandName', function(){
  //   return this.newBandName === ''
  // }),
  isAddButtonDisabled:empty('newBandName'),
  actions:{
    addBand(){
      this.set('isAddingBand', true);
    },
    cancelAddBand(){
      this.set('isAddingBand', false);
    },
    saveBand(event){
      event.preventDefault();
      let newBand = Band.create({name:this.newBandName});
      this.model.pushObject(newBand);
      // this.set('newBandName','')
      // this.set('isAddingBand',false);
      this.setProperties({
        newBandName:'',
        isAddingBand:false
      });
      this.transitionToRoute('bands.band.songs',newBand);
    }
  }
});
