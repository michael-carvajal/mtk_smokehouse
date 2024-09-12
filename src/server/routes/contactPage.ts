import { db } from "../db";


export const getContactPage = async () => {
  const contactPage = await db.contactPage.findFirst({
    orderBy: {
      createdAt: 'desc', // Assumes you have a createdAt field to order by
    },
  });    return contactPage;
  };
  
export const updateContactPage = async (body) => {
  const contactPage = await db.contactPage.findFirst({
    orderBy: {
      createdAt: 'desc', // Assumes you have a createdAt field to order by
    },
  });

  if (!contactPage) {
    throw new Error('No contact page found');
  }

  // Update the fetched home page with the provided data
  const updatedContactPage = await db.contactPage.update({
    where: { id: contactPage.id },
    data: {
      ...body,
    },
  });

    return updatedContactPage;
  };
  
