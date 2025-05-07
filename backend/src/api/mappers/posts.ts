export const applicationForApi = ({ id, ...data }) => {
  let response = {};

  if (id) {
    response.id = id;
  }

  response = {
    ...response,
    title: data.title,
    description: data.description,
    content: data.content,
    emphasis: data.emphasis,
    gallery: data["gallery[]"],
  };

  return response;
};

export const apiForApplication = (data) => {
  if (typeof data === "number") {
    return data;
  }

  let response = [];

  data.map((item: any) => {
    response.push({
      id: item.id,
      title: item.title,
      description: item.description,
      content: item.content,
      createdAt: item.createdAt,
      emphasis: item.emphasis,
      gallery: item.gallery,
      user: {
        username: item.User.username,
        photo: item.User.photo,
        email: item.User.email,
      },
    });
  });

  return response;
};
