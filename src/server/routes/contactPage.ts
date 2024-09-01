import { db } from "../db";


export const getContactPage = async () => {
    const contactPage = await db.contactPage.findFirst();
    return contactPage;
  };
  
// export const updateHomePage = async (body) => {
//     const homePage = await db.homePage.update({
//       where : {
//         id : 1
//       },
//       data : {...body}
//     });
//     return homePage;
//   };
  
