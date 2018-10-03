import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    tagName: 'div',
    classNames: ['rating-panels'],
    rating: 0,
    maxRating: 5,
    item: null,
    actions: {
        setRating(newRating) {
            this.item.set('rating', newRating)
        }
    },
    stars: computed('rating', 'maxRating', function () {
        let stars = [];
        for (let i = 1; i <= this.maxRating; i++) {
            stars.push({ rating: i, isFull: this.rating >= i })
        }
        return stars;
    })
});
