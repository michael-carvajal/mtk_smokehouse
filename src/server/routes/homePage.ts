import { db } from "../db";


export const getHomePage = async () => {
    const homePage = await db.homePage.findFirst();
    return homePage;
  };
  
export const updateHomePage = async (body) => {
    const homePage = await db.homePage.update({
      where : {
        id : 1
      },
      data : {...body}
    });
    return homePage;
  };
  
