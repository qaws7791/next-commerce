export type CategoryId = UniqueNumberId;
export type CategoryName = string;
export type CategoryDescription = string;

export type Category = {
  id: CategoryId;
  name: CategoryName;
  description: CategoryDescription;
};
