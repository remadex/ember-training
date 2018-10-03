import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';
import Song from '../../../models/song';

export default Controller.extend({
    isAddingSong: false,
    newBandSong: '',
    isAddButtonDisabled: empty('newBandSong'),
    actions: {
        addSong() {
            this.set('isAddingSong', true);
        },
        cancelAddSong() {
            this.set('isAddingSong', false);
        },
        saveSong(event) {
            event.preventDefault();
            let newSong = Song.create({ title: this.newBandSong });
            this.model.songs.pushObject(newSong);
            this.set('newBandSong', "");
        }
    }
});
