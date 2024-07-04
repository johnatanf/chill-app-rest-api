"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "content",
      [
        {
          content_id: 1,
          parental_rating_id: 3,
          title: "Agak Laen",
          content_description:
            "Empat teman yang menjalankan sebuah rumah hantu mencari cara-cara baru untuk menakuti pengunjung. Namun, berbagai masalah muncul setelah mereka bertindak ...",
          description_image_url: "",
          thumbnail_image_url: "",
          content_type: "Movie",
          chill_original: false,
          premium: false,
          duration_minutes: 118,
          release_date: "2014-02-01",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_id: 2,
          parental_rating_id: 5,
          title: "Joko Anwar's Nightmares and Daydreams",
          content_description:
            "Joko Anwar's Nightmares and Daydreams sample description",
          description_image_url: "",
          thumbnail_image_url: "",
          content_type: "Series",
          chill_original: true,
          premium: true,
          duration_minutes: null,
          release_date: "2024-06-14",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("content", null, {});
  },
};
