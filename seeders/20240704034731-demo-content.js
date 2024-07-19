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
          release_date: "2024-02-01",
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
        {
          content_id: 3,
          parental_rating_id: 4,
          title: "The Raid",
          content_description:
            "A S.W.A.T. team becomes trapped in a tenement run by a ruthless mobster and his army of killers and thugs.",
          description_image_url: "",
          thumbnail_image_url: "",
          content_type: "Movie",
          chill_original: false,
          premium: false,
          duration_minutes: 101,
          release_date: "2011-11-20",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_id: 4,
          parental_rating_id: 4,
          title: "The Raid 2",
          content_description:
            "Only a short time after the first raid, Rama goes undercover with the thugs of Jakarta and plans to bring down the syndicate and uncover the corruption within his police force.",
          description_image_url: "",
          thumbnail_image_url: "",
          content_type: "Movie",
          chill_original: false,
          premium: false,
          duration_minutes: 150,
          release_date: "2014-01-21",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_id: 5,
          parental_rating_id: 4,
          title: "Don't Look Up",
          content_description:
            "Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth.",
          description_image_url: "",
          thumbnail_image_url: "",
          content_type: "Movie",
          chill_original: false,
          premium: false,
          duration_minutes: 138,
          release_date: "2021-12-24",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_id: 6,
          parental_rating_id: 1,
          title: "Big Hero 6",
          content_description:
            "A special bond develops between plus-sized inflatable robot Baymax and prodigy Hiro Hamada, who together team up with a group of friends to form a band of high-tech heroes.",
          description_image_url: "",
          thumbnail_image_url: "",
          content_type: "Movie",
          chill_original: false,
          premium: false,
          duration_minutes: 102,
          release_date: "2015-01-30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_id: 7,
          parental_rating_id: 3,
          title: "Inception",
          content_description:
            "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
          description_image_url: "",
          thumbnail_image_url: "",
          content_type: "Movie",
          chill_original: false,
          premium: false,
          duration_minutes: 148,
          release_date: "2010-07-16",
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
