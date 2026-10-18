/**
 * EngMastery: Zero to Pro - Complete 6-Level Course Data Aggregator
 * Gathers modular lessons from each level folder into a single standard courseData array.
 * Future-proof schema: Easily extendable or replaced with an API endpoint.
 */

const courseData = [
  window.LESSON_1_SURVIVOR,
  window.LESSON_2_STORYTELLER,
  window.LESSON_3_CONNECTOR,
  window.LESSON_4_COMMUNICATOR,
  window.LESSON_5_PROFESSIONAL,
  window.LESSON_6_MASTER
].filter(Boolean);

window.courseData = courseData;
