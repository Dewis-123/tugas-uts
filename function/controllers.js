const popularCategories = require('../data/popular_categories');
const popularCourses = require('../data/popular_course');
const userLibrary = require('../data/user_library');
const bestEducators = require('../data/best_educators');
const topCategories = require('../data/top_categories');
const popularStreams = require('../data/popular_streams');
const mostEducatorViews = require('../data/most_educator_views');
const topStreamer = require('../data/top_streamer');
const currentLiveStream = require('../data/current_live_stream');
const detailCourses = require('../data/detail_courses');
const courses = require('../data/course');

const home = (request, response) => {
    response.render('index', {
        popularCategories: popularCategories,
        popularCourses: popularCourses,
        userLibraries: userLibrary,
        subject: "upskill"
      });
};

const browse = (request, response) => {;
  response.render('browse', {
    educators: bestEducators,
    topCategories: topCategories,
    popularStreams: popularStreams
  });
};

const streams = (request, response) => {
  response.render('streams', {
    educatorViews : mostEducatorViews,
    topStreamer: topStreamer,
    currentLiveStream: currentLiveStream
  });
};

const details = (request, response) => {
  const detailId = request.params.id;
  const index = detailCourses.findIndex(x => x.id == detailId);
  const category = detailCourses[index].category;
 
  const relatedCourses = courses.filter(course => course.category == category);
  
  response.render('details', {
    detail: detailCourses[index],
    relatedCourses: relatedCourses,
  });
};

const profile = (request, response) => {
  
  response.render('profile', {
    userLibraries: userLibrary,
  });
};

module.exports = {home, browse, streams, details, profile};