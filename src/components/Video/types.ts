export type TGetLessonBySlugQueryResponse = {
    lesson: {
      title: string;
      videoId: string;
      description: string;
      teacher: {
        avatarURL: string;
        bio: string;
        name: string;
      };
    };
  };