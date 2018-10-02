import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';
import { A } from '@ember/array';
import { dasherize } from '@ember/string';

let Band = EmberObject.extend({
    name: '',
    slug: computed('name', function () {
        return dasherize(this.name);
    })
});
let Song = EmberObject.extend({
    title: "",
    band: "",
    rating: 0
})
export default Route.extend({
    model() {
        let blackDog = Song.create({
            title: "Black Dog",
            band: "Led Zeppelin",
            rating: 3
        });
        let yellowLedBetter = Song.create({
            title: "Yellow LedBetter Dog",
            band: "Pearl Jam",
            rating: 4
        });
        let pretender = Song.create({
            title: "The Pretender",
            band: "Foo Fighters",
            rating: 2
        });
        let daughter = Song.create({
            title: "Daughter",
            band: "Pearl Jam",
            rating: 5
        })
        let ledZeppelin = Band.create({ name: "Led Zeppelin", songs: A([blackDog]) });
        let pearlJam = Band.create({ name: "pearlJam", songs: A([yellowLedBetter, daughter]) });
        let fooFighters = Band.create({ name: "Foofighters", songs: A([pretender]) });
        return A([ledZeppelin, pearlJam, fooFighters]);
    }
});
