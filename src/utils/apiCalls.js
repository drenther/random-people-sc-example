export const getUsers = async num =>
  await (await fetch(
    `https://randomuser.me/api/?results=${num}&nat=us&exc=login,nat,registered,phone`,
  )).json();
