export type projectDetailsTypes = {
  id: string; //change this
  title: string;
  createdAt: Date | string; // change this
  status: "PENDING" | "PUBLISHED";
};

export type navDatatypes = {
  title: string;
  link: string;
};

export type updatePasswordData = {
  id: string;
  newPassword: string;
  password: string;
};

export type projects = {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  images?: string[];
  status: "PENDING" | "PUBLISHED";
};

export type imageUploadData = {
  id: string;
  thumbnailUrl: string;
  url: string;
};
