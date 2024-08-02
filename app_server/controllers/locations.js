/* GET 'home' page */
const homelist = (req, res) => {
    res.render('locations-list', {
    title: 'Course Management System',
    pageHeader: {
    title: 'Course Management System',
    strapline: 'lets full fill your passion together! ' 
    },
    locations: [{
    name: 'java from Scratch',
    tutor: 'abdul khaleel',
    rating: 3,
    contents: ['java basics', 'java intermediate'],
    duration: '100m'
    },{
    name: 'Machine learning for all',
    tutor: 'mouli majeed',
    rating: 5,
    contents: ['basics', 'intermediate'],
    duration: '100m'
    },{
        name: 'AI ',
        tutor: 'nani nalli',
        rating: 4,
        contents: ['basics', 'intermediate','advanced'],
        duration: '200m'
}]
});
};
    /* GET 'Location info' page */
    const locationInfo = (req, res) => {
    res.render('location-info', { title: 'course details' });
    };
    /* GET 'Add review' page */
    const addReview = (req, res) => {
    res.render('location-review-form', { title: 'Add review' });
    };
    module.exports = {
        homelist,
        locationInfo,
        addReview
        };