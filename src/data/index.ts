// * fake data's
import { faker } from "@faker-js/faker";

export function createRandomUser() {
  return {
    profile: faker.image.avatar(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: faker.datatype.number(40),
    visits: faker.number.int({ min: 100, max: 1000 }),
    progress: faker.number.int({ min: 0, max: 100 }),
  };
}

export const USERS = faker.helpers.multiple(createRandomUser, {
  count: 150,
});
