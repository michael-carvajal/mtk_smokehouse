import { db } from "../db";


export const getHomePage = async () => {
    const homePage = await db.homePage.findFirst();
    return homePage;
  };
  
