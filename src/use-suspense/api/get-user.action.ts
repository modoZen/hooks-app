export interface User {
  id: number;
  name: string;
  location: string;
  role: string;
}

export const getUser = async (id: number): Promise<User> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    id,
    name: "Max Diaz",
    location: "Ottawa, Canada",
    role: "Software Engineer",
  };
};
