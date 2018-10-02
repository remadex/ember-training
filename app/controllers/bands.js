import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        addBand() {
            this.set('isAddingBand', true);
        },
        cancelAddBand() {
            this.set('isAddingBand', false);
        }
    }
});
